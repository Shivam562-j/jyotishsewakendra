import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { headerNavItems, layoutContainer } from "../../utils/constant";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  // const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(null);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 flex justify-between items-center">
        <div className={`${layoutContainer}`}>
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row items-end gap-2 py-2">
              <a href="mailto:info@example.com" className="flex items-center gap-1 text-sm">
                <MdEmail fontSize={16} color="#ff7900" /> info@example.com
              </a>
              <a href="tel:+919939967984" className="hidden sm:flex md:flex items-center gap-1 text-sm">
                <FaPhoneAlt fontSize={14} color="#ff7900" /> +91 99399 67984
              </a>
            </div>
            <div className="py-2 flex flex-row gap-2">
              <a href="#" className="p-1 bg-white rounded-full text-[#ff7900]"><IoLogoYoutube fontSize={14} /></a>
              <a href="#" className="p-1 bg-white rounded-full text-[#ff7900]"><FaFacebookF fontSize={14} /></a>
              <a href="#" className="p-1 bg-white rounded-full text-[#ff7900]"><RiInstagramFill fontSize={14} /></a>
              <a href="#" className="p-1 bg-white rounded-full text-[#ff7900]"><FaXTwitter fontSize={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className={`${layoutContainer} bg-white shadow-md py-3`}>
        <div className="container mx-auto flex justify-between items-center">
          <NavLink className="text-2xl font-bold text-[#ff7900]" to={'/'}>MyLogo</NavLink>

          <nav className="hidden md:flex space-x-4">
            {headerNavItems.map(({ path, label, subMenu }) => (
              <div
                key={path}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(label)}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `p-1 text-sm font-medium px-3 flex items-center gap-1 rounded-sm transition-all ${isActive ? "bg-[#ff7900] text-white" : "text-[#182036] hover:bg-[#ff7900] hover:text-white"
                    }`
                  }
                  onClick={() => setOpenDropdown(null)}
                >
                  {label} {subMenu && <IoIosArrowDown />}
                </NavLink>

                {/* Submenu */}
                {subMenu && openDropdown === label && (
                  <div
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50"
                    onMouseEnter={() => setOpenDropdown(label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {subMenu.map(({ path, label }) => (
                      <NavLink
                        key={path}
                        to={path}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#ff7900] hover:text-white"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>


            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#182036] shadow-md py-3 w-full fixed right-0 top-50 h-full z-50 overflow-y-scroll">

          <div className="flex flex-col mt-[10px] mb-[150px]">
            {headerNavItems.map(({ path, label, subMenu }) => (
              <div key={path} className="relative">
                <div
                  onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
                  className="flex flex-row justify-between text-sm font-semibold text-white"
                >
                  <NavLink to={path}
                    className={({ isActive }) =>
                      `w-full text-sm font-semibold px-5 py-3 transition-all block uppercase ${isActive
                        ? "bg-[#ff7900] text-[#fff]"
                        : "bg-transparent text-[#fff] hover:bg-[#ff7900] hover:text-white"
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                  {subMenu && <IoIosArrowDown className="p-1 py-2 self-center bg-[#fff] text-[#ff7900] text-[20px] cursor-pointer" size={'40'} />}
                </div>

                {/* Mobile Submenu */}
                {subMenu && openDropdown === label && (
                  <div className="">
                    {subMenu.map(({ path, label }) => (
                      <NavLink
                        key={path}
                        to={path}
                        className="flex gap-1 items-center flex-row justify-start px-5 pl-10 py-2 text-sm text-[#fff] uppercase hover:bg-[#ff7900] hover:text-white"
                        onClick={() => {
                          setOpenDropdown(null);
                          setMenuOpen(false);
                        }}
                      >
                        <IoIosArrowForward />
                        {label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
