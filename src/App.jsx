import React from "react";
import Slider from "./Components/Slider";
import Categories from "./Components/Categories";
import ShopByCategories from "./Components/ShopByCategories";

const App = () => {
  return (
    <h1 className=" min-h-[65vh]">
      <Slider />
      {/* <Categories /> */}
      <ShopByCategories />
    </h1>
  );
};

export default App;
