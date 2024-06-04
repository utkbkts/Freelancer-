import { motion } from "framer-motion";
import img from "../../img/bg-icon.png";
import "./services.scss";
const ServicesPage = () => {
  return (
    <>
      <div className="wrapper" id="services">
        <div>
          <h1>My Services</h1>
        </div>
        <div>
          <button className="btn">Hire Me</button>
        </div>
      </div>
      <div className="__a">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", delay: 0.4 }}
          className="__b"
        >
          <img src={img} alt="Creative Design" />
          <div className="__c">
            <h1>Creative Design</h1>
            <span>
              starting from <span className="price">$80</span>
            </span>
            <p>
              Enhance your brand with modern and aesthetic design services. I
              offer user-friendly and visually appealing designs.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", delay: 0.6 }}
          className="__b"
        >
          <div className="img">
            <img src={img} alt="Web Development" />
            <i className="fa fa-code-branch fa-2x text-dark"></i>
          </div>
          <div className="__c">
            <h1>Web Development</h1>
            <span>
              starting from <span className="price">$80</span>
            </span>
            <p>
              Take your business online with professional web development
              services. I provide secure and fast solutions.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.7 }}
          className="__b"
        >
          <div className="img">
            <img src={img} alt="Full Stack Development" />
            <i className="fa fa-code fa-2x text-dark"></i>
          </div>
          <div className="__c">
            <h1>Full Stack Development</h1>
            <span>
              starting from <span className="price">$200</span>
            </span>
            <p>
              Complete solutions with both front-end and back-end development
              services. I'm with you at every stage of your project.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.8 }}
          className="__b"
        >
          <div className="img">
            <img src={img} alt="Responsive Design" />
            <i className="fa fa-laptop-code fa-2x text-dark"></i>
          </div>
          <div className="__c">
            <h1>Responsive Design</h1>
            <span>
              starting from <span className="price">$80</span>
            </span>
            <p>
              Maximize user experience with web designs compatible with all
              devices. I offer mobile-friendly and flexible solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServicesPage;
