import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function App() {
  const position = [17.4482, 78.3240]; // Nallagandla, Hyderabad coordinates

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">UK IT Solutions</h1>
          <p className="text-xl mb-8">Your Trusted Partner for IT Solutions and Project Development</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Freelance Projects</h3>
            <p className="text-gray-600">Expert development services for your freelance projects with quick turnaround times.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Business Solutions</h3>
            <p className="text-gray-600">Custom software development tailored to your business needs and objectives.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">IT Consulting</h3>
            <p className="text-gray-600">Professional guidance and expertise for your technology decisions.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <p className="text-gray-600 mb-4">
                Flat No 304, SRA Nilayam,<br />
                Huda Layout, Nallagandla,<br />
                Hyderabad, 500019
              </p>
              <div className="flex items-center mb-2">
                <PhoneIcon className="h-5 w-5 text-blue-600 mr-2" />
                <a href="tel:+919849666113" className="text-blue-600 hover:text-blue-800">+91 98496 66113</a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-blue-600 mr-2" />
                <a href="mailto:info@uk-it.in" className="text-blue-600 hover:text-blue-800">info@uk-it.in</a>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <MapContainer 
                center={position} 
                zoom={15} 
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    UK IT Solutions<br />
                    Nallagandla, Hyderabad
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 UK IT Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;