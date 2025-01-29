"use client";
import SearchBar from './SearchBar'; 
export default function HeroSection() { 

  return (
    <main>   
     <section className="relative flex items-center justify-center lg:h-screen md:h-full  mb-12 overflow-hidden md:py-10">
  <div className="relative z-30 p-5 text-2xl flex items-center justify-center w-full lg:h-screen overflow-hidden md:h-full   ">
  <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white lg:py-0 py-10">
               <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-yellow-300">Tours & Travel</h2>
               <h1 className="text-4xl font-bold text-center text-white md:text-5xl lg:text-7xl">
                 Discover Amazing <br /> Places With Us
               </h1>
               <div className="searchBar mt-4 w-full">
                 <SearchBar/>
               </div>
             </div>
  </div>
  <video
    autoPlay={true}
    loop={true}
    muted={true}
    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src="https://videos.pexels.com/video-files/4782135/4782135-uhd_2560_1440_25fps.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</section>
    </main>
  );
}