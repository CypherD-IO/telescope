import * as _878 from "./wasm/v1/genesis";
import * as _880 from "./wasm/v1/ibc";
import * as _882 from "./wasm/v1/proposal";
import * as _884 from "./wasm/v1/query";
import * as _886 from "./wasm/v1/tx";
import * as _894 from "./wasm/v1/types";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            accessTypeFromJSON(object: any): _894.AccessType;
            accessTypeToJSON(object: _894.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _894.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _894.ContractCodeHistoryOperationType): string;
            AccessType: typeof _894.AccessType;
            ContractCodeHistoryOperationType: typeof _894.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _894.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.AccessTypeParam;
                fromJSON(object: any): _894.AccessTypeParam;
                toJSON(message: _894.AccessTypeParam): unknown;
                fromPartial<I extends {
                    value?: _894.AccessType;
                } & {
                    value?: _894.AccessType;
                } & Record<Exclude<keyof I, "value">, never>>(object: I): _894.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _894.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.AccessConfig;
                fromJSON(object: any): _894.AccessConfig;
                toJSON(message: _894.AccessConfig): unknown;
                fromPartial<I_1 extends {
                    permission?: _894.AccessType;
                    address?: string;
                } & {
                    permission?: _894.AccessType;
                    address?: string;
                } & Record<Exclude<keyof I_1, keyof _894.AccessConfig>, never>>(object: I_1): _894.AccessConfig;
            };
            Params: {
                encode(message: _894.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.Params;
                fromJSON(object: any): _894.Params;
                toJSON(message: _894.Params): unknown;
                fromPartial<I_2 extends {
                    codeUploadAccess?: {
                        permission?: _894.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _894.AccessType;
                    maxWasmCodeSize?: string;
                } & {
                    codeUploadAccess?: {
                        permission?: _894.AccessType;
                        address?: string;
                    } & {
                        permission?: _894.AccessType;
                        address?: string;
                    } & Record<Exclude<keyof I_2["codeUploadAccess"], keyof _894.AccessConfig>, never>;
                    instantiateDefaultPermission?: _894.AccessType;
                    maxWasmCodeSize?: string;
                } & Record<Exclude<keyof I_2, keyof _894.Params>, never>>(object: I_2): _894.Params;
            };
            CodeInfo: {
                encode(message: _894.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.CodeInfo;
                fromJSON(object: any): _894.CodeInfo;
                toJSON(message: _894.CodeInfo): unknown;
                fromPartial<I_3 extends {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _894.AccessType;
                        address?: string;
                    };
                } & {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _894.AccessType;
                        address?: string;
                    } & {
                        permission?: _894.AccessType;
                        address?: string;
                    } & Record<Exclude<keyof I_3["instantiateConfig"], keyof _894.AccessConfig>, never>;
                } & Record<Exclude<keyof I_3, keyof _894.CodeInfo>, never>>(object: I_3): _894.CodeInfo;
            };
            ContractInfo: {
                encode(message: _894.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.ContractInfo;
                fromJSON(object: any): _894.ContractInfo;
                toJSON(message: _894.ContractInfo): unknown;
                fromPartial<I_4 extends {
                    codeId?: string;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: string;
                        txIndex?: string;
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                } & {
                    codeId?: string;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: string;
                        txIndex?: string;
                    } & {
                        blockHeight?: string;
                        txIndex?: string;
                    } & Record<Exclude<keyof I_4["created"], keyof _894.AbsoluteTxPosition>, never>;
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_4["extension"], keyof import("../google/protobuf/any").Any>, never>;
                } & Record<Exclude<keyof I_4, keyof _894.ContractInfo>, never>>(object: I_4): _894.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _894.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.ContractCodeHistoryEntry;
                fromJSON(object: any): _894.ContractCodeHistoryEntry;
                toJSON(message: _894.ContractCodeHistoryEntry): unknown;
                fromPartial<I_5 extends {
                    operation?: _894.ContractCodeHistoryOperationType;
                    codeId?: string;
                    updated?: {
                        blockHeight?: string;
                        txIndex?: string;
                    };
                    msg?: Uint8Array;
                } & {
                    operation?: _894.ContractCodeHistoryOperationType;
                    codeId?: string;
                    updated?: {
                        blockHeight?: string;
                        txIndex?: string;
                    } & {
                        blockHeight?: string;
                        txIndex?: string;
                    } & Record<Exclude<keyof I_5["updated"], keyof _894.AbsoluteTxPosition>, never>;
                    msg?: Uint8Array;
                } & Record<Exclude<keyof I_5, keyof _894.ContractCodeHistoryEntry>, never>>(object: I_5): _894.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _894.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.AbsoluteTxPosition;
                fromJSON(object: any): _894.AbsoluteTxPosition;
                toJSON(message: _894.AbsoluteTxPosition): unknown;
                fromPartial<I_6 extends {
                    blockHeight?: string;
                    txIndex?: string;
                } & {
                    blockHeight?: string;
                    txIndex?: string;
                } & Record<Exclude<keyof I_6, keyof _894.AbsoluteTxPosition>, never>>(object: I_6): _894.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _894.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.Model;
                fromJSON(object: any): _894.Model;
                toJSON(message: _894.Model): unknown;
                fromPartial<I_7 extends {
                    key?: Uint8Array;
                    value?: Uint8Array;
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I_7, keyof _894.Model>, never>>(object: I_7): _894.Model;
            };
            MsgStoreCode: {
                encode(message: _886.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgStoreCode;
                fromJSON(object: any): _886.MsgStoreCode;
                toJSON(message: _886.MsgStoreCode): unknown;
                fromPartial<I_8 extends {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _894.AccessType;
                        address?: string;
                    };
                } & {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _894.AccessType;
                        address?: string;
                    } & {
                        permission?: _894.AccessType;
                        address?: string;
                    } & Record<Exclude<keyof I_8["instantiatePermission"], keyof _894.AccessConfig>, never>;
                } & Record<Exclude<keyof I_8, keyof _886.MsgStoreCode>, never>>(object: I_8): _886.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _886.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgStoreCodeResponse;
                fromJSON(object: any): _886.MsgStoreCodeResponse;
                toJSON(message: _886.MsgStoreCodeResponse): unknown;
                fromPartial<I_9 extends {
                    codeId?: string;
                } & {
                    codeId?: string;
                } & Record<Exclude<keyof I_9, "codeId">, never>>(object: I_9): _886.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _886.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgInstantiateContract;
                fromJSON(object: any): _886.MsgInstantiateContract;
                toJSON(message: _886.MsgInstantiateContract): unknown;
                fromPartial<I_10 extends {
                    sender?: string;
                    admin?: string;
                    codeId?: string;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    sender?: string;
                    admin?: string;
                    codeId?: string;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_10["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_10["funds"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_10, keyof _886.MsgInstantiateContract>, never>>(object: I_10): _886.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _886.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgInstantiateContractResponse;
                fromJSON(object: any): _886.MsgInstantiateContractResponse;
                toJSON(message: _886.MsgInstantiateContractResponse): unknown;
                fromPartial<I_11 extends {
                    address?: string;
                    data?: Uint8Array;
                } & {
                    address?: string;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_11, keyof _886.MsgInstantiateContractResponse>, never>>(object: I_11): _886.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _886.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgExecuteContract;
                fromJSON(object: any): _886.MsgExecuteContract;
                toJSON(message: _886.MsgExecuteContract): unknown;
                fromPartial<I_12 extends {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_12["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_12["funds"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_12, keyof _886.MsgExecuteContract>, never>>(object: I_12): _886.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _886.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgExecuteContractResponse;
                fromJSON(object: any): _886.MsgExecuteContractResponse;
                toJSON(message: _886.MsgExecuteContractResponse): unknown;
                fromPartial<I_13 extends {
                    data?: Uint8Array;
                } & {
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_13, "data">, never>>(object: I_13): _886.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _886.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgMigrateContract;
                fromJSON(object: any): _886.MsgMigrateContract;
                toJSON(message: _886.MsgMigrateContract): unknown;
                fromPartial<I_14 extends {
                    sender?: string;
                    contract?: string;
                    codeId?: string;
                    msg?: Uint8Array;
                } & {
                    sender?: string;
                    contract?: string;
                    codeId?: string;
                    msg?: Uint8Array;
                } & Record<Exclude<keyof I_14, keyof _886.MsgMigrateContract>, never>>(object: I_14): _886.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _886.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgMigrateContractResponse;
                fromJSON(object: any): _886.MsgMigrateContractResponse;
                toJSON(message: _886.MsgMigrateContractResponse): unknown;
                fromPartial<I_15 extends {
                    data?: Uint8Array;
                } & {
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_15, "data">, never>>(object: I_15): _886.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _886.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgUpdateAdmin;
                fromJSON(object: any): _886.MsgUpdateAdmin;
                toJSON(message: _886.MsgUpdateAdmin): unknown;
                fromPartial<I_16 extends {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                } & {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                } & Record<Exclude<keyof I_16, keyof _886.MsgUpdateAdmin>, never>>(object: I_16): _886.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _886.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgUpdateAdminResponse;
                fromJSON(_: any): _886.MsgUpdateAdminResponse;
                toJSON(_: _886.MsgUpdateAdminResponse): unknown;
                fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _886.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _886.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgClearAdmin;
                fromJSON(object: any): _886.MsgClearAdmin;
                toJSON(message: _886.MsgClearAdmin): unknown;
                fromPartial<I_18 extends {
                    sender?: string;
                    contract?: string;
                } & {
                    sender?: string;
                    contract?: string;
                } & Record<Exclude<keyof I_18, keyof _886.MsgClearAdmin>, never>>(object: I_18): _886.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _886.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgClearAdminResponse;
                fromJSON(_: any): _886.MsgClearAdminResponse;
                toJSON(_: _886.MsgClearAdminResponse): unknown;
                fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _886.MsgClearAdminResponse;
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _886.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: Uint8Array;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: Uint8Array;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    }) => _886.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _886.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _886.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _886.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _886.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _886.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _886.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _886.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _886.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _886.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _886.MsgClearAdmin;
                };
            };
            encoded: {
                storeCode(value: _886.MsgStoreCode): {
                    type_url: string;
                    value: Uint8Array;
                };
                instantiateContract(value: _886.MsgInstantiateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                executeContract(value: _886.MsgExecuteContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                migrateContract(value: _886.MsgMigrateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateAdmin(value: _886.MsgUpdateAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                clearAdmin(value: _886.MsgClearAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                storeCode(value: any): {
                    typeUrl: string;
                    value: _886.MsgStoreCode;
                };
                instantiateContract(value: any): {
                    typeUrl: string;
                    value: _886.MsgInstantiateContract;
                };
                executeContract(value: any): {
                    typeUrl: string;
                    value: _886.MsgExecuteContract;
                };
                migrateContract(value: any): {
                    typeUrl: string;
                    value: _886.MsgMigrateContract;
                };
                updateAdmin(value: any): {
                    typeUrl: string;
                    value: _886.MsgUpdateAdmin;
                };
                clearAdmin(value: any): {
                    typeUrl: string;
                    value: _886.MsgClearAdmin;
                };
            };
            toJSON: {
                storeCode(value: _886.MsgStoreCode): {
                    typeUrl: string;
                    value: unknown;
                };
                instantiateContract(value: _886.MsgInstantiateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                executeContract(value: _886.MsgExecuteContract): {
                    typeUrl: string;
                    value: unknown;
                };
                migrateContract(value: _886.MsgMigrateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                updateAdmin(value: _886.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                clearAdmin(value: _886.MsgClearAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                storeCode(value: _886.MsgStoreCode): {
                    typeUrl: string;
                    value: _886.MsgStoreCode;
                };
                instantiateContract(value: _886.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _886.MsgInstantiateContract;
                };
                executeContract(value: _886.MsgExecuteContract): {
                    typeUrl: string;
                    value: _886.MsgExecuteContract;
                };
                migrateContract(value: _886.MsgMigrateContract): {
                    typeUrl: string;
                    value: _886.MsgMigrateContract;
                };
                updateAdmin(value: _886.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _886.MsgUpdateAdmin;
                };
                clearAdmin(value: _886.MsgClearAdmin): {
                    typeUrl: string;
                    value: _886.MsgClearAdmin;
                };
            };
            messages: {
                storeCode(value: _886.MsgStoreCode): {
                    typeUrl: string;
                    value: _886.MsgStoreCode;
                };
                instantiateContract(value: _886.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _886.MsgInstantiateContract;
                };
                executeContract(value: _886.MsgExecuteContract): {
                    typeUrl: string;
                    value: _886.MsgExecuteContract;
                };
                migrateContract(value: _886.MsgMigrateContract): {
                    typeUrl: string;
                    value: _886.MsgMigrateContract;
                };
                updateAdmin(value: _886.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _886.MsgUpdateAdmin;
                };
                clearAdmin(value: _886.MsgClearAdmin): {
                    typeUrl: string;
                    value: _886.MsgClearAdmin;
                };
            };
            QueryContractInfoRequest: {
                encode(message: _884.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractInfoRequest;
                fromJSON(object: any): _884.QueryContractInfoRequest;
                toJSON(message: _884.QueryContractInfoRequest): unknown;
                fromPartial<I_20 extends {
                    address?: string;
                } & {
                    address?: string;
                } & Record<Exclude<keyof I_20, "address">, never>>(object: I_20): _884.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _884.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractInfoResponse;
                fromJSON(object: any): _884.QueryContractInfoResponse;
                toJSON(message: _884.QueryContractInfoResponse): unknown;
                fromPartial<I_21 extends {
                    address?: string;
                    contractInfo?: {
                        codeId?: string;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string;
                            txIndex?: string;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                } & {
                    address?: string;
                    contractInfo?: {
                        codeId?: string;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string;
                            txIndex?: string;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        codeId?: string;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string;
                            txIndex?: string;
                        } & {
                            blockHeight?: string;
                            txIndex?: string;
                        } & Record<Exclude<keyof I_21["contractInfo"]["created"], keyof _894.AbsoluteTxPosition>, never>;
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_21["contractInfo"]["extension"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_21["contractInfo"], keyof _894.ContractInfo>, never>;
                } & Record<Exclude<keyof I_21, keyof _884.QueryContractInfoResponse>, never>>(object: I_21): _884.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _884.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractHistoryRequest;
                fromJSON(object: any): _884.QueryContractHistoryRequest;
                toJSON(message: _884.QueryContractHistoryRequest): unknown;
                fromPartial<I_22 extends {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                } & {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    } & {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    } & Record<Exclude<keyof I_22["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_22, keyof _884.QueryContractHistoryRequest>, never>>(object: I_22): _884.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _884.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractHistoryResponse;
                fromJSON(object: any): _884.QueryContractHistoryResponse;
                toJSON(message: _884.QueryContractHistoryResponse): unknown;
                fromPartial<I_23 extends {
                    entries?: {
                        operation?: _894.ContractCodeHistoryOperationType;
                        codeId?: string;
                        updated?: {
                            blockHeight?: string;
                            txIndex?: string;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string;
                    };
                } & {
                    entries?: {
                        operation?: _894.ContractCodeHistoryOperationType;
                        codeId?: string;
                        updated?: {
                            blockHeight?: string;
                            txIndex?: string;
                        };
                        msg?: Uint8Array;
                    }[] & ({
                        operation?: _894.ContractCodeHistoryOperationType;
                        codeId?: string;
                        updated?: {
                            blockHeight?: string;
                            txIndex?: string;
                        };
                        msg?: Uint8Array;
                    } & {
                        operation?: _894.ContractCodeHistoryOperationType;
                        codeId?: string;
                        updated?: {
                            blockHeight?: string;
                            txIndex?: string;
                        } & {
                            blockHeight?: string;
                            txIndex?: string;
                        } & Record<Exclude<keyof I_23["entries"][number]["updated"], keyof _894.AbsoluteTxPosition>, never>;
                        msg?: Uint8Array;
                    } & Record<Exclude<keyof I_23["entries"][number], keyof _894.ContractCodeHistoryEntry>, never>)[] & Record<Exclude<keyof I_23["entries"], keyof {
                        operation?: _894.ContractCodeHistoryOperationType;
                        codeId?: string;
                        updated?: {
                            blockHeight?: string;
                            txIndex?: string;
                        };
                        msg?: Uint8Array;
                    }[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string;
                    } & {
                        nextKey?: Uint8Array;
                        total?: string;
                    } & Record<Exclude<keyof I_23["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_23, keyof _884.QueryContractHistoryResponse>, never>>(object: I_23): _884.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _884.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractsByCodeRequest;
                fromJSON(object: any): _884.QueryContractsByCodeRequest;
                toJSON(message: _884.QueryContractsByCodeRequest): unknown;
                fromPartial<I_24 extends {
                    codeId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                } & {
                    codeId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    } & {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    } & Record<Exclude<keyof I_24["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_24, keyof _884.QueryContractsByCodeRequest>, never>>(object: I_24): _884.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _884.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractsByCodeResponse;
                fromJSON(object: any): _884.QueryContractsByCodeResponse;
                toJSON(message: _884.QueryContractsByCodeResponse): unknown;
                fromPartial<I_25 extends {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string;
                    };
                } & {
                    contracts?: string[] & string[] & Record<Exclude<keyof I_25["contracts"], keyof string[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string;
                    } & {
                        nextKey?: Uint8Array;
                        total?: string;
                    } & Record<Exclude<keyof I_25["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_25, keyof _884.QueryContractsByCodeResponse>, never>>(object: I_25): _884.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _884.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryAllContractStateRequest;
                fromJSON(object: any): _884.QueryAllContractStateRequest;
                toJSON(message: _884.QueryAllContractStateRequest): unknown;
                fromPartial<I_26 extends {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                } & {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    } & {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    } & Record<Exclude<keyof I_26["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_26, keyof _884.QueryAllContractStateRequest>, never>>(object: I_26): _884.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _884.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryAllContractStateResponse;
                fromJSON(object: any): _884.QueryAllContractStateResponse;
                toJSON(message: _884.QueryAllContractStateResponse): unknown;
                fromPartial<I_27 extends {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string;
                    };
                } & {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_27["models"][number], keyof _894.Model>, never>)[] & Record<Exclude<keyof I_27["models"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string;
                    } & {
                        nextKey?: Uint8Array;
                        total?: string;
                    } & Record<Exclude<keyof I_27["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_27, keyof _884.QueryAllContractStateResponse>, never>>(object: I_27): _884.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _884.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryRawContractStateRequest;
                fromJSON(object: any): _884.QueryRawContractStateRequest;
                toJSON(message: _884.QueryRawContractStateRequest): unknown;
                fromPartial<I_28 extends {
                    address?: string;
                    queryData?: Uint8Array;
                } & {
                    address?: string;
                    queryData?: Uint8Array;
                } & Record<Exclude<keyof I_28, keyof _884.QueryRawContractStateRequest>, never>>(object: I_28): _884.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _884.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryRawContractStateResponse;
                fromJSON(object: any): _884.QueryRawContractStateResponse;
                toJSON(message: _884.QueryRawContractStateResponse): unknown;
                fromPartial<I_29 extends {
                    data?: Uint8Array;
                } & {
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_29, "data">, never>>(object: I_29): _884.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _884.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QuerySmartContractStateRequest;
                fromJSON(object: any): _884.QuerySmartContractStateRequest;
                toJSON(message: _884.QuerySmartContractStateRequest): unknown;
                fromPartial<I_30 extends {
                    address?: string;
                    queryData?: Uint8Array;
                } & {
                    address?: string;
                    queryData?: Uint8Array;
                } & Record<Exclude<keyof I_30, keyof _884.QuerySmartContractStateRequest>, never>>(object: I_30): _884.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _884.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QuerySmartContractStateResponse;
                fromJSON(object: any): _884.QuerySmartContractStateResponse;
                toJSON(message: _884.QuerySmartContractStateResponse): unknown;
                fromPartial<I_31 extends {
                    data?: Uint8Array;
                } & {
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_31, "data">, never>>(object: I_31): _884.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _884.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryCodeRequest;
                fromJSON(object: any): _884.QueryCodeRequest;
                toJSON(message: _884.QueryCodeRequest): unknown;
                fromPartial<I_32 extends {
                    codeId?: string;
                } & {
                    codeId?: string;
                } & Record<Exclude<keyof I_32, "codeId">, never>>(object: I_32): _884.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _884.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.CodeInfoResponse;
                fromJSON(object: any): _884.CodeInfoResponse;
                toJSON(message: _884.CodeInfoResponse): unknown;
                fromPartial<I_33 extends {
                    codeId?: string;
                    creator?: string;
                    dataHash?: Uint8Array;
                } & {
                    codeId?: string;
                    creator?: string;
                    dataHash?: Uint8Array;
                } & Record<Exclude<keyof I_33, keyof _884.CodeInfoResponse>, never>>(object: I_33): _884.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _884.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryCodeResponse;
                fromJSON(object: any): _884.QueryCodeResponse;
                toJSON(message: _884.QueryCodeResponse): unknown;
                fromPartial<I_34 extends {
                    codeInfo?: {
                        codeId?: string;
                        creator?: string;
                        dataHash?: Uint8Array;
                    };
                    data?: Uint8Array;
                } & {
                    codeInfo?: {
                        codeId?: string;
                        creator?: string;
                        dataHash?: Uint8Array;
                    } & {
                        codeId?: string;
                        creator?: string;
                        dataHash?: Uint8Array;
                    } & Record<Exclude<keyof I_34["codeInfo"], keyof _884.CodeInfoResponse>, never>;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_34, keyof _884.QueryCodeResponse>, never>>(object: I_34): _884.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _884.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryCodesRequest;
                fromJSON(object: any): _884.QueryCodesRequest;
                toJSON(message: _884.QueryCodesRequest): unknown;
                fromPartial<I_35 extends {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                } & {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    } & {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    } & Record<Exclude<keyof I_35["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_35, "pagination">, never>>(object: I_35): _884.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _884.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryCodesResponse;
                fromJSON(object: any): _884.QueryCodesResponse;
                toJSON(message: _884.QueryCodesResponse): unknown;
                fromPartial<I_36 extends {
                    codeInfos?: {
                        codeId?: string;
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string;
                    };
                } & {
                    codeInfos?: {
                        codeId?: string;
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[] & ({
                        codeId?: string;
                        creator?: string;
                        dataHash?: Uint8Array;
                    } & {
                        codeId?: string;
                        creator?: string;
                        dataHash?: Uint8Array;
                    } & Record<Exclude<keyof I_36["codeInfos"][number], keyof _884.CodeInfoResponse>, never>)[] & Record<Exclude<keyof I_36["codeInfos"], keyof {
                        codeId?: string;
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string;
                    } & {
                        nextKey?: Uint8Array;
                        total?: string;
                    } & Record<Exclude<keyof I_36["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_36, keyof _884.QueryCodesResponse>, never>>(object: I_36): _884.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _884.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryPinnedCodesRequest;
                fromJSON(object: any): _884.QueryPinnedCodesRequest;
                toJSON(message: _884.QueryPinnedCodesRequest): unknown;
                fromPartial<I_37 extends {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                } & {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    } & {
                        key?: Uint8Array;
                        offset?: string;
                        limit?: string;
                        countTotal?: boolean;
                        reverse?: boolean;
                    } & Record<Exclude<keyof I_37["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_37, "pagination">, never>>(object: I_37): _884.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _884.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryPinnedCodesResponse;
                fromJSON(object: any): _884.QueryPinnedCodesResponse;
                toJSON(message: _884.QueryPinnedCodesResponse): unknown;
                fromPartial<I_38 extends {
                    codeIds?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string;
                    };
                } & {
                    codeIds?: string[] & string[] & Record<Exclude<keyof I_38["codeIds"], keyof string[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string;
                    } & {
                        nextKey?: Uint8Array;
                        total?: string;
                    } & Record<Exclude<keyof I_38["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_38, keyof _884.QueryPinnedCodesResponse>, never>>(object: I_38): _884.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _882.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.StoreCodeProposal;
                fromJSON(object: any): _882.StoreCodeProposal;
                toJSON(message: _882.StoreCodeProposal): unknown;
                fromPartial<I_39 extends {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _894.AccessType;
                        address?: string;
                    };
                } & {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _894.AccessType;
                        address?: string;
                    } & {
                        permission?: _894.AccessType;
                        address?: string;
                    } & Record<Exclude<keyof I_39["instantiatePermission"], keyof _894.AccessConfig>, never>;
                } & Record<Exclude<keyof I_39, keyof _882.StoreCodeProposal>, never>>(object: I_39): _882.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _882.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.InstantiateContractProposal;
                fromJSON(object: any): _882.InstantiateContractProposal;
                toJSON(message: _882.InstantiateContractProposal): unknown;
                fromPartial<I_40 extends {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: string;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: string;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_40["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_40["funds"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_40, keyof _882.InstantiateContractProposal>, never>>(object: I_40): _882.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _882.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.MigrateContractProposal;
                fromJSON(object: any): _882.MigrateContractProposal;
                toJSON(message: _882.MigrateContractProposal): unknown;
                fromPartial<I_41 extends {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: string;
                    msg?: Uint8Array;
                } & {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: string;
                    msg?: Uint8Array;
                } & Record<Exclude<keyof I_41, keyof _882.MigrateContractProposal>, never>>(object: I_41): _882.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _882.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.SudoContractProposal;
                fromJSON(object: any): _882.SudoContractProposal;
                toJSON(message: _882.SudoContractProposal): unknown;
                fromPartial<I_42 extends {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                } & {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                } & Record<Exclude<keyof I_42, keyof _882.SudoContractProposal>, never>>(object: I_42): _882.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _882.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.ExecuteContractProposal;
                fromJSON(object: any): _882.ExecuteContractProposal;
                toJSON(message: _882.ExecuteContractProposal): unknown;
                fromPartial<I_43 extends {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_43["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_43["funds"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_43, keyof _882.ExecuteContractProposal>, never>>(object: I_43): _882.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _882.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.UpdateAdminProposal;
                fromJSON(object: any): _882.UpdateAdminProposal;
                toJSON(message: _882.UpdateAdminProposal): unknown;
                fromPartial<I_44 extends {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                } & {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                } & Record<Exclude<keyof I_44, keyof _882.UpdateAdminProposal>, never>>(object: I_44): _882.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _882.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.ClearAdminProposal;
                fromJSON(object: any): _882.ClearAdminProposal;
                toJSON(message: _882.ClearAdminProposal): unknown;
                fromPartial<I_45 extends {
                    title?: string;
                    description?: string;
                    contract?: string;
                } & {
                    title?: string;
                    description?: string;
                    contract?: string;
                } & Record<Exclude<keyof I_45, keyof _882.ClearAdminProposal>, never>>(object: I_45): _882.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _882.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.PinCodesProposal;
                fromJSON(object: any): _882.PinCodesProposal;
                toJSON(message: _882.PinCodesProposal): unknown;
                fromPartial<I_46 extends {
                    title?: string;
                    description?: string;
                    codeIds?: string[];
                } & {
                    title?: string;
                    description?: string;
                    codeIds?: string[] & string[] & Record<Exclude<keyof I_46["codeIds"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_46, keyof _882.PinCodesProposal>, never>>(object: I_46): _882.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _882.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.UnpinCodesProposal;
                fromJSON(object: any): _882.UnpinCodesProposal;
                toJSON(message: _882.UnpinCodesProposal): unknown;
                fromPartial<I_47 extends {
                    title?: string;
                    description?: string;
                    codeIds?: string[];
                } & {
                    title?: string;
                    description?: string;
                    codeIds?: string[] & string[] & Record<Exclude<keyof I_47["codeIds"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_47, keyof _882.UnpinCodesProposal>, never>>(object: I_47): _882.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _880.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.MsgIBCSend;
                fromJSON(object: any): _880.MsgIBCSend;
                toJSON(message: _880.MsgIBCSend): unknown;
                fromPartial<I_48 extends {
                    channel?: string;
                    timeoutHeight?: string;
                    timeoutTimestamp?: string;
                    data?: Uint8Array;
                } & {
                    channel?: string;
                    timeoutHeight?: string;
                    timeoutTimestamp?: string;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_48, keyof _880.MsgIBCSend>, never>>(object: I_48): _880.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _880.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.MsgIBCCloseChannel;
                fromJSON(object: any): _880.MsgIBCCloseChannel;
                toJSON(message: _880.MsgIBCCloseChannel): unknown;
                fromPartial<I_49 extends {
                    channel?: string;
                } & {
                    channel?: string;
                } & Record<Exclude<keyof I_49, "channel">, never>>(object: I_49): _880.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _878.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.GenesisState;
                fromJSON(object: any): _878.GenesisState;
                toJSON(message: _878.GenesisState): unknown;
                fromPartial<I_50 extends {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _894.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _894.AccessType;
                        maxWasmCodeSize?: string;
                    };
                    codes?: {
                        codeId?: string;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _894.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: string;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: string;
                                txIndex?: string;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: string;
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _894.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: string;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                } & {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _894.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _894.AccessType;
                        maxWasmCodeSize?: string;
                    } & {
                        codeUploadAccess?: {
                            permission?: _894.AccessType;
                            address?: string;
                        } & {
                            permission?: _894.AccessType;
                            address?: string;
                        } & Record<Exclude<keyof I_50["params"]["codeUploadAccess"], keyof _894.AccessConfig>, never>;
                        instantiateDefaultPermission?: _894.AccessType;
                        maxWasmCodeSize?: string;
                    } & Record<Exclude<keyof I_50["params"], keyof _894.Params>, never>;
                    codes?: {
                        codeId?: string;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _894.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[] & ({
                        codeId?: string;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _894.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    } & {
                        codeId?: string;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _894.AccessType;
                                address?: string;
                            };
                        } & {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _894.AccessType;
                                address?: string;
                            } & {
                                permission?: _894.AccessType;
                                address?: string;
                            } & Record<Exclude<keyof I_50["codes"][number]["codeInfo"]["instantiateConfig"], keyof _894.AccessConfig>, never>;
                        } & Record<Exclude<keyof I_50["codes"][number]["codeInfo"], keyof _894.CodeInfo>, never>;
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    } & Record<Exclude<keyof I_50["codes"][number], keyof _878.Code>, never>)[] & Record<Exclude<keyof I_50["codes"], keyof {
                        codeId?: string;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _894.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[]>, never>;
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: string;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: string;
                                txIndex?: string;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[] & ({
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: string;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: string;
                                txIndex?: string;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    } & {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: string;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: string;
                                txIndex?: string;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            codeId?: string;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: string;
                                txIndex?: string;
                            } & {
                                blockHeight?: string;
                                txIndex?: string;
                            } & Record<Exclude<keyof I_50["contracts"][number]["contractInfo"]["created"], keyof _894.AbsoluteTxPosition>, never>;
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_50["contracts"][number]["contractInfo"]["extension"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_50["contracts"][number]["contractInfo"], keyof _894.ContractInfo>, never>;
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_50["contracts"][number]["contractState"][number], keyof _894.Model>, never>)[] & Record<Exclude<keyof I_50["contracts"][number]["contractState"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_50["contracts"][number], keyof _878.Contract>, never>)[] & Record<Exclude<keyof I_50["contracts"], keyof {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: string;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: string;
                                txIndex?: string;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[]>, never>;
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: string;
                    }[] & ({
                        idKey?: Uint8Array;
                        value?: string;
                    } & {
                        idKey?: Uint8Array;
                        value?: string;
                    } & Record<Exclude<keyof I_50["sequences"][number], keyof _878.Sequence>, never>)[] & Record<Exclude<keyof I_50["sequences"], keyof {
                        idKey?: Uint8Array;
                        value?: string;
                    }[]>, never>;
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _894.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: string;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[] & ({
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _894.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: string;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    } & {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _894.AccessType;
                                address?: string;
                            };
                        } & {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _894.AccessType;
                                address?: string;
                            } & {
                                permission?: _894.AccessType;
                                address?: string;
                            } & Record<Exclude<keyof I_50["genMsgs"][number]["storeCode"]["instantiatePermission"], keyof _894.AccessConfig>, never>;
                        } & Record<Exclude<keyof I_50["genMsgs"][number]["storeCode"], keyof _886.MsgStoreCode>, never>;
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: string;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } & {
                            sender?: string;
                            admin?: string;
                            codeId?: string;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[] & ({
                                denom?: string;
                                amount?: string;
                            } & {
                                denom?: string;
                                amount?: string;
                            } & Record<Exclude<keyof I_50["genMsgs"][number]["instantiateContract"]["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_50["genMsgs"][number]["instantiateContract"]["funds"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_50["genMsgs"][number]["instantiateContract"], keyof _886.MsgInstantiateContract>, never>;
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } & {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[] & ({
                                denom?: string;
                                amount?: string;
                            } & {
                                denom?: string;
                                amount?: string;
                            } & Record<Exclude<keyof I_50["genMsgs"][number]["executeContract"]["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_50["genMsgs"][number]["executeContract"]["funds"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_50["genMsgs"][number]["executeContract"], keyof _886.MsgExecuteContract>, never>;
                    } & Record<Exclude<keyof I_50["genMsgs"][number], keyof _878.GenesisState_GenMsgs>, never>)[] & Record<Exclude<keyof I_50["genMsgs"], keyof {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _894.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: string;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[]>, never>;
                } & Record<Exclude<keyof I_50, keyof _878.GenesisState>, never>>(object: I_50): _878.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _878.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.GenesisState_GenMsgs;
                fromJSON(object: any): _878.GenesisState_GenMsgs;
                toJSON(message: _878.GenesisState_GenMsgs): unknown;
                fromPartial<I_51 extends {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _894.AccessType;
                            address?: string;
                        };
                    };
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: string;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                } & {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _894.AccessType;
                            address?: string;
                        };
                    } & {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _894.AccessType;
                            address?: string;
                        } & {
                            permission?: _894.AccessType;
                            address?: string;
                        } & Record<Exclude<keyof I_51["storeCode"]["instantiatePermission"], keyof _894.AccessConfig>, never>;
                    } & Record<Exclude<keyof I_51["storeCode"], keyof _886.MsgStoreCode>, never>;
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: string;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } & {
                        sender?: string;
                        admin?: string;
                        codeId?: string;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_51["instantiateContract"]["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_51["instantiateContract"]["funds"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_51["instantiateContract"], keyof _886.MsgInstantiateContract>, never>;
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } & {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_51["executeContract"]["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_51["executeContract"]["funds"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_51["executeContract"], keyof _886.MsgExecuteContract>, never>;
                } & Record<Exclude<keyof I_51, keyof _878.GenesisState_GenMsgs>, never>>(object: I_51): _878.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _878.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.Code;
                fromJSON(object: any): _878.Code;
                toJSON(message: _878.Code): unknown;
                fromPartial<I_52 extends {
                    codeId?: string;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _894.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                } & {
                    codeId?: string;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _894.AccessType;
                            address?: string;
                        };
                    } & {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _894.AccessType;
                            address?: string;
                        } & {
                            permission?: _894.AccessType;
                            address?: string;
                        } & Record<Exclude<keyof I_52["codeInfo"]["instantiateConfig"], keyof _894.AccessConfig>, never>;
                    } & Record<Exclude<keyof I_52["codeInfo"], keyof _894.CodeInfo>, never>;
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                } & Record<Exclude<keyof I_52, keyof _878.Code>, never>>(object: I_52): _878.Code;
            };
            Contract: {
                encode(message: _878.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.Contract;
                fromJSON(object: any): _878.Contract;
                toJSON(message: _878.Contract): unknown;
                fromPartial<I_53 extends {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: string;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string;
                            txIndex?: string;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                } & {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: string;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string;
                            txIndex?: string;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        codeId?: string;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string;
                            txIndex?: string;
                        } & {
                            blockHeight?: string;
                            txIndex?: string;
                        } & Record<Exclude<keyof I_53["contractInfo"]["created"], keyof _894.AbsoluteTxPosition>, never>;
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_53["contractInfo"]["extension"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_53["contractInfo"], keyof _894.ContractInfo>, never>;
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_53["contractState"][number], keyof _894.Model>, never>)[] & Record<Exclude<keyof I_53["contractState"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_53, keyof _878.Contract>, never>>(object: I_53): _878.Contract;
            };
            Sequence: {
                encode(message: _878.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.Sequence;
                fromJSON(object: any): _878.Sequence;
                toJSON(message: _878.Sequence): unknown;
                fromPartial<I_54 extends {
                    idKey?: Uint8Array;
                    value?: string;
                } & {
                    idKey?: Uint8Array;
                    value?: string;
                } & Record<Exclude<keyof I_54, keyof _878.Sequence>, never>>(object: I_54): _878.Sequence;
            };
        };
    }
}