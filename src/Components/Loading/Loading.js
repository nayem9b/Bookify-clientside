import React from "react";
import Lottie from "lottie-react";
import loading from "../../Images/97930-loading.json";
const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className=' flex justify-center '>
        <Lottie animationData={loading} loop={true} />
      </div>
    </div>
  );
};

export default Loading;
