import React from "react";

const Movie = (props) => {
  const { titulo } = props;

  // console.log(titulo);

  return (
    <div className="col-12 p-3 text-center bg-info text-white my-3 rounded">
        <h1>{titulo}</h1>
    </div>
  );
};

export default Movie;
