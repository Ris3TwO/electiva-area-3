import React from "react";

// Components
import Overview from "./Overview";
import Cast from "./Cast";

const Description = () => (
  <div className="bg-dark mb-3 rounded">
    <div className="row p-0 m-0">
      <Overview></Overview>
      <Cast></Cast>
    </div>
  </div>
);

export default Description;
