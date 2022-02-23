import { motion } from "framer-motion";

interface MovieProps {
  title: string;
  subtitle: string;
}

export default function Movie({ title, subtitle }: MovieProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
      className="movie"
    >
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </motion.div>
  );
}
