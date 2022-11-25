import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import GoogleButton from "react-google-button";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useTitle from "../Hooks/UseTitle";
import book from "../../Images/31821-share-everythin-moneybooks.json";
import Lottie from "lottie-react";
const SignUp = () => {
  useTitle("Sign Up");
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState();
  console.log(role);
  const from = location.state?.from?.pathname || "/";
  const { googleSignIn, userSignUp } = useContext(AuthContext);
  const signInWIthGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName,
          email: user.email,
          role: "Seller",
        };
        fetch(`http://localhost:5000/userInfo`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  // Email SignUp
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.passwordConfirmation.value;
    console.log(fullName, email, password, confirmPassword);

    if (password === confirmPassword) {
      userSignUp(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: fullName,
          }).catch((error) => console.log(error));
          navigate(from, { replace: true });
        })
        .catch((error) => console.log(error));
    } else {
      toast.error("Password didn't match");
    }
    const userInfo = {
      name: fullName,
      email: email,
      role: role,
    };
    fetch(`http://localhost:5000/userInfo`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    console.log(userInfo);
  };

  return (
    <div>
      <section class='bg-white'>
        <div class='lg:grid lg:min-h-screen lg:grid-cols-12'>
          <section class=' relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
            <div className='flex lg:block sm:hidden justify-center items-center'>
              <Lottie animationData={book} loop={true} />
            </div>
          </section>

          <main
            aria-label='Main'
            class='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6'>
            <div class='max-w-xl lg:max-w-3xl'>
              <form
                onSubmit={handleSignUp}
                action='#'
                class='mt-8 grid grid-cols-6 gap-6'>
                <div class='col-span-6 sm:col-span-3'>
                  <fieldset class='grid grid-cols-2 gap-4 mb-4'>
                    <legend class='sr-only'>Delivery</legend>

                    <div>
                      <input
                        type='radio'
                        name='DeliveryOption'
                        value='Seller'
                        id='DeliveryStandard'
                        class='peer hidden'
                        onClick={(e) => setRole(e.target.value)}
                      />

                      <label
                        for='DeliveryStandard'
                        class='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
                        <p class='text-gray-700'>Seller</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='DeliveryOption'
                        value='Buyer'
                        id='DeliveryPriority'
                        class='peer hidden'
                        onClick={(e) => setRole(e.target.value)}
                      />

                      <label
                        for='DeliveryPriority'
                        class='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
                        <p class='text-gray-700'>Buyer</p>
                      </label>
                    </div>
                  </fieldset>

                  <label
                    for='FirstName'
                    class='block text-sm font-medium text-gray-700'>
                    Full Name
                  </label>

                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    required
                    class='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div class='col-span-6'>
                  <label
                    for='Email'
                    class='block text-sm font-medium text-gray-700'>
                    Email
                  </label>

                  <input
                    type='email'
                    id='Email'
                    name='email'
                    required
                    class='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div class='col-span-6 sm:col-span-3'>
                  <label
                    for='Password'
                    class='block text-sm font-medium text-gray-700'>
                    Password
                  </label>

                  <input
                    type='password'
                    id='Password'
                    name='password'
                    required
                    class='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div class='col-span-6 sm:col-span-3'>
                  <label
                    for='PasswordConfirmation'
                    class='block text-sm font-medium text-gray-700'>
                    Password Confirmation
                  </label>

                  <input
                    type='password'
                    id='Passwordconfirmation'
                    name='passwordConfirmation'
                    required
                    class='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div class='col-span-6'>
                  <label for='MarketingAccept' class='flex gap-4'>
                    <input
                      type='checkbox'
                      id='MarketingAccept'
                      name='marketing_accept'
                      class='h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm'
                    />

                    <span class='text-sm text-gray-700'>
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div class=' col-span-6'>
                  <p class='  text-sm text-gray-500'>
                    By creating an account, you agree to our
                    <span href='#' class='text-gray-700 underline ml-1 mr-1'>
                      terms and conditions
                    </span>
                    and
                    <span href='#' class='text-gray-700 underline ml-1'>
                      privacy policy
                    </span>
                    .
                  </p>
                </div>

                <div class='col-span-6 sm:flex sm:items-center sm:gap-4'>
                  <button class='inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'>
                    Create an account
                  </button>

                  <p class='mt-4 text-sm text-gray-500 sm:mt-0'>
                    Already have an account?
                    <Link to='/signin' class='text-gray-700 ml-2 underline'>
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
              <div className='flex mt-5'>
                <GoogleButton onClick={signInWIthGoogle}></GoogleButton>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
