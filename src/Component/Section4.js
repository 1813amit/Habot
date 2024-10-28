import React from 'react'
import myImage3 from "../img/i8tgRHXx4oQ-SD 1.png";

const Section4 = () => {
  return (
    <section className="text-white py-16 px-4">
  <div
    className="max-w-7xl mx-auto flex flex-col md:flex-row p-8 items-center"
    style={{ backgroundColor: "#072F57" }}
  >
    {/* Image */}
    <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
      <img
        src={myImage3}
        alt="Video thumbnail"
        className="rounded-md"
        style={{ width: "650px", height: "340px" }}
      />
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0 ml-8 order-1 md:order-2 mb-8 md:mb-0">
      {/* Header with Buyer and Supplier */}
      <div className="flex items-center justify-between w-4/5">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-2xl font-bold text-orange-500">Buyer</h3>
          <div
            className="bg-orange-500"
            style={{ height: "4px", width: "150px" }}
          ></div>
        </div>
        <div className="flex flex-col gap-3 order-3 md:order-none">
          <h3 className="text-2xl font-bold">Supplier</h3>
        </div>
      </div>

      {/* List of Benefits */}
      <ul className="mt-10 space-y-2 w-4/5">
        <li>
          <i className="fas fa-check-circle text-green-500"></i> Post your
          requirements.
        </li>
        <li>
          <i className="fas fa-check-circle text-green-500"></i> Sit back for
          multiple suppliers to contact you.
        </li>
        <li>
          <i className="fas fa-check-circle text-green-500"></i> Choose among
          the suppliers based on the ratings and reviews.
        </li>
      </ul>
    </div>
  </div>
</section>

  )
}

export default Section4
