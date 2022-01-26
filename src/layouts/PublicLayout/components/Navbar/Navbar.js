/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link, animateScroll as scroll } from "react-scroll";
import { withRouter } from "react-router";


const solutions = [
  {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Our Professionals',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Contact Us', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Testimonial',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  }
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Recommended Courses',
    topics: ['Diploma In Ms-Office & Tally', 'I Tech Certified HardWare And NetWork Engineer', 'I Tech Certified SoftWare Engineering', 'I Tech Certified Animation Programs'],
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Job Oriented Course',
    topics: ['Diploma In Ms-Office & Tally', 'I Tech Certified HardWare And NetWork Engineer', 'I Tech Certified SoftWare Engineering', 'I Tech Certified Animation Programs'],
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Spoken English',
    topics: ['Comming Soon'],
    href: '#',
    icon: BookmarkAltIcon,
  },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = (props) => {

  const handleNAvigate = (navigateVal) => {
    props.history.push(navigateVal);
  }

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

  const [courseDiplomaCareerOptions, setCourseDiplomaCareerOptions] = useState([
    {
      'title': 'Computer Operator',
      'img': 'workingoncomputer.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Data Entry Operator',
      'img': 'dataentry.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Account Departmant Of Company',
      'img': 'AccountDepartmantOfCompany.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    }
  ])
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
  const [courseTechHardwareCareerOptions, setCourseTexhHardwareCareerOptions] = useState([
    {
      'title': 'Hardware Engineer',
      'img': 'engineers.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Network Support Engineer',
      'img': 'engineers.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Network Designer',
      'img': 'construction.png',

      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'System Engineer',
      'img': 'systemengineer-.png',

      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Network Administrator',
      'img': 'administrator.png',

      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Network Analyst',
      'img': 'analyst.png',

      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    }
  ])

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
  const [courseTechSoftwareCareerOptions, setCourseTechSoftwareCareerOptions] = useState([
    {
      'title': 'Web  Programmer',
      'img': 'webprogrammer.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'System Programmer',
      'img': 'SystemProgrammer.png',

      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'System Analyst',
      'img': 'analyst.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Software Developer',
      'img': 'SoftwareDeveloper.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Database Designer',
      'img': 'database.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Project Manager',
      'img': 'manager.png',

      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
  ])

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

  const [courseTechAnimationCareerOptions, setCourseTechAnimationCareerOptions] = useState([
    {
      'title': 'Graphics Designer',
      'img': 'graphic-designer.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': '2D & 3D Animator',
      'img': '3d-movie.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Audio & Video Editor',
      'img': 'film-editor.png',

      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Web Designer',
      'img': 'SoftwareDeveloper.png',

      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Special Effects Artist',
      'img': 'effect-artist.png',

      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    },
    {
      'title': 'Motion Effects Artist',
      'img': 'motion-artist.png',
      'summary': 'It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.'
    }
  ])

  const handleDetaileCourseView = (title) => {
    let courses_Data = '';
    let course_title = '';
    let career_option = '';
    let card_height = 'no';
    let img_banner = '';
    if (title == 'Diploma In Ms-Office & Tally') {
      courses_Data = courseDiplomaData;
      course_title = title;
      career_option = courseDiplomaCareerOptions;
      card_height = 'no';
      img_banner = 'Banner-Diploma-Ms-Office';
    } else if (title == 'I Tech Certified HardWare And NetWork Engineer') {
      courses_Data = courseITechData;
      course_title = title;
      career_option = courseTechHardwareCareerOptions;
      card_height = 'yes';
      img_banner = 'ITech_Certified_HardWare_And_NetWork_Engineer';
    }
    else if (title == 'I Tech Certified SoftWare Engineering') {
      courses_Data = courseITechSoftwareData;
      course_title = title;
      career_option = courseTechSoftwareCareerOptions;
      card_height = 'no';
      img_banner = 'I_Tech_Certified_SoftWare_Engineering';
    }
    else if (title == 'I Tech Certified Animation Programs') {
      courses_Data = courseITechAnimationData;
      course_title = title;
      career_option = courseTechAnimationCareerOptions;
      card_height = 'yes';
      img_banner = 'ITech_Certified_Animation_Programs';
    }
    props.history.push({ pathname: '/course-detail-view', state: courses_Data, title: course_title, careerOptionsData: career_option, card_height: card_height, img_banner: img_banner })
  }

  return (
    <Popover className="fixed bg-black w-full relative" style={{ zIndex: "9999" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img
                className="w-32 sm:h-14"
                src="/img/DCS-Brand-Logo-Black.png"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-400' : 'text-gray-200',
                      'group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-100'
                    )}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}

            <div onClick={() => handleNAvigate('/')} className="cursor-pointer text-sm font-bold text-gray-200 hover:text-yellow-400">
              Home
            </div>
            {/* <div className="cursor-pointer text-sm font-bold text-gray-200 hover:text-yellow-400">
              Courses
            </div> */}
            <Popover className="">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-yellow-400' : 'text-gray-200',
                      'group bg-transparent text-sm rounded-md inline-flex items-center  font-bold hover:text-yellow-400'
                    )}
                  >
                    <span>Courses</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-200'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-full sm:px-40">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid grid-cols-12 gap-4 px-5 py-6  bg-white">
                          {resources.map((item) => (
                            <p
                              key={item.name}
                              className="-m-3 cursor-pointer p-3 w-full sm:col-span-4 col-span-12 rounded-lg hover:bg-gray-50"
                            >
                              {/* <item.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" /> */}
                              <div className="ml-4">
                                <p className="text-base text-indigo-500 font-bold mb-3">{item.name}</p>
                                <ul className='space-y-4'>
                                  {
                                    item.topics.map((el, index) => {
                                      return (
                                        <li onClick={() => { handleDetaileCourseView(el) }} className='text-xs font-bold text-gray-500 hover:text-blue-500'>
                                          <div className='flex flex-row justify-start items-center'>
                                            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                            <p>{el}</p>
                                          </div>
                                        </li>
                                      )
                                    })
                                  }
                                </ul>
                              </div>
                            </p>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link
              to='best-professionals'
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
            >
              <div className="cursor-pointer text-sm font-bold text-gray-200 hover:text-yellow-400">
                Our Professionals
              </div>
            </Link>
            <Link
              to='testimonials'
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
            >
              <div className="cursor-pointer text-sm font-bold text-gray-200 hover:text-yellow-400">
                Testimonials
              </div>
            </Link>
            <div onClick={() => handleNAvigate('/contact')} className="cursor-pointer text-sm font-bold text-gray-200 hover:text-yellow-400">
              Contact
            </div>


          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div
              onClick={() => handleNAvigate('/student-resgistration')}
              className="whitespace-nowrap text-sm inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-sm shadow-sm  font-bold text-white bg-green-500 hover:bg-indigo-700"
            >
              Register Now
            </div>

            <img
              className="ml-8 h-8 w-auto sm:h-8"
              src="img/india.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-12 w-auto"
                    src="/img/DCS-Brand-Logo-White.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-5">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-2 px-5 space-y-6">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                <a href="#" className="text-lg font-bold text-indigo-600 hover:text-gray-700">
                  Courses
                </a>
                {resources.map((item) => (
                  <p
                    key={item.name}
                    className="cursor-pointer w-full sm:col-span-4 col-span-12 rounded-lg hover:bg-gray-50"
                  >
                    {/* <item.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" /> */}
                    <div className="ml-0">
                      <p className="text-base text-indigo-500 font-bold mb-3">{item.name}</p>
                      <ul className='space-y-4'>
                        {
                          item.topics.map((el, index) => {
                            return (
                              <li onClick={() => { handleDetaileCourseView(el) }} className='text-xs font-bold text-gray-500 hover:text-blue-500'>
                                <div className='flex flex-row justify-start items-center'>
                                  <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                  <p>{el}</p>
                                </div>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default withRouter(Navbar);