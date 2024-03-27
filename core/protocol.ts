/** @format */

/// <reference path="./protocol.d.ts" />

interface json {
    [key: string]: number | number[] | string;
}

import { HxNetPack } from "./HxNetCipher";
import * as NetDefine from "./define";

// 需要手动解包的协议
function tryManualUnpack(mcmd: number, scmd: number, reader: IHxPackReader): object | undefined {
    if (mcmd == NetDefine.commands.MDM_GP_USER_SERVICE) {
        switch (scmd) {
            case NetDefine.commands.SUB_MB_GetProductInfos_RESULT: {
                let result: CMD_MB_GetProductInfosResult = {
                    errorCode: reader.readUint32(),
                    enable: reader.readUint8(),
                    productTypeCount: reader.readUint16(),
                    productTypes: [],
                };
                for (let i = 0; i < result.productTypeCount; i++) {
                    let productType: ProductTypeInfo = {
                        productTypeID: reader.readUint32(),
                        productTypeName: reader.readUTF16(NetDefine.lengths.LEN_PRODUCT_TYPE_NAME),
                        active: reader.readUint8(),
                        productCount: reader.readUint16(),
                        productInfos: [],
                    };
                    result.productTypes.push(productType);
                    for (let j = 0; j < productType.productCount; j++) {
                        productType.productInfos.push({
                            productID: reader.readUint32(), // 商品ID
                            price: reader.readUint32(), // 商品价格（货币单位：分）
                            awardType: reader.readUint8(), // 充值类型:1:金币;2:TC币;
                            awardValue: reader.readInt64(), // 充值的分值（游戏币）
                            attachType: reader.readUint8(), // 附加模式 1:定值,2:百分比
                            attachValue: reader.readInt64(), // 附加值
                        });
                    }
                }
                return result;
            }
            case NetDefine.commands.SUB_MB_GetMobiles_RESULT: {
                let result: string[] = [];
                let length = reader.dataLength;
                let count = length / (NetDefine.lengths.LEN_INTERNATIONAL_MOBILE * 2);
                for (let i = 0; i < count; i++) {
                    result.push(reader.readUTF16(NetDefine.lengths.LEN_INTERNATIONAL_MOBILE));
                }
                return result;
            }
        }
    }
    return undefined;
}

class NetEventService {
    // 以命令为Key的索引
    private eventCmdsMap: Map<number, Map<IVuePageID, INetAttermperSink>>;

    // 以页面ID为Key的索引,方便移除
    private eventPageMap: Map<IVuePageID, number[]>;

    // Promise<INetEventParam>回调使用
    private asyncAwaits: Map<number, INetEventCallback>;

    constructor() {
        this.eventCmdsMap = new Map<number, Map<IVuePageID, INetAttermperSink>>();
        this.eventPageMap = new Map<IVuePageID, number[]>();
        this.asyncAwaits = new Map<number, INetEventCallback>();
    }

    private innerRegiste(
        mcmd: number,
        scmd: number,
        pageID: IVuePageID,
        cb_or_sink: INetEventCallback | INetAttermperSink
    ) {
        let key = this.makeKey(mcmd, scmd);
        // let sinkMap: Map<IVuePageID, INetAttermperSink>;

        let sinkMap = this.eventCmdsMap.get(key);
        if (!sinkMap) {
            sinkMap = new Map<IVuePageID, INetAttermperSink>();
            this.eventCmdsMap.set(key, sinkMap);
        }
        if (typeof cb_or_sink === "function") {
            sinkMap.set(pageID, { onNetEvent: cb_or_sink });
        } else {
            sinkMap.set(pageID, cb_or_sink);
        }
        // 存储一个以VuePageID为键的MAP
        let arr = this.eventPageMap.get(pageID);
        if (arr) {
            arr.push(key);
        } else {
            this.eventPageMap.set(pageID, [key]);
        }
    }

    private makeKey(mcmd: number, scmd: number) {
        return (mcmd << 16) | scmd;
    }

    protected notifyEvent(s: INetService, e: INetEventParam): boolean {
        // callback
        let key = this.makeKey(e.mcmd, e.scmd);
        let maps = this.eventCmdsMap.get(key);

        let handled = !!maps;
        maps &&
            maps.forEach((sink) => {
                sink.onNetEvent(s, e);
            });
        return handled;
    }

    protected waitAsync(mcmd: number, scmd: number, cb: INetEventCallback): void {
        let key = this.makeKey(mcmd, scmd);
        this.asyncAwaits.set(key, cb);
    }

