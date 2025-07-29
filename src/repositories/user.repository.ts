import prisma from "../infrastructure/prisma";

export const UserRepository = {
  getAllUsers: () => prisma.user.findMany(),
};
