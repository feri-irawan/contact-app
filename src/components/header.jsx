import { BookUser, Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white flex justify-between p-4">
      <div className="flex gap-4">
        <span>
          <BookUser />
        </span>
        <h2 className="font-bold">Contact App</h2>
      </div>
      <button>
        <Sun />
      </button>
    </header>
  );
}
