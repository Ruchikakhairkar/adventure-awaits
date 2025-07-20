import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaEarthAmericas } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-nature-sky">Home</Link></li>
              <li><Link to="/south-trip" className="hover:text-nature-sky">South Trip</Link></li>
              <li><Link to="/north-trip" className="hover:text-nature-sky">North Trip</Link></li>
              <li><Link to="/weekend-trip" className="hover:text-nature-sky">Weekend Trip</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPhone /> 9860022669
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> info@adventureawaits.com
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://wa.me/9860022669" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://instagram.com/the_adventure.awaits" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <FaInstagram size={24} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaEarthAmericas size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get updates on new treks!</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded text-gray-800"
              />
              <button type="submit" className="bg-nature-green hover:bg-opacity-90 px-4 py-2 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Adventure Awaits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;