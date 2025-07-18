import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SouthTrip from './pages/SouthTrip';
import NorthTrip from './pages/NorthTrip';
import WeekendTrip from './pages/WeekendTrip';
import Profile from './pages/Profile';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/south-trip" element={<SouthTrip />} />
            <Route path="/north-trip" element={<NorthTrip />} />
            <Route path="/weekend-trip" element={<WeekendTrip />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
