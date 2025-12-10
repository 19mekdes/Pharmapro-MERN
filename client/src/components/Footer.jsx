import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">PharmaPro</h2>
          <p className="text-gray-200">
            Your trusted online pharmacy for health, wellness, and professional
            care.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-yellow-300 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-yellow-300 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2">
            <Phone size={18} /> +251 980536095
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail size={18} /> support@pharmapro.com
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Twitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className=" border-gray-400 mt-8 pt-4 text-center text-gray-200">
        © {new Date().getFullYear()} PharmaPro. All rights reserved.
      </div>
    </footer>
  );
}
