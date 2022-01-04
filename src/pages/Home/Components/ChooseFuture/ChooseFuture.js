import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/skater-making-tricks.json';


function ChooseFuture() {

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
            <div class="grid grid-cols-12 gap-4 py-20 sm:px-40 px-10">
                <div class="sm:col-span-4 col-span-12 pt-6">
                    <p className='text-5xl font-bold text-gray-700 mb-2'>Choose</p>
                    <p className='text-5xl font-bold text-gray-700 mb-2'>Future Your</p>
                    <p className='text-5xl font-bold text-gray-700'>Career</p>
                    <div className='flex flex-row justify-start items-center mt-12'>
                        <div className='mr-4'>
                            <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                        </div>
                        <div className='text-sm font-bold text-gray-600'>Get Your Own Computer <br /> Degree Today.
                        </div>
                    </div>
                </div>
                <div class="sm:col-span-4 col-span-12">
                    <div>
                        <Lottie
                            options={defaultOptions}
                            height={200}
                            width={250}
                        />
                    </div>
                </div>
                <div class="sm:col-span-4 col-span-12">
                    <div className='flex flex-col items-start pl-5 sm:pl-28 space-y-6'>
                        <div>
                            <p className='text-2xl font-bold text-gray-700'>18,000</p>
                            <p className='text-sm font-bold text-gray-700 mb-2'>Students using <br />and it's free.</p>
                        </div>
                        <div className='sm:pl-20 pl-28'>
                            <p className='text-2xl font-bold text-gray-700'>1,200+</p>
                            <p className='text-sm font-bold text-gray-700 mb-2'>Courses covering <br />95% of exams.</p>
                        </div>
                        <div>
                            <p className='text-2xl font-bold text-gray-700'>40%</p>
                            <p className='text-sm font-bold text-gray-700 mb-2'>Better grade <br />then average.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:px-40">
                <div className="max-w-7xl bg-gray-100 rounded-md mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-indigo-600">Start your free trial today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChooseFuture
