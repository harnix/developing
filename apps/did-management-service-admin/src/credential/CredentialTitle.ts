import { Credential as TCredential } from "../api/credential/Credential";

export const CREDENTIAL_TITLE_FIELD = "status";

export const CredentialTitle = (record: TCredential): string => {
  return record.status?.toString() || String(record.id);
};
