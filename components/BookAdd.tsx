import { Dispatch, FormEvent, useState } from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface BookAddProps {
  dispatch: Dispatch<Action>;
}

function BookAdd({ dispatch }: BookAddProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({ type: "add", payload: { author, title } });

    // Empty the fields
    setAuthor("");
    setTitle("");
  };

  return (
    <form
      className="max-w-96 flex flex-col gap-1 mx-auto px-2 my-10"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Book title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <Input
        placeholder="Author name"
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        required
      />
      <div className="flex gap-1">
        <Button
          type="button"
          variant="secondary"
          onClick={() => dispatch({ type: "sort" })}
        >
          Sort
        </Button>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}

export default BookAdd;
