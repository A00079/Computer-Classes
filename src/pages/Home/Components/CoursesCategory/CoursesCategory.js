import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/coming-soon.json';
function CoursesCategory(props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const [courseDiplomaData, setCourseData] = useState([
        {
            'title': 'Diploma In MS-Office',
            'sub_title': 'DIPLOMA',
            'img': 'MS-Office.png',
            'list': ['Computer Fundamental', 'Typing Tutorial', 'Windos', 'MS Paint / WordPad', 'MS Word', 'MS Excel', 'MS PowerPoint', 'MS Access (Database Concept)', 'Internet', 'Hardware Concept', 'Software Installation']
        },
        {
            'title': 'Diploma In Accounting (Tally)',
            'sub_title': 'DIPLOMA',
            'list': ['Accounting Concepts', 'Computerrized Accounting', 'Chart Of Accounts', 'Voucher And Invoice', 'Inventory MAster', 'Inventory Voucher', 'Bill Wise Details', 'Petty Cash', 'Bank Reconcillation', 'Interest Calculation', 'Texation (VAT,TDS,FBTService Tax)', 'Analysis & Reporting', 'Balance Sheet'],
            'img': 'Accounting-Tally.png',

        },
        {
            'title': 'Advance Excel',
            'sub_title': 'DIPLOMA',
            'list': ['Filteration Of Date', 'Pivot Table', 'MIS Report', 'Analis Report', 'Logical Function', 'Validation Of Data', 'Conditional Formatting', 'Micro With VB', 'Math And Trig', 'Micro', 'H LookUp', 'V LookUp', 'DataBase', 'FrontEnd', 'Backend'],
            'img': 'Advance-Excel.png',

        },
        {
            'title': 'Advance Tally With G.S.T',
            'sub_title': 'DIPLOMA',
            'list': ['Inventory And Accounting', 'Bank Reconcillacition (BRS)', 'Advance Financial Management', 'Cheque Rrinting', 'Excise For Dealer/ Manuture', 'Concept Of G.S.T', 'MultiTaxation On G.S.T', 'Point Of Sales in G.S.T', 'Service Tax On G.S.T', 'Payroll Compliance', 'Balance Sheet & MIS'],
            'img': 'Tally-With-GST.png',
        }]);

    const [courseDiplomaCareerOptions, setCourseDiplomaCareerOptions] = useState([
        {
            'title': 'Computer Operator',
            'img': 'workingoncomputer.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Data Entry Operator',
            'img': 'dataentry.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Account Departmant Of Company',
            'img': 'AccountDepartmantOfCompany.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        }
    ])

    const [courseDigitalMarketingData, setCourseDigitalMarketData] = useState([
        {
            'title': 'Search Engine Optimization Course (SEO)',
            'sub_title': 'DIPLOMA',
            'img': 'Search-Engine-Optimization.png',
            'list': ['What is SEO , why it is important.', 'Tools to find Keywords (Paid & Free)', 'What is Google Adwords', 'Planning SEO of a website', 'What is Content Marketing', 'SEO & Webmaster Tools', 'Mobile SEO']
        },
        {
            'title': 'Google Adwords & Mobile Marketing (PPC)',
            'sub_title': 'DIPLOMA',
            'list': ['Online advertising & Ad Networks ', 'Creation of Search Campaigns', 'Writing Compelling Ad Copies', 'Creation of Effective Campaigns and Ad groups', 'Digital Display Campaigning ', 'Tracking & measuring ROI of online advertising', 'Optimizing Ad Performance ', 'Marketing budget to various online advertising platforms '],
            'img': 'Google-Adwords-Mobile-Marketing.png',
        },
        {
            'title': 'Social Media Optimization Course(SMO)',
            'sub_title': 'DIPLOMA',
            'list': ['Define the communication strategy', 'Setting up brand presence ', 'Social Listening ', 'Engaging with followers', '	Engagement on Social Media', 'Understanding Social Media'],
            'img': 'Social-Media-Optimization.png',
        },
        {
            'title': 'Google Analytics',
            'sub_title': 'DIPLOMA',
            'list': ['Fundamentals of Google analytics', 'Monitoring bounce rate', 'Tracing conversions ', 'Monitoring traffic source ', '	Monitoring visitors behavior ', 'Measuring and Monitoring metrics', 'Setting up Dashboards'],
            'img': 'Google-Analytics.png',
        },
        {
            'title': 'Email Marketing ',
            'sub_title': 'DIPLOMA',
            'list': ['Essentials of Writing a good emil', 'Segmentation of subscribers, Scheduling sending frequency', 'Split testing and A/B testing of campaign', 'Monitoring Email Campaign'],
            'img': 'Email-Marketing.png',
        }
    ]);
    const [courseDigitalMarketingCareerOptions, setCourseDigitalMarketingCareerOptions] = useState([
        {
            'title': 'Hardware Engineer',
            'img': 'engineers.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Network Support Engineer',
            'img': 'engineers.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Network Designer',
            'img': 'construction.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'System Engineer',
            'img': 'systemengineer-.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Network Administrator',
            'img': 'administrator.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Network Analyst',
            'img': 'analyst.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        }
    ])
    const [courseITechData, setCourseITechData] = useState([
        {
            'title': 'A+ (HardWare)',
            'sub_title': 'HARDWARE',
            'img': 'A-Hardware.png',
            'list': ['Computer Architecture and Parts Storage Device', 'Assembling Of Computer', 'Partitioning & Formating Hardisk', 'Installation of Software and Anti-Virus', 'Different Types Of Laptop Components', 'Laptop Assembling & Reparing', 'TroubleShooting & NetWork Concept']
        },
        {
            'title': 'N+ NetWorking',
            'sub_title': 'NETWORKING',
            'list': ['Networking Standards & Topologies', 'IP Addressing & Creating Subnets', 'Windows Server 2003 Networking', 'Managing Domains User  & Group', 'File & Folder Sharing, NT Backup', 'Managing Access Point & Wireless LAN', 'Troubleshooting Networking'],
            'img': 'N-Networking.png',

        },
        {
            'title': 'MCSE Excel (Microsoft Certified Software Engineering)',
            'sub_title': 'SOFTWARE ENGINEER',
            'list': ['70-410: Installing And Configuring Windows Server 2012', '70:411: Administering Windows Server 2012', '70:412: Configuring Advance Windows Server 2012 Service', 'Designing And Implementing a Server Infrastructure', '70:622: Micro Exchange Server 2010 Configuring'],
            'img': 'Msce-excel.png',

        },
        {
            'title': 'CCNA (Cisco Certified Network Associate)',
            'sub_title': 'NETWORK ASSOCIATE',
            'list': ['Networking', 'OSI Model, IP Addressing and VLSM', 'Configuring Router & Switch , Setting UP Routing methods', 'Managing CISCO Router, Managing Traffic With Acces limit', 'Loading IOS Backup Configuration', 'IPV6 And Wireless Networking', 'Concept Of Frame Relay, ISDN & DDR'],
            'img': 'CCNA.png',
        }
    ]);
    const [courseTechHardwareCareerOptions, setCourseTexhHardwareCareerOptions] = useState([
        {
            'title': 'Hardware Engineer',
            'img': 'engineers.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Network Support Engineer',
            'img': 'engineers.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Network Designer',
            'img': 'construction.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'System Engineer',
            'img': 'systemengineer-.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Network Administrator',
            'img': 'administrator.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Network Analyst',
            'img': 'analyst.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        }
    ])

    const [courseITechSoftwareData, setCourseITechSoftwareData] = useState([
        {
            'title': 'Diploma In Web Programming',
            'sub_title': 'DIPLOMA',
            'img': 'Dip-web-programing.png',
            'list': ['Internet Operatino', 'HTML DHTML', 'Javascript', 'XML', 'FTP (File Transter Protocol)', 'Assignment And Projects']
        },
        {
            'title': 'Programming Langauge',
            'sub_title': 'PROGRAMMING',
            'list': ['Programming Logic & Techniques', 'C Programming', 'C++ Programming', 'Assignment And Projects'],
            'img': 'Programing-Langauge.png',
        },
        {
            'title': 'JAVA Specialist',
            'sub_title': 'JAVA',
            'list': ['Oracle', 'Core Java', 'Advance Java(Beans, RMI,  and JSP)', 'Assignment And Projects'],
            'img': 'Java-Specialist.png',

        },
        {
            'title': '.NET Specialist',
            'sub_title': '.NET',
            'list': ['VB .NET', 'C# .NET', 'ASP .NET IIS', 'SQL Server', 'Assignment And Projects'],
            'img': 'NET-Specialist.png',
        }
    ]);
    const [courseTechSoftwareCareerOptions, setCourseTechSoftwareCareerOptions] = useState([
        {
            'title': 'Web  Programmer',
            'img': 'webprogrammer.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'System Programmer',
            'img': 'SystemProgrammer.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'System Analyst',
            'img': 'analyst.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Software Developer',
            'img': 'SoftwareDeveloper.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Database Designer',
            'img': 'database.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Project Manager',
            'img': 'manager.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
    ])

    const [courseITechAnimationData, setCourseITechAnimationData] = useState([
        {
            'title': 'Graphics In Web Programming',
            'sub_title': 'GRAPHICS',
            'img': 'Graphic-Web-Programming.png',
            'list': ['Foundation Of Graphics Designing', 'Photoshop', 'Corel Draw', 'Indesign', 'Illustrator', 'HTML & DreamViwer', 'Flash With Action Script']
        },
        {
            'title': '2D Animation And Audio / Video Editing',
            'sub_title': '2D ANIMATION',
            'list': ['Drawing Colour & Anatomy', 'Concept Of Animation', 'Cinematograpy', 'Still Photography', 'StoryBoard & Animatic Design Using Flash', 'Introduction To Audio/ Video Editing', 'Sound Editing & Mixing With SoundBooth', 'Video Editing With Adobe Premiere'],
            'img': '2D-ANIM-Audio- Video-Editing.png',
        },
        {
            'title': '3D Visualisation & Animation',
            'sub_title': 'VISUALISATION',
            'list': ['Concept Of Flim Making', 'Production Pipline In 3D Animation', 'Acting for Animation', 'Digital Matte Painting Using PhotoShop', 'Clay Modling & Clay Animation', '3Ds Max', 'Charactor Studio', 'mud Box'],
            'img': '3D-Visualisation-Ani.png',

        },
        {
            'title': '3D Animation & Special Effects',
            'sub_title': '3D ANIMATION',
            'list': ['3D Modeling, Texturing , Lighting And Maya', '3D Animation and Dynamics using Maya', 'Concept Of Motion Graphics Design', 'After Effect', 'Fusion'],
            'img': '3D-Ani-Special-Effects.png',
        }
    ]);

    const [courseTechAnimationCareerOptions, setCourseTechAnimationCareerOptions] = useState([
        {
            'title': 'Graphics Designer',
            'img': 'graphic-designer.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': '2D & 3D Animator',
            'img': '3d-movie.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Audio & Video Editor',
            'img': 'film-editor.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Web Designer',
            'img': 'SoftwareDeveloper.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Special Effects Artist',
            'img': 'effect-artist.png',

            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        },
        {
            'title': 'Motion Effects Artist',
            'img': 'motion-artist.png',
            'summary': 'A computer operator is an IT professional who supervises the operation of computer systems and ensures that the machine???s computers are working properly.'
        }
    ])

    const handleDetaileCourseView = (title) => {
        let courses_Data = '';
        let course_title = '';
        let career_option = '';
        let card_height = 'no';
        let course_duration = "";
        let img_banner = '';
        if (title == 'Diploma In Ms-Office & Tally') {
            courses_Data = courseDiplomaData;
            course_title = title;
            career_option = courseDiplomaCareerOptions;
            card_height = 'no';
            img_banner = 'Banner-Diploma-Ms-Office';
            course_duration = "6 Months";
        } else if (title == 'DCS Certified HardWare And NetWork Engineer') {
            courses_Data = courseITechData;
            course_title = title;
            career_option = courseTechHardwareCareerOptions;
            card_height = 'yes';
            img_banner = 'ITech_Certified_HardWare_And_NetWork_Engineer';
            course_duration = "6 Months";
        }
        else if (title == 'DCS Certified SoftWare Engineering') {
            courses_Data = courseITechSoftwareData;
            course_title = title;
            career_option = courseTechSoftwareCareerOptions;
            card_height = 'no';
            img_banner = 'I_Tech_Certified_SoftWare_Engineering';
            course_duration = "18 Months";
        }
        else if (title == 'DCS Certified Animation Programs') {
            courses_Data = courseITechAnimationData;
            course_title = title;
            career_option = courseTechAnimationCareerOptions;
            card_height = 'yes';
            img_banner = 'ITech_Certified_Animation_Programs';
            course_duration = "18 Months";
        }
        else if (title == 'Digital Marketing') {
            courses_Data = courseDigitalMarketingData;
            course_title = title;
            career_option = courseDigitalMarketingCareerOptions;
            card_height = 'yes';
            img_banner = 'Digital-Marketing';
            course_duration = "2 Months";
        }
        props.history.push({ pathname: `/course-detail-view/${title}`, state: courses_Data, title: course_title, careerOptionsData: career_option, card_height: card_height, img_banner: img_banner, course_duration: course_duration })
    }

    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 pt-12 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-yellow-400">Best Selected Courses Category For You.</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We provide a variety of courses, ranging from web development to digital marketing. For various students, different courses fulfill a variety of goals. So, for you students, here are some of our top courses. According to market research. Begin by going at the most popular courses listed below.</p>
                        <div class="h-1 w-40 mt-8 mx-auto bg-yellow-500 rounded"></div>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-4 mb-4'>
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                        <h1 class="sm:text-2xl text-2xl text-left font-bold title-font text-gray-600">Recommended Courses</h1>
                    </div>
                    <div class="flex flex-wrap sm:-m-2 px-2 sm:px-0">
                        {
                            [{ 'title': 'Diploma In Ms-Office & Tally', img: 'SM-Diploma-In-Ms-Office-Tally' }, { 'title': 'DCS Certified HardWare And NetWork Engineer', img: 'SM-I-Tech-Certified-HardWare-And-NetWork-Engineer' }, { 'title': 'DCS Certified SoftWare Engineering', img: 'SM-I-Tech-Certified-SoftWare-Engineering' }, { 'title': 'DCS Certified Animation Programs', img: 'SM-I-Tech-Certified-Animation-Programs' }, { 'title': 'Digital Marketing', img: 'SM-Digital-Marketing' }].map((el, index) => {
                                return (
                                    <div onClick={() => { handleDetaileCourseView(el.title) }} class="lg:w-1/4 sm:w-1/2 p-2 cursor-pointer" key={index}>
                                        <div class="flex relative">
                                            <img alt="gallery" class="absolute  inset-0 w-80 h-44 object-fit object-center" src={"img/Category-Banners/" + el.img + ".png"} />
                                            <div class="px-8 py-5 relative z-10 w-80 h-44 bg-black opacity-0 hover:opacity-90">
                                                <h1 class="pt-10  opacity-140 title-font text-lg font-medium text-white mb-3">{el.title}</h1>
                                                <button onClick={() => { handleDetaileCourseView(el.title) }} className='cursor-pointer opacity-140  bg-white px-2 py-2 text-xs font-bold'>Click Here</button>
                                            </div>
                                        </div>
                                        <div className='flex flex-row justify-between items-center'>
                                            <p className='text-sm font-bold text-gray-500'>{el.title}</p>
                                            <ul class="flex justify-end py-2">
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-3 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* Spoken Enlish */}
                    <div className='flex flex-row justify-start items-center space-x-4 mb-4 mt-12'>
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                        <h1 class="sm:text-2xl text-2xl text-left font-bold title-font text-gray-600">Spoken English</h1>
                    </div>
                    <div className="-z-60 hidden sm:block md:block lg:block 2xl:block">
                        <Lottie
                            options={defaultOptions}
                            height={200}
                            width={250}
                        />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden 2xl:hidden">
                        <Lottie
                            options={defaultOptions}
                            height={180}
                            width={250}
                        />
                    </div>
                    {/* <div class="flex flex-wrap sm:-m-2 px-2 sm:px-0">
                        {
                            ['Individual Spoken English', 'Advance Spoken English', 'Spoken English Super 3', '	Spoken English Crash Course'].map((el, index) => {
                                return (
                                    <div class="lg:w-1/4 sm:w-1/2 p-2 cursor-pointer" key={index}>
                                        <div class="flex relative">
                                            <img alt="gallery" class="absolute inset-0 w-80 h-44 object-fit object-center" src="img/Banner-Diploma-Ms-Office.png" />
                                            <div class="px-8 py-10 relative z-10 w-80 h-44 bg-black opacity-0 hover:opacity-90">
                                                <h1 class="pt-10  opacity-140 title-font text-lg font-medium text-white mb-3">{el}</h1>
                                                <button className='cursor-pointer opacity-140  bg-white px-2 py-2 text-xs font-bold'>Click Here</button>
                                            </div>
                                        </div>
                                        <div className='flex flex-row justify-between items-center'>
                                            <p className='text-sm font-bold text-gray-500'>{el}</p>
                                            <ul class="flex justify-end py-2">
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-3 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div> */}
                    {/* Job Oriented Course */}
                    <div className='flex flex-row justify-start items-center space-x-4 mb-4 mt-12'>
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                        <h1 class="sm:text-2xl text-2xl text-left font-bold title-font text-gray-600">Job Oriented Course</h1>
                    </div>
                    <div class="flex flex-wrap sm:-m-2 px-2 sm:px-0">
                        {
                            [{ 'title': 'Diploma In Ms-Office & Tally', img: 'SM-Diploma-In-Ms-Office-Tally' }, { 'title': 'DCS Certified HardWare And NetWork Engineer', img: 'SM-I-Tech-Certified-HardWare-And-NetWork-Engineer' }, { 'title': 'DCS Certified SoftWare Engineering', img: 'SM-I-Tech-Certified-SoftWare-Engineering' }, { 'title': 'DCS Certified Animation Programs', img: 'SM-I-Tech-Certified-Animation-Programs' }, { 'title': 'Digital Marketing', img: 'SM-Digital-Marketing' }].map((el, index) => {
                                return (
                                    <div onClick={() => { handleDetaileCourseView(el) }} class="lg:w-1/4 sm:w-1/2 p-2 cursor-pointer" key={index}>
                                        <div class="flex relative">
                                            <img alt="gallery" class="absolute  inset-0 w-80 h-44 object-fit object-center" src={"img/Category-Banners/" + el.img + ".png"} />
                                            <div class="px-8 py-5 relative z-10 w-80 h-44 bg-black opacity-0 hover:opacity-90">
                                                <h1 class="pt-10  opacity-140 title-font text-lg font-medium text-white mb-3">{el.title}</h1>
                                                <button onClick={() => { handleDetaileCourseView(el.title) }} className='cursor-pointer opacity-140  bg-white px-2 py-2 text-xs font-bold'>Click Here</button>
                                            </div>
                                        </div>
                                        <div className='flex flex-row justify-between items-center'>
                                            <p className='text-sm font-bold text-gray-500'>{el.title}</p>
                                            <ul class="flex justify-end py-2">
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-3 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-3 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* <div className="overflow-y-hidden">
                <div className="mx-auto container py-10 px-4">
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
            </div> */}
        </div>
    )
}

export default withRouter(CoursesCategory);
