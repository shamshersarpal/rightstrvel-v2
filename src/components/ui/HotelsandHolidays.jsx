import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 
import GroupPackages from "./GroupPackages";
import packagesOne from "@/images/h8.jpg";
import packagesTwo from "@/images/h6.jpg";
import packagesThree from "@/images/h5.jpg";
import packagesFour from "@/images/h3.jpg";
import packagesFive from "@/images/h1.jpg";
import packagesSix from "@/images/h2.jpg";
import HolidaysSpecial from "./HolidaysSpecial";
import holidaysSpecialOne from "@/images/holidays1.jpg";
import holidaysSpecialTwo from "@/images/holidays2.jpg";
import holidaysSpecialThree from "@/images/holidays3.jpg";
import holidaysSpecialFour from "@/images/holidays4.jpg";
import holidaysSpecialFive from "@/images/holidays5.jpg";
import holidaysSpecialSix from "@/images/holidays6.jpg";


 


export default function HotelHolidays() {
  return (
    <>
      <section className="py-20 pt-0">
        <div className="container mx-auto p-4">
          <div className="max-w-screen-xl mx-auto">
            <Tabs defaultValue="hotels" className="w-full">
              <TabsList className="p-8 px-2 mb-8">
                
                <TabsTrigger className="p-4" value="packages">
                  Group Packages
                </TabsTrigger>
                <TabsTrigger className="p-4" value="holidays">
                  Holidays Special
                </TabsTrigger>
              </TabsList>

             

              <TabsContent value="packages">
                <h1 className="text-gray-900 text-xl font-semibold pb-4">We Provide Best Group Packages</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                  <GroupPackages
                    imageSrc={packagesOne}
                    title="8 Day Classic Dubai & Abu Dhabi Private Tour"
                    description="Round trip airfare from NYC, 6 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />

                  <GroupPackages
                    imageSrc={packagesTwo}
                    title="8 Day India Private Tour"
                    description="Round trip airfare from NYC, 6 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />

                  <GroupPackages
                    imageSrc={packagesThree}
                    title="9 Day Morocco Kasbahs, Oases & Desert"
                    description="Round trip airfare from NYC, 7 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />

                  <GroupPackages
                    imageSrc={packagesFour}
                    title="9 Day Morocco Imperial Cities Tour"
                    description="Round trip airfare from NYC, 7 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />

                  <GroupPackages
                    imageSrc={packagesFive}
                    title="10 Day Egypt in Depth Tour"
                    description="Round trip airfare from NYC, 8 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />

                  <GroupPackages
                    imageSrc={packagesSix}
                    title="10 Day Dubai in Style Package"
                    description="Round trip airfare from NYC, 8 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />




                </div>
              </TabsContent>

              <TabsContent value="holidays">
                <h1 className="text-gray-900 text-xl font-semibold pb-4">Best Holidays Special</h1>
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

                  <HolidaysSpecial
                    imageSrc={holidaysSpecialFive}
                    title="7 Day Classic Dubai Private Tour"
                    description="Round trip airfare from NYC, 5 nights accommodation, all transfers, most meals and sightseeing..."
                    buttonText="View Details"
                    link="#"
                  />

                  <HolidaysSpecial
                    imageSrc={holidaysSpecialSix}
                    title="8 Day India Private Tour"
                    description="Round trip airfare from NYC, 6 nights accommodation, all transfers, most meals and sightseeing..."
                    buttonText="View Details"
                    link="#"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
