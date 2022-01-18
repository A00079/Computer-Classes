import React from 'react';
import { withRouter } from "react-router";

function CertificatesYouEarn(props) {

    return (
        <section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <h2 className="text-base text-indigo-600 text-center mb-3 font-semibold tracking-wide uppercase">CERTIFICATES</h2>
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Certificates You Will Earn</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full border-r border-gray-300">
                            <img class="object-cover object-center w-fyll h-40" src="/img/google-ads-certified-professional.png" alt="stats" />
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full border-r border-gray-300">
                            <img class="object-cover object-center w-full h-28 mt-6" src="/img/googleanaly-removebg-preview.png" alt="stats" />
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full border-r border-gray-300">
                        <img class="object-cover object-center w-full h-28 mt-6" src="/img/google_certifications.jpg" alt="stats" />
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 bg-indigo-600 border-gray-200 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                <h2 class="title-font font-medium text-3xl text-white">20</h2>
                                <p class="text-sm font-bold text-white">Certificates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default withRouter(CertificatesYouEarn);
