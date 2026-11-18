import { motion } from "framer-motion";

const FadeInView = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;