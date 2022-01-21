import React from 'react';
import { withRouter } from "react-router";
import Marquee from "react-fast-marquee";

function LearnerPartners(props) {

    return (
        <section >
            <div className='flex flex-row justify-start items-center  p-2'>
                <div className='text-xl text-gray-800 font-bold bg-gray-200 p-4 py-5'>
                    Our Learner Partners
                </div>
                <div>
                    <Marquee>
                        <div className='flex flex-row justify-between items-center space-x-5 sm:space-x-20'>
                            <img class="sm:w-28 w-14 object-cover object-center" src="/img/partners/adidas.png" alt="blog" />
                            <img class="sm:w-28 w-14 object-cover object-center" src="/img/partners/nike.png" alt="blog" />
                            <img class="sm:w-28 w-14 object-cover object-center" src="/img/partners/audi.png" alt="blog" />
                            <img class="sm:w-28 w-14 object-cover object-center" src="/img/partners/puma.png" alt="blog" />
                        </div>
                    </Marquee>
                </div>
            </div>

        </section >
    )
}

export default withRouter(LearnerPartners);