    protected waitFailure(mcmd: number, scmd: number): void {
        let key = this.makeKey(mcmd, scmd);
        this.asyncAwaits.delete(key);
    }

    protected notifyWait(s: INetService, e: INetEventParam): boolean {
        let key = this.makeKey(e.mcmd, e.scmd);
        if (this.asyncAwaits.has(key)) {
            let callback = this.asyncAwaits.get(key);
            callback && callback(s, e);
            this.asyncAwaits.delete(key);
            return true;
        }
        return false;
    }

    public on(
        p1: number | INetCommand[] | INetCommand,
        p2: number | number[] | IVuePageID,
        p3: IVuePageID | INetEventCallback | INetAttermperSink,
        p4?: INetEventCallback | INetAttermperSink
    ): void {
        if (arguments.length == 4) {
            let mcmd = p1 as number;
            let scmd = p2 as number | number[];
            let pageID = p3 as IVuePageID;
            let cb_or_sink = p4 as INetEventCallback | INetAttermperSink;
            if (scmd instanceof Array) {
                scmd.forEach((s) => this.on(mcmd, s, pageID, cb_or_sink));
            } else {
                this.innerRegiste(mcmd, scmd, pageID, cb_or_sink);
            }
        } else if (arguments.length == 3) {
            let cmd = p1 as INetCommand[] | INetCommand;
            let pageID = p2 as IVuePageID;
            let cb_or_sink = p3 as INetEventCallback | INetAttermperSink;
            if (cmd instanceof Array) {
                cmd.forEach((c) => this.on(c.mcmd, c.scmd, pageID, cb_or_sink));
            } else {
                this.innerRegiste(cmd.mcmd, cmd.scmd, pageID, cb_or_sink);
            }
        }
    }

    public off(pageID: IVuePageID) {
        let keys = this.eventPageMap.get(pageID);
        if (keys && keys.length) {
            keys.forEach((key) => {
                let pageSinks = this.eventCmdsMap.get(key);
                pageSinks && pageSinks.delete(pageID);
            });
            this.eventPageMap.delete(pageID);
        }
    }
}

// 单例,集成WebSocket,需要初始化
class WebSocketService extends NetEventService implements INetService {
    private static __instance: WebSocketService;
    public static get instance(): WebSocketService {
        if (!WebSocketService.__instance) {
            WebSocketService.__instance = new WebSocketService();
        }
        return WebSocketService.__instance;
    }

    private ws: WebSocket | undefined;
    private options: INetServiceOptions | undefined;
    private reconnectTimer: number;
    private _isStarted: boolean;
    private constructor() {
        super();
        this.reconnectTimer = 0;
        this._isStarted = false;
    }

    public get isStarted() {
        if (this._isStarted) {
            return true;
        }
        if (this.ws && (this.ws.readyState == WebSocket.CONNECTING || this.ws.readyState == WebSocket.OPEN)) {
            return true;
        }
        return false;
    }

    // 只支持一层结构
    private writeData(writer: IHxPackWriter, json: json, tmpl: INetPackTemplateDataTable) {
        function write_(f: (v: number) => void, v: number | number[], s: number | number[] | undefined) {
            if (!s) {
                // 普通类型处理
                console.assert(!Array.isArray(v));
                f.call(writer, v as number);
                return;
            }

            if (Array.isArray(s)) {
                // 暂时不支持多维数组
                throw "not support s is array at send template";
            }

            if (Array.isArray(v)) {
                for (let i = 0; i < s; i++) {
                    f.call(writer, (i < v.length) ? v[i] : 0);
                }
                return;
            }

            // 以相同的填充
            for (let i = 0; i < s; i++) {
                f.call(writer, v);
            }
        }

        for (let o of tmpl) {
            let { t, k, s } = o;
            switch (t) {
                case "byte":
                case "uint8_t":
                    write_(writer.writeUint8, json[k] as number | number[], s);
                    break;
                case "int8_t":
                    write_(writer.writeInt8, json[k] as number | number[], s);
                    break;
                case "bool":
                case "boolean":
                    write_(writer.writeInt8, json[k] ? 1 : 0, s);
                    break;
                case "char":
                    write_(writer.writeInt8, json[k] as number | number[], s);
                    break;
                case "word":
                case "WORD":
                case "uint16_t":
                case "ushort":
                    write_(writer.writeUint16, json[k] as number | number[], s);
                    break;
                case "int16_t":
                case "short":
                    write_(writer.writeInt16, json[k] as number | number[], s);
                    break;
                case "int32_t":
                case "int":
                case "INT":
                    write_(writer.writeInt32, json[k] as number | number[], s);
                    break;
                case "uint32_t":
                case "DWORD":
                case "dword":
                    write_(writer.writeUint32, json[k] as number | number[], s);
                    break;
                case "int64_t":
                case "time_t":
                case "score":
                    write_(writer.writeInt64, json[k] as number | number[], s);
                    break;
                case "char16_t":
                    writer.writeUTF16(json[k] as string, (s ? s : 0) as number);
                    break;
                case "utf8":
                    writer.writeUTF8(json[k] as string, (s ? s : 0) as number);
                    break;
                default:
                    console.error("unrecognizable type ", t);
                    return false;
            }
        }
        return true;
    }

