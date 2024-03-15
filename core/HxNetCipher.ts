/// <reference path="./HxNetCipher.d.ts" />
// node - 
// import { TextDecoder, TextEncoder } from "util";
// export const wasmModule = require("./cipher-v3.0.4.min.js") as IModule

// web
declare global {
    namespace globalThis {
        var Module: IModule
    }
}

const wasmModule: IModule = globalThis.Module as unknown as IModule

class HxPackStream implements IHxPackStream {
    constructor(protected streamAddr: number) {
    }

    public getBuffer(): ArrayBuffer {
        let addrBuffer = wasmModule._getBuffer(this.streamAddr);
        let packLength = wasmModule._getDataLength(this.streamAddr) + 12;
        return new Uint8Array(wasmModule.HEAPU8.buffer, addrBuffer, packLength);
    }

    public get buffer(): ArrayBuffer {
        return this.getBuffer();
    }

    public get mainCommand(): number {
        return wasmModule._getMainCmd(this.streamAddr);
    }

    public get subCommand(): number {
        return wasmModule._getSubCmd(this.streamAddr);
    }

    public get dataLength(): number {
        return wasmModule._getDataLength(this.streamAddr);
    }

    public get addrHandle(): number {
        return this.streamAddr;
    }
}

class HxPackReader extends HxPackStream implements IHxPackReader {
    constructor(buffer: ArrayBuffer) {
        let addr = wasmModule._malloc(buffer.byteLength);
        wasmModule.HEAPU8.set(new Uint8Array(buffer), addr);
        // console.log("HxPackReader() addr =", addr, "buffer.byteLength =", buffer.byteLength)
        super(wasmModule._createReadStream(addr, buffer.byteLength))
    }

    // constructor(streamAddr: pointer) {
    //     // let addr = wasmModule._malloc(buffer.byteLength);

    //     // wasmModule.HEAPU8.set(new Uint8Array(buffer), addr);
    //     // super(wasmModule._createReadStream(addr, buffer.byteLength))
    //     super(streamAddr)
    // }

    public readInt8(): number {
        return wasmModule._readInt8(this.streamAddr);
    }

    public readUint8(): number {
        return wasmModule._readUint8(this.streamAddr);
    }

    public readInt16(): number {
        return wasmModule._readInt16(this.streamAddr);
    }

    public readUint16(): number {

        return wasmModule._readUint16(this.streamAddr);
    }

    public readInt32(): number {
        return wasmModule._readInt32(this.streamAddr);
    }

    public readUint32(): number {
        return wasmModule._readUint32(this.streamAddr);
    }

    public readInt64(): number {
        return wasmModule._readInt64(this.streamAddr);
    }

    //public readUint64(): number {
    //    return this.innerRead(arguments.callee.name);
    //}

    public readFloat32(): number {
        return wasmModule._readFloat32(this.streamAddr);
    }

    public readFloat64(): number {
        return wasmModule._readFloat64(this.streamAddr);
    }

    private innerReadString(length: number, dst: number, reader: (stream: number, dst: number, length: number) => number): string {
        let readLength = reader(this.streamAddr, dst, length);
        if (!readLength) return "";
        let u8 = new Uint8Array(wasmModule.HEAPU8.buffer, dst, readLength);
        return new TextDecoder().decode(u8);
    }

    public readUTF16(length: number): string {
        const MAX_STR_LEN = 4096;
        let addr = -1;
        try {
            addr = wasmModule._malloc(MAX_STR_LEN);
            return this.innerReadString(length, addr, wasmModule._readUTF16);
        } catch {
            console.error("readString exception");
            return "";
        } finally {
            if (addr >= 0) {
                wasmModule._free(addr);
            }
        }
    }

