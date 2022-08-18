import { ProtoRoot, ProtoRef } from '@osmonauts/types';
import { camel } from '@osmonauts/utils';
import { relative, dirname, extname } from 'path';

export const getRoot = (ref: ProtoRef): ProtoRoot => {
    if (ref.traversed) return ref.traversed;
    return ref.proto;
};

export const UTILS = {
    AminoHeight: '@osmonauts/helpers',
    AminoMsg: '@cosmjs-rn/amino',
    AminoTypes: '@cosmjs-rn/stargate',
    decodeBech32Pubkey: '@cosmjs-rn/amino',
    defaultRegistryTypes: '@cosmjs-rn/stargate',
    encodeBech32Pubkey: '@cosmjs-rn/amino',
    fromBase64: '@cosmjs-rn/encoding',
    fromBech32: '@cosmjs-rn/encoding',
    fromDuration: '@osmonauts/helpers',
    fromHex: '@cosmjs-rn/encoding',
    fromUtf8: '@cosmjs-rn/encoding',
    fromJsonTimestamp: '@osmonauts/helpers',
    fromTimestamp: '@osmonauts/helpers',
    GeneratedType: '@cosmjs-rn/proto-signing',
    isSet: '@osmonauts/helpers',
    isObject: '@osmonauts/helpers',
    Long: '@osmonauts/helpers', // exports Long and also calls the magic Long code
    // Long: { type: 'default', path: 'long', name: 'Long ' },
    OfflineSigner: '@cosmjs-rn/proto-signing',
    omitDefault: '@osmonauts/helpers',
    Registry: '@cosmjs-rn/proto-signing',
    SigningStargateClient: '@cosmjs-rn/stargate',
    toBase64: '@cosmjs-rn/encoding',
    toUtf8: '@cosmjs-rn/encoding',
    toDuration: '@osmonauts/helpers',
    toTimestamp: '@osmonauts/helpers',
    bytesFromBase64: '@osmonauts/helpers',
    base64FromBytes: '@osmonauts/helpers',
    _m0: { type: 'namespace', path: 'protobufjs/minimal', name: '_m0' },
    Exact: '@osmonauts/helpers',
    Rpc: '@osmonauts/helpers',
    LCDClient: '@osmonauts/lcd',
    DeepPartial: '@osmonauts/helpers'
};


export const getRelativePath = (f1: string, f2: string) => {
    const rel = relative(dirname(f1), f2);
    let importPath = rel.replace(extname(rel), '');
    if (!/^\./.test(importPath)) importPath = `./${importPath}`;
    return importPath;
}


export const variableSlug = (str) => {
    str = String(str).toString();
    str = str.replace(/\//g, '_');
    str = str.replace('.', '_');
    str = str.replace(extname(str), '');
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();
    str = str
        .replace(/[^a-z0-9_ -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-/g, "");

    return camel(str);
}