    // 读取一个基础数据
    private innerReadData(
        reader: IHxPackReader,
        json: json,
        f: Function,
        k: string,
        s: number | undefined,
        countField = "count"
    ) {
        if (typeof s == "undefined") {
            // normal
            json[k] = f.call(reader) as any;
        } else if (s == 0) {
            // variable length array
            if (json[countField] == "undefined") {
                // exception
                json[k] = [];
                console.error("variable length must set s=0");
            } else if (json["count"] == 0) {
                json[k] = [];
            } else {
                for (let i = 0; i < (json[countField] as number); i++) {
                    if (!json[k]) {
                        json[k] = [];
                    }
                    (json[k] as Array<any>).push(f.call(reader));
                }
            }
        } else {
            // fixed length array
            for (let i = 0; i < s; i++) {
                if (!json[k]) {
                    json[k] = [];
                }
                (<Array<any>>json[k]).push(f.call(reader));
            }
        }
    }

    // 读取一个对象
    private innerReadObject(
        reader: IHxPackReader,
        json: json,
        t: INetPackTemplateDataTable,
        k: string,
        s: number | number[] | undefined,
        countField = "count"
    ) {
        if (typeof k == "undefined") {
            json;
        }

        if (typeof s == "undefined") {
            // only one
            json[k] = this.readData(reader, t) as any;
        } else if (s == 0) {
            // Variable length array
            let len = json[countField] as number;
            json[k] = [];
            if (typeof len == "undefined") {
                console.error("variable length must set s=0");
            } else {
                for (let i = 0; i < len; i++) {
                    (<Array<any>>json[k]).push(this.readData(reader, t));
                }
            }
        } else {
            // Fixed length array
            json[k] = [];
            for (let i = 0; i < (s as number); i++) {
                (<Array<any>>json[k]).push(this.readData(reader, t));
            }
        }
    }

    // 根据模板定义解包数据
    private readData(reader: IHxPackReader, tmpl: INetPackTemplateDataTable): object {
        let json: json = {};

        for (let i = 0; i < tmpl.length; i++) {
            let { t, k, s } = tmpl[i];
            let lastKey = i == 0 ? undefined : tmpl[i - 1].k;
            if (i == 0) {
                // forbiden variable length array at the first field
                console.assert(
                    typeof s == "undefined" || (s as number) > 0,
                    "forbiden variable length array at the first field "
                );
            }
            if (typeof t != "string") {
                this.innerReadObject(reader, json, t, k, s, lastKey);
                continue;
            }

            switch (t) {
                case "byte":
                case "uint8_t":
                    this.innerReadData(reader, json, reader.readUint8, k, s as number, lastKey);
                    break;
                case "int8_t":
                    this.innerReadData(reader, json, reader.readUint8, k, s as number, lastKey);
                    break;
                case "bool":
                case "boolean":
                    this.innerReadData(reader, json, reader.readInt8, k, s as number, lastKey);
                    break;
                case "char":
                    this.innerReadData(reader, json, reader.readInt8, k, s as number, lastKey);
                    break;
                case "word":
                case "WORD":
                case "uint16_t":
                case "ushort":
                    this.innerReadData(reader, json, reader.readUint16, k, s as number, lastKey);
                    break;
                case "int16_t":
                case "short":
                    this.innerReadData(reader, json, reader.readInt16, k, s as number, lastKey);
                    break;
                case "int32_t":
                case "int":
                case "INT":
                    this.innerReadData(reader, json, reader.readInt32, k, s as number, lastKey);
                    break;
                case "uint32_t":
                case "DWORD":
                case "dword":
                    this.innerReadData(reader, json, reader.readUint32, k, s as number, lastKey);
                    break;
                case "int64_t":
                case "time_t":
                case "score":
                    this.innerReadData(reader, json, reader.readInt64, k, s as number, lastKey);
                    break;
                case "char16_t": {
                    if (Array.isArray(s)) {
                        if (s.length != 2) {
                            json[k] = [];
                            let [maxCount, strLen] = s;
                            for (let i = 0; i < maxCount; i++) {
                                (<Array<any>>json[k]).push(reader.readUTF16(strLen));
                            }
                        } else {
                            console.error("multiple-array is not support yet");
                        }
                    } else {
                        json[k] = reader.readUTF16(s ? s : 0);
                    }
                    break;
                }
                case "utf8":
                    if (Array.isArray(s)) {
                        if (s.length != 2) {
                            json[k] = [];
                            let [maxCount, strLen] = s;
                            for (let i = 0; i < maxCount; i++) {
                                (<Array<any>>json[k]).push(reader.readUTF8(strLen));
                            }
                        } else {
                            console.error("multiple-array is not support yet");
                        }
                    } else {
                        json[k] = reader.readUTF8(s ? s : 0);
                    }
                    break;
                default: {
                    // let _tmpl = this.lookupTemplate(t)
                    // if (!_tmpl) {
                    //     console.error('unrecognizable type ', t);
                    // } else {
                    //     this.innerReadObject(reader, json, _tmpl, k, s, tmpl[i - 1].k);
                    // }
                    break;
                }
            }
        }
        return json;
    }

