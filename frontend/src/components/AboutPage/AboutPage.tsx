"use client";
import { Link } from "react-router-dom";
import "./about.scss";
import img1 from "/src/img/about-1.jpg";
import img2 from "/src/img/about-2.jpg";
import { motion } from "framer-motion";
const AboutPage = () => {
  return (
    <div className="container-about" id="about">
      <div className="wrapper">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}
          className="left"
        >
          <div className="left-wrapper">
            <div className="title">
              <h1>
                2 <span>Years</span>
              </h1>
              <div className="paragraph">
                <p>of working experience as a web designer & developer</p>
              </div>
            </div>
          </div>

          <div className="paragraph-left">
            <div className="__a">
              <p>
                Your experience in web development has been shaped by my passion
                for creating modern and user-friendly web applications.
                Professionally, my projects and personal curiosity have enabled
                me to master the latest technological trends and best practices.
              </p>
            </div>
            <div className="__b">
              <span>
                &#x2713; <span>Afordable Prices</span>
              </span>
              <span>
                &#x2713; <span>High Quality Product</span>
              </span>
              <span>
                &#x2713; <span>On Time Project Delivery</span>
              </span>
            </div>
            <div style={{ marginTop: "3rem" }}>
              <Link
                to={"https://www.linkedin.com/in/utku-bektasoglu/"}
                target="_blank"
              >
                <button className="btn" style={{ padding: "10px 3rem" }}>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", delay: 0.4 }}
          className="right"
        >
          <div className="__a">
            <div>
              <img src={img1} alt="image1" />
            </div>
            <div>
              <img src={img2} alt="image2" />
            </div>
          </div>
          <div className="__b">
            <div className="__c">
              <div className="__e">
                <h3>Happy Clients</h3>
                <span>50+</span>
              </div>
              <p>
                Customer comfort is at the heart of the business and are the
                true measurements of our success. We have more than 50 happy
                customers, we continue to work devotedly and with the quality
                service we offer. Our customers' feedback and satisfaction
                motivate us even more and enable us to strive to deliver the
                best in their project.
              </p>
            </div>
            <div className="__c">
              <div className="__e">
                <h3>Projects Completed</h3>
                <span>500+</span>
              </div>
              <p>
                My completed projects on the way to success are a testament to
                my expertise and dedication. I have successfully completed more
                than 100 projects, each offering unique and innovative
                solutions. These projects are a reflection of my determination
                to bring our customers' vision to life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
