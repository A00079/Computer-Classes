import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";


function ResourcesInsights(props) {

    const [courseDiplomaData, setCourseData] = useState([
        {
            'title': 'Diploma In MS-Office',
            'sub_title': 'DIPLOMA',
            'img': 'img/c1.png',
            'list': ['Computer Fundamental', 'Typing Tutorial', 'Windos', 'MS Paint / WordPad', 'MS Word', 'MS Excel', 'MS PowerPoint', 'MS Access (Database Concept)', 'Internet', 'Hardware Concept', 'Software Installation']
        },
        {
            'title': 'Diploma In Accounting (Tally)',
            'sub_title': 'DIPLOMA',
            'list': ['Accounting Concepts', 'Computerrized Accounting', 'Chart Of Accounts', 'Voucher And Invoice', 'Inventory MAster', 'Inventory Voucher', 'Bill Wise Details', 'Petty Cash', 'Bank Reconcillation', 'Interest Calculation', 'Texation (VAT,TDS,FBTService Tax)', 'Analysis & Reporting', 'Balance Sheet'],
            'img': 'img/c2.jpg',

        },
        {
            'title': 'Advance Excel',
            'sub_title': 'DIPLOMA',
            'list': ['Filteration Of Date', 'Pivot Table', 'MIS Report', 'Analis Report', 'Logical Function', 'Validation Of Data', 'Conditional Formatting', 'Micro With VB', 'Math And Trig', 'Micro', 'H LookUp', 'V LookUp', 'DataBase', 'FrontEnd', 'Backend'],
            'img': 'img/c3.jpg',

        },
        {
            'title': 'Advance Tally With G.S.T',
            'sub_title': 'DIPLOMA',
            'list': ['Inventory And Accounting', 'Bank Reconcillacition (BRS)', 'Advance Financial Management', 'Cheque Rrinting', 'Excise For Dealer/ Manuture', 'Concept Of G.S.T', 'MultiTaxation On G.S.T', 'Point Of Sales in G.S.T', 'Service Tax On G.S.T', 'Payroll Compliance', 'Balance Sheet & MIS'],
            'img': 'img/c4.jpg',
        }]);

    const [courseITechData, setCourseITechData] = useState([
        {
            'title': 'A+ (HardWare)',
            'sub_title': 'HARDWARE',
            'img': 'img/c1.png',
            'list': ['Computer Architecture and Parts Storage Device', 'Assembling Of Computer', 'Partitioning & Formating Hardisk', 'Installation of Software and Anti-Virus', 'Different Types Of Laptop Components', 'Laptop Assembling & Reparing', 'TroubleShooting & NetWork Concept']
        },
        {
            'title': 'N+ NetWorking',
            'sub_title': 'NETWORKING',
            'list': ['Networking Standards & Topologies', 'IP Addressing & Creating Subnets', 'Windows Server 2003 Networking', 'Managing Domains User  & Group', 'File & Folder Sharing, NT Backup', 'Managing Access Point & Wireless LAN', 'Troubleshooting Networking'],
            'img': 'img/c2.jpg',

        },
        {
            'title': 'MCSE Excel (Microsoft Certified Software Engineering)',
            'sub_title': 'SOFTWARE ENGINEER',
            'list': ['70-410: Installing And Configuring Windows Server 2012', '70:411: Administering Windows Server 2012', '70:412: Configuring Advance Windows Server 2012 Service', 'Designing And Implementing a Server Infrastructure', '70:622: Micro Exchange Server 2010 Configuring'],
            'img': 'img/c3.jpg',

        },
        {
            'title': 'CCNA (Cisco Certified Network Associate)',
            'sub_title': 'NETWORK ASSOCIATE',
            'list': ['Networking', 'OSI Model, IP Addressing and VLSM', 'Configuring Router & Switch , Setting UP Routing methods', 'Managing CISCO Router, Managing Traffic With Acces limit', 'Loading IOS Backup Configuration', 'IPV6 And Wireless Networking', 'Concept Of Frame Relay, ISDN & DDR'],
            'img': 'img/c4.jpg',
        }
    ]);

    const [courseITechSoftwareData, setCourseITechSoftwareData] = useState([
        {
            'title': 'Diploma In Web Programming',
            'sub_title': 'DIPLOMA',
            'img': 'img/c1.png',
            'list': ['Internet Operatino', 'HTML DHTML', 'Javascript', 'XML', 'FTP (File Transter Protocol)', 'Assignment And Projects']
        },
        {
            'title': 'Programming Langauge',
            'sub_title': 'PROGRAMMING',
            'list': ['Programming Logic & Techniques', 'C Programming', 'C++ Programming', 'Assignment And Projects'],
            'img': 'img/c2.jpg',
        },
        {
            'title': 'JAVA Specialist',
            'sub_title': 'JAVA',
            'list': ['Oracle', 'Core Java', 'Advance Java(Beans, RMI,  and JSP)', 'Assignment And Projects'],
            'img': 'img/c3.jpg',

        },
        {
            'title': '.NET Specialist',
            'sub_title': '.NET',
            'list': ['VB .NET', 'C# .NET', 'ASP .NET IIS', 'SQL Server', 'Assignment And Projects'],
            'img': 'img/c4.jpg',
        }
    ]);

    const [courseITechAnimationData, setCourseITechAnimationData] = useState([
        {
            'title': 'Graphics In Web Programming',
            'sub_title': 'GRAPHICS',
            'img': 'img/c1.png',
            'list': ['Foundation Of Graphics Designing', 'Photoshop', 'Corel Draw', 'Indesign', 'Illustrator', 'HTML & DreamViwer', 'Flash With Action Script']
        },
        {
            'title': '2D Animation And Audio / Video Editing',
            'sub_title': '2D ANIMATION',
            'list': ['Drawing Colour & Anatomy', 'Concept Of Animation', 'Cinematograpy', 'Still Photography', 'StoryBoard & Animatic Design Using Flash', 'Introduction To Audio/ Video Editing', 'Sound Editing & Mixing With SoundBooth', 'Video Editing With Adobe Premiere'],
            'img': 'img/c2.jpg',
        },
        {
            'title': '3D Visualisation & Animation',
            'sub_title': 'VISUALISATION',
            'list': ['Concept Of Flim Making', 'Production Pipline In 3D Animation', 'Acting for Animation', 'Digital Matte Painting Using PhotoShop', 'Clay Modling & Clay Animation', '3Ds Max', 'Charactor Studio', 'mud Box'],
            'img': 'img/c3.jpg',

        },
        {
            'title': '3D Animation & Special Effects',
            'sub_title': '3D ANIMATION',
            'list': ['3D Modeling, Texturing , Lighting And Maya', '3D Animation and Dynamics using Maya', 'Concept Of Motion Graphics Design', 'After Effect', 'Fusion'],
            'img': 'img/c4.jpg',
        }
    ]);

    const [isVisibleAllCourses, setIsVisibleAllCourses] = useState(false);

    const handleAllCourseVisible = () => {
        setIsVisibleAllCourses(!isVisibleAllCourses);
    }


    const handleDetaileCourseView = (coursesData, title) => {
        props.history.push({ pathname: '/course-detail-view', state: coursesData, title: title })
    }

    return (
        <div>
            <section class="text-gray-600 bg-indigo-50 py-16 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap w-full mb-10">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-blue-600">Resources and Insights</h1>
                            <div class="h-1 w-20 bg-blue-500 rounded"></div>
                        </div>
                    </div>
                    <div className='text-2xl mb-4 font-bold text-gray-500 py-3 flex flex-row justify-between items-center'>

                        <p className='ml-3 flex flex-row justify-start items-center'>
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                            Diploma In Ms-Office & Tally
                            {/* <div class="h-1 w-40 bg-blue-300 rounded"></div> */}
                        </p>
                        {/* <button onClick={() => handleAllCourseVisible()} className='ml-3 bg-black text-white rounded-sm text-sm px-4 py-2 font-bold'>
                            {
                                isVisibleAllCourses ? "Show Less" : "View All Courses"
                            }
                        </button> */}
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {
                            courseDiplomaData.slice(0, 4).map((el, index) => {
                                return (
                                    <div class="xl:w-1/4 md:w-1/2 p-4">
                                        <div class="bg-white border-2 cursor-pointer hover:border-indigo-400 hover:shadow-2xl p-4 pb-3 rounded-lg shadow-xl">
                                            <img class="h-40 rounded w-full object-cover object-center mb-6" src="img/c1.png" alt="content" />
                                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{el.sub_title}</h3>
                                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{el.title}</h2>
                                            <ul class="leading-relaxed text-base space-y-1  scroll h-36 overflow-y-auto">
                                                {
                                                    el.list.map((ell, index_list) => {
                                                        return (
                                                            <li className='text-xs font-bold text-gray-600'>- {ell}</li>
                                                        )
                                                    })
                                                }
                                                <li></li>
                                            </ul>
                                            <p className='cursor-pointer hover:text-black hover:bg-yellow-400  text-center bg-indigo-600 text-xs text-white font-bold mt-5 py-2'>View Details</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='py-8 flex flex-row justify-end items-end'>
                        <button onClick={() => { handleDetaileCourseView(courseDiplomaData, 'Diploma In Ms-Office & Tally') }} className='bg-black text-white rounded-sm text-sm px-4 py-2 font-bold'>
                            View All ({courseDiplomaData.length})
                        </button>
                    </div>
                    {
                        isVisibleAllCourses ?
                            <div>
                                <div className='text-2xl mb-4 py-5 font-bold text-gray-500 py-3 flex flex-row justify-start items-center'>
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                                    <p className='ml-3'>I Tech Certified HardWare And NetWork Engineer
                                        {/* <div class="h-1 w-40 bg-blue-300 rounded"></div> */}
                                    </p>
                                </div>
                                <div class="flex flex-wrap -m-4">
                                    {
                                        courseITechData.map((el, index) => {
                                            return (
                                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                                    <div class="bg-white  border-2 cursor-pointer hover:border-indigo-400 hover:shadow-2xl p-4 rounded-lg shadow-xl">
                                                        <img class="h-40 rounded w-full object-cover object-center mb-6" src="img/c1.png" alt="content" />
                                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{el.sub_title}</h3>
                                                        <h2 class=" h-20 text-lg text-gray-900 font-medium title-font mb-4">{el.title}</h2>
                                                        <ul class="leading-relaxed text-base space-y-1  scroll h-36 overflow-y-auto">
                                                            {
                                                                el.list.map((ell, index_list) => {
                                                                    return (
                                                                        <div className='flex flex-row items-end'>
                                                                            <span>-</span>
                                                                            <li className='text-xs text-left font-bold text-gray-600'>{ell}</li>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                            <li></li>
                                                        </ul>
                                                        <p className='cursor-pointer hover:text-black hover:bg-yellow-400  text-center bg-indigo-600 text-xs text-white font-bold mt-5 py-2'>View Details</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='py-8 flex flex-row justify-end items-end'>
                                    <button onClick={() => { handleDetaileCourseView(courseITechData, 'I Tech Certified HardWare And NetWork Engineer') }} className='bg-black text-white rounded-sm text-sm px-4 py-2 font-bold'>
                                        View All
                                    </button>
                                </div>
                                <div className='text-2xl mb-4 py-5 font-bold text-gray-500 py-3 flex flex-row justify-start items-center'>
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                                    <p className='ml-3'>I Tech Certified SoftWare Engineering
                                        {/* <div class="h-1 w-40 bg-blue-300 rounded"></div> */}
                                    </p>
                                </div>
                                <div class="flex flex-wrap -m-4">
                                    {
                                        courseITechSoftwareData.map((el, index) => {
                                            return (
                                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                                    <div class="bg-white border-2 cursor-pointer hover:border-indigo-400 hover:shadow-2xl p-4 rounded-lg shadow-xl">
                                                        <img class="h-40 rounded w-full object-cover object-center mb-6" src="img/c1.png" alt="content" />
                                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{el.sub_title}</h3>
                                                        <h2 class=" h-14 text-lg text-gray-900 font-medium title-font mb-4">{el.title}</h2>
                                                        <ul class="leading-relaxed text-base space-y-1  scroll h-36 overflow-y-auto">
                                                            {
                                                                el.list.map((ell, index_list) => {
                                                                    return (
                                                                        <li className='text-xs font-bold text-gray-600'>- {ell}</li>
                                                                    )
                                                                })
                                                            }
                                                            <li></li>
                                                        </ul>
                                                        <p className='cursor-pointer hover:text-black hover:bg-yellow-400  text-center bg-indigo-600 text-xs text-white font-bold mt-5 py-2'>View Details</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='py-8 flex flex-row justify-end items-end'>
                                    <button onClick={() => { handleDetaileCourseView(courseITechSoftwareData, 'I Tech Certified SoftWare Engineering') }} className='bg-black text-white rounded-sm text-sm px-4 py-2 font-bold'>
                                        View All
                                    </button>
                                </div>
                                <div className='text-2xl mb-4 py-5 font-bold text-gray-500 py-3 flex flex-row justify-start items-center'>
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                                    <p className='ml-3'>I Tech Certified Animation Programs
                                        {/* <div class="h-1 w-40 bg-blue-300 rounded"></div> */}
                                    </p>
                                </div>
                                <div class="flex flex-wrap -m-4">
                                    {
                                        courseITechAnimationData.map((el, index) => {
                                            return (
                                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                                    <div class="bg-white border-2 cursor-pointer hover:border-indigo-400 hover:shadow-2xl p-4 rounded-lg shadow-xl">
                                                        <img class="h-40 rounded w-full object-cover object-center mb-6" src="img/c1.png" alt="content" />
                                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{el.sub_title}</h3>
                                                        <h2 class=" h-14 text-lg text-gray-900 font-medium title-font mb-4">{el.title}</h2>
                                                        <ul class="leading-relaxed text-base space-y-1  scroll h-36 overflow-y-auto">
                                                            {
                                                                el.list.map((ell, index_list) => {
                                                                    return (
                                                                        <li className='text-xs font-bold text-gray-600'>- {ell}</li>
                                                                    )
                                                                })
                                                            }
                                                            <li></li>
                                                        </ul>
                                                        <p className='cursor-pointer hover:text-black hover:bg-yellow-400  text-center bg-indigo-600 text-xs text-white font-bold mt-5 py-2'>View Details</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='py-8 flex flex-row justify-end items-end'>
                                    <button onClick={() => { handleDetaileCourseView(courseITechAnimationData, 'I Tech Certified Animation Programs') }} className='bg-black text-white rounded-sm text-sm px-4 py-2 font-bold'>
                                        View All
                                    </button>
                                </div>
                            </div> : ""
                    }

                </div>
            </section>
            <div className="bg-gray-100 overflow-y-hidden">
                <div className="mx-auto container py-12 px-4">
                    <div className="w-full flex justify-center">
                        <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
                            <div>
                                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                                    <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                                        <div>
                                            <h1 role="heading" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">Become a member and start building the next big thing</h1>
                                        </div>
                                        <Link to='student-resgistration'>
                                            <button role="button" aria-label="Join the community" className="cursor-pointer mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none">Register Now</button>
                                        </Link>
                                    </div>
                                    <div className="md:w-1/3 w-2/3">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png" alt="cartoon avatars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ResourcesInsights)
