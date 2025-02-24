import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPhone, FiMail, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* 🔹 Top Header */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-green-400">
            <FiPhone /> +91 98765 43210
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-400">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="mailto:info@example.com" className="flex items-center gap-1 hover:text-blue-400">
            <FiMail /> info@example.com
          </a>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
        {/* 🔹 Logo */}
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>

        {/* 🔹 Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => navigate("/home")} className="hover:text-blue-600">
            Home
          </button>
          <button onClick={() => navigate("/about-us")} className="hover:text-blue-600">
            About Us
          </button>
          <button onClick={() => navigate("/services")} className="hover:text-blue-600">
            Services
          </button>
          <button onClick={() => navigate("/appointment")} className="hover:text-blue-600">
            Appointment
          </button>
          <button onClick={() => navigate("/gallery")} className="hover:text-blue-600">
            Gallery
          </button>
          <button onClick={() => navigate("/contact-us")} className="hover:text-blue-600">
            Contact Us
          </button>
        </nav>

        {/* 🔹 Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-3 px-4">
          <nav className="flex flex-col space-y-3">
            <button onClick={() => navigate("/home")} className="hover:text-blue-600">
              Home
            </button>
            <button onClick={() => navigate("/about-us")} className="hover:text-blue-600">
              About Us
            </button>
            <button onClick={() => navigate("/services")} className="hover:text-blue-600">
              Services
            </button>
            <button onClick={() => navigate("/appointment")} className="hover:text-blue-600">
              Appointment
            </button>
            <button onClick={() => navigate("/gallery")} className="hover:text-blue-600">
              Gallery
            </button>
            <button onClick={() => navigate("/contact-us")} className="hover:text-blue-600">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
