import BookSingle from "./BookSingle";

function BookList() {
  return (
    <div className="flex gap-2 flex-wrap container mx-auto mb-10">
      <BookSingle />
      <BookSingle />
      <BookSingle />
      <BookSingle />
      <BookSingle />
      <BookSingle />
      <BookSingle />
    </div>
  );
}

export default BookList;
