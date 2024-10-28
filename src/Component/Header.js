import React from 'react'
import myImage from "../img/image 1.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
    <div className="flex items-center">
      <img src={myImage} alt="HABOT Logo" className="h-10" />
    </div>
    <nav className="hidden md:flex items-center space-x-4 gap-4">
      <a  className="text-gray-700">
        Find Suppliers 
      </a>
      <a  className="text-gray-700">
        Find Service Tags <i className="fas fa-chevron-down"></i>
      </a>
      <button className="border border-green-600 text-green-700 font-bold px-4 py-2 rounded">
        Login / Sign Up
      </button>
    </nav>
    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-700"
      >
        <i className="fas fa-bars"></i>
      </button>
    </div>
  </header>
  {menuOpen && (
    <nav className="md:hidden bg-white shadow-md p-4">
      <a  className="block text-gray-700 mb-2">
        Find Suppliers
      </a>
      <a  className="block text-gray-700 mb-2">
        Find Service Tags <i className="fas fa-chevron-down"></i>
      </a>
      <button className="block w-full border border-green-500 text-green-500 px-4 py-2 rounded">
        Login / Sign Up
      </button>
    </nav>
  )}
  </>
  )
}

export default Header
