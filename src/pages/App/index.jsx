import { BrowserRouter, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../Home";
import Projects from "../Projects";
import Contact from "../Contact";
import Layout from "../../components/Layout";
import MainPanel from "../../components/MainPanel";
import SecondaryPanel from "../../components/SecondaryPanel";
import Navbar from "../../components/Navbar";
import DownloadButton from "../../components/DownloadButton";

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
        <ToastContainer />
        <Layout>
          <AppRoutes />
          <Navbar />
          <SecondaryPanel>
            <h3 className=" text-xl font-bold pb-4">Some data about me</h3>
            <p className=" font-medium my-4">
              Contact email: cchavarriacenteno8@gmail.com
            </p>
            <p className=" font-medium my-4">Age: 18 years old</p>
            <p className=" font-medium my-4">Country: Nicaragua</p>
            <p className=" font-medium my-4">
              Education: Universidad Centroamericana
            </p>
            <p className=" font-medium my-4">
              Languages: English(B2) - Spanish(Native)
            </p>
            <DownloadButton />
          </SecondaryPanel>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
