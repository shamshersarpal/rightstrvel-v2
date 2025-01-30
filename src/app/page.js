 
 
import Footer from "@/components/Footer";
import GroupPackege from "@/components/HolidaysSpecial";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import Subscript from "@/components/Subscript";
import Testimonials from "@/components/Testimonials";
import TourSlider from "@/components/TourSlider";  
import VideoSection from "@/components/VideoSection";
import Image from "next/image";
import GroupPackages from "@/components/ui/GroupPackages";
import HolidaysSpecial from "@/components/HolidaysSpecial";
import GroupPackagesPage from "@/components/GroupPackagesPage";
import HotelHolidays from "@/components/ui/HotelsandHolidays";
import HowitWorks from "@/components/HowItWork";

export default function Home() {     
  return (
    <>
    
     
    <HeroSection/>
    <TourSlider/>
    <VideoSection/>
    <HowitWorks/>
    <InfoSection/>
     <GroupPackege/>
    <Testimonials/>
    <Subscript/>
    <Footer/>
    
    </>
  );
}
