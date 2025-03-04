import { Router } from "express";
import { UserService } from "./user.service";

const router = Router();
const userService = new UserService();

router.post("/", async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;
    const newUser = await userService.createUser(name, lastname, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
});

export default router;