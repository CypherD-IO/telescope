import { OfflineSigner, GeneratedType, Registry } from "@cosmjs-rn/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs-rn/stargate";
import * as evmosErc20V1TxRegistry from "./erc20/v1/tx.registry";
import * as evmosFeesV1TxRegistry from "./fees/v1/tx.registry";
import * as evmosVestingV1TxRegistry from "./vesting/v1/tx.registry";
import * as evmosErc20V1TxAmino from "./erc20/v1/tx.amino";
import * as evmosFeesV1TxAmino from "./fees/v1/tx.amino";
import * as evmosVestingV1TxAmino from "./vesting/v1/tx.amino";
export const getSigningEvmosClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...evmosErc20V1TxRegistry.registry, ...evmosFeesV1TxRegistry.registry, ...evmosVestingV1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...evmosErc20V1TxAmino.AminoConverter,
    ...evmosFeesV1TxAmino.AminoConverter,
    ...evmosVestingV1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
