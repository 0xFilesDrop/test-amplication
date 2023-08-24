import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmailUpdateInput = {
  email?: string | null;
  userId?: UserWhereUniqueInput | null;
};
