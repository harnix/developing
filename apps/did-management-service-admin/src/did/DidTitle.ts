import { Did as TDid } from "../api/did/Did";

export const DID_TITLE_FIELD = "identifier";

export const DidTitle = (record: TDid): string => {
  return record.identifier?.toString() || String(record.id);
};
