import { browserSessionPersistence } from "firebase/auth";
import React from "react";

const AddAProduct = () => {
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
    };

    fetch("http://localhost:5000/addedProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <section class='bg-gray-100'>
        <div class='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
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

                  <fieldset class='grid grid-cols-3 gap-4'>
                    <legend class='sr-only'>Delivery</legend>

                    <div>
                      <input
                        type='radio'
                        name='DeliveryOption'
                        value='DeliveryStandard'
                        id='DeliveryStandard'
                        class='peer hidden'
                        checked
                      />

                      <label
                        for='DeliveryStandard'
                        class='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
                        <p class='text-gray-700'>Standard</p>

                        <p class='mt-1 text-gray-900'>Free</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='DeliveryOption'
                        value='DeliveryPriority'
                        id='DeliveryPriority'
                        class='peer hidden'
                      />

                      <label
                        for='DeliveryPriority'
                        class='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
                        <p class='text-gray-700'>Next Day</p>

                        <p class='mt-1 text-gray-900'>£9.99</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='DeliveryOption'
                        value='DeliveryPriority'
                        id='DeliveryPriority'
                        class='peer hidden'
                      />

                      <label
                        for='DeliveryPriority'
                        class='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
                        <p class='text-gray-700'>Next Day</p>

                        <p class='mt-1 text-gray-900'>£9.99</p>
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
                    //   placeholder={user.displayName}
                    type='text'
                    name='mobileNumber'
                  />
                </div>
                <h1>Location</h1>
                <fieldset class='grid grid-cols-3 gap-4'>
                  <legend class='sr-only'>Delivery</legend>

                  <div>
                    <input
                      type='radio'
                      name='DeliveryOption'
                      value='DeliveryStandard'
                      id='DeliveryStandard'
                      class='peer hidden'
                      checked
                    />

                    <label
                      for='DeliveryStandard'
                      class='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
                      <p class='text-gray-700'>Standard</p>

                      <p class='mt-1 text-gray-900'>Free</p>
                    </label>
                  </div>

                  <div>
                    <input
                      type='radio'
                      name='DeliveryOption'
                      value='DeliveryPriority'
                      id='DeliveryPriority'
                      class='peer hidden'
                    />

                    <label
                      for='DeliveryPriority'
                      class='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
                      <p class='text-gray-700'>Next Day</p>

                      <p class='mt-1 text-gray-900'>£9.99</p>
                    </label>
                  </div>
                  <div>
                    <input
                      type='radio'
                      name='DeliveryOption'
                      value='DeliveryPriority'
                      id='DeliveryPriority'
                      class='peer hidden'
                    />

                    <label
                      for='DeliveryPriority'
                      class='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
                      <p class='text-gray-700'>Next Day</p>

                      <p class='mt-1 text-gray-900'>£9.99</p>
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
