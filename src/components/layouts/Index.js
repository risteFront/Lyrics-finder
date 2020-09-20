import React from "react";
import Tracks from "../track/Tracks";
import Search from "../track/Search";
const Index = () => {
  return (
    <div>
      <React.Fragment>
        <Search></Search>
        <Tracks></Tracks>
      </React.Fragment>
    </div>
  );
};
export default Index;
