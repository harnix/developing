import { Did } from "../did/Did";
import { User } from "../user/User";

export type Credential = {
  createdAt: Date;
  did?: Did | null;
  expirationDate: Date | null;
  id: string;
  issueDate: Date | null;
  status: string | null;
  typeField: string | null;
  updatedAt: Date;
  user?: User | null;
};
