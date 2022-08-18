import { Attribute } from "../../base/v1beta2/attribute";
import { AminoMsg } from "@cosmjs-rn/amino";
import { ProviderInfo, MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export interface AminoMsgCreateProvider extends AminoMsg {
  type: "akash/provider/v1beta2/testonly-create-provider";
  value: {
    owner: string;
    host_uri: string;
    attributes: {
      key: string;
      value: string;
    }[];
    info: {
      email: string;
      website: string;
    };
  };
}
export interface AminoMsgUpdateProvider extends AminoMsg {
  type: "akash/provider/v1beta2/testonly-update-provider";
  value: {
    owner: string;
    host_uri: string;
    attributes: {
      key: string;
      value: string;
    }[];
    info: {
      email: string;
      website: string;
    };
  };
}
export interface AminoMsgDeleteProvider extends AminoMsg {
  type: "akash/provider/v1beta2/testonly-delete-provider";
  value: {
    owner: string;
  };
}
export const AminoConverter = {
  "/akash.provider.v1beta2.MsgCreateProvider": {
    aminoType: "akash/provider/v1beta2/testonly-create-provider",
    toAmino: ({
      owner,
      hostUri,
      attributes,
      info
    }: MsgCreateProvider): AminoMsgCreateProvider["value"] => {
      return {
        owner,
        host_uri: hostUri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    },
    fromAmino: ({
      owner,
      host_uri,
      attributes,
      info
    }: AminoMsgCreateProvider["value"]): MsgCreateProvider => {
      return {
        owner,
        hostUri: host_uri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    }
  },
  "/akash.provider.v1beta2.MsgUpdateProvider": {
    aminoType: "akash/provider/v1beta2/testonly-update-provider",
    toAmino: ({
      owner,
      hostUri,
      attributes,
      info
    }: MsgUpdateProvider): AminoMsgUpdateProvider["value"] => {
      return {
        owner,
        host_uri: hostUri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    },
    fromAmino: ({
      owner,
      host_uri,
      attributes,
      info
    }: AminoMsgUpdateProvider["value"]): MsgUpdateProvider => {
      return {
        owner,
        hostUri: host_uri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    }
  },
  "/akash.provider.v1beta2.MsgDeleteProvider": {
    aminoType: "akash/provider/v1beta2/testonly-delete-provider",
    toAmino: ({
      owner
    }: MsgDeleteProvider): AminoMsgDeleteProvider["value"] => {
      return {
        owner
      };
    },
    fromAmino: ({
      owner
    }: AminoMsgDeleteProvider["value"]): MsgDeleteProvider => {
      return {
        owner
      };
    }
  }
};
