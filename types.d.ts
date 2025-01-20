interface Book {
  id: string;
  title: string;
  author: string;
  likes: number;
}

type Action =
  | { type: "add"; payload: { author: string; title: string } }
  | { type: "delete"; payload: { id: string } }
  | { type: "like"; payload: { id: string } }
  | { type: "dislike"; payload: { id: string } }
  | { type: "sort" };
