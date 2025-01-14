import { CrownIcon } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between border-b border-foreground/50 px-4 py-2">
      <CrownIcon />
      <p>P</p>
    </header>
  );
}

export default Header;
