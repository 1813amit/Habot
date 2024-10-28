import React from 'react'
import myImage4 from "../img/Group 4.png";

const Footer = () => {
  return (
   
    <footer className=" text-white py-8 px-4" style={{backgroundColor:"#072F57"}}>
     
    <div className="max-w-4xl mx-auto ">
    <div className="w-full h-0.5 bg-gray-500 mb-8"></div>
    <div className="flex flex-col md:flex-row justify-between">

    <div className="mb-4 md:mb-0 flex gap-8">
       <div className="mt-8">
       <img
          src={myImage4}
          alt="HABOT Logo"
          className="h-10"
        />
        <p className="mt-2 ml-4">&copy; R Singhania</p>
       </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div>
          <h4 className="font-bold">Company</h4>
          <ul className="mt-2 space-y-1">
            <li>
              <a className="text-gray-300 ">
                About
              </a>
            </li>
            <li>
              <a  className="text-gray-300">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Terms</h4>
          <ul className="mt-2 space-y-1">
            <li>
              <a  className="text-gray-300">
                Data privacy
              </a>
            </li>
            <li>
              <a  className="text-gray-300">
                Terms
              </a>
            </li>
            <li>
              <a  className="text-gray-300">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Related</h4>
          <ul className="mt-2 space-y-1">
            <li>
              <a  className="text-gray-300">
                Find Buyer
              </a>
            </li>
            <li>
              <a  className="text-gray-300">
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
      
      <div className="flex space-x-4 mt-10 ">
        <a  className="text-gray-300 h-8 w-8 rounded-full border border-white flex items-center justify-center">
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="text-gray-300 h-8 w-8 rounded-full border border-white flex items-center justify-center">
          <i className="fab fa-twitter"></i>
        </a>
        <a  className="text-gray-300 h-8 w-8 rounded-full border border-white flex items-center justify-center">
          <i className="fab fa-facebook"></i>
        </a>
        <a  className="text-gray-300 h-8 w-8 rounded-full border border-white flex items-center justify-center">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
    <div className="w-full h-0.5 bg-gray-500 mt-8 "></div>
    </div>
    
  </footer>
  )
}

export default Footer
