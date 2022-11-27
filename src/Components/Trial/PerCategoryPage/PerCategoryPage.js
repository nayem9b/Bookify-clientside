import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";
import TrialBookDetailsCard from "../TrialBookDetailsCard/TrialBookDetailsCard";

const PerCategoryPage = () => {
  const router = useParams();
  const { id } = router;
  const [books, setBooks] = useState([]);
  const [item, setItem] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/category/${id}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [id]);
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-8'>
      {books.map((book) => (
        <TrialBookDetailsCard
          book={book}
          setItem={setItem}
          setPrice={setPrice}></TrialBookDetailsCard>
      ))}
      <BookingModal item={item} price={price}></BookingModal>
    </div>
  );
};

export default PerCategoryPage;
