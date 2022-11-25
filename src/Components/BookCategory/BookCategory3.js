import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import BookDetailsCard3 from "./BookDetailsCard3";

const BookCategory3 = () => {
  const loaderdata = useLoaderData();
  const bookData = loaderdata;
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  console.log(item, price);
  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
      {bookData.map((book) => (
        <BookDetailsCard3
          book={book}
          setItem={setItem}
          item={item}
          setPrice={setPrice}></BookDetailsCard3>
      ))}
      <BookingModal item={item} price={price}></BookingModal>
    </div>
  );
};

export default BookCategory3;
