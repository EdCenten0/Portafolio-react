import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import Projects from "../Projects";
import Contact from "../Contact";
import Layout from "../../components/Layout";
import MainPanel from "../../components/MainPanel";
import SecondaryPanel from "../../components/SecondaryPanel";
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
          <SecondaryPanel>
            <h3 className=" text-xl font-bold pb-4">Some data</h3>
            <p className=" font-medium my-4">18 years old</p>
            <p className=" font-medium my-4">Nicaragua</p>
            <p className=" font-medium my-4">Universidad Centroamericana</p>
            <p className=" font-medium my-4">English - Spanish</p>
          </SecondaryPanel>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
