import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import EnquireForm from '../../components/EnquireForm/EnquireForm';
import { CareerOptions, WhyJoin, CertificatesYouEarn, LearnerPartners } from './components';
import { Link, animateScroll as scroll } from "react-scroll";

const CourseDetailView = (props) => {

    useEffect(() => {
        console.log('props.history.state', props.history.location.state);
    }, [])
    return (
        <React.Fragment>
            <section class="text-gray-600 space-y-28">
                <div className='banner-section'>
                    <img style={{ height: '90vh' }} class="w-full object-cover object-center" src={`img/${props.history.location.img_banner}.png`} alt="blog" />
                    <LearnerPartners />
                </div>
                <div className='enquire-form-section' id='enquire-form'>
                    <EnquireForm courseData={props.history.location} title={props.history.location.title} />
                </div>
                <div>
                    <div className='px-16 text-3xl mb-5 font-bold text-red-400 py-3 flex flex-col justify-between items-start'>
                        <p className='ml-3 flex flex-row justify-start items-center'>
                            {/* <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg> */}
                            <p className='ml-3'>Our Popular Courses</p>
                        </p>
                        <p className='ml-6 text-sm font-semibold text-gray-400'>Here is our popular course that you might want to learn <br /> from our expert instructor.</p>
                    </div>
                    <div class="flex flex-wrap px-16 bg-gray-100 py-3">
                        {
                            props.history.location.state.map((el, index) => {
                                return (
                                    <div class="xl:w-1/4 md:w-1/2 p-4">
                                        <div class="bg-white border-2 cursor-pointer hover:border-indigo-400 hover:shadow-2xl  rounded-lg shadow-xl">
                                            <img class="h-40 rounded w-full object-cover object-center mb-6" src="img/c1.png" alt="content" />
                                            <h3 class="px-3 tracking-widest text-indigo-500 text-xs font-medium title-font">{el.sub_title}</h3>
                                            <h2 class={props.history.location.card_height == 'yes' ? "px-3 text-lg text-gray-900 font-medium title-font mb-1 h-20 " : "px-3 text-lg text-gray-900 font-medium title-font mb-1"}>{el.title}</h2>
                                            <p className='px-3 bg-blue-200 py-2 text-md font-bold text-blue-500 mb-2'>Course Details</p>
                                            <ul class="px-2 leading-relaxed text-base space-y-1  scroll h-36 overflow-y-auto">
                                                {
                                                    el.list.map((ell, index_list) => {
                                                        return (
                                                            <div className='flex flex-row items-center'>
                                                                <span><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg></span>
                                                                <li className='ml-2 text-xs text-left font-bold text-gray-600'>{ell}</li>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <Link
                                                to='enquire-form'
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={900}
                                            >
                                                <button className='mt-5 hover:bg-yellow-500 hover:text-white bg-yellow-300 px-3 py-2 text-xs font-bold w-full text-center'>Enquire Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <CareerOptions careerOptionsData={props.history.location.careerOptionsData} />
                </div>
                <div>
                    <WhyJoin />
                </div>
                <div>
                    <CertificatesYouEarn />
                </div>
            </section>
        </React.Fragment >
    )
}

export default withRouter(CourseDetailView);