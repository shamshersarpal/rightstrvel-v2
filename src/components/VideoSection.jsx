export default function VideoSection(){
    return(
        <>
        <section className="bg-gray-50">
  <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16">
  <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
  <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="rounded-full uppercase bg-blue-700 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
          Rights trvel
          </span>
          <h1 className="mb-4 lg:text-6xl text-3xl font-bold lg:font-bold tracking-tight leading-none  md:text-5xl text-blue-900">
            <span className="sm:text-6xl"></span> Who we are
          </h1>
        </div>
        <p className="text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Right Travel offers you the highest quality and most economical tours on the market. Our daily goal is to deliver the best value and exceptional service to our family of travelers; we treat each customer as a unique individual with unique travel needs. 
        </p>
      </div>
      
       
    </div>
  </div>
  <div className="flex items-center w-full col-span-6">
    <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <iframe
            frameBorder={0}
            allowFullScreen={1}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tO-ZUJTd62Q?si=SQlrwVRrj-8Qs-zy"
            id="widget2"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
</section>

        </>
    )
}