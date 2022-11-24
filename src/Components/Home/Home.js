import React, { useEffect, useState } from "react";
import AddAProduct from "../AddAProduct/AddAProduct";
import BooksCategory from "../BooksCategory/BooksCategory";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/cat1`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
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
    </section>
  );
};

export default Home;
