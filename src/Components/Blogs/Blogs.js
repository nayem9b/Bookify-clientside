import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <section className='text-gray-600 body-font'>
          <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                What are the different ways to manage a state in a React
                application?
              </h1>
              <p className='mb-8 leading-relaxed text-justify'>
                There are four main types of state you need to properly manage
                in your React apps: 1.Local state <br /> 2.Global state <br />{" "}
                3.Server state <br /> 4.URL state <br /> Local (UI) state –
                Local state is data we manage in one or another component.{" "}
                <br /> Global (UI) state – Global state is data we manage across
                multiple components. <br /> Server state – Data that comes from
                an external server that must be integrated with our UI state.{" "}
                <br /> URL state – Data that exists on our URLs, including the
                pathname and query parameters.
              </p>
              <div className='flex justify-center'></div>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
              <img
                className='object-cover object-center rounded h-[168px] w-[300px]'
                alt='hero'
                src='https://www.freecodecamp.org/news/content/images/2022/02/how-to-manage-state-react.png'
              />
            </div>
          </div>
        </section>
        <section className='text-gray-600 body-font'>
          <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                How does prototypical inheritance work?
              </h1>
              <p className='mb-8 leading-relaxed text-justify'>
                Prototypical inheritance refers to the ability to access object
                properties from another object. We use a JavaScript prototype to
                add new properties and methods to an existing object
                constructor. We can then essentially tell our JS code to inherit
                properties from a prototype. Prototypical inheritance allows us
                to reuse the properties or methods from one JavaScript object to
                another through a reference pointer function. All JavaScript
                objects inherit properties and methods from a prototype: Date
                objects inherit from Date.prototype. Array objects inherit from
                Array.prototype. Player objects inherit from Player.prototype.
                The Object.prototype is on top of the prototype inheritance
                chain. ​ Date objects, Array objects, and Player objects all
                inherit from Object.prototype.
              </p>
              <div className='flex justify-center'></div>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
              <img
                className='object-cover object-center rounded h-[168px] w-[300px]'
                alt='hero'
                src='https://scaler.com/topics/images/inheritance-chart-that-show-the-relation-between-each-objects.webp'
              />
            </div>
          </div>
        </section>
        <section className='text-gray-600 body-font'>
          <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                What is a unit test? Why should we write unit tests?
              </h1>
              <p className='mb-8 leading-relaxed text-justify'>
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages. <br /> A unit
                test typically comprises of three stages: plan, cases and
                scripting and the unit test itself. In the first step, the unit
                test is prepared and reviewed. The next step is for the test
                cases and scripts to be made, then the code is tested.
              </p>
              <div className='flex justify-center'></div>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
              <img
                className='object-cover object-center rounded'
                alt='hero'
                src='https://miro.medium.com/max/1024/1*cM63wpLTnGEFHFQKbqf9og.png'
              />
            </div>
          </div>
        </section>
        <section className='text-gray-600 body-font'>
          <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                React vs. Angular vs. Vue?
              </h1>
              <p className='mb-8 leading-relaxed text-justify'>
                React, developed by Facebook, was initially released in 2013.
                Facebook uses React extensively in their products (Facebook,
                Instagram, and WhatsApp). Similar to Vue, the React developers
                also announce their newest version on the blog section of the
                React website.
                <br />
                Angular, developed by Google, was first released in 2010, making
                it the oldest of the lot. It is a TypeScript-based JavaScript
                framework. A substantial shift occurred in 2016 on the release
                of Angular 2 (and the dropping of the “JS” from the original
                name – AngularJS). Angular 2+ is known as just Angular. Although
                AngularJS (version 1) still gets updates, we will focus the
                discussion on Angular.
                <br />
                Vue, also known as Vue.js, is the youngest member of the group.
                It was developed by ex-Google employee Evan You in 2014. Over
                the last several years, Vue has seen a substantial shift in
                popularity, even though it doesn’t have the backing of a large
                company. The most current version is always announced on the
                official Vue website on their releases page. Contributors for
                Vue are supported by Patreon. It should be noted that Vue also
                has its own GitHub repo, and functions using TypeScript.
              </p>
              <div className='flex justify-center'></div>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
              <img
                className='object-cover object-center rounded h-[168px] w-[300px]'
                alt='hero'
                src='https://plainenglish.io/assets/post-content/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022.png'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
