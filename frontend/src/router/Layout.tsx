import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Header />
      <div className="children" style={{ padding: "10px" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
