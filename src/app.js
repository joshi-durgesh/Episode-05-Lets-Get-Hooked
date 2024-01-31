//Importing React in our JavaScript
import React from "react";
import ReactDOM from "react-dom/client";

//components
import Header from "./component/Header";
import BannerSection from "./component/BannerSection";
import TopBrandsSection from "./component/TopBrandsSection";

const mainContent = () => {
  return (
    <React.Fragment>
      <Header />
      <BannerSection />
      <TopBrandsSection />
    </React.Fragment>
  );
};

//creating root to rendering element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainContent());
