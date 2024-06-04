import HomePage from "../../components/homepage/HomePage";
import Loading from "../../components/loading/Loading";
import MyProjects from "../MyProjects/MyProjects";
import Services from "../Services/Services";
import About from "../about/About";
import Contact from "../contact/Contact";
import Skills from "../skills/Skills";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HomePage />
          <About />
          <Skills />
          <Services />
          <MyProjects />
          <Contact />
        </>
      )}
    </>
  );
};

export default Home;
