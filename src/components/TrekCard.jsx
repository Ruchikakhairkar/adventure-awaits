import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TrekCard = ({ id, image, title, location, duration, price, difficulty }) => {
  const difficultyColor = {
    easy: 'bg-green-100 text-green-800',
    moderate: 'bg-yellow-100 text-yellow-800',
    tough: 'bg-red-100 text-red-800'
  };

  return (
    <div className="trek-card">
      <div className="relative h-48 bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${difficultyColor[difficulty]}`}
        >
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{location}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">{duration}</span>
          <span className="text-nature-green font-bold">{price}</span>
        </div>
        <div className="flex space-x-2">
          <Link to={`/trek/${id}`} className="btn-primary flex-1 text-center">View Details</Link>
          <button className="bg-nature-brown text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex-1">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

TrekCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  difficulty: PropTypes.oneOf(['easy', 'moderate', 'tough']).isRequired
};

export default TrekCard;