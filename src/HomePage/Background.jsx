import React, { useState } from "react";

const Background = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-blue-950 flex justify-center items-center">
      <div className="container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </div>
    </div>
  );
};

export default Background;
