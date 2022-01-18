import React from "react";
import Lottie from 'react-lottie';
import animationData from '../../../src/lotties/online-learning.json';
import { BestProfessionals, BoostLearning, ChooseFuture, CoursesCategory, FacilitiesAdvantages, OurCourses, ResourcesInsights, Testimonials, WhyChooseUs } from "./Components";
import { Link } from 'react-router-dom';

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.Fragment>
      <section className="space-y-36" id="home-section">
        <div class="w-full bg-cover object-contained bg-center h-screen" style={{ backgroundColor: "#000" }}>
          <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <section class="text-gray-600 sm:px-20 px-5 body-font mt-28 md:mt-10 relative">
              <div class="mx-auto flex sm:pr-5 sm:py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg  py-3 rounded-sm sm:py-16 lg:w-full md:w-1/2 w-full">
                  <div className="-z-60 hidden sm:block md:block lg:block 2xl:block">
                    <Lottie
                      options={defaultOptions}
                      height={400}
                      width={550}
                    />
                  </div>
                  <div className="sm:hidden md:hidden lg:hidden 2xl:hidden">
                    <Lottie
                      options={defaultOptions}
                      height={180}
                      width={250}
                    />
                  </div>
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 style={{ fontFamily: 'Luckiest Guy' }} class="animate__animated animate__backInLeft bg-white px-2 rounded-sm title-font sm:text-md text-xs font-bold text-gray-600 tracking-wider">Grow your Skill's</h1>
                  <h1 style={{ fontFamily: 'Luckiest Guy' }} class="title-font sm:text-6xl text-2xl mb-2  sm:mb-4 font-bold text-gray-400 tracking-wider animate__animated animate__backInLeft">We Just Dont't <br /> Teach We<br /> Inspire</h1>
                  <p class="mb-2 md:mb-1 leading-relaxed text-xs sm:text-md text-white font-bold tracking-wider">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                  <div class="flex ml-2 flex-row-reverse justify-center">
                    <div class="flex relative w-7 h-7 bg-gray-500 justify-center items-center m-1 mr-2 -ml-3 rounded-full  text-xs text-white">+89 </div>
                    <div class="flex relative w-7 h-7 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white"><img class="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" /> </div>
                    <div class="flex relative w-7 h-7 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white"><img class="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" /> </div>
                    <div class="flex relative w-7 h-7 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white"><img class="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" /> </div>
                    <div class="flex relative w-7 h-7 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white"><img class="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" /> </div>
                    <div class="flex relative w-7 h-7 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white"><img class="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" /> </div>
                  </div>
                  <div class="z-60 sm:mt-7 mt-2 flex lg:flex-row md:flex-col" style={{zIndex: '99999'}}>
                    {/* <Link to='student-resgistration'>
                      <button class="cursor-pointer bg-yellow-400 inline-flex py-2 sm:py-3 px-2 sm:px-5 rounded-sm items-center md:mt-4 mt-0 lg:mt-0 hover:bg-indigo-600 focus:outline-none">
                        <span class="flex items-start flex-col leading-none">
                          <span class="title-font text-xs sm:text-md font-bold text-gray-200">Register Now</span>
                        </span>
                      </button>
                    </Link> */}
                    {/* <Link to='enquire-form'>
                      <button class="cursor-pointer ml-3 bg-transparent border-2 border-yellow-400 inline-flex py-2 sm:py-3 px-2 sm:px-5 rounded-sm items-center md:mt-4 mt-0 lg:mt-0 hover:bg-indigo-600 focus:outline-none">
                        <span class="flex items-start flex-col leading-none">
                          <span class="text-xs sm:text-md font-bold text-gray-200">Enquire Now</span>
                        </span>
                      </button>
                    </Link> */}
                  </div>
                </div>
              </div>
            </section>
            {/* <div className="hidden sm:block absolute bottom-10 right-10 flex flex-col justify-start items-center w-full">
              <div className="flex flex-row justify-end items-center space-x-2 w-full">
                <div class="bg-gray-500 p-2 rounded-md w-32">
                  <img class="w-32 rounded object-cover object-center mb-2" src="img/c1.png" alt="content" />
                  <h3 class="text-gray-200 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 class="text-sm text-yellow-300 font-medium title-font">Great Pyramid</h2>
                  <p class="text-xs text-gray-50">Fingerstache flexitarian street art.</p>
                </div>
                <div class="bg-gray-500 p-2 rounded-md w-32">
                  <img class="w-32 rounded object-cover object-center mb-2" src="img/c2.jpg" alt="content" />
                  <h3 class="text-gray-200 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 class="text-sm text-yellow-300 font-medium title-font">Great Pyramid</h2>
                  <p class="text-xs text-gray-50">Fingerstache flexitarian street art.</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <section className="boost-learning">
          <BoostLearning />
        </section>
        <section className="boost-learning">
          <CoursesCategory />
        </section>
        {/* <section className="resources-insights">
          <ResourcesInsights />
        </section> */}
        {/* <section className="our-courses">
          <OurCourses />
        </section> */}
        <section className="best-professionals">
          <BestProfessionals />
        </section>
        <section className="choose-future">
          <ChooseFuture />
        </section>
        <section className="facilities-advantages">
          <FacilitiesAdvantages />
        </section>
        <section className="why-chooseus">
          <WhyChooseUs />
        </section>
        {/* <section className="resources-insights">
          <ResourcesInsights />
        </section> */}
        <section className="testimonials">
          <Testimonials />
        </section>
      </section>
    </React.Fragment>
  );
};

export default Home;