    // 在[公共定义]的模板中和[命令定义]的模板中 查找名字为name的解包模板定义
    private lookupTemplate(mcmd: number, scmd: number, forSend: boolean = true): INetPackTemplateDataTable | undefined {
        if(forSend){
            if(NetDefine.sendStructors[mcmd]?.[scmd]??false){
                return NetDefine.sendStructors[mcmd][scmd];
            }
        }else{
            if(NetDefine.recvStructors[mcmd]?.[scmd]??false){
                return NetDefine.recvStructors[mcmd][scmd];
            }
        }
        return NetDefine.structors[mcmd]?.[scmd];
        // try {
        //     return (forSend ? NetDefine.sendStructors : NetDefine.recvStructors)[mcmd][scmd];
        // } catch {
        //     try {
        //         return NetDefine.structors[mcmd][scmd];
        //     } catch {
        //         return undefined;
        //     }
        // }
    }

    // 计算发送的封包尺寸
    private estimateSize(json: json, tmpl: INetPackTemplateDataTable): number {
        let size = 0;
        for (let o of tmpl) {
            let { t, k, s } = o;
            switch (t) {
                case "byte":
                case "uint8_t":
                case "bool":
                case "boolean":
                case "char":
                    console.assert(!Array.isArray(s) && s != 0, "not support length as array or unfixed.");
                    size += s ? (s as number) : 1;
                    break;
                case "word":
                case "WORD":
                case "uint16_t":
                case "ushort":
                case "int16_t":
                case "short":
                    size += 2 * ((s as number) ? (s as number) : 1);
                    break;
                case "int32_t":
                case "int":
                case "INT":
                case "uint32_t":
                case "DWORD":
                case "dword":
                    size += 4 * ((s as number) ? (s as number) : 1);
                    break;
                case "int64_t":
                case "time_t":
                case "score":
                    size += 8 * ((s as number) ? (s as number) : 1);
                    break;
                case "char16_t":
                    // variable string
                    // let isVariableLength = (s == 0 || typeof s == undefined);
                    if (Array.isArray(s)) {
                        let sum = 2;
                        s.forEach((a) => (sum *= a));
                        size += sum;
                    } else {
                        const s1 = json[k] as string;
                        const _s = s as number;
                        size += (2 * (_s == 0 || typeof _s == undefined ? s1.length + 1 : _s)) as number;
                        break;
                    }
                case "utf8":
                    // variable string
                    // let isVariableLength = (s == 0 || typeof s == undefined);
                    if (Array.isArray(s)) {
                        let sum = 1;
                        s.forEach((a) => (sum *= a));
                        size += sum;
                    } else {
                        const s1 = json[k] as string;
                        const _s = s as number;
                        size += 1 * (_s == 0 || typeof _s == undefined ? s1.length + 1 : _s);
                        break;
                    }
                default:
                    console.error("unrecognizable type ", t);
                    return 0;
            }
        }
        return size;
    }

    private innerSendAsync<TSend>(param: ISendAsyncParam<TSend>): Promise<INetEventParam> {
        return new Promise<INetEventParam>((resolve, reject) => {
            this.waitAsync(param.recvMcmd, param.recvScmd, (s: INetService, e: INetEventParam) => {
                resolve(e);
            });
            let success = this.send(param.sendMcmd, param.sendScmd, <object>(param.data as unknown));
            if (!success) {
                reject(null);
                this.waitFailure(param.recvMcmd, param.recvScmd);
            }
        });
    }

