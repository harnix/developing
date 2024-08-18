import { CredentialUpdateManyWithoutDidsInput } from "./CredentialUpdateManyWithoutDidsInput";

export type DidUpdateInput = {
  credentials?: CredentialUpdateManyWithoutDidsInput;
  document?: string | null;
  identifier?: string | null;
  metadata?: string | null;
};
