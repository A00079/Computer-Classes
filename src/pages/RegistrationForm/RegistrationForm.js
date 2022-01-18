import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

const ResgistraForm = (props) => {

    const [input, setInput] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleFormSubmit = () =>{
        console.log('Data',input);
    }
    return (
        <React.Fragment>
            <div class="min-h-screen py-28 px-5 bg-gray-100 flex items-center justify-center">
                <div class="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 class="font-semibold text-xl text-gray-600">Student Admission Form</h2>
                        <p class="text-gray-500 mb-6">This Form is applicable for all of those who wants to take admission.</p>

                        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div class="text-gray-600">
                                    <p class="font-medium text-lg">Personal Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div class="lg:col-span-2">
                                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div class="md:col-span-3">
                                            <label for="full_name">Name of Student (Surname / Name / Father Name)</label>
                                            <input onChange={handleInputChange} type="text" name="name_of_student" id="name_of_student" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>
                                        <div class="md:col-span-5">
                                            <label for="address">Address / Street</label>
                                            <textarea onChange={handleInputChange} type="text" name="address" id="address" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-20 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                        </div>
                                        <div class="md:col-span-2">
                                            <label for="city">City</label>
                                            <input onChange={handleInputChange} type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                                        </div>
                                        <div class="md:col-span-1">
                                            <label for="zipcode">Zipcode</label>
                                            <input onChange={handleInputChange} type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""  />
                                        </div>
                                        <div class="md:col-span-2">
                                            <label for="email">Email Address</label>
                                            <input onChange={handleInputChange} type="text" name="email" id="email" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                        </div>

                                        <div class="md:col-span-2">
                                            <label for="city">Mobile No.</label>
                                            <input onChange={handleInputChange} type="number" name="mobile_no" id="mobile_no" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                                        </div>
                                        <div class="md:col-span-1">
                                            <label for="city">Age</label>
                                            <input onChange={handleInputChange} type="number" name="age" id="age" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                                        </div>
                                        <div class="md:col-span-2">
                                            <div class="datepicker relative form-floating" data-mdb-toggle-button="false">
                                                <label for="floatingInput" >Date Of Birth</label>
                                                <input type="date"
                                                    onChange={handleInputChange}
                                                    name="dob" id="dob"
                                                    style={{ height: '2.5rem' }}
                                                    class="form-control block w-full mt-1 px-3 text-base bg-gray-50 font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    placeholder="Select a date" data-mdb-toggle="datepicker" />
                                            </div>
                                        </div>

                                        <div class="md:col-span-2">
                                            <label for="full_name">Qualification</label>
                                            <textarea onChange={handleInputChange} type="text" name="qualification" id="qualification" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-20 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>
                                        <div class="md:col-span-2">
                                            <label for="full_name">Additional Qualification</label>
                                            <textarea onChange={handleInputChange} type="text" name="additional_qualification" id="additional_qualification" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-20 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>
                                        <div class="md:col-span-3">
                                            <label for="full_name">Refrence</label>
                                            <input onChange={handleInputChange} type="text" name="refrence" id="refrence" class="focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>
                                        <div class="md:col-span-2">
                                            <div class="datepicker relative form-floating" data-mdb-toggle-button="false">
                                                <label for="floatingInput" >Date</label>
                                                <input type="date"
                                                    style={{ height: '2.5rem' }}
                                                    onChange={handleInputChange}
                                                    name="date"
                                                    id='date'
                                                    class="form-control block w-full mt-1 px-3 text-base bg-gray-50 font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    placeholder="Select a date" data-mdb-toggle="datepicker" />
                                            </div>
                                        </div>

                                        <div class="md:col-span-5 text-right">
                                            <div class="inline-flex items-end">
                                                <Link to='/'>
                                                    <button class="mr-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
                                                </Link>
                                                <button onClick={() => { handleFormSubmit() }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
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