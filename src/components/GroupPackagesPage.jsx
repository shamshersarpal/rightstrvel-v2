import GroupPackages from "./GroupPackagesPage";
import packagesOne from "@/images/h8.jpg";
import packagesTwo from "@/images/h6.jpg";
import packagesThree from "@/images/h5.jpg";
import packagesFour from "@/images/h3.jpg";
import packagesFive from "@/images/h1.jpg";
import packagesSix from "@/images/h2.jpg";
export default function GroupPackagesPage(){
    return(
        <>
       <section className="py-20 px-2 mx-auto max-w-screen-xl  ">
            <div className="container">
            <div className="  text-center  mb-5">
  <h2 className="lg:text-4xl text-3xl font-bold text-blue-900">
  Holidays Special
  </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
    
    
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
</div>
</div>
</section>
        </>
    )
}