    private onNetData(reader: IHxPackReader): boolean {
        let e: INetEventParam = {
            mcmd: reader.mainCommand,
            scmd: reader.subCommand,
            reader,
            data: {},
        };
        let template = this.lookupTemplate(e.mcmd, e.scmd, false);
        if (template) {
            // 根据模板自动解包
            e.data = this.readData(reader, template);
        } else {
            // 如果没有定义模板,则尝试手动解包方法解包
            e.data = tryManualUnpack(e.mcmd, e.scmd, reader);
            if (!e.data) {
                console.warn(`(${e.mcmd},${e.scmd}) decode hander without define!`);
            }
        }

        console.log("recive from server: ", e);

        // 如果有await/async操作,则先处理;
        if (this.notifyWait(this, e)) {
            return true;
        }
        // 如果没有await/async操作,则直接通知注册事件
        return this.notifyEvent(this, e);
    }

    // 初始化
    public init(options: INetServiceOptions): void {
        this.options = options;
    }

    private startReconnect() {
        if (!this.reconnectTimer) {
            this.reconnectTimer = setTimeout(
                (self: this) => {
                    self.reconnectTimer = 0;
                    self._isStarted = false;
                    self.start();
                },
                3000,
                this
            ) as unknown as number;
        }
    }

    // 启动网络服务
    public start(): boolean {
        if (this.isStarted) {
            return true;
        }

        if (!this.options) {
            console.error("please call init first");
            return false;
        }

        this._isStarted = true;
        this.options.onNetStatusChange(this, { status: WebSocket.CONNECTING });

        this.ws = new WebSocket(this.options.url, "h5");
        this.ws.binaryType = "arraybuffer";

        this.ws.onclose = (ev: CloseEvent) => {
            console.log(`connection closed ${ev.code}, reconnect after 3s`);
            this.options && this.options.onNetStatusChange(this, { status: WebSocket.CLOSED });
            this.startReconnect();
        };
        this.ws.onerror = (ev: Event) => {
            console.log("onerror");
            this.startReconnect();
        };

        this.ws.onopen = (ev: Event) => {
            if (!this.options || !this.ws) {
                return;
            }
            this.options && this.options.onNetStatusChange(this, { status: WebSocket.OPEN });
            let buffer = HxNetPack.init(this.options.ip);
            this.ws.send(buffer);
        };
        this.ws.onmessage = (ev: MessageEvent<any>) => {
            if (!this.options || !this.ws) {
                return;
            }
            let reader = HxNetPack.createReader(ev.data);
            try {
                if (reader.mainCommand == 0 && reader.subCommand == 0 && reader.dataLength == 12) {
                    this.options.onNetStatusChange(this, { status: 4 });
                } else {
                    // 收到包
                    let handled = this.onNetData(reader);
                    if (!handled) {
                        console.warn(`command (${reader.mainCommand}, ${reader.subCommand}) not handle`);
                    }
                }
            } finally {
                HxNetPack.deleteStream(reader);
            }
        };
        return true;
    }

    // 普通发送
    public send(raw: ArrayBufferLike | Blob | ArrayBufferView): boolean;
    public send<TSend = object>(mcmd: number, scmd: number, data?: TSend): boolean;

    public send<TSend = object>(
        mcmd_or_raw: number | ArrayBufferLike | Blob | ArrayBufferView,
        scmd?: number,
        data?: TSend
    ): boolean {
        if (!this.ws) return false;
        if (typeof mcmd_or_raw === "number") {
            let mcmd = mcmd_or_raw;
            if (data) {
                let template = this.lookupTemplate(mcmd, scmd as number, true);
                if (!template) {
                    console.error(`can not find the template of command(${mcmd},${scmd})`);
                    return false;
                }
                let size = this.estimateSize(data as unknown as json, template);
                let writer = HxNetPack.createWriter(mcmd_or_raw, scmd as number, size);
                try {
                    this.writeData(writer, data as unknown as json, template);
                    this.ws.send(writer.finalBuffer);
                } catch {
                    return false;
                } finally {
                    HxNetPack.deleteStream(writer);
                }
            } else {
                let writer = HxNetPack.createWriter(mcmd, scmd as number, 0);
                try {
                    this.ws.send(writer.finalBuffer);
                } catch {
                    return false;
                } finally {
                    HxNetPack.deleteStream(writer);
                }
            }
        } else {
            let raw = mcmd_or_raw;
            try {
                this.ws.send(raw);
            } catch {
                return false;
            }
        }
        return true;
    }

