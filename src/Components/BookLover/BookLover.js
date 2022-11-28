import React from "react";
import booklover from "../../Images/98849-book-lover.json";
import Lottie from "lottie-react";
const BookLover = () => {
  return (
    <div>
      <div className=' '>
        <Lottie animationData={booklover} loop={true} />
      </div>
    </div>
  );
};

export default BookLover;
