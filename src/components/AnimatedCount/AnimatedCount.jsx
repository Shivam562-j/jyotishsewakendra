// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export const AnimatedCount = ({ value }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // Extract number and suffix separately
//     const match = value.match(/([\d.]+)([^\d]*)/); // Extract digits and suffix
//     if (!match) return;
    
//     const [_, numPart, suffix] = match; // Separate number and suffix
//     const end = parseFloat(numPart); // Convert to number
//     if (isNaN(end)) return;

//     const duration = 2000; // 2 seconds animation
//     const stepTime = Math.abs(Math.floor(duration / end));

//     let start = 0;
//     const timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start >= end) {
//         setCount(end); // Ensure final value is exact
//         clearInterval(timer);
//       }
//     }, stepTime);

//     return () => clearInterval(timer);
//   }, [value]);

//   return (
//     <motion.p
//       className="text-7xl font-extrabold text-[#ff7900]"
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {count}
//       {value.replace(/[0-9.]/g, "")} {/* Keep suffix */}
//     </motion.p>
//   );
// };

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const AnimatedCount = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, margin: "-100px" }); 

  useEffect(() => {
    if (!inView) return; 

    const match = value.match(/([\d.]+)([^\d]*)/);
    if (!match) return;

    const [_, numPart, suffix] = match;
    const end = parseFloat(numPart);
    if (isNaN(end)) return;

    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <motion.p
      ref={ref}
      className="text-7xl font-extrabold text-[#ff7900]"
      initial={{ opacity: 0, y: -10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }} // Animate only when visible
      transition={{ duration: 0.5 }}
    >
      {count}
      {value.replace(/[0-9.]/g, "")}
    </motion.p>
  );
};
