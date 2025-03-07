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
              <a href="mailto:jyotishsewakendra801@gmail.com" target="_blank" className="flex items-center gap-1 text-sm">
                <MdEmail fontSize={16} color="#ff7900" /> Jyotishsewakendra801@gmail.com
              </a>
              <a href="tel:+919939967984" className="hidden sm:flex md:flex items-center gap-1 text-sm">
                <FaPhoneAlt fontSize={14} color="#ff7900" /> +91 99399 67984
              </a>
            </div>
            <div className="py-2 flex flex-row gap-2">
              <a href="https://www.youtube.com/@PtMediniKantJha" target="_blank" className="p-1 bg-white rounded-full text-[#ff7900]"><IoLogoYoutube fontSize={14} /></a>
              <a href="https://www.facebook.com/ptmedinikantjha.jha" target="_blank" className="p-1 bg-white rounded-full text-[#ff7900]"><FaFacebookF fontSize={14} /></a>
              <a href="https://www.instagram.com/pt.medinikant_jha/" target="_blank" className="p-1 bg-white rounded-full text-[#ff7900]"><RiInstagramFill fontSize={14} /></a>
              <a href="https://x.com/medini_jha" target="_blank" className="p-1 bg-white rounded-full text-[#ff7900]"><FaXTwitter fontSize={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white shadow-md py-3">
        <div className={`${layoutContainer}`}>
          <div className="container mx-auto flex justify-between items-center">
            <NavLink className="text-2xl font-bold text-[#ff7900]" to={'/'} onClick={scrollToTop}>
              <div className='flex flex-row gap-3 items-center justify-start select-none'>
                <svg height="50" viewBox="0 0 40 58"><defs id="SvgjsDefs6928"></defs><g id="SvgjsG6929" featurekey="symbolFeature-0" transform="matrix(0.6266894264227408,0,0,0.6266894264227408,-10.985833801993168,-2.754300017174794)" fill="#ff7900"><g xmlns="http://www.w3.org/2000/svg"><path fill="#ff7900" d="M27.984,42.838C45.23,25.729,47.746,11.361,41.939,4.395c0,0,43.898,18.04,18.077,59.882   c-4.42,7.105-15.459,15.498-9.688,32.793C50.327,97.07-4.908,81.605,27.984,42.838z"></path><path fill="#ff7900" d="M54.645,96.217c-0.944-3.51-5.154-11.154,7.686-26.359c6.861-8.104,11.557-25.906,9.27-30.157   c0,0,21.914,28.944-3.447,46.278C53.117,96.283,54.645,96.217,54.645,96.217z"></path></g></g>
                </svg>

                <div className='flex flex-col'>
                  <p className='font-extrabold text-[#0a122b] text-2xl'>Jyoti Sewa Kendra</p>
                  <span className='text-[#ff7900] font-semibold text-base'>Medini Kant Jha</span>
                </div>

              </div>
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
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
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
