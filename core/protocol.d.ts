/// <reference path="./HxNetCipher.d.ts" />

interface INetService {
    init(options: INetServiceOptions): void;
    start(): boolean;
    send(raw: ArrayBufferLike | Blob | ArrayBufferView): boolean;
    send<TSend = object>(mcmd: number, scmd: number, data?: TSend): boolean;

    sendAsync<TSend = object>(mcmd: number, scmd: number, recvMcmd: number, recvScmd: number, data?: TSend): Promise<INetEventParam>;
    sendAsyncBack<TSend = object>(mcmd: number, scmd: number, data?: TSend): Promise<INetEventParam>;
    sendAsyncInc<TSend = object>(mcmd: number, scmd: number, data?: TSend): Promise<INetEventParam>;
    close(): void;
    updateIp(ip: string): void;

    on(mcmd: number, scmd: number[] | number, pageID: IVuePageID, cb: INetEventCallback): void;
    on(mcmd: number, scmd: number[] | number, pageID: IVuePageID, sink: INetAttermperSink): void;

    on(cmd: INetCommand[] | INetCommand, pageID: IVuePageID, cb: INetEventCallback): void;
    on(cmd: INetCommand[] | INetCommand, pageID: IVuePageID, sink: INetAttermperSink): void;

    off(pageID: IVuePageID): void;
}

interface INetCommand {
    mcmd: number, scmd: number;
}

interface INetStatusChangeParam {
    status: number;

}
interface INetServiceOptions {
    url: string;
    ip: string;
    onNetStatusChange(s: INetService, e: INetStatusChangeParam): void;
}

interface ISendAsyncParam<TSend> {
    sendMcmd: number, sendScmd: number;
    recvMcmd: number, recvScmd: number;
    data?: TSend
}

interface INetEventParam {
    mcmd: number,
    scmd: number,
    reader: HxPackReader,
    data?: object;
}

type INetEventCallback = (s: INetService, e: INetEventParam) => void;

type IVuePageID = number | string;

interface INetAttermperSink {
    onNetEvent: INetEventCallback;
}

interface IGetIPParam {
    counter: number,
    maxtimes: number,
    timespan: number,
    cancelToken?: (param: IGetIPParam) => boolean,   // for manual cancel
    resolve: (value: string) => void,
    reject: (reason: string) => void
}
