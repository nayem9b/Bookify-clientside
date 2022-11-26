import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const AddAProduct = () => {
  const [condition, setCondition] = useState();
  const [place, setPlace] = useState();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const handleSubmitProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const mobileNumber = form.mobileNumber.value;
    const originalPrice = form.originalPrice.value;
    const description = form.description.value;

    const addedProduct = {
      name: name,
      price: price,
      mobileNumber: mobileNumber,
      originalPrice: originalPrice,
      description: description,
      condition: condition,
      place: place,
      email: user.email,
      userName: user.displayName,
      date: new Date(Date.now()).toISOString(),
    };

    fetch("http://localhost:5000/addedProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        navigate("/dashboard/myproducts");
      });
  };
  return (
    <div className='relative'>
      <section class='bg-gray-100'>
        <h1 className='px-8 text-3xl'>Add a product</h1>
        <div class='mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8'>
          <div class='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
            <div class='rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12'>
              <form action='' onSubmit={handleSubmitProduct} class='space-y-4'>
                <div>
                  <h1>Name of the book</h1>
                  <label class='sr-only' for='name'>
                    Name
                  </label>
                  <input
                    class='w-full rounded-lg border-gray-200 p-3 text-sm'
                    name='name'
                    type='text'
                  />
                </div>
                <div>
                  <h1>Price</h1>
                  <label class='sr-only' for='name'>
                    Price
                  </label>
                  <input
                    class='w-full rounded-lg border-gray-200 p-3 text-sm'
                    //   placeholder={user.displayName}
                    type='text'
                    name='price'
                  />
                </div>
                <div>
                  <h1>Condition Type</h1>

                  <fieldset class='flex flex-wrap gap-3'>
                    <div>
                      <input
                        type='radio'
                        name='ColorOption'
                        value='Excillent'
                        id='ColorBlack'
                        class='peer hidden'
                        onClick={(e) => setCondition(e.target.value)}
                      />

                      <label
                        for='ColorBlack'
                        class='flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white'>
                        <p class='text-sm font-medium'>Excillent</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='ColorOption'
                        value='Good'
                        id='ColorRed'
                        class='peer hidden'
                        onClick={(e) => setCondition(e.target.value)}
                      />

                      <label
                        for='ColorRed'
                        class='flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white'>
                        <p class='text-sm font-medium'>Good</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='ColorOption'
                        value='Fair'
                        id='ColorBlue'
                        class='peer hidden'
                        onClick={(e) => setCondition(e.target.value)}
                      />

                      <label
                        for='ColorBlue'
                        class='flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white'>
                        <p class='text-sm font-medium'>Fair</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='ColorOption'
                        value='Torn'
                        id='ColorGold'
                        class='peer hidden'
                        onClick={(e) => setCondition(e.target.value)}
                      />

                      <label
                        for='ColorGold'
                        class='flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white'>
                        <p class='text-sm font-medium'>Torn</p>
                      </label>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <h1>Mobile Number</h1>
                  <label class='sr-only' for='name'>
                    Mobile Number
                  </label>
                  <input
                    class='w-full rounded-lg border-gray-200 p-3 text-sm'
                    type='text'
                    name='mobileNumber'
                  />
                </div>
                <h1>Location</h1>
                <fieldset class='grid grid-cols-3 gap-4'>
                  <div>
                    <input
                      type='radio'
                      name='DeliveryOption'
                      value='Dhaka'
                      id='DeliveryStandard'
                      class='peer hidden'
                      onClick={(e) => setPlace(e.target.value)}
                    />

                    <label
                      for='DeliveryStandard'
                      class='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
                      <p class='text-gray-700'>Dhaka</p>
                    </label>
                  </div>

                  <div>
                    <input
                      type='radio'
                      name='DeliveryOption'
                      value='Chittagong'
                      id='DeliveryPriority'
                      class='peer hidden'
                      onClick={(e) => setPlace(e.target.value)}
                    />

                    <label
                      for='DeliveryPriority'
                      class='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
                      <p class='text-gray-700'>Chittagong</p>
                    </label>
                  </div>
                  <div>
                    <input
                      type='radio'
                      name='DeliveryOption'
                      value='Khulna'
                      id='Khulna'
                      class='peer hidden'
                      onClick={(e) => setPlace(e.target.value)}
                    />

                    <label
                      for='Khulna'
                      class='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
                      <p class='text-gray-700'>Khulna</p>
                    </label>
                  </div>
                </fieldset>
                <div>
                  <h1>Original Bought Price</h1>
                  <label class='sr-only' for='name'>
                    Original Bought Price
                  </label>
                  <input
                    class='w-full rounded-lg border-gray-200 p-3 text-sm'
                    name='originalPrice'
                    type='text'
                  />
                </div>

                <div>
                  <h1>Description</h1>
                  <label class='sr-only' for='message'>
                    Message
                  </label>
                  <textarea
                    class='w-full rounded-lg border-gray-200 p-3 text-sm'
                    placeholder='Description of the product'
                    rows='8'
                    name='description'
                    id='message'></textarea>
                </div>

                <div class='mt-4'>
                  <button
                    type='submit'
                    class='inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto'>
                    <span class='font-medium'> Publish your product </span>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='ml-3 h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddAProduct;
