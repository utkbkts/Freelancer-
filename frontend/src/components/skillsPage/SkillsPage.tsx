"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "./skills.scss";
const SkillsPage = () => {
  const dataMenu = [
    {
      name: "HTML",
      percent: "92%",
      color: "#f2a654",
    },
    {
      name: "CSS",
      percent: "93%",
      color: "#b66dff",
    },
    {
      name: "ReactJS",
      percent: "94%",
      color: "#57c7d4",
    },
    {
      name: "Javascript",
      percent: "90%",
      color: "#f6e84e",
    },
    {
      name: "TypeScript",
      percent: "90%",
      color: "#e6e44e",
    },
    {
      name: "MongoDB",
      percent: "96%",
      color: "#46c35f",
    },
    {
      name: "Firebase",
      color: "#f2a654",
      percent: "99%",
    },
    {
      color: "#6244c5",
      name: "MySQL",
      percent: "80%",
    },
    {
      name: "PostgreSQL",
      color: "#553cac",
      percent: "95%",
    },
  ];
  const exprienceData = [
    {
      name: "Account budget",
      date: "10.04.2024",
      company: "Github",
    },
    {
      name: "Blog App",
      date: "20.05.2024",
      company: "Github",
    },
    {
      name: "Chat App",
      date: "08.02.2024",
      company: "Github",
    },
    {
      name: "E-commerce",
      date: "30.05.2024",
      company: "Github",
    },
    {
      name: "E-Commerce 2",
      date: "01.06.2024",
      company: "Github",
    },
    {
      name: " Food-Ordering-app ",
      date: "25.04.2024",
      company: "Github",
    },
  ];
  const educationData = [
    {
      name: "Giresun University",
      date: "10.01.2019",
      company: "Associate degree / graduate",
    },
    {
      name: "Anadolu Univesity",
      date: "20.01.2023",
      company: "Bachelor degree / graduate",
    },
  ];
  const [tabs, setTabs] = useState(0);
  return (
    <div className="skills-container" id="skills">
      <div className="wrapper">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}
          className="left"
        >
          <h1>Skills & Experience</h1>
          <p>
            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet
            est diam rebum amet diam ipsum clita dolor duo clita sit.
          </p>
          <h3>My Skills</h3>
          <div className="exprience-item">
            {dataMenu.map((item, index) => (
              <div key={index} className="expres-info">
                <div className="__a">
                  <p>{item.name}</p>
                  <span>{item.percent}</span>
                </div>
                <div className="progres-line">
                  <span
                    style={{
                      width: `${item.percent}`,
                      backgroundColor: `${item.color}`,
                    }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", delay: 0.4 }}
          className="right"
        >
          <div className="wrapper">
            <div className="__a">
              <button
                className={`${tabs === 0 ? "active" : ""}`}
                onClick={() => setTabs(0)}
              >
                Exprience
              </button>
              <button
                className={`${tabs === 1 ? "active" : ""}`}
                onClick={() => setTabs(1)}
              >
                Education
              </button>
            </div>
            <div className="__b">
              {tabs === 0 && (
                <>
                  {" "}
                  {exprienceData.map((item, index) => (
                    <div key={index} className="__c">
                      <h1>{item.name}</h1>
                      <span className="border"></span>
                      <div className="__d">
                        <span className="date">{item.date}</span>
                        <span className="desc">{item.company}</span>
                      </div>
                    </div>
                  ))}
                </>
              )}
              {tabs === 1 && (
                <>
                  {educationData.map((item, index) => (
                    <div key={index} className="__c">
                      <h1>{item.name}</h1>
                      <span className="border"></span>
                      <div className="__d">
                        <span className="date">{item.date}</span>
                        <span className="desc">{item.company}</span>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
