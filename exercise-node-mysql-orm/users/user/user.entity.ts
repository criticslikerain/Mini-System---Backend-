import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  book_id: number;

  @Column({ type: "varchar", length: 255 })
  book_name: string;

  @Column({ type: "varchar", length: 255 })
  book_author: string;

  @Column({ type: "varchar", length: 255 })
  book_category: string;
}