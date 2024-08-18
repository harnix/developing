import { SortOrder } from "../../util/SortOrder";

export type CredentialOrderByInput = {
  createdAt?: SortOrder;
  didId?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  issueDate?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
