import React from "react";
import LandingComponent from "../Components/LandingComponent";
import Search from "../Components/Search";

const Home = () => {
  return (
    <div>
      {/* Display the Search component */}
      <Search />
      {/* Display the LandingComponent */}
      <LandingComponent />
    </div>
  );
};

export default Home;
