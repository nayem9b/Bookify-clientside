import React from "react";

const BookDetailsCard = ({ book }) => {
  const {
    name,
    location,
    original_price,
    posted_time,
    picture,
    resale_price,
    years_of_use,
  } = book;
  return (
    <div className='mx-24'>
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <figure>
          <img className='h-96 w-80' src={picture} alt='Album' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{name}</h2>
          <p>
            {" "}
            <span>Resale Price:</span> {resale_price}
          </p>
          <p>
            {" "}
            <span>Original Price:</span> {original_price}
          </p>
          <p>
            {" "}
            <span>Years of use:</span> {years_of_use}
          </p>
          <p>
            {" "}
            <span>Location:</span> {location}
          </p>
          <p>
            {" "}
            <span>Posted Time:</span> {posted_time}
          </p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsCard;
