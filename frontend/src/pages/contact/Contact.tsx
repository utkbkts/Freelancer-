import { motion } from "framer-motion";
import ContactPage from "../../components/contactPage/Contact";
const Contact = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
    >
      <ContactPage />
    </motion.div>
  );
};

export default Contact;
