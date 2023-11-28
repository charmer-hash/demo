import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "about",
        element: <About />,
      },
      {
          path: "contact",
          element: <Contact />,
      },
      {
          path: "/*",
          element: <NotFound />,
      },
  ]);
  export default router;