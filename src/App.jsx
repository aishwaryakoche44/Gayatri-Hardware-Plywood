import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Product from "./Components/Product/Product";
import Login from "./Components/Login/Login";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <Navbar />
          <Product />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
