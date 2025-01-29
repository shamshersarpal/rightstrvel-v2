 
 
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import Subscript from "@/components/Subscript";
import Testimonials from "@/components/Testimonials";
import TourSlider from "@/components/TourSlider";  
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <Header/>
    <HeroSection/>
    <TourSlider/>
    
    <InfoSection/>
    
    <Testimonials/>
    <Subscript/>
    <Footer/>
    
    </>
  );
}
