import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import BookDetailsCard2 from "./BookDetailsCard2";

const BookCategory2 = () => {
  const loaderdata = useLoaderData();
  const bookData = loaderdata;
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  console.log(item, price);
  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
      {bookData.map((book) => (
        <BookDetailsCard2
          book={book}
          setItem={setItem}
          item={item}
          setPrice={setPrice}></BookDetailsCard2>
      ))}
      <BookingModal item={item} price={price}></BookingModal>
    </div>
  );
};

export default BookCategory2;
