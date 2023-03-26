import { motion } from "framer-motion";
import { Stack } from "@mui/material";

export default function MotionItem({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.5,
      }}>
      <Stack>{children}</Stack>
    </motion.div>
  );
}
