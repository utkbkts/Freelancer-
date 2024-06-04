import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="container-footer">
        <div className="wrapper">
          <div className="__a">
            <a href="https://flowbite.com/" className="">
              <img src="/src/img/bg-icon.png" alt="Flowbite Logo" />
              <span className="">U(/\)B</span>
            </a>
            <ul className="">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Licensing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="footer_a">
            <span className="bottom-footer">© 2024 All Rights Reserved.</span>
            <span className="__d">
              <Link
                to={"https://www.linkedin.com/in/utku-bektasoglu/"}
                target="_blank"
              >
                {" "}
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link to={"https://github.com/utkbkts"} target="_blank">
                {" "}
                <i className="fa-brands fa-github"></i>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
