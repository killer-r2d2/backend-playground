import { Request, Response } from "express";
import * as userService from "../services/user.service";

export async function createUser(req: Request, res: Response) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "email is required" });
    }

    const user = await userService.createUser(email);
    res.status(201).json(user);
  } catch (error) {
    console.error("Create user failed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    console.error("Get users failed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
