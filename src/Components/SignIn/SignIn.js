import React, { useContext } from "react";
import GoogleButton from "react-google-button";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import Lottie from "lottie-react";
import resale from "../../Images/resale.json";
const SignIn = () => {
  const { googleSignIn, githubSignIn, userSignIn, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Google Login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        fetch("https://server-side-nayem9b.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            localStorage.setItem("jwt-token", data.token);

            navigate(from, { replace: true });
          });
        navigate("/");
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  //Email Login
  const handleEmailLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        fetch("https://server-side-nayem9b.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            localStorage.setItem("jwt-token", data.token);

            navigate(from, { replace: true });
          });
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <section class='relative flex flex-wrap lg:h-screen lg:items-center'>
        <div class='w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24'>
          <div class='mx-auto max-w-lg text-center'>
            <h1 class='text-2xl font-bold sm:text-3xl text-start'>
              Signin to buy
              <br /> Book from{" "}
              <span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-5xl'>
                Bookify
              </span>
            </h1>

            <p class='mt-4 text-gray-500 text-start'>
              Resale books at affordable price
            </p>
          </div>

          <form
            onSubmit={handleEmailLogin}
            action=''
            class='mx-auto mt-8 mb-0 max-w-md space-y-4'>
            <div>
              <label for='email' class='sr-only'>
                Email
              </label>

              <div class='relative'>
                <input
                  type='email'
                  class='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Enter email'
                  name='email'
                />
              </div>
            </div>

            <div>
              <label for='password' class='sr-only'>
                Password
              </label>
              <div class='relative'>
                <input
                  type='password'
                  class='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Enter password'
                  name='password'
                />
              </div>
            </div>

            <div class='flex items-center justify-between'>
              <p class='text-sm text-gray-500'>
                No account?
                <Link to='/signup' class='underline ml-2'>
                  Sign up
                </Link>
              </p>

              <button
                type='submit'
                class='ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'>
                Sign in
              </button>
            </div>
            <div className='flex justify-between'>
              <button
                onClick={handleGoogleLogin}
                type='button'
                class='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2'>
                <svg
                  class='mr-2 -ml-1 w-4 h-4'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fab'
                  data-icon='google'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 488 512'>
                  <path
                    fill='currentColor'
                    d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'></path>
                </svg>
                Sign in with Google
              </button>
            </div>
          </form>
        </div>

        <div class='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2'>
          <div className='flex lg:block sm:hidden justify-center items-center'>
            <Lottie animationData={resale} loop={true} />
          </div>
        </div>
      </section>

      <Toaster />
    </div>
  );
};

export default SignIn;
