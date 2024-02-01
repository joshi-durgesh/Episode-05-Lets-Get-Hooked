//Importing React in our JavaScript
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components
import Header from "./component/Header";
import BannerSection from "./component/BannerSection";
import TopBrandsSection from "./component/TopBrandsSection";
import Offers from "./component/Offers";
import Search from "./component/Search";
import Help from "./component/Help";
import SignIn from "./component/SignIn";
import Cart from "./component/Cart";

const Body = () => {
  return (
    <>
      <BannerSection />
      <TopBrandsSection />
    </>
  );
};

const MainContent = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/offers",
    element: <Offers />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

//creating root to rendering element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
