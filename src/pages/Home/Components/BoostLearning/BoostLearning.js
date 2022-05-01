import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/class-room.json';

function BoostLearning() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <div class="container px-5 mx-auto">
                <div class="flex flex-col text-center w-full mb-10">
                    <h2 class="text-xs text-gray-500 tracking-widest font-bold title-font mb-1">BOOST LEARNING</h2>
                    <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-yellow-500">Boost Learning And Fast Track.</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">This collection of courses is designed to provide you with all of the information and resources you'll need to boost your learning.Not only will you learn the concepts, but you will also gain practical experience with the subject.
                    </p>
                    <div class="h-1 w-40 mt-4 mx-auto bg-yellow-500 rounded"></div>
                </div>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-12 font-medium text-gray-900"> Get Learnly Plus
                        </h1>
                        <div className='flex flex-col items-start'>
                            <div className='flex flex-row justify-start space-x-3'>
                                <div>
                                    <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                </div>
                                <div>
                                    <p class="mb-3 leading-relaxed text-left font-bold">Unlimited Access, Including Expert-Verified Answers.</p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-start space-x-3'>
                                <div>
                                    <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                </div>
                                <div>
                                    <p class="mb-3 leading-relaxed text-left font-bold">Faster Answers To Your Questions.</p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-start space-x-3'>
                                <div>
                                    <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                </div>
                                <div>
                                    <p class="mb-3 leading-relaxed text-left font-bold">24/7 Help Support For Any Doubts and Quires.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <div className='block sm:hidden'>
                            <Lottie
                                options={defaultOptions}
                                height={120}
                                width={250}
                            />
                        </div>
                        <div>
                            <div className='hidden sm:block'>
                                <Lottie
                                    options={defaultOptions}
                                    height={250}
                                    width={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BoostLearning
