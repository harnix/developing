import { Credential } from "../credential/Credential";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  credentials?: Array<Credential>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
