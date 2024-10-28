import React from 'react'
import img1 from "../img/Group 33.png"
import img2 from "../img/Group.png"
import img3 from "../img/Layer_x0020_1.png"
import img4 from "../img/g2259.png"
import img5 from "../img/quote-request 1.png"
import img6 from "../img/Group (1).png"

const Section6 = () => {
  return (
    <section className="py-28 text-center px-0 ">
    <h2 className="text-3xl font-bold">How it works?</h2>
    <p className="mt-4 max-w-2xl mx-auto text-gray-700">
      Buyers post their needs and review top suppliers, while suppliers
      complete profiles, connect with potential buyers, and build successful
      business relationships, sharing valuable feedback.
    </p>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div className="bg-blue-100 p-6 rounded-md flex items-center justify-center flex-col">
        <img src={img1} alt="" className='' />
        <h3 className="mt-4 text-xl font-medium">
          Select Your Role and Sign Up
        </h3>
      </div>
      <div className=" p-6 rounded-md flex items-center justify-center flex-col">
      <img src={img2} alt="" className='' />
        <h3 className="mt-4 text-lg font-medium">
          Buyers Post Your Requirements
        </h3>
      </div>
      <div className=" bg-blue-100 p-6 rounded-md flex items-center justify-center flex-col">
      <img src={img3} alt="" className='' />
        <h3 className="mt-4 text-lg font-medium">
          Review, Select, and Contact the Best Suppliers
        </h3>
      </div>
      <div className=" p-6 rounded-md flex items-center justify-center flex-col">
      <img src={img4} alt="" className='' />
        <h3 className="mt-4 text-lg font-medium">
          Suppliers Complete your profile and get notified for opportunities
        </h3>
      </div>
      <div className=" bg-blue-100 p-6 rounded-md flex items-center justify-center flex-col">
      <img src={img5} alt="" className='' />
        <h3 className="mt-4 text-lg font-medium">
          Contact to Buyers and Share your Quote for the service
        </h3>
      </div>
      <div className=" p-6 rounded-md flex items-center justify-center flex-col">
      <img src={img6} alt="" className='' />
        <h3 className="mt-4 text-lg font-medium">
          Both the Parties can Connect and Make Business Leave a Feedback
        </h3>
      </div>
    </div>
  </section>
  )
}

export default Section6
