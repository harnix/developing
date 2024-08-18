import { DidWhereUniqueInput } from "./DidWhereUniqueInput";
import { DidUpdateInput } from "./DidUpdateInput";

export type UpdateDidArgs = {
  where: DidWhereUniqueInput;
  data: DidUpdateInput;
};
