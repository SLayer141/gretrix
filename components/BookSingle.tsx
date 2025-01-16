import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { BadgeMinus, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { Dispatch } from "react";

interface BookSingleProps {
  book: Book;
  dispatch: Dispatch<Action>;
}

function BookSingle({ book, dispatch }: BookSingleProps) {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>{book.author}</CardTitle>
        <CardDescription>Appreciation: {book.likes}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl">{book.title}</p>
      </CardContent>
      <CardFooter className="flex gap-1">
        <Button
          variant="outline"
          onClick={() => dispatch({ type: "like", payload: { id: book.id } })}
          disabled={book.likes === 10}
        >
          <ThumbsUpIcon />
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            dispatch({ type: "dislike", payload: { id: book.id } })
          }
          disabled={book.likes === 0}
        >
          <ThumbsDownIcon />
        </Button>
        <Button
          variant="destructive"
          onClick={() => dispatch({ type: "delete", payload: { id: book.id } })}
        >
          <BadgeMinus />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BookSingle;
