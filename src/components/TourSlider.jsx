import TourOne from "@/images/c1.jpg";
import TourTwo from "@/images/c2.jpg";
import TourThree from "@/images/c3.jpg";
import TourFour from "@/images/c4.jpg";
import TourFive from "@/images/c5.jpg";

import TourBox from "./TourBox";

export default function TourSlider() {
  const slides = [
    {
      title: "Africa tours",
      imageSrc: TourOne,
      rating: 4.8,
      score: "4.8",
    },
    {
      title: "Asia tours",
      imageSrc: TourTwo,
      rating: 4.7,
      score: "4.7",
    },
    {
      title: "Europe tours",
      imageSrc: TourThree,
      rating: 4.9,
      score: "4.9",
    },
    {
      title: "Middle East tours",
      imageSrc: TourFour,
      rating: 4.6,
      score: "4.6",
    },
    
  ];

  return (
    <div className="container lg:py-20 pt-0 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="pb-10">
          <h2 className="lg:text-4xl text-3xl font-bold">Popular Destinations</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {slides.map((slide, index) => (
            <div key={index}>
              <TourBox
                title={slide.title}
                imageSrc={slide.imageSrc}
                rating={slide.rating}
                score={slide.score}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
