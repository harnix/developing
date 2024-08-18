import { DidWhereUniqueInput } from "../did/DidWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CredentialWhereInput = {
  did?: DidWhereUniqueInput;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  issueDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  typeField?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