    // 指定发送与接收的命令
    public sendAsync<TSend>(
        mcmd: number,
        scmd: number,
        recvMcmd: number,
        recvScmd: number,
        data?: TSend
    ): Promise<INetEventParam> {
        return this.innerSendAsync({
            sendMcmd: mcmd,
            sendScmd: scmd,
            recvMcmd: recvMcmd,
            recvScmd: recvScmd,
            data: data,
        });
    }

    // 发送什么命令即接收什么命令
    public sendAsyncBack<TSend>(mcmd: number, scmd: number, data?: TSend): Promise<INetEventParam> {
        return this.innerSendAsync({
            sendMcmd: mcmd,
            sendScmd: scmd,
            recvMcmd: mcmd,
            recvScmd: scmd,
            data: data,
        });
    }

    // 收到的子命令为发送的子命令+1
    public sendAsyncInc<TSend>(mcmd: number, scmd: number, data?: TSend): Promise<INetEventParam> {
        return this.innerSendAsync({
            sendMcmd: mcmd,
            sendScmd: scmd,
            recvMcmd: mcmd,
            recvScmd: scmd + 1,
            data: data,
        });
    }

    // 关闭连接
    public close() {
        this.ws?.close();
    }

    // 更新IP地址
    public updateIp(ip: string) {
        if (!this.options) {
            console.error("require call init first");
            return;
        }
        this.options.ip = ip;
    }
}

// // 主管收包与发包的封装与实施
// export class PackHelper {
//     private service: WebSocketService;
//     constructor() {
//         this.service = WebSocketService.instance;
//     }

//     // INetProtocolEvent的实现,连接状态改变,有可能需要在界面上表现,所以回调出来
//     public onNetStatusChange(status: number): void {
//         switch (status) {
//             case WebSocket.OPEN: {
//                 console.log("connect success");
//                 break;
//             }
//             case WebSocket.CLOSED: {
//                 console.error("connection lost, try reconnect after 3 second");
//                 break;
//             }
//         }
//     }

//     // 集中式收包错误处理(未完成)
//     private onError(mcmd: number, scmd: number, code: number, msg?: string) {
//         // todo
//         console.warn(`"we got a error code: ${code}, msg:${msg}"`);
//         switch (code) {
//             case 122:
//                 // 商品信息不正确
//                 break;
//             case 123:
//                 // 订单号不存在
//                 break;
//             case 126:
//                 // 订单金额不正确
//                 break;
//             case 1500:
//                 // 分享抽奖次数不足
//                 break;
//             case 1501:
//                 // 未成目标，无法领奖
//                 break;
//             case 1504:
//                 // 已达到提现标准，无法抽奖
//                 break;
//             // todo
//             // and more
//             default:
//                 break;
//         }
//     }

//     // --------------------------------------------------以上为接收,以下为发送---------------------------------------------------------------------------
//     // 游客登陆
//     public logonVistor(data: CMD_MB_LogonVisitor): boolean {
//         return this.service.send(NetDefine.commands.MDM_MB_LOGON, NetDefine.commands.SUB_MB_LOGON_VISITOR, data);
//     }

//     // 手机登陆
//     public logonMobile(data: CMD_MB_LogonMobileEx): boolean {
//         return this.service.send(NetDefine.commands.MDM_MB_LOGON, NetDefine.commands.SUB_MB_LOGON_MOBILE_EX, data);
//     }

//     // 掉线重登陆
//     public relogon(data: CMD_MB_Relogon): boolean {
//         return this.service.send(NetDefine.commands.MDM_MB_LOGON, NetDefine.commands.SUB_MB_RELOGON, data);
//     }

//     // 三方平台登陆
//     public logonOtherPlatform(data: CMD_MB_LogonOtherPlatform): boolean {
//         return this.service.send(NetDefine.commands.MDM_MB_LOGON, NetDefine.commands.SUB_MB_LOGON_OTHERPLATFORM, data);
//     }

//     public getUtcTimestamp(): boolean {
//         return this.service.send(NetDefine.commands.MDM_MB_LOGON, NetDefine.commands.SUB_GP_SERVER_UTC_TIMESTAMP);
//     }

//     public sendSMSLogonCode(data: CMD_GP_SendSmsCode): boolean {
//         return this.service.send(NetDefine.commands.MDM_MB_LOGON, NetDefine.commands.SUB_MB_SendSMSLogonCode, data);
//     }

