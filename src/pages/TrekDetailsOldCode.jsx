import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaMountain, FaUsers } from 'react-icons/fa';
import { southTrips, northTrips, weekendTrips } from '../data/treks';

const TrekDetails = () => {
  const { trekId } = useParams();
  const [trek, setTrek] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarTreks, setSimilarTreks] = useState([]); // Add this state

  useEffect(() => {
    // Combine all treks to search through
    const allTreks = [...southTrips, ...northTrips, ...weekendTrips];
    
    // Find the trek from the home page upcomingTreks
    // In a real app, this would be an API call
    setTimeout(() => {
      const foundTrek = allTreks.find(t => t.id === parseInt(trekId)) || {
        // Fallback data for the Hampi & Gokarna trek from home page
        id: parseInt(trekId),
        title: 'Hampi & Gokarna Murudeshwar Honnavar Tour',
        location: 'Karnataka',
        duration: '4 Days & 5 Nights',
        price: '₹10,999 / person',
        difficulty: 'easy',
        image: '/treks/hampi-gokarna.jpg',
        maxAltitude: '2000 ft',
        ageGroup: '12 - 40',
        includes: ['Food', 'Accommodation', 'Instructor', 'First Aid', 'Travelling'],
        itinerary: [
          {
            day: 1,
            title: 'Departure from Pune',
            description: 'Pune Departure via Seater Traveler: BMCC College, FC Road: Pickup at 07:00 PM, Xion Mall, Hinjewadi: Pickup at 08:00 PM. The journey then continues en route to Hampi.',
            meals: ['None'],
            highlights: []
          },
          {
            day: 2,
            title: 'Arrival in Hampi',
            description: 'We will reach Hampi by 11:30 AM with breakfast on the way and we will take a check in to our stay. Take some time to freshen up and get ready for adventurous activities such as cliff jumping and coracle ride.',
            meals: ['Breakfast', 'Lunch'],
            highlights: ['Coracle ride'],
            delights: ['Coconut Water']
          },
          {
            day: 3,
            title: 'Hampi Exploration',
            description: 'Start your day with a fulfilling breakfast. After breakfast, get yourself check out ready as we head for Hampi Temple Run. Explore the Ganesha Temple, Lotus Temple, and other remarkable ruins.',
            meals: ['Breakfast', 'Lunch'],
            highlights: ['Stone Chariot Visit'],
            delights: ['Sugarcane Juice']
          },
          {
            day: 4,
            title: 'Murudeshwar and Gokarna',
            description: 'Early morning arrival in Yallapur/Gokarna around 03:00 AM with check-in at a guesthouse. Rest and relax until 09:00 AM. After breakfast, visit the awe-inspiring Murudeshwar Temple.',
            meals: ['Breakfast', 'Lunch'],
            highlights: ['Largest Shiva Statue'],
            delights: ['Nimbu Pani /Kokam Sharbat']
          },
          {
            day: 5,
            title: 'Arrival in Pune',
            description: 'Pune arrival around 11.00AM',
            meals: ['None'],
            highlights: [],
            delights: []
          }
        ],
        about: 'Discovering Heritage and Beach Vibes: The Hampi-Gokarna Weekend Tour: Are you eager to experience history and soak up the beach atmosphere? Our Hampi-Gokarna weekend tour is tailor-made for you. It offers a blend of heritage exploration and beach relaxation. Explore ancient sites, enjoy river rides, and embrace the historical enthusiast in you. Then, put on your Hawaiian attire as we venture to Gokarna, a serene paradise where palm trees and stunning sunrises create picture-perfect moments.'
      };
      
      setTrek(foundTrek);
      
      // Set similar treks - for example, treks from the same location or with similar difficulty
      setSimilarTreks([
        {
          id: 101,
          title: 'Coorg Chikmagaluru Mysore Backpacking',
          location: 'Karnataka',
          duration: '3 Days',
          price: '₹8,999',
          image: '/treks/coorg.jpg'
        },
        {
          id: 102,
          title: 'Best Of Kerala Pondicherry',
          location: 'Kerala',
          duration: '5 Days',
          price: '₹12,999',
          image: '/treks/kerala.jpg'
        },
        {
          id: 103,
          title: 'Dandeli Gokarna Murudeshwar Honnavar Goa',
          location: 'Goa',
          duration: '6 Days',
          price: '₹14,999',
          image: '/treks/goa.jpg'
        }
      ]);
      
      setLoading(false);
    }, 500); // Simulate loading time
  }, [trekId]);

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="content-container flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-nature-green"></div>
        </div>
      </div>
    );
  }

  if (!trek) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="content-container text-center">
          <h1 className="text-3xl font-bold mb-4">Trek Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the trek you're looking for.</p>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="content-container">
        {/* Hero Section */}
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <img 
              src={trek.image} 
              alt={trek.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-6 w-full">
                <h1 className="text-4xl font-bold mb-2">{trek.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {trek.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {trek.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMountain /> {trek.difficulty.charAt(0).toUpperCase() + trek.difficulty.slice(1)}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMoneyBillWave /> {trek.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trek Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Trek</h2>
              <p className="text-gray-700 mb-6">{trek.about}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaClock className="text-nature-green text-2xl mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Duration</h3>
                  <p>{trek.duration}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaMountain className="text-nature-green text-2xl mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Max Altitude</h3>
                  <p>{trek.maxAltitude}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaUsers className="text-nature-green text-2xl mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Age Group</h3>
                  <p>{trek.ageGroup}</p>
                </div>
              
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaCalendarAlt className="text-nature-green text-2xl mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Start Date</h3>
                  <p>{trek.startDate || 'Contact us for dates'}</p>
                </div>
               
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
              <div className="space-y-6">
                {trek.itinerary && trek.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-nature-green pl-4 pb-6">
                    <h3 className="text-xl font-bold mb-2">Day {day.day}: {day.title}</h3>
                    <p className="text-gray-700 mb-4">{day.point1}</p>
                    <p className="text-gray-700 mb-4">{day.point2}</p>
                    <p className="text-gray-700 mb-4">{day.point3}</p>
                    <p className="text-gray-700 mb-4">{day.point4}</p>
                    <p className="text-gray-700 mb-4">{day.point5}</p>
                    <p className="text-gray-700 mb-4">{day.point6}</p>
                    <p className="text-gray-700 mb-4">{day.point7}</p>
                    <p className="text-gray-700 mb-4">{day.point8}</p>
                    <p className="text-gray-700 mb-4">{day.point9}</p>

                    {day.meals && day.meals.length > 0 && (
                      <div className="mb-2">
                        <span className="font-semibold">Meals:</span> {day.meals.join(', ')}
                      </div>
                    )}
                    
                    {day.highlights && day.highlights.length > 0 && (
                      <div className="mb-2">
                        <span className="font-semibold">Highlight:</span> {day.highlights.join(', ')}
                      </div>
                    )}
                    
                    {day.delights && day.delights.length > 0 && (
                      <div>
                        <span className="font-semibold">Delight:</span> {day.delights.join(', ')}
                      </div>
                    )}
                  </div>
                ))}
                {!trek.itinerary && (
                  <p className="text-gray-700">Detailed itinerary coming soon!</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Price</h2>
              <p className="text-3xl font-bold text-nature-green mb-4">{trek.price}</p>
              
              <button className="btn-primary w-full mb-4">Book Now</button>
              
             
              
              <div>
                <h3 className="font-semibold mb-2">Have Questions?</h3>
                <p className="text-sm mb-2">Contact us for more information</p>
                <a href="tel:9860022669" className="text-nature-green font-semibold block mb-1">+91 9860022669</a>
                <a href="mailto:info@adventureawaits.com" className="text-nature-green font-semibold block">info@adventureawaits.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
      {trek.faq && trek.faq.map((item, index) => (
  <div key={index} className="border-b pb-4">
    <h3 className="font-bold mb-2">{item.question}</h3>
    <p className="text-gray-700">{item.answer}</p>
  </div>
))}


      </div>
    </div>
  );
};

export default TrekDetails;









export const southTrips = [
  {
    id: 1,
    title: 'Hampi & Hippie Island Trip',
    location: 'Karnataka',
    duration: '2 Days & 3 Nights',
    price: '₹7,799 / person',
    difficulty: 'easy',
    image: '/treks/Hampi2.jpg',
    itinerary: [
      {
        day: 1,
        title: 'Pune & Mumbai Group Departure',
        point1: 'Wakad 7:30 pm | Deccan 8:30 pm | Hadapsar 9:30 pm',
        point2: '* Mumbai Pickups: Between 1-4 pm from major stations (Borivali to Kalamboli)',
        point3: '* Mumbai participants join via connecting bus to Pune',
        meals: ['Lunch', 'Dinner'],
        highlights: ['Scenic drive', 'Base camp views']
      },
      {
        day: 2,
        title: 'Hippie Island Exploration',
        point1: '* Freshen up at hotel',
        point2: '* Breakfast & Lunch provided',
        point3: "* Visit Durga Temple, Sugriva's Cave, Anegundi Village & Chintamani Temple",
        point4: '* Coracle ride & cliff jumping 🌊',
        point5: '* Sunset at Anjanadri Hills 🌅',
        point6: '* Explore local cafes for dinner (on personal expense) 🍽️',
        point7: '* Overnight stay',
        meals: ['Breakfast'],
        highlights: ['Summit views', 'Photography opportunities']
      },
      {
        day: 3,
        title: 'South Hampi Tour',
        point1: '* Breakfast & lunch provided',
        point2: '* Vijaya Vittala Temple & Stone Chariot',
        point3: "* Queen’s Bath, Elephant Stables, Lotus Mahal",
        point4: '* Royal Enclosure, Hazara Rama Temple',
        point5: '* Underground Shiva Temple, Hampi Bazar',
        point6: '* Virupaksha Temple & Lakshmi the elephant',
        point7: '* Explore Hampi night market & depart to hometown',
        meals: ['Breakfast'],
        highlights: ['Summit views', 'Photography opportunities']
      },
      {
        day: 4,
        title: 'Return to Pune & Mumbai',
        point1: '* Reach Pune: 5–8 am',
        point2: '* Mumbai Drop: Between 10 am – 2 pm'
      }
    ],
    faq: [
      {
        question: 'What is the best time to visit this trek?',
        answer: 'The best time to visit is from October to March when the weather is pleasant and suitable for trekking.'
      },
      {
        question: 'Is this trek suitable for beginners?',
        answer: 'Yes, this trek is categorized as easy and is suitable for beginners with basic fitness levels.'
      },
      {
        question: 'What should I carry for the trek?',
        answer: 'You should carry a water bottle, comfortable trekking shoes, sunscreen, sunglasses, and a personal first-aid kit.'
      },
      {
        question: 'Are meals included in the package?',
        answer: 'Yes, all meals during the trek are included unless mentioned otherwise in the package details.'
      },
      {
        question: 'Is there any age limit for participating?',
        answer: 'Participants should be at least 10 years old and physically fit. There is no strict upper age limit.'
      }
    ]
  },



  {
    id: 2,
    title: 'Gokarna Trip',
    location: 'Karnataka',
    duration: '2 Days & 3 Nights',
    price: '₹7,299 / person',
    difficulty: 'easy',
    image: '/treks/Gokarna3.jpg',
    itinerary: [
      {
        day: 1,
        title: 'Departure and Trek Start',
       point1: '',
        point2: '',
        point3: '',
        point4: '',
        point5: '',
        point6: '',
        point7: '',
        point8: '',
        point9: '',
        meals: ['Lunch', 'Dinner'],
        highlights: ['Scenic drive', 'Base camp views']
      },
      {
        day: 2,
        title: 'Summit and Return',
      point1: '',
        point2: '',
        point3: '',
        point4: '',
        point5: '',
        point6: '',
        point7: '',
        point8: '',
        point9: '',
        meals: ['Breakfast'],
        highlights: ['Summit views', 'Photography opportunities']
      }
    ]
  },
  {
    id: 3,
    title: 'Hampi, Gokarna & Jog Falls Trip',
    location: 'Karnataka',
    duration: '4 Days & 5 Nights',
    price: '₹10,999 / person',
    difficulty: 'easy',
    image: '/treks/jog-fall.png'
  },
  
];
console.log("Loaded Trek:", southTrips);



export const northTrips = [
  {
    id: 1,
    title: 'Hampta Pass Trek',
    location: 'Himachal Pradesh',
    duration: '5 Days',
    price: '$299',
    difficulty: 'moderate',
    image: '/treks/hampta-pass.jpg',
    itinerary: [
      {
        day: 1,
        title: 'Manali Arrival',
     point1: '',
        point2: '',
        point3: '',
        point4: '',
        point5: '',
        point6: '',
        point7: '',
        point8: '',
        point9: '',
        meals: ['Dinner'],
        highlights: ['Manali market', 'Group introduction']
      },
      
      {
        day: 2,
        title: 'Manali to Jobra and Trek to Chika',
      point1: '',
        point2: '',
        point3: '',
        point4: '',
        point5: '',
        point6: '',
        point7: '',
        point8: '',
        point9: '',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        highlights: ['Pine forest trail', 'Rani Nallah']
      }
    ]
  },
  {
    id: 2,
    title: 'Kedarkantha Trek',
    location: 'Uttarakhand',
    duration: '6 Days',
    price: '$349',
    difficulty: 'moderate',
    image: '/treks/kedarkantha.jpg'
  },
  {
    id: 3,
    title: 'Valley of Flowers Trek',
    location: 'Uttarakhand',
    duration: '7 Days',
    price: '$399',
    difficulty: 'moderate',
    image: '/treks/valley-of-flowers.jpg'
  },
  {
    id: 4,
    title: 'Triund Trek',
    location: 'Himachal Pradesh',
    duration: '2 Days',
    price: '$159',
    difficulty: 'easy',
    image: '/treks/triund.jpg'
  }
];


export const weekendTrips = [
  {
    id: 1,
    title: 'Lonavala Weekend Trek',
    location: 'Maharashtra',
    duration: '2 Days',
    price: '$99',
    difficulty: 'easy',
    image: '/treks/lonavala.jpg'
  },
  {
    id: 2,
    title: 'Rajmachi Fort Trek',
    location: 'Maharashtra',
    duration: '2 Days',
    price: '$89',
    difficulty: 'easy',
    image: '/treks/rajmachi.jpg'
  }
];

export const faqs = [
  {
    question: "How will the stays be like?",
    answer:
      "Accommodations will be in comfortable guesthouses or hotels with basic amenities. Rooms are typically shared (2-3 people per room).",
  },
  {
    question: "Can I join the trip as a solo traveler?",
    answer:
      "Absolutely! Many of our participants are solo travelers. It's a great way to meet like-minded adventure enthusiasts.",
  },
  {
    question: "What should I pack for this trip?",
    answer:
      "Comfortable clothing, good walking shoes, sunscreen, hat, water bottle, and a small backpack for day trips. A detailed packing list will be provided after booking.",
  },
  {
    question: "What meals are provided during the trip?",
    answer:
      "Meals are provided as mentioned in the itinerary. Typically includes breakfast and lunch on most days.",
  },
];



{/* <div className="bg-white rounded-lg shadow-md p-6">
  <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
  <div className="space-y-6">
    {trek.itinerary?.map((day, index) => (
      <div key={index} className="border-l-4 border-nature-green pl-4 pb-6">
        <h3 className="text-xl font-bold mb-2">Day {day.day}: {day.title}</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          {day.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>


itinerary: [
  {
    day: 1,
    title: 'Arrival and Exploration',
    points: [
      'Reach base village by morning.',
      'Freshen up and breakfast.',
      'Start the trek to the summit.',
      'Enjoy scenic views and lunch at the top.',
      'Descend by evening and rest at campsite.'
    ]
  },
  {
    day: 2,
    title: 'Adventure and Departure',
    points: [
      'Morning tea and yoga session.',
      'Explore nearby waterfalls.',
      'Group activities and games.',
      'Lunch and sharing experiences.',
      'Depart by evening with memories.'
    ]
  }
] */}
