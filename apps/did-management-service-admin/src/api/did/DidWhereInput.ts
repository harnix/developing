import { CredentialListRelationFilter } from "../credential/CredentialListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DidWhereInput = {
  credentials?: CredentialListRelationFilter;
  document?: StringNullableFilter;
  id?: StringFilter;
  identifier?: StringNullableFilter;
  metadata?: StringNullableFilter;
};
