import { SigningStargateClient } from '@cosmjs-rn/stargate';
export declare const signAndBroadcast: ({ client, chainId, address, msgs, fee, memo }: {
    client: SigningStargateClient;
    chainId: string;
    address: string;
    msgs: any[];
    fee: any;
    memo: string;
}) => Promise<import("@cosmjs-rn/stargate").DeliverTxResponse>;
