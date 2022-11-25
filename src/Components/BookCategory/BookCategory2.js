import React from "react";
import { useLoaderData } from "react-router-dom";
import BookDetailsCard2 from "./BookDetailsCard2";

const BookCategory2 = () => {
  const loaderdata = useLoaderData();
  const bookData = loaderdata;

  return (
    <div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6'>
        {bookData.map((book) => (
          <BookDetailsCard2 book={book}></BookDetailsCard2>
        ))}
      </div>
    </div>
  );
};

export default BookCategory2;
