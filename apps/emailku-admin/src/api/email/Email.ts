import { User } from "../user/User";

export type Email = {
  createdAt: Date;
  email: string | null;
  id: string;
  updatedAt: Date;
  userId?: User | null;
};
