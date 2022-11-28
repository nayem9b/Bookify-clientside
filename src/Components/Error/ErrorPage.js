import React from "react";
import Lottie from "lottie-react";
import error from "../../Images/42479-page-not-found-404.json";
const ErrorPage = () => {
  return (
    <div>
      <Lottie animationData={error} loop={true} />
    </div>
  );
};

export default ErrorPage;
