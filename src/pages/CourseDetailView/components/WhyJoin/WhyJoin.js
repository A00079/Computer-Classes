import React from 'react';
import { withRouter } from "react-router";

function WhyJoin(props) {

    return (
        <section>
            <section class="text-gray-600 body-font bg-gray-200 py-16">
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
            </section >
        </section >
    )
}

export default withRouter(WhyJoin);
