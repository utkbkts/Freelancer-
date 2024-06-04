import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./router/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
