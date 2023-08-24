import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  emails?: EmailWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
