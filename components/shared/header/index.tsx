import Link from "next/link";

import Navbar from "./navbar";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl">
          EDEN
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
