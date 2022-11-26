import React from "react";

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
    place,
    userName,
  } = product;
  return (
    <div>
      <div class='max-w-2xl overflow-hidden bg-white rounded-lg shadow-md '>
        <img
          class='object-cover w-full h-64'
          src='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          alt='Article'
        />

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
                  src='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60'
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;
