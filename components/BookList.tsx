import { Dispatch } from "react";
import BookSingle from "./BookSingle";

interface BookListProps {
  books: Book[];
  dispatch: Dispatch<Action>;
}

function BookList({ books, dispatch }: BookListProps) {
  return (
    <div className="flex gap-2 flex-wrap container mx-auto mb-10 justify-center">
      {books.map((book: Book) => (
        <BookSingle key={book.id} book={book} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default BookList;
