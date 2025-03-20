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
import logo from "../../assets/images/logo.png"
import Img from "../LazyLoadImage/Img";
// import logo from "../../assets/images/logo1.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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
    // <header className="w-full">
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#182036] shadow-md" : "bg-white"
      }`}>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 flex justify-between items-center">
        <div className={`${layoutContainer}`}>
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row items-end gap-2 py-2">
              <a href="mailto:jyotishsewakendra801@gmail.com" target="_blank" className="flex items-center gap-1 text-[12px] sm:text-sm">
                <MdEmail fontSize={16} color="#ff7900" /> Jyotishsewakendra801@gmail.com
              </a>
              <a href="tel:+919939967984" className="hidden sm:flex md:flex items-center gap-1 text-sm">
                <FaPhoneAlt fontSize={14} color="#ff7900" /> +91 99399 67984
              </a>
            </div>
            <div className="py-2 flex flex-row gap-1 sm:gap-2">
              <a href="https://www.youtube.com/@PtMediniKantJha" target="_blank" className="p-1 bg-white rounded-full text-[#ff7900] text-[12px] sm:text-sm"><IoLogoYoutube /></a>
              <a href="https://www.facebook.com/ptmedinikantjha.jha" target="_blank" className="p-1 bg-white rounded-full text-[#ff7900] text-[12px] sm:text-sm"><FaFacebookF /></a>
              <a href="https://www.instagram.com/pt.medinikant_jha/" target="_blank" className="p-1 bg-white rounded-full text-[#ff7900] text-[12px] sm:text-sm"><RiInstagramFill /></a>
              <a href="https://x.com/medini_jha" target="_blank" className="p-1 bg-white rounded-full text-[#ff7900] text-[12px] sm:text-sm"><FaXTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white shadow-md py-3">
        <div className={`${layoutContainer}`}>
          <div className="container mx-auto flex justify-between items-center">
            <NavLink className="text-2xl font-bold text-[#ff7900]" to={'/'} onClick={scrollToTop}>

                <Img  src={logo} alt='logo' className='block w-auto h-[75px]' />
            </NavLink>

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
                    onClick={() => { setOpenDropdown(null); scrollToTop() }}
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
                          onClick={() => { setOpenDropdown(null); scrollToTop() }}
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
              <button className="p-2 bg-[#182036] hover:bg-[#ff7900] text-[#fff] cursor-pointer transition" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#182036] shadow-md py-3 w-full fixed right-0 top-50 h-full z-50 overflow-y-auto">

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
                    onClick={() => { setMenuOpen(false); scrollToTop() }}
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
                          scrollToTop();
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
