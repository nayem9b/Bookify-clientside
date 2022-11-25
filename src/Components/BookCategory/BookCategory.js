import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import BookDetailsCard from "./BookDetailsCard";

const BookCategory = () => {
  const loaderdata = useLoaderData();
  const bookData = loaderdata;
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  console.log(item, price);
  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
      {bookData.map((book) => (
        <BookDetailsCard
          book={book}
          setItem={setItem}
          item={item}
          setPrice={setPrice}></BookDetailsCard>
      ))}
      <BookingModal item={item} price={price}></BookingModal>
    </div>
  );
};

export default BookCategory;
