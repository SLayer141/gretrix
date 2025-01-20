"use client";

import { useReducer } from "react";
import BookAdd from "@/components/BookAdd";
import BookList from "@/components/BookList";
import Hero from "@/components/Hero";
import { booksReducer } from "@/lib/booksReducer";
import { dummyBooks } from "@/lib/dummy-books";

function Home() {
  const [books, dispatch] = useReducer(booksReducer, dummyBooks);

  return (
    <div>
      <Hero />
      <BookAdd dispatch={dispatch} />
      <BookList books={books} dispatch={dispatch} />
    </div>
  );
}

export default Home;
