import { motion } from "framer-motion";

export default function MotionScrollIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "10%" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.5,
      }}>
      {children}
    </motion.div>
  );
}
