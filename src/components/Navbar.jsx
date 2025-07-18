import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaEarthAmericas } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-nature-green">Adventure Awaits</Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/south-trip" className="nav-link">South Trip</Link>
            <Link to="/north-trip" className="nav-link">North Trip</Link>
            <Link to="/weekend-trip" className="nav-link">Weekend Trip</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
              <FaEarthAmericas size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;