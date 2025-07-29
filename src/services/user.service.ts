import { UserRepository } from "../repositories/user.repository";

export const UserService = {
  listUsers: async () => {
    return await UserRepository.getAllUsers();
  },
};
