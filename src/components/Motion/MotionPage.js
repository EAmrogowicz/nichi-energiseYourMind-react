import { motion } from "framer-motion";

export default function MotionPage({ children }) {
  // add random id as a key to div
  const id = crypto.randomUUID();
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, x: "25%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-25%" }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}>
      {children}
    </motion.div>
  );
}
