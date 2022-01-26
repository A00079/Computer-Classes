import React from 'react';
import { withRouter } from "react-router";
import Marquee from "react-fast-marquee";

function LearnerPartners(props) {

    return (
        <section >
            <div className='flex flex-col bg-gray-100  py-4 sm:flex-row justify-start items-center  p-2'>
                <div className='text-xl text-gray-800 font-bold sm:bg-gray-200 p-4 py-5'>
                    Our Learner Partners
                </div>
                <div>
                    <Marquee>
                        <div className='flex flex-row justify-between items-center space-x-5 sm:space-x-40'>
                            <img class="sm:w-28 w-14 pt-3 object-cover object-center" src="/img/partners/candidleads.jpeg" alt="blog" />
                            <img class="sm:w-12 w-14 object-cover object-center" src="/img/partners/creditbuddy-logo.png" alt="blog" />
                            <img class="sm:w-28 w-14 pt-3 object-cover object-center" src="/img/partners/creditbiddy.png" alt="blog" />
                        </div>
                    </Marquee>
                </div>
            </div>

        </section >
    )
}

export default withRouter(LearnerPartners);