//     public sendSMSResetPasswordCode(data: CMD_GP_SendSmsCode): boolean {
//         return this.service.send(NetDefine.commands.MDM_MB_LOGON, NetDefine.commands.SUB_MB_SendSMSResetPassword, data);
//     }

//     public sendSMSRegisteUserCode(data: CMD_GP_SendSmsCode): boolean {
//         return this.service.send(NetDefine.commands.MDM_MB_LOGON, NetDefine.commands.SUB_MB_SendSMSRegisteUser, data);
//     }

//     public resetLogonPassword(data: CMD_MB_ResetLogonPassword) {
//         return this.service.send(NetDefine.commands.MDM_MB_LOGON, NetDefine.commands.SUB_MB_RESET_LOGON_PASSWORD, data);
//     }

//     public GetProductInfos(data: CMD_MB_GetProductInfos) {
//         return this.service.send(NetDefine.commands.MDM_GP_USER_SERVICE, NetDefine.commands.SUB_MB_GetProductInfos, data);
//     }

//     public GetProductTypeActiveState(data: CMD_MB_GetProductTypeActiveState) {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_GetProductTypeActiveState,
//             data
//         );
//     }
//     public GetProductActiveStateEx(data: CMD_MB_GetProductActiveState): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_GetProductActiveStateEx,
//             data
//         );
//     }
//     public GetLastPayInfo(data: CMD_MB_GetLastPayInfo): boolean {
//         return this.service.send(NetDefine.commands.MDM_GP_USER_SERVICE, NetDefine.commands.SUB_MB_GetLastPayInfo, data);
//     }
//     public PlacePayOrder(data: CMD_MB_PlaceOrder): boolean {
//         return this.service.send(NetDefine.commands.MDM_GP_USER_SERVICE, NetDefine.commands.SUB_MB_PlacePayOrder, data);
//     }
//     public GetProductExtendFlag(data: CMD_MB_GetProductExtendFlag): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_GetProductExtendFlag,
//             data
//         );
//     }
//     public GetProductInfosByType(data: CMD_MB_GetProductInfosByType): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_GetProductInfosByType,
//             data
//         );
//     }
//     public GetWithdrawStatus(data: CMD_MB_GetWithdrawStatus): boolean {
//         return this.service.send(NetDefine.commands.MDM_GP_USER_SERVICE, NetDefine.commands.SUB_MB_GetWithdrawStatus, data);
//     }
//     public GetWithdrawConfig(data: CMD_MB_Common_Query): boolean {
//         return this.service.send(NetDefine.commands.MDM_GP_USER_SERVICE, NetDefine.commands.SUB_MB_GetWithdrawConfig, data);
//     }
//     public GetWithdrawHistoryAccount(data: CMD_MB_GetWithdrawHistoryAccount): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_GetWithdrawHistoryAccount,
//             data
//         );
//     }
//     public GetWithdrawRecord(data: CMD_MB_GetWithdrawRecord): boolean {
//         return this.service.send(NetDefine.commands.MDM_GP_USER_SERVICE, NetDefine.commands.SUB_MB_GetWithdrawRecord, data);
//     }
//     public GetLastWithdrawRecord(data: CMD_MB_Common_Query): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_GetLastWithdrawRecord,
//             data
//         );
//     }
//     public PlaceWithdrawOrder(data: CMD_MB_PlaceOrder): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_PlaceWithdrawOrder,
//             data
//         );
//     }
//     public WithdrawLoadLimitConfig(data: CMD_MB_Common_Query): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_GetWithdrawCashLimit,
//             data
//         );
//     }
//     public GetActivityConfig(data: CMD_MB_GetActivityConfig): boolean {
//         return this.service.send(NetDefine.commands.MDM_GP_USER_SERVICE, NetDefine.commands.SUB_MB_GetActivityConfig, data);
//     }
//     public GetPayRebateInfo(data: CMD_MB_Common_Query): boolean {
//         return this.service.send(NetDefine.commands.MDM_GP_USER_SERVICE, NetDefine.commands.SUB_MB_GetPayRebateInfo, data);
//     }
//     public GetPayRebateReward(data: CMD_MB_GetPayRebateReward): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_GetPayRebateReward,
//             data
//         );
//     }
//     public ShareLotteryGetItems(data: CMD_MB_Common_Query): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareLotteryGetItems,
//             data
//         );
//     }
//     public ShareLotteryGetUserStatus(data: CMD_MB_ShareLotteryGetUserStatus): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareLotteryGetUserStatus,
//             data
//         );
//     }
//     public ShareLotteryGetInviteRecords(data: CMD_MB_ShareLotteryGetInviteRecords): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareLotteryGetInviteRecords,
//             data
//         );
//     }
//     public ShareLotteryExecuteSbin(data: CMD_MB_ShareLotteryExecuteSbin): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareLotteryExecuteSbin,
//             data
//         );
//     }
//     public ShareLotteryExecuteSbinContinuous(data: CMD_MB_ShareLotteryExecuteSbinContinuous): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareLotteryExecuteSbinContinuous,
//             data
//         );
//     }
//     public ShareLotteryTakeReward(data: CMD_MB_ShareLotteryTakeReward): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareLotteryTakeReward,
//             data
//         );
//     }
//     public ShareLotteryGetWithdrawHistory(data: CMD_MB_ShareLotteryGetWithdrawHistory): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareLotteryGetWithdrawHistory,
//             data
//         );
//     }
//     public ShareLotteryGetWithdrawStage(data: CMD_MB_Common_Query): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareLotteryGetWithdrawStage,
//             data
//         );
//     }
//     public ShareLotterySetWithdrawStage(data: CMD_MB_ShareLotterySetWithdrawStage): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareLotterySetWithdrawStage,
//             data
//         );
//     }
//     public SharePayRebateLoadConfig(data: CMD_MB_Common_Query): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_SharePayRebateLoadConfig,
//             data
//         );
//     }
//     public SharePayRebateGetStatus(data: CMD_MB_Common_Query): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_SharePayRebateGetStatus,
//             data
//         );
//     }
//     public SharePayRebateGetRecord(data: CMD_MB_SharePayRebateGetRecord): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_SharePayRebateGetRecord,
//             data
//         );
//     }
//     public SharePayRebateTakeReward(data: CMD_MB_SharePayRebateTakeReward): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_SharePayRebateTakeReward,
//             data
//         );
//     }
//     public ShareTreasureChestLoadConfig(data: CMD_MB_Common_Query): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareTreasureChestLoadConfig,
//             data
//         );
//     }
//     public ShareTreasureChestGetStatus(data: CMD_MB_Common_Query): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareTreasureChestGetStatus,
//             data
//         );
//     }
//     public ShareTreasureChestTakeReward(data: CMD_MB_ShareTreasureChestTakeReward): boolean {
//         return this.service.send(
//             NetDefine.commands.MDM_GP_USER_SERVICE,
//             NetDefine.commands.SUB_MB_ShareTreasureChestTakeReward,
//             data
//         );
//     }
// }