    public readUTF8(length: number): string {
        const MAX_STR_LEN = 4096;
        let addr = -1;
        try {
            addr = wasmModule._malloc(MAX_STR_LEN);
            return this.innerReadString(length, addr, wasmModule._readUTF8);
        } catch {
            console.error("readUtf8 exception");
            return "";
        } finally {
            if (addr >= 0) {
                wasmModule._free(addr);
            }
        }
    }
}

class HxPackWriter extends HxPackStream implements IHxPackWriter {
    constructor(mcmd: number, scmd: number, packSize: number, zip: boolean = false) {
        console.log("创建写入流:", mcmd, scmd, packSize);
        super(wasmModule._createWriteStream(mcmd, scmd, packSize, zip))
    }

    public writeInt8(value: number) {
        wasmModule._writeInt8(this.streamAddr, value);
    }

    public writeUint8(value: number) {
        wasmModule._writeUint8(this.streamAddr, value);
    }

    public writeInt16(value: number) {
        wasmModule._writeInt16(this.streamAddr, value);
    }

    public writeUint16(value: number) {
        wasmModule._writeUint16(this.streamAddr, value);
    }

    public writeInt32(value: number) {
        wasmModule._writeInt32(this.streamAddr, value);
    }

    public writeUint32(value: number) {
        wasmModule._writeUint32(this.streamAddr, value);
    }

    public writeInt64(value: number) {
        wasmModule._writeInt64(this.streamAddr, value);
    }

    //public writeUint64(value: number) {
    //    this.innerWrite(arguments.callee.name, value);
    //}

    public writeFloat32(value: number) {
        wasmModule._writeFloat32(this.streamAddr, value);
    }

    public writeFloat64(value: number) {
        wasmModule._writeFloat64(this.streamAddr, value);
    }

    private innerString2Array(utf8String: string, maxLength: number, outAddr: pointer): number {
        if (!utf8String) {
            wasmModule.HEAPU8[outAddr] = 0;
            wasmModule.HEAPU8[outAddr + 1] = 0;
            return 0;
        } else {
            let encoder = new TextEncoder();
            let dst = new Uint8Array(wasmModule.HEAPU8.buffer, outAddr, maxLength - 2);
            let result = encoder.encodeInto(utf8String, dst);
            if (!result.written)
                result.written = 0;

            wasmModule.HEAPU8[outAddr + result.written] = 0;
            wasmModule.HEAPU8[outAddr + result.written + 1] = 0;
            return result.written;
        }
    }

    public writeUTF16(value: string, length: number): void {
        let addr = -1;
        const maxLength = 4096;
        if (length >= maxLength - 2) {
            console.warn(`string is too long ${value}`);
            length = maxLength - 2;
        }
        try {
            addr = wasmModule._malloc(maxLength);
            this.innerString2Array(value, maxLength, addr);
            wasmModule._writeUTF16(this.streamAddr, addr, length);
        } catch {
            console.error(`writeString exception: ${value}, ${length}`);
        }
        finally {
            if (addr >= 0) {
                wasmModule._free(addr);
            }
        }
    }

    public writeUTF8(value: string, length: number) {
        let addr = -1;
        const maxLength = 4096;
        if (length > maxLength - 2) {
            console.warn(`string is too long ${value}`);
            length = maxLength;
        }
        try {
            addr = wasmModule._malloc(maxLength);
            this.innerString2Array(value, maxLength, addr);
            wasmModule._writeUTF8(this.streamAddr, addr, length);
        } catch {
            console.error(`writeUTF8 exception: ${value}, ${length}`);
        }
        finally {
            if (addr >= 0) {
                wasmModule._free(addr);
            }
        }
    }
}

