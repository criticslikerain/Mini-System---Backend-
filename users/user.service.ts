import { AppDataSource } from "../_helpers/db";
import { User } from "./user.entity";
import bcrypt from "bcrypt";

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  async createUser(name: string, lastname: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({ name, lastname, email, password: hashedPassword });
    return this.userRepository.save(newUser);
  }
}