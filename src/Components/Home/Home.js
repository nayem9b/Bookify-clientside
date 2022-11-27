import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddAProduct from "../AddAProduct/AddAProduct";
import BooksCategory from "../BooksCategory/BooksCategory";
import { useQuery } from "@tanstack/react-query";
import AdvertisedCard from "../AdvertisedCard/AdvertisedCard";
import { AuthContext } from "../Context/UserContext";
import { Content } from "../Content/Content";

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

  const {
    data: advertisedproducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/advertised`);
      const data = await res.json();
      return data;
    },
  });

  const { user } = useContext(AuthContext);
  return (
    <section>
      <Content></Content>
      <div className='ml-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3'>
        <Link
          to={user ? "/category/action_and_adventure" : "/signin"}
          class='block'>
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
        <Link to={user ? "/category/classics" : "/signin"} class='block'>
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
        <Link to={user ? "/category/memoir" : "/signin"} class='block'>
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
      {advertisedproducts.length > 0 && (
        <div>
          <h1 className='text-center text-3xl'>Advertised Products</h1>
          <div className='grid grid-cols-3 gap-4'>
            {advertisedproducts.map((product) => (
              <AdvertisedCard
                product={product}
                key={product._id}></AdvertisedCard>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
