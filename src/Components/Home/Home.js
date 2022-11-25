import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddAProduct from "../AddAProduct/AddAProduct";
import BooksCategory from "../BooksCategory/BooksCategory";

const Home = () => {
  const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/cat1`)
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);
  // useEffect(() => {
  //   fetch("http://localhost:5000/myproduct/:id")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  // console.log(categories);
  return (
    <section>
      <div class='relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8'>
        <div class='relative mx-auto max-w-7xl'>
          <div class='grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none'>
            {categories.map((cat1) => (
              <BooksCategory key={cat1._id} cat1={cat1}></BooksCategory>
            ))}
          </div>
        </div>
      </div>

      <div className='ml-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3'>
        <Link to='/category/action_and_adventure' class='block'>
          <img
            alt='Art'
            src='https://m.media-amazon.com/images/I/51eeAWItwbL._AC_SY780_.jpg'
            class='h-96 w-80 object-cover'
          />

          <h3 class='mt-4 text-xl font-bold text-gray-900'>
            Action and Adventure
          </h3>

          <p class='mt-2 w-80 text-gray-700'>
            resale books under Action and Adventure category
          </p>
        </Link>
        <Link to='/category/classics' class='block'>
          <img
            alt='Art'
            src='https://i.insider.com/60f865f00729770012b91de7?width=1000&format=jpeg&auto=webp'
            class='h-96 w-80 object-cover'
          />

          <h3 class='mt-4 text-xl font-bold text-gray-900'>Classics</h3>

          <p class='mt-2 w-80 text-gray-700'>
            resale books under Classic category
          </p>
        </Link>
        <Link to='/category/memoir' class='block'>
          <img
            alt='Art'
            src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1558377374-41QZuQ2h2WL.jpg?crop=1xw:0.987xh;center,top&resize=480:*'
            class='h-96 w-80 object-cover'
          />

          <h3 class='mt-4 text-xl font-bold text-gray-900'>Memoir</h3>

          <p class='mt-2 w-80 text-gray-700'>
            resale books under Memoir category
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Home;
