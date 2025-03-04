import { Router } from "express";
import { BookService } from "./book.service";

const router = Router();
const bookService = new BookService();

router.post("/", async (req, res) => {
  try {
    const { book_name, book_author, book_category } = req.body;
    const newBook = await bookService.addBook(book_name, book_author, book_category);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Error adding book" });
  }
});

export default router;