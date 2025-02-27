import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

import { layoutContainer, navItems } from "../../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* 🔹 Top Header */}
      <div className=" bg-gray-900 text-white text-sm py-2 flex justify-between items-center">
        <div className={`${layoutContainer}`}>
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row items-end gap-2 py-2">
              <a href="mailto:info@example.com" className="flex items-center gap-1 text-sm">
                <MdEmail fontSize={16} color="#ff7900" /> info@example.com
              </a>
              <a href="tel:+919939967984" className=" hidden sm:flex md:flex items-center gap-1 text-sm">
                <FaPhoneAlt fontSize={14} color="#ff7900" /> +91 99399 67984
              </a>
            </div>
            <div className="py-2 flex flex-row gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-1 bg-white rounded-full text-[#ff7900]">
                <IoLogoYoutube fontSize={14} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-1 bg-white rounded-full text-[#ff7900]">
                <FaFacebookF fontSize={14} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-1 bg-white rounded-full text-[#ff7900]">
                <RiInstagramFill fontSize={14} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 p-1 bg-white rounded-full text-[#ff7900]">
                <FaXTwitter fontSize={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className=" bg-white shadow-md py-3">
        <div className={`${layoutContainer} flex justify-between items-center`}>
          {/* 🔹 Logo */}
          <div className="text-2xl font-bold text-[#ff7900]">MyLogo</div>

          {/* 🔹 Navigation (Desktop) */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `p-1 text-sm font-medium px-3 transition-all rounded-sm ${isActive
                    ? "bg-[#ff7900] text-white"
                    : "bg-transparent text-[#182036] hover:bg-[#ff7900] hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* 🔹 Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-3">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `py-3 text-sm font-semibold px-5 transition-all block text-right ${isActive
                  ? "bg-[#ff7900] text-white"
                  : "bg-transparent text-[#182036] hover:bg-[#ff7900] hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
