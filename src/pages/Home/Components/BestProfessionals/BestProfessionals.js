import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/businessman-taking-notes.json';

function BoostProfessional() {
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
                <div className='flex flex-row justify-between items-center w-full'>
                    <div class="flex flex-col text-left w-full mb-10">
                        <h2 class="text-xs text-gray-500 tracking-widest font-bold title-font mb-1">PROFESSIONALS </h2>
                        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-yellow-500">Professionals Instructors.</h1>
                        <p class="lg:w-2/3 text-left leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        <div class="h-1 w-40 mt-4 text-left bg-yellow-500 rounded"></div>
                    </div>
                    <div className='sm:block hidden'>
                        <Lottie
                            options={defaultOptions}
                            height={180}
                            width={200}
                        />
                    </div>
                </div>
            </div>
            <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:px-10">
                    {
                        [...new Array(10)].map((el, index) => {
                            return (
                                <div class="w-full bg-white border-2 border-gray-100 shadow-xl rounded-lg p-2 flex flex-col justify-center items-center">
                                    <div class="mb-4">
                                        <img class="object-center object-cover rounded-full h-28 w-28" src={index %  2 == 0 ? 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80' : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'} alt="photo" />
                                    </div>
                                    <div class="text-center">
                                        <p class="text-sm text-gray-700 font-bold mb-1">Dany Bailey</p>
                                        <p class="text-gray-400 font-normal text-xs">Software Engineer</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default BoostProfessional;
