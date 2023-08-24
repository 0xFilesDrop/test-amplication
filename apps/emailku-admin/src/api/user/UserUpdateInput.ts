import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  emails?: EmailWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
