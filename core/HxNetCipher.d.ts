
type pointer = number;

type IWSMessageCallback = (reader: HxPackReader) => void

interface ICipherString1Callback {
    (addrStr: number, length: number, addrOut: number): void;
}

interface ICipherString2Callback {
    (addrStr1: number, length1: number, addrStr2: number, length2: number, addrOut: number): void;
}

interface IBase64Callback {
    (addrStr: number, length: number): Array<number>;
}

type FuncStringReader = (streamAddr: pointer, dstAddr: number, length: number) => number;
type FuncNumberReader = (streamAddr: pointer) => number;
type FuncStringWriter = (streamAddr: pointer, dstAddr: number, length: number) => void;
type FuncNumberWriter = (streamAddr: pointer, value: number) => void;

interface IModule {
    // memory
    _malloc(size: number): number;
    _free(addr: pointer): void;

    _initProtocol(addr: pointer, length: number, packAddr: pointer): number;

    _deleteStream(stream: pointer): void;
    _createReadStream(addr: pointer, length: number): pointer;
    _createWriteStream(mcmd: number, scmd: number, packSize: number, zip?: boolean): pointer;
    // _onWSMessage(arrayBuffer: ArrayBuffer): boolean;

    _getBuffer(stream: pointer): number;
    _getMainCmd(stream: pointer): number;
    _getSubCmd(stream: pointer): number;
    _getDataLength(stream: pointer): number;

    _readInt8: FuncNumberReader;
    _readUint8: FuncNumberReader;
    _readInt16: FuncNumberReader;
    _readUint16: FuncNumberReader;
    _readInt32: FuncNumberReader;
    _readUint32: FuncNumberReader;
    _readInt64: FuncNumberReader;
    //_readUint64(addr: number): number;
    _readFloat32: FuncNumberReader;
    _readFloat64: FuncNumberReader;
    _readUTF16: FuncStringReader;
    _readUTF8: FuncStringReader;

    _writeInt8: FuncNumberWriter;
    _writeUint8: FuncNumberWriter;
    _writeInt16: FuncNumberWriter;
    _writeUint16: FuncNumberWriter;
    _writeInt32: FuncNumberWriter;
    _writeUint32: FuncNumberWriter;
    _writeInt64: FuncNumberWriter;
    //writeUint64:FuncNumberWriter;
    _writeFloat32: FuncNumberWriter;
    _writeFloat64: FuncNumberWriter;
    _writeUTF16: FuncStringWriter;
    _writeUTF8: FuncStringWriter;

    // HxCipher
    _Base64Encode(inAddr: pointer, length: number, outAddr: pointer): number;
    _Base64Decode(inAddr: pointer, length: number, outAddr: pointer): number;
    _MD5(inAddr: pointer, length: number, outAddr: pointer): void;

    _Sha1(inAddr: pointer, length: number, outAddr: pointer): void;

    _Sha224(inAddr: pointer, length: number, outAddr: pointer): void;
    _Sha256(inAddr: pointer, length: number, outAddr: pointer): void;
    _Sha384(inAddr: pointer, length: number, outAddr: pointer): void;
    _Sha512(inAddr: pointer, length: number, outAddr: pointer): void;

    _HmacSha224(inAddr: pointer, length: number, keyAddr: pointer, keyLen: number, outAddr: pointer): void;
    _HmacSha256(inAddr: pointer, length: number, keyAddr: pointer, keyLen: number, outAddr: pointer): void;
    _HmacSha384(inAddr: pointer, length: number, keyAddr: pointer, keyLen: number, outAddr: pointer): void;
    _HmacSha512(inAddr: pointer, length: number, keyAddr: pointer, keyLen: number, outAddr: pointer): void;

    // inner define
    HEAPU8: Uint8Array;
    onRuntimeInitialized: Function;

    _IpEncode(inAddr: pointer, outAddr: pointer);
}

declare interface IHxPackStream {
    getBuffer(): ArrayBuffer;
    get buffer(): ArrayBuffer;
    get mainCommand(): number;
    get subCommand(): number;
    get dataLength(): number;
    get addrHandle(): number;
}

interface IHxPackReader extends IHxPackStream {
    readInt8(): number;
    readUint8(): number;
    readInt16(): number;
    readUint16(): number;
    readInt32(): number;
    readUint32(): number;
    readInt64(): number;
    readFloat32(): number;
    readFloat64(): number;
    readUTF16(length: number): string;
    readUTF8(length: number): string;
}

interface IHxPackWriter extends IHxPackStream {
    writeInt8(value: number): void;
    writeUint8(value: number): void;
    writeInt16(value: number): void;
    writeUint16(value: number): void;
    writeInt32(value: number): void;
    writeUint32(value: number): void;
    writeInt64(value: number): void;
    //public writeUint64(value: number);
    writeFloat32(value: number): void;
    writeFloat64(value: number): void;
    writeUTF16(value: string, length: number): void;
    writeUTF8(value: string, length: number): void;
}

interface IHxNetPack {
    init(ip: string): ArrayBuffer;
    createReader(arrayBuffer: ArrayBuffer): IHxPackReader;
    createWriter(mcmd: number, scmd: number, packSize: number, zip?: boolean): IHxPackWriter;
    deleteStream(stream: IHxPackStream): void;
    ipEncode(ip: string): Array<number>;
}

interface IHxCipher {
    base64Encode(str: string): string;
    base64Decode(str: string): string;
    md5(str: string): string;
    sha1(str: string): string;
    sha224(str: string): string;
    sha256(str: string): string;
    sha384(str: string): string;
    sha512(str: string): string;
    hmacSha224(str: string, key: string): string;
    hmacSha256(str: string, key: string): string;
    hmacSha384(str: string, key: string): string;
    hmacSha512(str: string, key: string): string;
}