import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaMountain, FaUsers } from 'react-icons/fa';
import { southTrips, northTrips, weekendTrips } from '../data/treks';

const TrekDetails = () => {
  const { trekId } = useParams();
  const [trek, setTrek] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarTreks, setSimilarTreks] = useState([]);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  useEffect(() => {
    const allTreks = [...southTrips, ...northTrips, ...weekendTrips];
    const foundTrek = allTreks.find(t => t.id === parseInt(trekId));

    setTimeout(() => {
      setTrek(foundTrek);
      setLoading(false);

      if (foundTrek) {
        // You can filter based on category or location if needed
        const similar = allTreks.filter(t => t.location === foundTrek.location && t.id !== foundTrek.id);
        setSimilarTreks(similar.slice(0, 3));
      }
    }, 500);
  }, [trekId]);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-nature-green"></div>
      </div>
    );
  }

  if (!trek) {
    return (
      <div className="pt-24 pb-16 min-h-screen text-center">
        <h1 className="text-3xl font-bold mb-4">Trek Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find the trek you're looking for.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="content-container">
        {/* Hero Section */}
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <img src={trek.image} alt={trek.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-6 w-full">
                <h1 className="text-4xl font-bold mb-2">{trek.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1"><FaMapMarkerAlt /> {trek.location}</span>
                  <span className="flex items-center gap-1"><FaClock /> {trek.duration}</span>
                  <span className="flex items-center gap-1"><FaMountain /> {trek.difficulty}</span>
                  <span className="flex items-center gap-1"><FaMoneyBillWave /> {trek.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trek Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left */}
          <div className="lg:col-span-2">
            {/* About */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Trek</h2>
              <p className="text-gray-700 mb-6">{trek.about}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <InfoCard icon={<FaClock />} label="Duration" value={trek.duration} />
                <InfoCard icon={<FaMountain />} label="Max Altitude" value={trek.maxAltitude || '2000'} />
                <InfoCard icon={<FaUsers />} label="Age Group" value={trek.ageGroup || '12 - 40'} />
                <InfoCard icon={<FaCalendarAlt />} label="Start Date" value={trek.startDate || 'Contact us'} />
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
              <div className="space-y-6">
                {trek.itinerary?.map((day, index) => (
                  <div key={index} className="border-l-4 border-nature-green pl-4 pb-6">
                    <h3 className="text-xl font-bold mb-2">Day {day.day}: {day.title}</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      {day.points?.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                    {day.meals?.length > 0 && <p><strong>Meals:</strong> {day.meals.join(', ')}</p>}
                    {day.highlights?.length > 0 && <p><strong>Highlights:</strong> {day.highlights.join(', ')}</p>}
                    {day.delights?.length > 0 && <p><strong>Delights:</strong> {day.delights.join(', ')}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 sticky top-20">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Price</h2>
              <p className="text-3xl font-bold text-nature-green mb-4">{trek.price}</p>
              <button className="btn-primary w-full mb-4">Book Now</button>
              <div>
                <h3 className="font-semibold mb-2">Have Questions?</h3>
                <p className="text-sm mb-2">Contact us for more information</p>
                <a href="tel:9860022669" className="text-nature-green font-semibold block mb-1">+91 9860022669</a>
                <a href="mailto:info@adventureawaits.com" className="text-nature-green font-semibold block">theadventureawaits25@gmail.com</a>
              </div>
            </div>

            {/* Dynamic Info Cards */}
            {trek.infoCards?.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                {card.items.map((item, i) => (
                  <p key={i} className="text-sm mb-2">{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">F.A.Q.</h2>
          {trek.faq?.map((item, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
              >
                {item.question}
                <span className="text-nature-green">{openFAQIndex === index ? '-' : '+'}</span>
              </button>
              {openFAQIndex === index && (
                <p className="text-gray-700 mt-2 text-sm">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div className="bg-gray-50 p-4 rounded-lg text-center">
    <div className="text-nature-green text-2xl mx-auto mb-2">{icon}</div>
    <h3 className="font-semibold text-sm">{label}</h3>
    <p>{value}</p>
  </div>
);

export default TrekDetails;
