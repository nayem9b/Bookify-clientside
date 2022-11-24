import React, { useContext } from "react";
import GoogleButton from "react-google-button";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useTitle from "../Hooks/UseTitle";

const SignIn = () => {
  useTitle("Sign In");
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
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  // Github Login
  const handleGithubLogin = () => {
    githubSignIn()
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
              Signin to order
              <br /> food from{" "}
              <span className='text-orange-400 text-5xl'>Anonna</span>
            </h1>

            <p class='mt-4 text-gray-500 text-start'>
              A registered chef in your locality. Order food at a reasonable
              price
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
              <GoogleButton onClick={handleGoogleLogin}></GoogleButton>
              <Link
                onClick={handleGithubLogin}
                class='inline-flex   rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75'
                rel='noreferrer'>
                GitHub
                <svg
                  class='ml-2 h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    fill-rule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clip-rule='evenodd'></path>
                </svg>
              </Link>
            </div>
          </form>
        </div>

        <div class='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2'>
          <img
            alt='Welcome'
            src='https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            class='absolute inset-0 h-full w-full object-cover'
          />
        </div>
      </section>

      <Toaster />
    </div>
  );
};

export default SignIn;
