import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { name, description, to } = category;
  return (
    <div>
      <Link to={to} class='block'>
        <img
          alt='Art'
          src='https://m.media-amazon.com/images/I/51eeAWItwbL._AC_SY780_.jpg'
          class='h-96 w-80 object-cover'
        />

        <h3 class='mt-4 text-xl font-bold text-gray-900'>{name}</h3>

        <p class='mt-2 w-80 text-gray-700'>{description}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
