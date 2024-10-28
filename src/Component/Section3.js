import React from 'react'

const Section3 = () => {
  return (
    <section className="py-16 text-center  flex flex-col  md:flex-row md:justify-center md:items-center space-y-8 md:space-y-0 ">
    <div className="flex flex-col items-center md:items-start  max-w-md mx-auto md:max-w-lg">
      <h2 className="text-3xl md:text-4xl font-bold">
        Ready to dive into HABOT ?
      </h2>
      <p className="mt-4 max-w-md md:max-w-xl text-start text-gray-700">
        Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
      </p>
      <button className="mt-6  text-white font-bold px-16 py-3 rounded-md" style={{backgroundColor:"#00732F"}}>
        Sign up Today!
        <i className='fas fa-arrow-right ml-12 '></i>
      </button>
    </div>
    <div className="grid grid-cols-3 gap-4 w-full max-w-md mx-auto md:max-w-lg md:grid-cols-2   ">
      <button className="border border-orange-500 text-black px-4 py-3 rounded">
        Abu Dhabi
      </button>
      <button className="border border-orange-500 text-black px-4 py-3 rounded">
        Dubai
      </button>
      <button className="border border-orange-500 text-black px-4 py-3 rounded">
        Sharjah & Ajman
      </button>
      <button className="border border-orange-500 text-black px-4 py-3 rounded">
        Fujairah
      </button>
      <button className="border border-orange-500 text-black px-4 py-3 rounded">
        Ras Al Khaimah
      </button>
      <button className="border border-orange-500 text-black px-4 py-3 rounded">
        Umm Al Quwain
      </button>
    </div>
  </section>
  )
}

export default Section3
