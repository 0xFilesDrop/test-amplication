import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmailCreateInput = {
  email?: string | null;
  userId?: UserWhereUniqueInput | null;
};
