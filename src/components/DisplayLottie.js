import React from 'react';
import Lottie from "lottie-react";
import animationPath from "./coding.json"

const GreetingLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie animationData={animationPath} loop={true}/>
    </div>
  );
};

export default GreetingLottie;
