import { Credential } from "../credential/Credential";

export type Did = {
  createdAt: Date;
  credentials?: Array<Credential>;
  document: string | null;
  id: string;
  identifier: string | null;
  metadata: string | null;
  updatedAt: Date;
};
