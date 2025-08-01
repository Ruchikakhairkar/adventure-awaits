import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import herovideo from '../assets/video.mp4';
import hampiImg from '../assets/Hampi.jpg';
import gokarnaImg from '../assets/gokarna.jpg';
import yanacavesImg from '../assets/Yana-caves.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const upcomingTreks = [
    {
    id: 1,
    title: 'Hampi & Hippie Island Trip',
    location: 'Karnataka',
    duration: '2 Days & 3 Nights',
    price: '₹7,799 / person',
    image: hampiImg
  },
    {
      id: 2,
      title: 'Gokarna Trip',
      location: 'Karnataka ',
      duration: '2 Days & 3 Nights',
      price: '₹7,299 / person',
      image: gokarnaImg
    },
    {
      id: 3,
      title: 'Hampi, Gokarna & Jog Falls Trip',
      duration: '4 Days & 5 Nights',
      price: '₹10,999 / person',
      image: yanacavesImg
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={herovideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay for better text visibility */}
        <div className="relative hero-container px-4 h-full flex items-center">
          <div className="text-white max-w-2xl" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl mb-6">Adventure Awaits – Find Your Next Trek</h1>
            <p className="text-xl mb-8">Discover breathtaking trails and unforgettable experiences with our expert-guided treks.</p>
            <button className="btn-primary text-lg">Explore Treks</button>
          </div>
        </div>
      </section>

      
      {/* Upcoming Treks Section */}
      <section className="section-container">
        <div className="content-container">
         <h2
  className="section-title text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-gray-200 to-green-600"
  data-aos="fade-up"
>
  Independence Day Special Trips
</h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingTreks.map((trek) => (
              <div key={trek.id} className="trek-card" data-aos="fade-up" data-aos-delay={trek.id * 100}>
                <div className="relative h-64 bg-gray-200">
                  <img
                    src={trek.image}
                    alt={trek.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{trek.title}</h3>
                  <p className="text-gray-600 mb-2">{trek.location}</p>
                  <div className="flex justify-between items-center">
                    <span>{trek.duration}</span>
                    <span className="text-nature-green font-bold">{trek.price}</span>
                  </div>
                  <Link to={`/trek/${trek.id}`} className="btn-primary w-full mt-4 block text-center">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Rest of the component remains the same */}
      {/* Why Choose Us Section */}
      <section className=" bg-gray-50 px-16 py-16">
        <div className="container px-16">
          <h2 className="section-title " data-aos="fade-up">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-nature-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p>Certified guides and comprehensive safety measures for worry-free adventures.</p>
            </div>
            <div className="text-center p-6" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-nature-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p>Experienced local guides with extensive knowledge of trails and terrain.</p>
            </div>
            <div className="text-center p-6" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-nature-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Routes</h3>
              <p>Well-mapped and officially certified trekking routes for all skill levels.</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;