import React from 'react'

const Section5 = () => {
  return (
    
<section className="bg-blue-100 py-16 px-4 flex flex-col md:flex-row items-center justify-around text-center space-y-6 md:space-y-0 md:text-left">
  
  <div className="flex flex-col items-center md:items-start">
    <h3 className="font-bold text-3xl md:text-4xl">Let Suppliers Find You</h3>
    <div className="bg-orange-500 mt-2" style={{ height: "4px", width: "150px" , marginLeft:"225px" }}></div>
  </div>

  <button className="bg-orange-500 text-white rounded-md w-full md:w-auto md:px-6 md:py-3" style={{ minWidth: "150px", height: "54px" }}>
    Get Verified
  </button>

</section>
  )
}

export default Section5
