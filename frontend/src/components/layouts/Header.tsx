import { useEffect, useState } from "react";
import "./header.scss";

const Header = () => {
  const [activeHeader, setActiveHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let windowScrollY = window.scrollY;

      if (windowScrollY >= 300) {
        setActiveHeader(true);
      } else {
        setActiveHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`container-header ${
        activeHeader ? " visible-header " : "hidden-header "
      }`}
    >
      <div className="wrapper">
        <div className="content">
          <a href={"#home"} style={{ textDecoration: "none" }}>
            Home
          </a>
          <a href={"#about"} style={{ textDecoration: "none" }}>
            About
          </a>
          <a href={"#skills"} style={{ textDecoration: "none" }}>
            Skills
          </a>
        </div>
        <div className="content-w">
          <h1>UTKU</h1>
        </div>
        <div className="content">
          <a href={"#services"} style={{ textDecoration: "none" }}>
            Services
          </a>
          <a href={"#projects"} style={{ textDecoration: "none" }}>
            Projects
          </a>
          <a href={"#contact"} style={{ textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
