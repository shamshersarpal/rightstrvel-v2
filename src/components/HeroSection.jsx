"use client";
import SearchBar from './SearchBar'; 
import Header from './Header';
export default function HeroSection() { 

  return (

    <>
    
    <div className="relative w-full heroSection mt-10 lg:mt-0">
    <div className="absolute inset-0 bg-blue-950 opacity-70"></div>
    <div className="relative z-10">
    <Header/>
    </div>
    <div className="relative py-20 flex flex-col items-center justify-center h-full text-white">
  <h2 className="text-3xl   md:text-4xl lg:text-5xl text-yellow-300">
    Tours &amp; Travel
  </h2>
  <h1 className="text-4xl font-extrabold text-center text-white md:text-5xl lg:text-7xl">
    Discover Amazing <br /> Places With Us
  </h1>
  <div className="searchBar mt-4 w-full">
      <div className="searchBar mt-4 w-full">
      <SearchBar/> 
      </div>
      
  </div>
</div>

</div>
    </>
  );
}