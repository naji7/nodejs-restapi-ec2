import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const getUsers = async (_req: Request, res: Response) => {
  const users = await UserService.listUsers();
  res.status(200).json(users);
};
