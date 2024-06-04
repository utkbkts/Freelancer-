"use client";
import "./home.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react";
import ModalVideo from "./ModalVideo";
import { motion } from "framer-motion";
const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [typeEffect] = useTypewriter({
    words: [
      "Front End Developer",
      "MERN-Stack Developer",
      "Web Developer",
      "Web Designer",
      "React Developer",
      "JavaScript Developer",
      "TypeScript Developer",
      "HTML/CSS Specialist",
      "SASS Expert",
      "MongoDB Specialist",
      "Firebase Developer",
      "PostgreSQL Developer",
      "MySQL Developer",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 20,
  });
  const handlePlayClick = () => {
    setShowModal(true);
  };
  const handleCloseClick = () => {
    setShowModal(false);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="image">
          <img src="/src/img/bg-header.png" alt="" />
        </div>
        <div className="wrap-content">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="wrapper-text"
          >
            <div className="text">
              <h2>I'M</h2>
              <h1 className="title">Utku Bektasoglu</h1>
              <h1 className="typed">
                {" "}
                {typeEffect}
                <span className="text-white">
                  <Cursor cursorStyle="|" />
                </span>
              </h1>
            </div>
            <div className="button">
              <button className="btn">Download CV</button>
              <div className="play" onClick={handlePlayClick}>
                <i className="fa-solid fa-play"></i>
              </div>
              <span>Play Video</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="wrapper-text2"
          >
            <div className="wrapper">
              <img src="/src/img/utku2.jpg" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
      {showModal && <ModalVideo handleCloseClick={handleCloseClick} />}
    </div>
  );
};

export default HomePage;
