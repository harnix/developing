import { DidWhereInput } from "./DidWhereInput";
import { DidOrderByInput } from "./DidOrderByInput";

export type DidFindManyArgs = {
  where?: DidWhereInput;
  orderBy?: Array<DidOrderByInput>;
  skip?: number;
  take?: number;
};
