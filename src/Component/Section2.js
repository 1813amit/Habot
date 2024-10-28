import React from 'react'
import myImage2 from "../img/Rectangle 1.png";

const Section2 = () => {
  return (
    <section className="relative h-96">
    {/* Image */}
    <img
      src={myImage2}
      alt="Background"
      className="w-full h-full object-cover"
    />

    {/* Gradient Overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 1.8%, rgba(7, 47, 87, 0) 1.58%), 
                             linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45))`,
      }}
    ></div>

    {/* Overlay Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-3">Are You a Supplier?</h2>
        <p className="text-4xl mb-8 ">Explore Matching Opportunities.</p>
        <div className="flex flex-col md:flex-row mt-4 space-y-2 md:space-y-0 md:space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search your required service here"
              className="p-2 pl-10 rounded-l-md w-full md:w-64 text-black rounded-md"
            />
            <i className="fas fa-briefcase absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500"></i>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search your desired location here"
              className="p-2 pl-10 w-full md:w-64 text-black rounded-md"
             
            />
            <i className="fas fa-map-marker-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500"></i>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>
        <p className="mt-8 font-bold ">
          Are you a buyer?{" "}
          <a  className="underline font-thin">
            Click here if you are looking to post a requirements
          </a>
        </p>
      </div>
    </div>
  </section>
  )
}

export default Section2
