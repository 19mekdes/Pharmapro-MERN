import { ShoppingCart, Phone, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link
          to="/"
          className="text-4xl font-bold text-primary transition-transform duration-300 hover:scale-105"
        >
          PharmaPro
        </Link>

        <div className="hidden md:flex items-center space-x-10 text-dark font-semibold">
          <Link
            to="/"
            className="transition-colors duration-300 hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="transition-colors duration-300 hover:text-primary"
          >
            About
          </Link>
          <Link
            to="/shop"
            className="transition-colors duration-300 hover:text-primary"
          >
            Shop
          </Link>
          <Link
            to="/blog"
            className="transition-colors duration-300 hover:text-primary"
          >
            Blog
          </Link>
         
          <Link
            to="/contact"
            className="transition-colors duration-300 hover:text-primary"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="p-3 rounded-full transition duration-300 hover:bg-gray-100 hover:scale-110"
          >
            <ShoppingCart />
          </Link>

          <button className="bg-accent text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition duration-300 hover:bg-orange-600 hover:scale-105">
            <Phone size={20} /> Call Pharmacist
          </button>

          <button className="md:hidden transition-transform duration-300 hover:rotate-90">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
}
