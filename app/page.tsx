"use client";

import BookAdd from "@/components/BookAdd";
import BookList from "@/components/BookList";
import Hero from "@/components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <BookAdd />
      <BookList />
    </div>
  );
}

export default Home;
