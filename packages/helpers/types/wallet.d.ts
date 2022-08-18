import { Secp256k1HdWallet } from '@cosmjs-rn/amino';
import { DirectSecp256k1HdWallet } from '@cosmjs-rn/proto-signing';
import { Slip10RawIndex } from '@cosmjs-rn/crypto';
export declare function makeHdPath(coinType?: number, account?: number): Slip10RawIndex[];
interface GetWalletProps {
    mnemonic: string;
    chain: {
        bech32_prefix: string;
        slip44: number;
    };
}
export declare const getOfflineSignerProto: ({ mnemonic, chain }: GetWalletProps) => Promise<DirectSecp256k1HdWallet>;
export declare const getOfflineSignerAmino: ({ mnemonic, chain }: GetWalletProps) => Promise<Secp256k1HdWallet>;
export {};