// export
export const HxNetPack: IHxNetPack = {
    init: function (ip: string): ArrayBuffer {
        let ipAddr: pointer = -1, packAddr: pointer = -1;
        try {
            const MAX_LEN_IP = 48;
            ipAddr = wasmModule._malloc(MAX_LEN_IP);
            new TextEncoder().encodeInto(ip, new Uint8Array(wasmModule.HEAPU8.buffer, ipAddr, MAX_LEN_IP));
            packAddr = wasmModule._malloc(256);
            let realLength = wasmModule._initProtocol(ipAddr, packAddr, 256);
            return new Uint8Array(wasmModule.HEAPU8.buffer, packAddr, realLength);
        } finally {
            if (ipAddr >= 0) {
                wasmModule._free(ipAddr);
            }
            if (packAddr >= 0) {
                wasmModule._free(packAddr);
            }
        }
    },
    createWriter: function (mcmd: number, scmd: number, packSize: number, zip?: boolean): IHxPackWriter {
        return new HxPackWriter(mcmd, scmd, packSize, zip);
    },
    createReader: function (arrayBuffer: ArrayBuffer): IHxPackReader {
        return new HxPackReader(arrayBuffer);
    },
    deleteStream: function (stream: IHxPackStream): void {
        wasmModule._deleteStream(stream.addrHandle);
    },
    ipEncode: function (ip: string): Array<number> {
        let ipAddr = -1, outAddr = -1;
        try {
            ipAddr = wasmModule._malloc(48);
            outAddr = wasmModule._malloc(14);
            let u8Arr = new Uint8Array(wasmModule.HEAPU8.buffer, ipAddr, 48);
            let result = new TextEncoder().encodeInto(ip, u8Arr);
            if (result.written) {
                wasmModule._IpEncode(ipAddr, outAddr);
                let ret: Array<number> = [];
                for (let i = 0; i < result.written; i++) {
                    ret.push(wasmModule.HEAPU8[outAddr + i]);
                }
                if (result.written < 14) {
                    for (let i = 0; i < 14 - result.written; i++) {
                        ret.push(0);
                    }
                }
                return ret;
            }
            return [];
        } catch {
            console.error("call ipEncode exception");
            return [];
        } finally {
            if (ipAddr >= 0) wasmModule._free(ipAddr);
            if (outAddr >= 0) wasmModule._free(outAddr);
        }
    }
};

function innerCipherString1(inStr: string, outLength: number, cipher: ICipherString1Callback): string {
    let addrStr = -1,
        addrOut = -1;
    try {
        const MAX_STR_LEN = 4096;
        addrStr = wasmModule._malloc(MAX_STR_LEN);
        let result = new TextEncoder().encodeInto(inStr, new Uint8Array(wasmModule.HEAPU8.buffer, addrStr, MAX_STR_LEN));

        addrOut = wasmModule._malloc(outLength);
        cipher(addrStr, result.written as number, addrOut);
        return new TextDecoder().decode(new Uint8Array(wasmModule.HEAPU8.buffer, addrOut, outLength));
    }
    catch {
        console.error(`call innerCipherString1 exception, addrStr=${inStr}, outLength = ${outLength}`);
        return "";
    }
    finally {
        if (addrStr >= 0)
            wasmModule._free(addrStr);
        if (addrOut >= 0)
            wasmModule._free(addrOut);
    }
}

function innerCipherHmacSha(msg: string, key: string, outLength: number, cipher: ICipherString2Callback): string {
    let addrStr1: pointer = -1,
        addrStr2: pointer = -1,
        addrOut: pointer = -1;
    try {
        const MAX_STR_LEN = 4096;
        addrStr1 = wasmModule._malloc(MAX_STR_LEN);
        let result1 = new TextEncoder().encodeInto(msg, new Uint8Array(wasmModule.HEAPU8.buffer, addrStr1, MAX_STR_LEN));

        addrStr2 = wasmModule._malloc(MAX_STR_LEN);
        let result2 = new TextEncoder().encodeInto(key, new Uint8Array(wasmModule.HEAPU8.buffer, addrStr2, MAX_STR_LEN));

        addrOut = wasmModule._malloc(outLength);
        cipher(addrStr1, result1.written as number, addrStr2, result2.written as number, addrOut);
        return new TextDecoder().decode(new Uint8Array(wasmModule.HEAPU8.buffer, addrOut, outLength));
    } catch {
        console.error(`call innerCipherHmacSha exception, msg=${msg}, key = ${key}`);
    } finally {
        if (addrStr1 >= 0)
            wasmModule._free(addrStr1);
        if (addrStr2 >= 0)
            wasmModule._free(addrStr2);
        if (addrOut >= 0)
            wasmModule._free(addrOut);
    }
    return "";
}

