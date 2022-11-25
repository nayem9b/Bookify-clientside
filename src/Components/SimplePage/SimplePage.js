import React from "react";
import Lottie from "lottie-react";
import nothing from "../../Images/127760-nothing.json";
const SimplePage = () => {
  return (
    <div>
      <div className=' flex justify-center '>
        <Lottie animationData={nothing} loop={true} />
      </div>
    </div>
  );
};

export default SimplePage;
