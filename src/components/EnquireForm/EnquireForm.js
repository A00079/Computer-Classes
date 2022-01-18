import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

const EnquireForm = (props) => {
    const [input, setInput] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleFormSubmit = () => {
        console.log('Data', input);
    }
    return (
        <React.Fragment>
            <h2 class="font-semibold text-3xl px-10 text-center text-gray-600">Effective Ways To Get More out of <span className='text-blue-500'>{props.courseData.title}</span> Course by DCS class</h2>
            <div class="flex items-center bg-white justify-center">
                <div class="container mx-auto">
                    <div>
                        {/* <p class="text-gray-500 mb-6 text-center">Courses in other domains by us.</p> */}

                        <div class="bg-white rounded  p-8 mb-6">
                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-12">
                                <div class="lg:col-span-6 col-span-12 ">
                                    <div class="grid gap-4 bg-gray-300 shadow-xl border border-gray-300 p-4 rounded-md gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div class="md:col-span-3">
                                            <label for="full_name">Name of Student (Surname / Name / Father Name)</label>
                                            <input onChange={handleInputChange} type="text" name="name_of_student" id="name_of_student" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>
                                        {/* <div class="md:col-span-5">
                                            <label for="address">Address / Street</label>
                                            <textarea type="text" name="address" id="address" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-20 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                        </div> */}
                                        {/* <div class="md:col-span-2">
                                            <label for="city">City</label>
                                            <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                        </div> */}
                                        {/* <div class="md:col-span-1">
                                            <label for="zipcode">Zipcode</label>
                                            <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                                        </div> */}
                                        <div class="md:col-span-3">
                                            <label for="email">Email Address</label>
                                            <input onChange={handleInputChange} type="text" name="email" id="email" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                        </div>

                                        <div class="md:col-span-2">
                                            <label for="city">Mobile No.</label>
                                            <input onChange={handleInputChange} type="number" name="mobile_no" id="mobile_no" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                        </div>
                                        <div class="md:col-span-2">
                                            <label for="course">Select You Course Category</label>
                                            <select onChange={handleInputChange} name="course" id="course" className='focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-1 w-full bg-gray-50'>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                        <div class="md:col-span-2">
                                            <label for="state">City/Center</label>
                                            <input onChange={handleInputChange} type="text" name="city" id="city" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                        </div>
                                        <div class="md:col-span-2">
                                            <label for="state">State</label>
                                            <input onChange={handleInputChange} type="text" name="state" id="state" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                        </div>
                                        <div class="md:col-span-4 mt-2">
                                            <p className='text-xs font-medium text-gray-500 '>By Clicking on submit. I allow aptech to contact me and use & share my personal data as per the  Privacy Policy.</p>
                                        </div>
                                        <div class="md:col-span-5 text-right  w-full">
                                            <div class="inline-flex items-end">
                                                <Link to='/'>
                                                    <button class="mr-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
                                                </Link>
                                                <button onClick={() => { handleFormSubmit() }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-gray-600 lg:col-span-6 col-span-12">
                                    <p className='bg-yellow-400 text-black py-2 px-2 w-full rounded-sm text-sm font-bold'>Don't Waste Time! 5 Facts To Start {props.courseData.title} COURSE right Now</p>
                                    <div className='flex flex-col justify-start items-start mt-6 space-y-3'>
                                        {
                                            ['Not getting Job anywhere due to lack of Industrial skills!', 'Struggling with a low paying Job!', 'Want to arise from Single Figure salary to high paying job?', 'Got right Products but No idea about how to reach customers and sell', 'Spending lot of time and money on traditional way of marketing but getting no results at all.'].map((el, index) => {
                                                return (
                                                    <div key={index} className='flex flex-row justyify-start items-center space-x-3'>
                                                        <div><svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg></div>
                                                        <div className='text-sm font-semibold text-gray-600'>{el}</div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                    <div className='flex flex-col items-start mt-5 space-y-1'>
                                        <div>
                                            <p className='text-gray-600 font-bold text-sm'>Duration: <span className='text-blue-500'>3 Months</span></p>
                                        </div>
                                        <div>
                                            <p className='text-gray-600 font-bold text-sm'>Certification: <span className='text-blue-500'>FastInfo Class</span></p>
                                        </div>
                                        <div>
                                            <p className='text-gray-600 font-bold text-sm'>Monthly Fee:<span className='text-blue-500'> 499/-</span></p>
                                        </div>
                                        <div>
                                            <p className='text-gray-600 font-bold text-sm'>Admission Fee:<span className='text-blue-500'> 999/-</span></p>
                                        </div>
                                        <div>
                                            <p className='text-gray-600 font-bold text-sm'>Eligibility Age:<span className='text-blue-500'> 3 to 16 years</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default withRouter(EnquireForm);