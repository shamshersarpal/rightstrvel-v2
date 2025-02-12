import Image from 'next/image';
import Link from "next/link";
import logo from "@/images/logo.png";
import trustpilot from "@/images/trustpilot.png";
import iatanlogo from "@/images/iatan_logo.png";
import clialogo from "@/images/clia_logo.png";
import astalogo from "@/images/asta_logo.png";

export default function Footer() {
    return (
        <>
            <section className="footer bg-blue-900">
                <div className="container mx-auto px-4">
                    <>
   
  <footer className="relative bg-blue-900 text-white  pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div className="container mx-auto">
      <div className="flex flex-wrap ">
        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
          <div className="w-full mb-10">
            <a
                        href=" "
                        className="flex items-center space-x-3 rtl:space-x-reverse mb-5"
                      >
                         <Image className='logo' src={logo} alt=''/>
                         
                      </a>
            <p className="text-base text-body-color dark:text-dark-6 mb-7">
            When you think about taking a tour to any destination, each passenger has their own thoughts and desires about their trip.
            </p>
            <p className="flex items-center text-sm font-medium text-dark dark:text-white">
              <span className="mr-3 text-primary">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_941_15626)">
                    <path
                      d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_941_15626">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span> (973) 636-6660</span>
            </p>
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
          <div className="w-full mb-10">
            <h4 className="text-lg font-semibold text-dark  text-yellow-300 mb-9">
            Company
            </h4>
            <ul className="space-y-3">
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                 
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Site Map
                </a>
                </Link>
              </li>
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  About Us
                </a>
                </Link>
              </li>
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                 
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                 Opportunities
                </a>
                </Link>
              </li>
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                 
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Terms & Conditions
                </a>
                </Link>
              </li>
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                 Visa
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
          <div className="w-full mb-10">
            <h4 className="text-lg font-semibold text-dark text-yellow-300 mb-9">
             Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                 
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Travel Agents
                </a>
                </Link>
              </li>
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Tour
                </a>
                </Link>
              </li>
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Travel Insurance
                </a>
                </Link>
              </li>
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Reviews
                </a>
                </Link>
              </li>
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                   
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Contact Us
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
          <div className="w-full mb-10">
            <h4 className="text-lg font-semibold text-dark text-yellow-300 mb-9">
              Tours
            </h4>
            <ul className="space-y-3">
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Africa tours
                </a>
                </Link>
              </li>
              <li>

              <Link href="/" passHref legacyBehavior>
                <a
                   
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Asia tours
                </a>
                </Link>
              </li>
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                 Europe tours
                </a>
                </Link>
              </li>
              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                 
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                 Middle East tours
                </a>
                </Link>
              </li>

              <li>
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                 America tours
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
          <div className="w-full mb-10">
            <h4 className="text-lg font-semibold text-dark text-yellow-300 mb-9">
              Follow Us On
            </h4>
            <div className="flex items-center mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=100063769441297" target='_blank'
                className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width={8}
                  height={16}
                  viewBox="0 0 8 16"
                  className="fill-current"
                >
                  <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                </svg>
              </a>
              <a
                href="https://x.com/righttravel" target='_blank'
                className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
  xmlns="http://www.w3.org/2000/svg"
  width={15}
  height={15}
  fill="currentColor"
  className="bi bi-twitter-x"
  viewBox="0 0 16 16"
>
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
</svg>

              </a>
              <a
                href="https://www.youtube.com/@righttravel1" target='_blank'
                className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width={16}
                  height={12}
                  viewBox="0 0 16 12"
                  className="fill-current"
                >
                  <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/travel-right-travel-agency" target='_blank'
                className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  className="fill-current"
                >
                  <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                </svg>
              </a>
              <a
    href="https://in.pinterest.com/righttravel/" target='_blank'
    className="flex items-center justify-center w-8 h-8  border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white  "
  >
   <svg
  xmlns="http://www.w3.org/2000/svg"
  width={14}
  height={14}
  fill="currentColor"
  className="bi bi-pinterest"
  viewBox="0 0 16 16"
>
  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
</svg>

  </a>
            </div>
           <div className='trustpilot'>
            <a href="https://www.trustpilot.com/review/righttravel.info?utm_campaign=free&utm_medium=trustbox&utm_source=TrustBoxBasic" target='_blank'>
            <Image className='w-full rounded-lg' src={trustpilot} alt='trustpilot'/>
             </a>
           </div>

          </div>
        </div>
      </div>
    </div>
    <div>
      <span className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width={217}
          height={229}
          viewBox="0 0 217 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
            fill="url(#paint0_linear_1179_5)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1179_5"
              x1="76.5"
              y1={281}
              x2="76.5"
              y2="1.22829e-05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.08" />
              <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="absolute top-10 right-10 z-[-1]">
        <svg
          width={75}
          height={75}
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
            fill="url(#paint0_linear_1179_4)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1179_4"
              x1="-1.63917e-06"
              y1="37.5"
              x2={75}
              y2="37.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#13C296" stopOpacity="0.31" />
              <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  </footer>
  
</>

                </div>
                
            </section>
            <div className="bg-blue-800 py-2 shadow-lg">
            <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-2 "> 
                    <div className="text-center text-sm text-white">
                        <p>© 2003-2025 Right Travel LLC. All rights reserved.</p>
                    </div>
                    <div className="flex gap-2 text-white text-sm">
                        <a href=" " className="tLogos ">
                          <Image src={iatanlogo} alt=''/>
                        </a>
                        <a href=" " className="tLogos ">
                        <Image src={astalogo} alt=''/>
                        </a>
                        <a href=" " className="tLogos ">
                        <Image src={clialogo} alt=''/>
                        </a>
                    </div>
                </div>
            </div>
            
        </>
    );
}
