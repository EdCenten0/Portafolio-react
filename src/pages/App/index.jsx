import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import Projects from "../Projects";
import Contact from "../Contact";
import Layout from "../../components/Layout";
import MainPanel from "../../components/MainPanel";
import Navbar from "../../components/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
          <Navbar />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
