import { motion } from "framer-motion";
import { Hypnosis } from "react-cssfx-loading";
const variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.6,
    },
  },
};
const Loading = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={"animate"}
      className="container-loading"
    >
      <Hypnosis color="#FF0000" width="100px" height="100px" duration="3s" />
    </motion.div>
  );
};

export default Loading;
