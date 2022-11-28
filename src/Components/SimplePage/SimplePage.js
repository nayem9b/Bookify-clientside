import React from "react";
import Lottie from "lottie-react";
import dashboard from "../../Images/76878-dashboard-elements.json";
const SimplePage = () => {
  return (
    <div>
      <div className=' flex justify-center '>
        <Lottie animationData={dashboard} loop={true} />
      </div>
    </div>
  );
};

export default SimplePage;
