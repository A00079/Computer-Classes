import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

const ResgistraForm = (props) => {
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
            <div class="min-h-screen py-28 px-5 bg-gray-100 flex items-center justify-center">
                <div class="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 class="font-semibold text-xl text-gray-600">Career Guidence Form</h2>
                        <p class="text-gray-500 mb-6">Courses in other domains by us.</p>

                        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div class="text-gray-600">
                                    <p class="font-medium text-lg">Enquire Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div class="lg:col-span-2">
                                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
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
                                            <input onChange={handleInputChange} type="number" name="mobile_no" id="mobile_no" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                                        </div>
                                        <div class="md:col-span-2">
                                            <label for="course">Select You Course Category</label>
                                            <select onChange={handleInputChange}  name="course" id="course" className='focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-1 w-full bg-gray-50'>
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
                                        <div class="md:col-span-5 text-right">
                                            <div class="inline-flex items-end">
                                                <Link to='/'>
                                                    <button class="mr-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
                                                </Link>
                                                <button onClick={() => { handleFormSubmit() }}  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                            </div>
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

export default withRouter(ResgistraForm);