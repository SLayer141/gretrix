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

function BookSingle() {
  return (
    <Card className="w-60">
      <CardHeader>
        <CardTitle>F. Scott Fitzgerald</CardTitle>
        <CardDescription>Appreciation: 4</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl">The Great Gatsby</p>
      </CardContent>
      <CardFooter className="flex gap-1">
        <Button variant="outline">
          <ThumbsUpIcon />
        </Button>
        <Button variant="outline">
          <ThumbsDownIcon />
        </Button>
        <Button variant="destructive">
          <BadgeMinus />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BookSingle;
