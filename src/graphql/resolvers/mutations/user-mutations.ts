import { registerUser, removeUser } from "@/services/user-service";

export const userMutations = {
  registerUser: (
    _: unknown,
    { input }: { input: { email: string; password: string } }
  ) => registerUser(input),
  removeUser: async (
    _: unknown,
    { email }: { email: string }
  ) => removeUser(email),
};
