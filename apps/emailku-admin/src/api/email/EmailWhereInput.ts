import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmailWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
};
