import React from "react";

// Components
import Movie from "./Movie";
import Description from "./Description";

// change title
document.title = "Manuel José Ron";

const Home = () => (
  <div className="bg-gradient-dark d-flex align-items-center justify-content-center">
    <div className="container">
      <div className="row">
        <Movie titulo={"Jumanji Next Level"}></Movie>
        <Description></Description>
      </div>
    </div>
  </div>
);

export default Home;