export async function getIP(): Promise<string> {
    async function innerGetIP(param: IGetIPParam): Promise<void> {
        param.counter++;
        if (param.maxtimes > 0 && param.counter >= param.maxtimes) {
            param.reject("network check failed, please check your network");
            return;
        }
        if (param.counter > 1) {
            console.warn(`try get ip ${param.counter} times.`);
        }
        let urls = ["https://ifconfig.me/ip", "https://ifconfig.me/ip"];
        let success = false;
        for (let url of urls) {
            try {
                let ip = (await (await fetch(url)).text()).trim();
                if (
                    ip.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/g) ||
                    ip.match(
                        /^([0-9a-fA-F]{1,4}(:[0-9a-fA-F]{1,4}){7}|([0-9a-fA-F]{1,4}:){1,7}:|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/g
                    )
                ) {
                    sessionStorage.setItem("ip", ip);
                    param.resolve(ip);
                    success = true;
                }
                break;
            } catch {
                continue;
            }
        }
        if (!success) {
            if (param.cancelToken && param.cancelToken(param)) {
                param.reject("network check failed, user manual cancel");
                return;
            }
            setTimeout(arguments.callee, param.timespan, param);
        }
    }
    return new Promise<string>(async (resolve, reject) => {
        let ip = sessionStorage.getItem("ip");
        if (ip) {
            resolve(ip);
            return;
        }
        innerGetIP({ counter: 0, maxtimes: 30, timespan: 2000, cancelToken: undefined, resolve, reject });
    });
}

export async function useNet(
    url?: string,
    onNetStatusChange?: (s: INetService, e: INetStatusChangeParam) => void
): Promise<INetService> {
    let ws = WebSocketService.instance;
    if (!ws.isStarted) {
        let ip = await getIP();
        if (!url) throw "first useNet need url";
        if (!onNetStatusChange) throw "first useNet need onNetStatusChange";

        ws.init({
            ip,
            url,
            onNetStatusChange: onNetStatusChange,
        });
        ws.start();
    }
    return ws;
}

export function getNet() {
    return WebSocketService.instance;
}
