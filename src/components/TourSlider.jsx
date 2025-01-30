import TourOne from "@/images/c1.jpg";
import TourTwo from "@/images/c2.jpg";
import TourThree from "@/images/c3.jpg";
import TourFour from "@/images/c4.jpg";
import TourFive from "@/images/c5.jpg";
import Image from 'next/image';
import TourBox from "./TourBox";

export default function TourSlider() {
  

  return (
    <section className="bg-white py-20">
      <div className="  text-center  mb-5">
  <h2 className="lg:text-4xl text-3xl font-bold text-blue-900">
  Popular Destinations
  </h2>
</div>

  <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
      
      <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
        <a
          href=""
          className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
        >
          <Image className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={TourOne} alt="" />
           
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <h3 className="z-10 text-2xl font-medium text-blue-900 bg-gray-50 absolute top-0 left-0 p-2 xs:text-xl  ">
          Africa   
          </h3>
        </a>
      </div>
      <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
        <a
          href=""
          className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
        >
         <Image className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={TourTwo} alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <h3 className="z-10 text-2xl font-medium text-blue-900 bg-gray-50 absolute top-0 left-0 p-2 xs:text-xl  ">
          Asia 
          </h3>
        </a>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
          <a
            href=""
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
          >
            <Image className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={TourThree} alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
            <h3 className="z-10 text-2xl font-medium text-blue-900 bg-gray-50 absolute top-0 left-0 p-2 xs:text-xl  ">
            Europe   
          </h3>
          </a>
          <a
            href=""
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
          >
            <Image className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={TourFour} alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
            <h3 className="z-10 text-2xl font-medium text-blue-900 bg-gray-50 absolute top-0 left-0 p-2 xs:text-xl  ">
            Middle East  
          </h3>
          </a>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
        <a
          href=""
          className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
        >
          <Image className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={TourFive} alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <h3 className="z-10   font-medium text-blue-900 bg-gray-50 absolute top-0 left-0 p-2 xs:text-xl text-2xl">
          America  
          </h3>
        </a>
      </div>
    </div>
  </div>
</section>

  );
}
