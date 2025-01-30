"use client";

import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import logo from "@/images/logo.png";
import anniversarylogo from "@/images/anniversary_logo2025.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };


  

  return (
    <>
     <div className=" px-5 text-center bg-blue-800 fixed top-0 left-0 w-full shadow-md z-50 block lg:hidden">
                <div className="h-full  flex items-center justify-between py-2  ">
                <Image className='logo bg-blue-800 rounded-full ' src={logo} alt='' />
                  <span className="text-sm font-medium text-white"> <span className='text-yellow-300'>USA New Jersey Head Office</span><br></br> (973) 636-6660</span> 
                  <Image className='logo' src={anniversarylogo} alt='' />
                </div>
              </div>
      
      <header className=' mx-auto w-full pt-4  z-50 hidden lg:block '>
         

        <nav className="   w-full z-20 ">
              <div className="max-w-screen-xl flex items-center justify-between mx-auto">
                <div>
                  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg   rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  gap-5">
                <li>
                  <Link href="/login" passHref legacyBehavior>
                    <a

                      className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'myAccount' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white'}`}
                      aria-current="page"
                      onClick={() => handleItemClick('myAccount')}
                    >
                      My Account
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref legacyBehavior>
                    <a

                      className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'travelAgents' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white'}`}
                      onClick={() => handleItemClick('travelAgents')}
                    >
                      Travel Agents
                    </a>
                  </Link>
                </li>
                <li>
                  <ul className="flex flex-col md:p-0 mt-4 font-medium border   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                    <li className="relative group">
                      <button
                        className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'tour' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white'}`}
                        onClick={() => handleItemClick('tour')}
                      >
                        Tour
                      </button>
                      <ul className="absolute hidden group-hover:block shadow-sm w-44 bg-white border border-gray-100 rounded-lg mt-0">
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a

                              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                            >
                              Africa tours
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a

                              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                            >
                              Asia tours
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a

                              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                            >
                              Europe tours
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a

                              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                            >
                              Middle East tours
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a

                              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                            >
                              America tours
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                </ul>
                </div>
                <div> <Link href="/" passHref legacyBehavior>
            <a
              
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image className='logo bg-blue-800 rounded-full p-1' src={logo} alt='' />

            </a>
            </Link></div>



                <div>
                   <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg   rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  gap-5">
                <li>
                  <Link href="/login" passHref legacyBehavior>
                    <a

                      className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'myAccount' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white'}`}
                      aria-current="page"
                      onClick={() => handleItemClick('myAccount')}
                    >
                      Travel Insurance
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/login" passHref legacyBehavior>
                    <a

                      className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'myAccount' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white'}`}
                      aria-current="page"
                      onClick={() => handleItemClick('myAccount')}
                    >
                    Reviews
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/login" passHref legacyBehavior>
                    <a

                      className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'myAccount' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white'}`}
                      aria-current="page"
                      onClick={() => handleItemClick('myAccount')}
                    >
                     Contact Us
                    </a>
                  </Link>
                </li>
                </ul>
                </div>
              </div> 
        </nav>
      </header>



      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 block lg:hidden">
  <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
  <Link href="/" passHref legacyBehavior>
    <button
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <svg
        className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
      </svg>
      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
        Home
      </span>
    </button>
    </Link>

    <Link href="/" passHref legacyBehavior>
    <button
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
<svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z" clipRule="evenodd"/>
</svg>
      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
        Tours
      </span>
    </button>
    </Link>


    
    <Link href="/login" passHref legacyBehavior>
    <button
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
     <svg
        className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
      Account
      </span>
    </button>
    </Link>
    <button id="dropdownTopButton" 
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      onClick={() => setIsOpen(!isOpen)}
    >
       

      <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
</svg>

      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
        More
      </span>
    </button>
  </div>
  <div
  id="dropdownTop"
  className={`z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y shadow divide-gray-100 rounded-lg   w-44 dark:bg-gray-700 menuDRop`}
>
  <ul
    className="py-2 text-sm text-gray-700 dark:text-gray-200"
    aria-labelledby="dropdownTopButton"
  >
    <li>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Travel Agents
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Travel Insurance
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
       Reviews
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Sign out
      </a>
    </li>
  </ul>
</div>
</div>

    </>
  );
}
