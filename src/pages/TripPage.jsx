import { useState } from 'react';
import PropTypes from 'prop-types';
import TrekCard from '../components/TrekCard';

const TripPage = ({ title, treks }) => {
  const [difficulty, setDifficulty] = useState('all');

  const filteredTreks = difficulty === 'all'
    ? treks
    : treks.filter(trek => trek.difficulty === difficulty);

  return (
    <div className="pt-24 pb-16">
      <div className="content-container">
        <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>

        {/* Difficulty Filter */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setDifficulty('all')}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${difficulty === 'all' ? 'bg-nature-green text-white' : 'bg-gray-100'}`}
          >
            All
          </button>
          <button
            onClick={() => setDifficulty('easy')}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${difficulty === 'easy' ? 'bg-nature-green text-white' : 'bg-gray-100'}`}
          >
            Easy
          </button>
          <button
            onClick={() => setDifficulty('moderate')}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${difficulty === 'moderate' ? 'bg-nature-green text-white' : 'bg-gray-100'}`}
          >
            Moderate
          </button>
          <button
            onClick={() => setDifficulty('tough')}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${difficulty === 'tough' ? 'bg-nature-green text-white' : 'bg-gray-100'}`}
          >
            Tough
          </button>
        </div>

        {/* Trek Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreks.map(trek => (
            <TrekCard
              key={trek.id}
              {...trek}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

TripPage.propTypes = {
  title: PropTypes.string.isRequired,
  treks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      difficulty: PropTypes.oneOf(['easy', 'moderate', 'tough']).isRequired
    })
  ).isRequired
};

export default TripPage;