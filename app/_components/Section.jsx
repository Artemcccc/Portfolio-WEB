"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Section = ({ id, children }) => {
  const { ref, inView } = useInView({
    threshold: [0.1, 0.5, 1], // Adjusting thresholds for smoother transitions
    triggerOnce: false, // Ensures animation can trigger multiple times
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true); // Section becomes visible
    } else {
      setIsVisible(false); // Section becomes invisible
    }
  }, [inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Hidden with downward motion
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Visible with upward motion
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"} // Animate based on visibility
      variants={variants}
      style={{ minHeight: "100vh", padding: "50px", textAlign: "center" }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
