import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainContext from "./Store/StoreContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import CategoryPage from "./Pages/CategoryPage.jsx";
import FAQPage from "./Pages/FAQPage.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import { Contact } from "lucide-react";
import ContactUs from "./Pages/Contact.jsx";
import FilterPage from "./Pages/FilterPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/filter",
        element: <FilterPage />,
      },
      // {
      //   path: "*",
      //   element: <NotFoundPage />,
      // },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/categories",
        element: <CategoryPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
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
