import { DeploymentID } from "./deployment";
import { GroupSpec } from "./groupspec";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { GroupID } from "./groupid";
import { AminoMsg } from "@cosmjs-rn/amino";
import { Long } from "@osmonauts/helpers";
import { PlacementRequirements, SignedBy, Attribute } from "../../base/v1beta2/attribute";
import { Resource } from "./resource";
import { ResourceUnits } from "../../base/v1beta2/resourceunits";
import { CPU, Memory, Storage } from "../../base/v1beta2/resource";
import { ResourceValue } from "../../base/v1beta2/resourcevalue";
import { Endpoint, endpoint_KindFromJSON } from "../../base/v1beta2/endpoint";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
export interface AminoMsgCreateDeployment extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-create-deployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
    groups: {
      name: string;
      requirements: {
        signed_by: {
          all_of: string[];
          any_of: string[];
        };
        attributes: {
          key: string;
          value: string;
        }[];
      };
      resources: {
        resources: {
          cpu: {
            units: {
              val: Uint8Array;
            };
            attributes: {
              key: string;
              value: string;
            }[];
          };
          memory: {
            quantity: {
              val: Uint8Array;
            };
            attributes: {
              key: string;
              value: string;
            }[];
          };
          storage: {
            name: string;
            quantity: {
              val: Uint8Array;
            };
            attributes: {
              key: string;
              value: string;
            }[];
          }[];
          endpoints: {
            kind: number;
            sequence_number: number;
          }[];
        };
        count: number;
        price: {
          denom: string;
          amount: string;
        };
      }[];
    }[];
    version: Uint8Array;
    deposit: {
      denom: string;
      amount: string;
    };
    depositor: string;
  };
}
export interface AminoMsgDepositDeployment extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-deposit-deployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
    amount: {
      denom: string;
      amount: string;
    };
    depositor: string;
  };
}
export interface AminoMsgUpdateDeployment extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-update-deployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
    version: Uint8Array;
  };
}
export interface AminoMsgCloseDeployment extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-close-deployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
  };
}
export interface AminoMsgCloseGroup extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-close-group";
  value: {
    id: {
      owner: string;
      dseq: string;
      gseq: number;
    };
  };
}
export interface AminoMsgPauseGroup extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-pause-group";
  value: {
    id: {
      owner: string;
      dseq: string;
      gseq: number;
    };
  };
}
export interface AminoMsgStartGroup extends AminoMsg {
  type: "akash/deployment/v1beta2/testonly-start-group";
  value: {
    id: {
      owner: string;
      dseq: string;
      gseq: number;
    };
  };
}
export const AminoConverter = {
  "/akash.deployment.v1beta2.MsgCreateDeployment": {
    aminoType: "akash/deployment/v1beta2/testonly-create-deployment",
    toAmino: ({
      id,
      groups,
      version,
      deposit,
      depositor
    }: MsgCreateDeployment): AminoMsgCreateDeployment["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        },
        groups: groups.map(el0 => ({
          name: el0.name,
          requirements: {
            signed_by: {
              all_of: el0.requirements.signedBy.allOf,
              any_of: el0.requirements.signedBy.anyOf
            },
            attributes: el0.requirements.attributes.map(el1 => ({
              key: el1.key,
              value: el1.value
            }))
          },
          resources: el0.resources.map(el1 => ({
            resources: {
              cpu: {
                units: {
                  val: el1.resources.cpu.units.val
                },
                attributes: el1.resources.cpu.attributes.map(el2 => ({
                  key: el2.key,
                  value: el2.value
                }))
              },
              memory: {
                quantity: {
                  val: el1.resources.memory.quantity.val
                },
                attributes: el1.resources.memory.attributes.map(el2 => ({
                  key: el2.key,
                  value: el2.value
                }))
              },
              storage: el1.resources.storage.map(el2 => ({
                name: el2.name,
                quantity: {
                  val: el2.quantity.val
                },
                attributes: el2.attributes.map(el3 => ({
                  key: el3.key,
                  value: el3.value
                }))
              })),
              endpoints: el1.resources.endpoints.map(el2 => ({
                kind: el2.kind,
                sequence_number: el2.sequenceNumber
              }))
            },
            count: el1.count,
            price: {
              denom: el1.price.denom,
              amount: el1.price.amount
            }
          }))
        })),
        version,
        deposit: {
          denom: deposit.denom,
          amount: Long.fromNumber(deposit.amount).toString()
        },
        depositor
      };
    },
    fromAmino: ({
      id,
      groups,
      version,
      deposit,
      depositor
    }: AminoMsgCreateDeployment["value"]): MsgCreateDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq)
        },
        groups: groups.map(el0 => ({
          name: el0.name,
          requirements: {
            signedBy: {
              allOf: el0.requirements.signed_by.all_of,
              anyOf: el0.requirements.signed_by.any_of
            },
            attributes: el0.requirements.attributes.map(el2 => ({
              key: el2.key,
              value: el2.value
            }))
          },
          resources: el0.resources.map(el1 => ({
            resources: {
              cpu: {
                units: {
                  val: el1.resources.cpu.units.val
                },
                attributes: el1.resources.cpu.attributes.map(el4 => ({
                  key: el4.key,
                  value: el4.value
                }))
              },
              memory: {
                quantity: {
                  val: el1.resources.memory.quantity.val
                },
                attributes: el1.resources.memory.attributes.map(el4 => ({
                  key: el4.key,
                  value: el4.value
                }))
              },
              storage: el1.resources.storage.map(el3 => ({
                name: el3.name,
                quantity: {
                  val: el3.quantity.val
                },
                attributes: el3.attributes.map(el4 => ({
                  key: el4.key,
                  value: el4.value
                }))
              })),
              endpoints: el1.resources.endpoints.map(el3 => ({
                kind: endpoint_KindFromJSON(el3.kind),
                sequenceNumber: el3.sequence_number
              }))
            },
            count: el1.count,
            price: {
              denom: el1.price.denom,
              amount: el1.price.amount
            }
          }))
        })),
        version,
        deposit: {
          denom: deposit.denom,
          amount: deposit.amount
        },
        depositor
      };
    }
  },
  "/akash.deployment.v1beta2.MsgDepositDeployment": {
    aminoType: "akash/deployment/v1beta2/testonly-deposit-deployment",
    toAmino: ({
      id,
      amount,
      depositor
    }: MsgDepositDeployment): AminoMsgDepositDeployment["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        },
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        },
        depositor
      };
    },
    fromAmino: ({
      id,
      amount,
      depositor
    }: AminoMsgDepositDeployment["value"]): MsgDepositDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq)
        },
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        depositor
      };
    }
  },
  "/akash.deployment.v1beta2.MsgUpdateDeployment": {
    aminoType: "akash/deployment/v1beta2/testonly-update-deployment",
    toAmino: ({
      id,
      version
    }: MsgUpdateDeployment): AminoMsgUpdateDeployment["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        },
        version
      };
    },
    fromAmino: ({
      id,
      version
    }: AminoMsgUpdateDeployment["value"]): MsgUpdateDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq)
        },
        version
      };
    }
  },
  "/akash.deployment.v1beta2.MsgCloseDeployment": {
    aminoType: "akash/deployment/v1beta2/testonly-close-deployment",
    toAmino: ({
      id
    }: MsgCloseDeployment): AminoMsgCloseDeployment["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        }
      };
    },
    fromAmino: ({
      id
    }: AminoMsgCloseDeployment["value"]): MsgCloseDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq)
        }
      };
    }
  },
  "/akash.deployment.v1beta2.MsgCloseGroup": {
    aminoType: "akash/deployment/v1beta2/testonly-close-group",
    toAmino: ({
      id
    }: MsgCloseGroup): AminoMsgCloseGroup["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString(),
          gseq: id.gseq
        }
      };
    },
    fromAmino: ({
      id
    }: AminoMsgCloseGroup["value"]): MsgCloseGroup => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq),
          gseq: id.gseq
        }
      };
    }
  },
  "/akash.deployment.v1beta2.MsgPauseGroup": {
    aminoType: "akash/deployment/v1beta2/testonly-pause-group",
    toAmino: ({
      id
    }: MsgPauseGroup): AminoMsgPauseGroup["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString(),
          gseq: id.gseq
        }
      };
    },
    fromAmino: ({
      id
    }: AminoMsgPauseGroup["value"]): MsgPauseGroup => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq),
          gseq: id.gseq
        }
      };
    }
  },
  "/akash.deployment.v1beta2.MsgStartGroup": {
    aminoType: "akash/deployment/v1beta2/testonly-start-group",
    toAmino: ({
      id
    }: MsgStartGroup): AminoMsgStartGroup["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString(),
          gseq: id.gseq
        }
      };
    },
    fromAmino: ({
      id
    }: AminoMsgStartGroup["value"]): MsgStartGroup => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq),
          gseq: id.gseq
        }
      };
    }
  }
};
