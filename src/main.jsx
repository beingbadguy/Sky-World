import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainContext from "./Store/StoreContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      // {
      //   path: "/about",
      //   element: <AboutPage />,
      // },
      // {
      //   path: "/contact",
      //   element: <ContactPage />,
      // },
      // {
      //   path: "*",
      //   element: <NotFoundPage />,
      // },
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
      // {
      //   path: "/signup",
      //   element: <SignupPage />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      <RouterProvider router={router} />
    </MainContext>
  </StrictMode>
);
