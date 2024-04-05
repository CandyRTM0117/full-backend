import { registerUser } from "@/services/user-service";

export const userMutations = {
  registerUser: (
    _: unknown,
    { input }: { input: { name: string; surname: string; email: string; password: string, country: string } }
  ) => registerUser(input),
};