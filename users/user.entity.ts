import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_no: number;

  @Column({ type: "varchar", length: 255 })  
  name: string;

  @Column({ type: "varchar", length: 255 })
  lastname: string;

  @Column({ type: "varchar", unique: true, length: 255 })
  email: string;

  @Column({ type: "varchar", length: 255 })
  password: string;
}