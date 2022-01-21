import React from 'react';
import { withRouter } from "react-router";

function CareerOptions(props) {

    return (
        <section class="text-gray-600 body-font">
            <div className="container lg:text-center">
                <div className='px-5 sm:px-0'>
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Opportunities</h2>
                <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Career Options
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                    accusamus quisquam.
                </p>
                </div>
                <div>

                    <div class="grid grid-cols-12 gap-12 mt-16 sm:px-20">
                        {
                            props.careerOptionsData.map((el, index) => {
                                return (
                                    <div class="sm:col-span-4  p-4 rounded-md border-gray-200 col-span-8">
                                        <img class="w-20  mx-auto  mb-2 rounded-sm object-cover object-center" src={"/img/career-options/"+el.img} alt="blog"></img>
                                        <div key={index} class="flex border-b border-gray-50">
                                            <div class="mr-1">
                                                <span class="border border-gray-200 flex justify-center items-center w-12 h-12 bg-blue-50 text-lg font-bold rounded-full">{index + 1}</span>
                                            </div>
                                            <div class="max-w-xs">
                                                <h3 class="mb-2 text-left ml-2 pt-2 text-lg font-bold font-heading">{el.title}</h3>
                                                <p class="text-sm text-left">{el.summary}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default withRouter(CareerOptions);
