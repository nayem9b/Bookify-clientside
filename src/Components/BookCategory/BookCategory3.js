import React from "react";
import { useLoaderData } from "react-router-dom";
import BookDetailsCard3 from "./BookDetailsCard3";

const BookCategory3 = () => {
  const loaderdata = useLoaderData();
  const bookData = loaderdata;
  return (
    <div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6'>
        {bookData.map((book) => (
          <BookDetailsCard3 book={book}></BookDetailsCard3>
        ))}
      </div>
    </div>
  );
};

export default BookCategory3;