function innerCipherBase64(str: string, cb: IBase64Callback): string {
    let addrStr = -1,
        addrOut = -1;
    try {
        const MAX_STR_LEN = 4096;
        addrStr = wasmModule._malloc(MAX_STR_LEN);
        let r = new TextEncoder().encodeInto(str, new Uint8Array(wasmModule.HEAPU8.buffer, addrStr, MAX_STR_LEN));
        if (r.written && r.written > 0) {
            let realLength = 0;
            [addrOut, realLength] = cb(addrStr, r.written as number);
            let result = new Uint8Array(wasmModule.HEAPU8.buffer, addrOut, realLength);
            return new TextDecoder().decode(result);
        } else {
            console.error(`call Base64 exception, written empty, str=${str}`);
        }
    }
    catch {
        console.error(`call Base64 exception, str=${str}`);
    }
    finally {
        if (addrStr >= 0)
            wasmModule._free(addrStr);
        if (addrOut >= 0)
            wasmModule._free(addrOut);
    }
    return "";
}

// export
export const HxCipher: IHxCipher = {
    base64Encode: function (str: string): string {
        return innerCipherBase64(str, function (addrStr: number, length: number): Array<number> {
            let outLength = Math.round(((length + 2) / 3) * 4 + 1);
            let addrOut = wasmModule._malloc(outLength);
            let realLength = wasmModule._Base64Encode(addrStr, length, addrOut);
            return [addrOut, realLength];
        });
    },
    base64Decode: function (str: string): string {
        return innerCipherBase64(str, function (addrStr: number, length: number): Array<number> {
            let outLength = Math.round(length / 4) * 3;
            let addrOut = wasmModule._malloc(outLength);
            let realLength = wasmModule._Base64Decode(addrStr, length, addrOut);
            return [addrOut, realLength];
        });
    },

    md5: function (str: string): string {
        return innerCipherString1(str, 32, wasmModule._MD5);
    },

    sha1: function (str: string): string {
        return innerCipherString1(str, 40, function (a, b, c) {
            //console.log(`calc sha1 addrStr=${a}, length=${b}, addrOut = ${c}`);
            wasmModule._Sha1(a, b, c);
        });
    },

    sha224: function (str: string): string {
        return innerCipherString1(str, 56, wasmModule._Sha224);
    },

    sha256: function (str: string): string {
        return innerCipherString1(str, 64, wasmModule._Sha256);
    },

    sha384: function (str: string): string {
        return innerCipherString1(str, 96, wasmModule._Sha384);
    },

    sha512: function (str: string): string {
        return innerCipherString1(str, 128, wasmModule._Sha512);
    },

    hmacSha224: function (str: string, key: string): string {
        return innerCipherHmacSha(str, key, 56, wasmModule._HmacSha224);
    },

    hmacSha256: function (str: string, key: string): string {
        return innerCipherHmacSha(str, key, 64, wasmModule._HmacSha256);
    },

    hmacSha384: function (str: string, key: string): string {
        return innerCipherHmacSha(str, key, 96, wasmModule._HmacSha384);
    },

    hmacSha512: function (str: string, key: string): string {
        return innerCipherHmacSha(str, key, 128, wasmModule._HmacSha512);
    },
};

wasmModule.onRuntimeInitialized = function () {
    // load ok
    // var o = HxCipher.md5("ok");
    // console.log(o);

}

export type { HxPackWriter, HxPackReader, HxPackStream }
