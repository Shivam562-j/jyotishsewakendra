import AppRouter from './router/AppRouter';
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

function App() {

  return (
    <div className='relative'>
      <AppRouter />

      <div className='fixed right-[50px] bottom-[50px] flex flex-col gap-3'>
        <motion.a
          href="tel:+919939967984"
          className="hidden sm:flex md:flex items-center gap-1 p-4 bg-[#02c100] rounded-full text-[#fff] shadow-lg"
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

        {/* WhatsApp Button with Animation */}
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
    </div>
  )
}

export default App
