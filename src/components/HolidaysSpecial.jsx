import HolidaysSpecial from "./ui/HolidaysSpecial";  
import holidaysSpecialOne from "@/images/holidays1.jpg";
import holidaysSpecialTwo from "@/images/holidays2.jpg";
import holidaysSpecialThree from "@/images/holidays3.jpg";
import holidaysSpecialFour from "@/images/holidays4.jpg"; 

export default function HolidaysSpecials(){
    return(
        <>
        <section className="py-20 px-2 mx-auto max-w-screen-xl  ">
            <div className="container">
            <div className="  text-center  mb-5">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl">
  Holidays Special
  </h2>
</div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                                  <HolidaysSpecial
                                    imageSrc={holidaysSpecialOne}
                                    title="10 Day Pilgrimage & Jordan Tour"
                                    description="8 nights accommodation, all transfers, most meals and sightseeing..."
                                    buttonText="View Details"
                                    link="#"
                                  />
                
                                  <HolidaysSpecial
                                    imageSrc={holidaysSpecialTwo}
                                    title="11 Day Pilgrimage & Jordan Tour"
                                    description="9 nights accommodation, all transfers, most meals and sightseeing..."
                                    buttonText="View Details"
                                    link="#"
                                  />
                
                                  <HolidaysSpecial
                                    imageSrc={holidaysSpecialThree}
                                    title="12 Day Pilgrimage & Dubai Tour"
                                    description="10 nights accommodation, all transfers, most meals and sightseeing..."
                                    buttonText="View Details"
                                    link="#"
                                  />
                
                                  <HolidaysSpecial
                                    imageSrc={holidaysSpecialFour}
                                    title="14 Day Pilgrimage & Turkey Tour"
                                    description="12 nights accommodation, all transfers, most meals and sightseeing..."
                                    buttonText="View Details"
                                    link="#"
                                  />
                
                                  
                                </div>
            </div>

        </section>
        </>
    )
}