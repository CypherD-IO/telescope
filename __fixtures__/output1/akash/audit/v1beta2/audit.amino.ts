import { Attribute } from "../../base/v1beta2/attribute";
import { AminoMsg } from "@cosmjs-rn/amino";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export interface AminoMsgSignProviderAttributes extends AminoMsg {
  type: "mymessage-testonly";
  value: {
    owner: string;
    auditor: string;
    attributes: {
      key: string;
      value: string;
    }[];
  };
}
export interface AminoMsgDeleteProviderAttributes extends AminoMsg {
  type: "akash/audit/v1beta2/testonly-delete-provider-attributes";
  value: {
    owner: string;
    auditor: string;
    keys: string[];
  };
}
export const AminoConverter = {
  "/akash.audit.v1beta2.MsgSignProviderAttributes": {
    aminoType: "mymessage-testonly",
    toAmino: ({
      owner,
      auditor,
      attributes
    }: MsgSignProviderAttributes): AminoMsgSignProviderAttributes["value"] => {
      return {
        owner,
        auditor,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        }))
      };
    },
    fromAmino: ({
      owner,
      auditor,
      attributes
    }: AminoMsgSignProviderAttributes["value"]): MsgSignProviderAttributes => {
      return {
        owner,
        auditor,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        }))
      };
    }
  },
  "/akash.audit.v1beta2.MsgDeleteProviderAttributes": {
    aminoType: "akash/audit/v1beta2/testonly-delete-provider-attributes",
    toAmino: ({
      owner,
      auditor,
      keys
    }: MsgDeleteProviderAttributes): AminoMsgDeleteProviderAttributes["value"] => {
      return {
        owner,
        auditor,
        keys
      };
    },
    fromAmino: ({
      owner,
      auditor,
      keys
    }: AminoMsgDeleteProviderAttributes["value"]): MsgDeleteProviderAttributes => {
      return {
        owner,
        auditor,
        keys
      };
    }
  }
};
