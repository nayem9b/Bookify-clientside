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
            src='https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            class='h-96 w-80 object-cover'
          />

          <h3 class='mt-4 text-xl font-bold text-gray-900'>
            Lorem, ipsum dolor.
          </h3>

          <p class='mt-2 w-80 text-gray-700'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            reiciendis sequi ipsam incidunt.
          </p>
        </Link>
        <Link to='/category/classics' class='block'>
          <img
            alt='Art'
            src='https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            class='h-96 w-80 object-cover'
          />

          <h3 class='mt-4 text-xl font-bold text-gray-900'>
            Lorem, ipsum dolor.
          </h3>

          <p class='mt-2 w-80 text-gray-700'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            reiciendis sequi ipsam incidunt.
          </p>
        </Link>
        <Link to='/category/memoir' class='block'>
          <img
            alt='Art'
            src='https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            class='h-96 w-80 object-cover'
          />

          <h3 class='mt-4 text-xl font-bold text-gray-900'>
            Lorem, ipsum dolor.
          </h3>

          <p class='mt-2 w-80 text-gray-700'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            reiciendis sequi ipsam incidunt.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Home;
