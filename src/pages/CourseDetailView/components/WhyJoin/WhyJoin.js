import React from 'react';
import { withRouter } from "react-router";
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/why-checkist-loop.json';

function WhyJoin(props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <section>
            {/* <section class="text-gray-600 body-font bg-gray-200 py-16">
                <div class="container px-5 mx-auto">
                    <div class="text-center mb-10">
                        <h1 class="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">Why Should You Join DCS Class™ Diploma In Ms-Office & Tally</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {
                            ['Computer Instructors with a Certification','Be Trained on How to Print from Computer','Valid Certification after the Course Completion','Learn about How to Download, Save a Page','Learn Creating and Saving MS Word, Excel Pages','Be A Pro Laptop User','Be Skilled in Using the Internet','Know to Build Wi-Fi Networks','Learn How to Operate Emails','Learn to Protect Computer from Virus','Get Knowledge on Computer Parts Portal','Govt. of India’s #StartUpIndia Certified Ed-Tech'].map((el, index) => {
                                return (
                                    <div key={index} class="p-4 sm:w-1/3 w-full ">
                                        <div class="bg-gray-100 shadow-2xl rounded flex p-2 h-full items-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-4 h-4 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span class="title-font font-bold text-sm">{el}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section > */}
            <div class="container px-5 mx-auto">
                <div class="text-center">
                    <h1 class="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">Why Should You Join DCS Class™ Diploma In Ms-Office & Tally</h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-10 py-5 sm:px-20 px-10">
                <div class="sm:col-span-4 col-span-9 pt-1">
                    {
                        ['Computer Instructors with a Certification', 'Be Trained on How to Print from Computer', 'Valid Certification after the Course Completion', 'Learn about How to Download, Save a Page', 'Learn Creating and Saving MS Word, Excel Pages', 'Be A Pro Laptop User'].map((el, index) => {
                            return (
                                <div key={index} class="p-4 w-full ">
                                    <div class="bg-gray-100 shadow-lg rounded flex p-2 h-full items-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-4 h-4 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-bold text-sm">{el}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div class="sm:col-span-4 col-span-8 pt-6">
                    <div className="-z-60 hidden sm:block md:block lg:block 2xl:block">
                        <Lottie
                            options={defaultOptions}
                            height={350}
                            width={350}
                        />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden 2xl:hidden">
                        <Lottie
                            options={defaultOptions}
                            height={250}
                            width={250}
                        />
                    </div>
                </div>
                <div class="sm:col-span-4 col-span-9 pt-1">
                    {
                        [, 'Know to Build Wi-Fi Networks', 'Learn How to Operate Emails', 'Learn to Protect Computer from Virus', 'Get Knowledge on Computer Parts Portal', 'Govt. of India’s #StartUpIndia Certified Ed-Tech', 'Be Skilled in Using the Internet'].map((el, index) => {
                            return (
                                <div key={index} class="p-4 w-full ">
                                    <div class="bg-gray-100 shadow-lg rounded flex p-2 h-full items-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-4 h-4 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-bold text-sm">{el}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}

export default withRouter(WhyJoin);
