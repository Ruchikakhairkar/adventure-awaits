import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/adventure-awaits-logo.jpg';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaEarthAmericas } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Adventure Awaits Logo" className="h-12" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/south-trip" className="nav-link">South Trip</Link>
            <Link to="/north-trip" className="nav-link">North Trip</Link>
            <Link to="/weekend-trip" className="nav-link">Weekend Trip</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/9860022669" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://instagram.com/the_adventure.awaits" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href=" " target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
              <FaEarthAmericas size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-600 focus:outline-none"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'transform rotate-90' : ''}`} 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-4 pt-4 pb-3">
            <Link to="/" className="nav-link block px-2 py-1 text-gray-600 hover:text-nature-green" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/south-trip" className="nav-link block px-2 py-1 text-gray-600 hover:text-nature-green" onClick={() => setIsOpen(false)}>South Trip</Link>
            <Link to="/north-trip" className="nav-link block px-2 py-1 text-gray-600 hover:text-nature-green" onClick={() => setIsOpen(false)}>North Trip</Link>
            <Link to="/weekend-trip" className="nav-link block px-2 py-1 text-gray-600 hover:text-nature-green" onClick={() => setIsOpen(false)}>Weekend Trip</Link>
            <Link to="/profile" className="nav-link block px-2 py-1 text-gray-600 hover:text-nature-green" onClick={() => setIsOpen(false)}>Profile</Link>
            
            <div className="flex space-x-4 px-2 pt-2 border-t border-gray-200">
              <a href="https://wa.me/+919860022669" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://instagram.com/the_adventure.awaits" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                <FaEarthAmericas size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;