import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-teal-900 p-4 shadow-sm flex justify-between items-center">
      <img src="logo.svg" alt="Logo" className="h-10" />

      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-teal-900 md:bg-transparent p-4 md:p-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex items-center gap-10`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <Link to="/" className="text-fuchsia-50 hover:text-gray-300">Home</Link>
          <Link to="/CreateTrip" className="text-fuchsia-50 hover:text-gray-300">Create Trip</Link>
          <Link to="/Contact" className="text-fuchsia-50 hover:text-gray-300">Contact</Link>
        </ul>
        <Button className="mt-4 md:mt-0 p-3 text-base bg-sky-500 hover:text-fuchsia-50">
          Sign in
        </Button>
      </nav>
    </header>
  );
}

export default Header;
