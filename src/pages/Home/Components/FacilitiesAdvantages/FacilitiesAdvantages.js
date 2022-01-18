import React from 'react';


function FacilitiesAdvantages() {
    return (
        <section>
            <div class="grid grid-cols-12 py-20">
                <div class="sm:col-span-6 col-span-12">
                    <div class="w-full bg-center bg-cover h-auto" style={{ backgroundImage: 'url(img/counselling.jpg)' }}>
                        <div className='opacity-75 cursor-pointer bg-black hover:opacity-90 h-auto w-full p-16'>
                            <div className='flex flex-col justify-start items-start'>
                                <div className='text-white font-bold text-4xl'>FACILITIES</div>
                                <div className='mt-16 ml-4 pb-20'>
                                    <ul style={{ listStyleType: 'square' }} className='space-y-4'>
                                        <li className='text-white font-bold text-md'>Right Career Counselling.</li>
                                        <li className='text-white font-bold text-md'>Small Batches For Personalised Attention.</li>
                                        <li className='text-white font-bold text-md'>Free Lifetime Practicals.</li>
                                        <li className='text-white font-bold text-md'>Free Lifetime Upgradation Of Course.</li>
                                        <li className='text-white font-bold text-md'>Free Lifetime Repetion Of Course.</li>
                                        <li className='text-white font-bold text-md'>Free Stydy Material.</li>
                                        <li className='text-white font-bold text-md'>100% Job  Placement.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sm:col-span-6 col-span-12">
                    <div class="w-full bg-center bg-cover h-auto" style={{ backgroundImage: 'url(img/certified.jpg)' }}>
                        <div className='opacity-75 bg-black hover:opacity-90 h-auto w-full p-16'>
                            <div className='flex flex-col justify-start items-start'>
                                <div className='text-white font-bold text-4xl'>ADVANTAGES</div>
                                <div className='mt-16 ml-4'>
                                    <ul style={{ listStyleType: 'square' }} className='space-y-4'>
                                        <li className='text-white font-bold text-md'>Certified Faculity</li>
                                        <li className='text-white font-bold text-md'>International Certification.</li>
                                        <li className='text-white font-bold text-md'>East-To-Understand Study And Refrence Notes.</li>
                                        <li className='text-white font-bold text-md'>E-Learning Support</li>
                                        <li className='text-white font-bold text-md'>Industrial Support</li>
                                        <li className='text-white font-bold text-md'>Gust Lecture</li>
                                        <li className='text-white font-bold text-md'>Counselling Methodology at I-Tech Computer Education.</li>
                                        <li className='text-white font-bold text-md'>English Speaking And Personality Development.</li>
                                        <li className='text-white font-bold text-md'>Interview technique Lectures.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FacilitiesAdvantages;
