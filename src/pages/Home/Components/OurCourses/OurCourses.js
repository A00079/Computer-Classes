import React from 'react';
import Lottie from 'react-lottie';


function OurCourses() {

    return (
        <header>
            <div class="w-full bg-center bg-cover sm:h-screen h-auto" style={{ backgroundImage: 'url(img/robot.webp)' }}>
                <div class="grid grid-cols-12 gap-4 py-20 px-20">
                    <div class="sm:col-span-6 col-span-12 sm:block hidden">
                        <div className='flex flex-col justify-between items-start'>
                            <div className='text-xl font-bold text-white'>
                                <span className='text-gray-500'>Explorer</span> our Courses
                            </div>
                            <div className='mt-80 flex flex-col justify-between'>
                                <div className='text-xs font-medium text-white uppercase'>Find Any Course You Want.</div>
                                <div className='text-5xl font-bold text-white uppercase'>Professional Courses.</div>
                            </div>
                            <div className='flex flex-row justify-start items-center'>
                                <button className='text-md mt-3 font-bold px-4  py-2 rounded-sm bg-black text-white'>Register Now</button>
                                <button className=' ml-5 text-md mt-3 font-bold px-8  py-1 rounded-sm bg-transparent border-2 border-gray-300 text-white'>View All</button>
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-6 col-span-12">
                        <div className='flex flex-col justify-between items-center sm:items-end space-y-8'>

                            <div className='flex flex-col justify-between items-center sm:items-start space-y-5'>
                                <div class="sm:w-80 w-full">
                                    <div class="h-full flex items-center rounded-lg">
                                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                                        <div class="flex-grow">
                                            <h2 class="text-white title-font font-bold">Henry Letham</h2>
                                            <p class="text-gray-400">A Professional Teacher</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-xs font-bold text-gray-200 uppercase'>
                                    // Number of Courses
                                </div>
                                <a class="block relative h-28 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="img/c1.png" />
                                </a>
                                <a class="block relative h-28 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="img/c2.jpg" />
                                </a>
                                <a class="block relative h-28 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="img/c3.jpg" />
                                </a>

                                <div className='flex flex-row justify-start space-x-4'>
                                    <div className='text-xs font-bold text-gray-200 uppercase'>
                                        instagram
                                    </div><div className='text-xs font-bold text-gray-200 uppercase'>
                                        facebook
                                    </div><div className='text-xs font-bold text-gray-200 uppercase'>
                                        twitter
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default OurCourses
