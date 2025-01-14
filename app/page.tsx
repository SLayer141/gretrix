import BookAdd from "@/components/BookAdd";
import BookList from "@/components/BookList";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <BookAdd />
      <BookList />
    </div>
  );
}

export default Home;
