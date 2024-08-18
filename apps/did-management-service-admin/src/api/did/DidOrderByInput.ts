import { SortOrder } from "../../util/SortOrder";

export type DidOrderByInput = {
  createdAt?: SortOrder;
  document?: SortOrder;
  id?: SortOrder;
  identifier?: SortOrder;
  metadata?: SortOrder;
  updatedAt?: SortOrder;
};
