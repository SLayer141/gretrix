import { CrownIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

function Header() {
  return (
    <header className="flex justify-between border-b border-foreground/50 px-4 py-2 items-center">
      <CrownIcon />
      <ModeToggle />
    </header>
  );
}

export default Header;
