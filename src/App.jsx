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
          <p className="text-xl mb-8">Complete IT Solutions for Business Growth and Innovation</p>
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
            <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Native iOS and Android apps</li>
              <li>• Cross-platform solutions</li>
              <li>• UI/UX design</li>
              <li>• App maintenance and updates</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Responsive websites</li>
              <li>• E-commerce solutions</li>
              <li>• Custom web applications</li>
              <li>• CMS development</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Software Services</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Custom software development</li>
              <li>• Enterprise solutions</li>
              <li>• Cloud integration</li>
              <li>• API development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Freelancing Resources Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Freelancing Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">For Businesses</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Access to skilled developers</li>
                <li>• Flexible engagement models</li>
                <li>• Project management support</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">For Freelancers</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Project opportunities</li>
                <li>• Technical mentorship</li>
                <li>• Resource access</li>
                <li>• Career growth support</li>
              </ul>
            </div>
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