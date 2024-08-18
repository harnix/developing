import { DidWhereUniqueInput } from "../did/DidWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CredentialUpdateInput = {
  did?: DidWhereUniqueInput | null;
  expirationDate?: Date | null;
  issueDate?: Date | null;
  status?: string | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
