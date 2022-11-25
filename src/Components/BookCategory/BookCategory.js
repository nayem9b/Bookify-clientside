import React from "react";
import { useLoaderData } from "react-router-dom";
import BookDetailsCard from "./BookDetailsCard";

const BookCategory = () => {
  const loaderdata = useLoaderData();
  const bookData = loaderdata;

  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6'>
      {bookData.map((book) => (
        <BookDetailsCard book={book}></BookDetailsCard>
      ))}
    </div>
  );
};

export default BookCategory;
