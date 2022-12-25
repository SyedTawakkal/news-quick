import React from "react";
import loading from "../load1.gif";

const LoadingScreen = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loading} alt="load" />
    </div>
  );
};

export default LoadingScreen;
