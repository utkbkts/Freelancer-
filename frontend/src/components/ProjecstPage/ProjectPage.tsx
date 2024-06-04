import { useEffect, useState } from "react";
import { DataProject } from "../../utils/data";
import "./projects.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  const [categoryType, setCategoryType] = useState("All");
  const [filteredRooms, setFilteredRooms] = useState(DataProject);

  useEffect(() => {
    if (categoryType === "All") {
      setFilteredRooms(DataProject);
    } else {
      setFilteredRooms(
        DataProject.filter((item) => item.type === categoryType)
      );
    }
  }, [categoryType]);
  return (
    <>
      <div className="wrapper" id="projects">
        <div>
          <h1>My Projects</h1>
        </div>
        <ul className="__a">
          <li
            className={`${categoryType === "All" && "active"}`}
            onClick={() => setCategoryType("All")}
          >
            All Projects
          </li>
          <li
            className={`${categoryType === "UI/UX design" && "active"}`}
            onClick={() => setCategoryType("UI/UX design")}
          >
            UI/UX Design
          </li>
          <li
            className={`${categoryType === "Graphic Design" && "active"}`}
            onClick={() => setCategoryType("Graphic Design")}
          >
            Graphic Design
          </li>
        </ul>
      </div>
      <div className="content">
        {filteredRooms.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={item.id}
          >
            <div className="img">
              <img src={item.img} alt="image" />
              <div className="__a">
                <Link to={"/"}>
                  <i className="fa fa-eye"></i>
                </Link>
                <Link to={"/"}>
                  <i className="fa fa-link"></i>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
