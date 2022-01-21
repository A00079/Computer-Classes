import React from 'react';


function FacilitiesAdvantages() {
    return (
        <section>
            {/* <div class="grid grid-cols-12 py-20">
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
            </div> */}

            <div class="container px-4 mx-auto">
                <div class="max-w-xl mx-auto mb-16 lg:mb-12 text-center">
                    <span class="text-lg font-bold text-blue-500">DCS Pros & Cons</span>
                    <h2 class="mt-2 mb-12 text-4xl font-bold text-gray-500 font-heading">FACILITIES & ADVANTAGES</h2>
                </div>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 sm:border-r sm:border-gray-300 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left sm:mb-16 mb-6 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-600">DCS
                            <br class="inline-block" /><span className='text-gray-600'>FACILITIES</span>                         </h1>
                        <p class="sm:mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full px-5">

                        <div className='flex flex-col sm:flex-row justify-between items-center'>
                            <div className='flex flex-col items-center'>
                                {
                                    ['Right Career Counselling.', 'Small Batches For Personalised Attention.', 'Free Lifetime Practicals.', 'Free Lifetime Upgradation Of Course.'].map((el, index) => {
                                        return (
                                            <div class="w-full">
                                                <div class="h-full flex items-center  p-2 rounded-lg">
                                                    <svg class="w-6 h-6 mr-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                                    <div class="flex-grow">
                                                        <h2 class="text-gray-900 sm:text-xs text-lg font-medium">{el}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='flex flex-col items-center'>
                                {
                                    ['Free Lifetime Repetion Of Course.', 'Free Stydy Material.', '100% Job  Placement.'].map((el, index) => {
                                        return (
                                            <div class="w-full">
                                                <div class="h-full flex items-center  p-2 rounded-lg">
                                                    <svg class="w-6 h-6 mr-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                                    <div class="flex-grow">
                                                        <h2 class="text-gray-900 sm:text-xs text-lg font-medium">{el}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="hidden sm:block text-gray-600 body-font py-5">
                <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 border-r border-gray-300 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-col items-center'>
                                {
                                    ['Certified Faculity', 'International Certification.', 'East-To-Understand Study And Refrence Notes.', 'E-Learning Support', 'Industrial Support'].map((el, index) => {
                                        return (
                                            <div class="w-full">
                                                <div class="h-full flex items-center  p-2 rounded-lg">
                                                    <svg class="w-6 h-6 mr-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                                    <div class="flex-grow">
                                                        <h2 class="text-gray-900 sm:text-xs text-lg font-medium">{el}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='flex flex-col items-center'>
                                {
                                    ['Gust Lecture', 'Counselling Methodology at I-Tech Computer Education.', 'English Speaking And Personality Development.', 'Interview technique Lectures.'].map((el, index) => {
                                        return (
                                            <div class="w-full">
                                                <div class="h-full flex items-center  p-2 rounded-lg">
                                                    {/* <img alt="team" class="w-8 h-8 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src="https://dummyimage.com/84x84" /> */}
                                                    <svg class="w-6 h-6 mr-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                                    <div class="flex-grow">
                                                        <h2 class="text-gray-900 sm:text-xs text-lg font-medium">{el}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 px-5">
                        <h1 class="title-font sm:text-4xl text-3xl text-right mb-4 font-bold text-indigo-600">DCS
                            <br class="hidden lg:inline-block" /><span className='text-gray-600'>ADVANTAGES</span>                         </h1>
                        <p class="mb-8 leading-relaxed text-right">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    </div>
                </div>
            </section>


            <section class="block sm:hidden text-gray-600 body-font py-20">
                <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl text-center mb-4 font-bold text-indigo-600">DCS
                            <br class="inline-block" /><span className='text-gray-600'>ADVANTAGES</span>                         </h1>
                        <p class="mb-8 leading-relaxed text-center">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full px-5">
                        <div className='flex flex-col sm:flex-row justify-between items-center'>
                            <div className='flex flex-col items-center'>
                                {
                                    ['Certified Faculity', 'International Certification.', 'East-To-Understand Study And Refrence Notes.', 'E-Learning Support', 'Industrial Support'].map((el, index) => {
                                        return (
                                            <div class="w-full">
                                                <div class="h-full flex items-center  p-2 rounded-lg">
                                                    <svg class="w-6 h-6 mr-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                                    <div class="flex-grow">
                                                        <h2 class="text-gray-900 sm:text-xs text-lg font-medium">{el}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='flex flex-col items-center'>
                                {
                                    ['Gust Lecture', 'Counselling Methodology at I-Tech Computer Education.', 'English Speaking And Personality Development.', 'Interview technique Lectures.'].map((el, index) => {
                                        return (
                                            <div class="w-full">
                                                <div class="h-full flex items-center  p-2 rounded-lg">
                                                    {/* <img alt="team" class="w-8 h-8 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src="https://dummyimage.com/84x84" /> */}
                                                    <svg class="w-6 h-6 mr-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                                    <div class="flex-grow">
                                                        <h2 class="text-gray-900 sm:text-xs text-lg font-medium">{el}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default FacilitiesAdvantages;
