import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    savedTreks: [
      {
        id: 1,
        title: 'Valley of Flowers Trek',
        date: '2024-08-15'
      },
      {
        id: 2,
        title: 'Kudremukh Trek',
        date: '2024-09-20'
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-24 pb-16">
      <div className="content-container">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">My Profile</h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Personal Information</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-nature-green hover:text-nature-green/80"
              >
                {isEditing ? 'Save' : 'Edit'}
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaUser className="text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-nature-green"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-nature-green"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <FaPhone className="text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-nature-green"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <FaHeart className="text-red-500 mr-2" />
              <h2 className="text-2xl font-bold">Saved Treks</h2>
            </div>

            <div className="space-y-4">
              {userInfo.savedTreks.map(trek => (
                <div
                  key={trek.id}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{trek.title}</h3>
                    <p className="text-sm text-gray-600">Planned: {trek.date}</p>
                  </div>
                  <button className="text-red-500 hover:text-red-600">
                    <FaHeart />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;