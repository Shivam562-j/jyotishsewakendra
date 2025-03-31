import AppRouter from './router/AppRouter';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { Modal } from './components';
import { useLocation } from 'react-router-dom';

function App() {

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  // only one time 
  // useEffect(() => {
  //   const allowedPaths = [ "/", "/home", "/about-us", "/services", "/services/janam-kundali", "/services/kundali-vishleshan", "/services/child-astrology", "/services/future-astrology", "/services/marriage-astrology", "/services/vastu-shastra", "/gallery/our-video", ];

  //   const currentPath = location.pathname;

  //   const modalShown = sessionStorage.getItem(`modalShown_${currentPath}`);

  //   if (allowedPaths.includes(currentPath) && !modalShown) {
  //     const timer = setTimeout(() => {
  //       setOpenModal(true);
  //       sessionStorage.setItem(`modalShown_${currentPath}`, "true");
  //     }, 20000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [location.pathname]);

  useEffect(() => {
    const allowedPaths = [
      "/", "/home", "/about-us", "/services", "/services/janam-kundali",
      "/services/kundali-vishleshan", "/services/child-astrology",
      "/services/future-astrology", "/services/marriage-astrology",
      "/services/vastu-shastra", "/gallery/our-video"
    ];

    const currentPath = location.pathname;

    window.addEventListener("beforeunload", () => {
      sessionStorage.removeItem(`modalShown_${currentPath}`);
    });

    const modalShown = sessionStorage.getItem(`modalShown_${currentPath}`);

    if (allowedPaths.includes(currentPath) && !modalShown) {
      const timer = setTimeout(() => {
        setOpenModal(true);
        sessionStorage.setItem(`modalShown_${currentPath}`, "true");
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);


  return (
    <div className='relative overflow-y-hidden'>
      <AppRouter />

      <div className='fixed right-[50px] bottom-[50px] flex flex-col gap-3 z-[999]'>
        <motion.a
          href="tel:+919939967984"
          className="flex sm:flex md:hidden items-center gap-1 p-4 bg-[#02c100] rounded-full text-[#fff] shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: ["0 0 0px rgba(2, 193, 0, 0.7)", "0 0 15px rgba(2, 193, 0, 0.5)", "0 0 0px rgba(2, 193, 0, 0.7)"],
            transition: { duration: 1.5, repeat: Infinity }
          }}
        >
          <FaPhoneAlt fontSize={20} />
        </motion.a>

        <motion.a
          href="https://api.whatsapp.com/send?phone=+919431425134&text=Hi%20Jyotish%20Sewa%20Kendra%20from%20Website"
          target='_blank'
          className="flex items-center gap-1 p-3 bg-[#02c100] rounded-full text-[#fff] shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: ["0 0 0px rgba(2, 193, 0, 0.7)", "0 0 15px rgba(2, 193, 0, 0.5)", "0 0 0px rgba(2, 193, 0, 0.7)"],
            transition: { duration: 1.5, repeat: Infinity }
          }}
        >
          <RiWhatsappFill fontSize={28} />
        </motion.a>

      </div>

      <Modal openModal={openModal} setOpenModal={setOpenModal} />

      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed left-[50px] bottom-[50px] p-3 bg-[#ff7900] text-white rounded-full shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <FaArrowUp fontSize={20} />

        </motion.button>
      )}
    </div>
  )
}

export default App
