import { motion } from "framer-motion";
import ProjectPage from "../../components/ProjecstPage/ProjectPage";
const MyProjects = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
      className="container-projects"
    >
      <ProjectPage />
    </motion.div>
  );
};

export default MyProjects;
