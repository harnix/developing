import { CredentialCreateNestedManyWithoutDidsInput } from "./CredentialCreateNestedManyWithoutDidsInput";

export type DidCreateInput = {
  credentials?: CredentialCreateNestedManyWithoutDidsInput;
  document?: string | null;
  identifier?: string | null;
  metadata?: string | null;
};
