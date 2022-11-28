import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/UserContext";
import useAdmin from "../Hooks/useAdmin";

const AdvertisedCard = ({ product }) => {
  const {
    name,
    mobileNumber,
    price,
    description,
    originalPrice,
    condition,
    email,
    date,
    image,
    place,
    userName,
    userImage,
  } = product;

  // From here
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useAdmin(user?.email);

  const wishlist = {
    name: name,
    price: price,
    email: user?.email,
  };
  const handleAddToWishlist = () => {
    fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product added to wishlist");
      });
  };

  return (
    <div>
      <div class='max-w-2xl overflow-hidden bg-white rounded-lg shadow-md '>
        <img class='object-cover w-full h-64' src={image} alt='Article' />

        <div class='p-6'>
          <div>
            <span class='text-xs font-medium text-blue-600 uppercase dark:text-blue-400'>
              Product
            </span>
            <h1
              class='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform '
              tabindex='0'
              role='link'>
              {name}
            </h1>
            <p class='mt-2 text-2xl'>
              Price: {price} <span className='text-3xl'>৳</span>{" "}
            </p>
            <p class='mt-2 text-sm'> Location: {place}</p>
            <p class='mt-2 text-sm'> Mobile Number : {mobileNumber}</p>

            <p class='mt-2 text-sm'>Description : {description}</p>
          </div>

          <div class='mt-4'>
            <div class='flex items-center'>
              <div class='flex items-center'>
                <img
                  class='object-cover h-10 rounded-full'
                  src={userImage}
                  alt='Avatar'
                />
                <a
                  href='#'
                  class='mx-2 font-semibold '
                  tabindex='0'
                  role='link'>
                  {userName}
                </a>
              </div>
              <span class='mx-1 text-xs '>{date}</span>
              <div className='card-actions lg:justify-end'>
                {isBuyer ? (
                  <div className='grid grid-cols-2 gap-2 '>
                    <button
                      class='inline-block rounded border border-current px-6 py-2 text-sm font-medium text-indigo-600 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500'
                      onClick={handleAddToWishlist}>
                      Add to wishlist
                    </button>

                    <button
                      class='inline-block rounded bg-indigo-600 px-6 py-2 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500'
                      href='/download'>
                      Book now
                    </button>
                  </div>
                ) : (
                  <>
                    <h1 className=' font-semibold'>
                      You need to be a buyer to purchase this
                    </h1>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;
