import { Email } from "../email/Email";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  emails?: Email | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
