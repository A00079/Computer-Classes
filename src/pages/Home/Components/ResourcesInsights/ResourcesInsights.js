import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/skater-making-tricks.json';


function ResourcesInsights() {

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
            <section class="text-gray-600 bg-indigo-50 py-16 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-blue-400">Resources and Insights</h1>
                            <div class="h-1 w-20 bg-blue-300 rounded"></div>
                        </div>
                        <p class="lg:w-1/2 w-full font-bold text-gray-700">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-white p-6 rounded-lg shadow-xl">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src="img/c1.png" alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-white p-6 rounded-lg shadow-xl">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src="img/c2.jpg" alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-white p-6 rounded-lg shadow-xl">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src="img/c3.jpg" alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-white p-6 rounded-lg shadow-xl">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src="img/c4.jpg" alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-gray-100 overflow-y-hidden">
                <div className="mx-auto container py-12 px-4">
                    <div className="w-full flex justify-center">
                        <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
                            <div>
                                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                                    <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                                        <div>
                                            <h1 role="heading" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">Become a member and start building the next big thing</h1>
                                        </div>
                                        <button role="button" aria-label="Join the community" className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none">Resgister Now</button>
                                    </div>
                                    <div className="md:w-1/3 w-2/3">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png" alt="cartoon avatars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourcesInsights
