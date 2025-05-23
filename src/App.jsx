import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { EnvelopeIcon, PhoneIcon, SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const position = [17.4482, 78.3240]; // Nallagandla, Hyderabad coordinates

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Freelancing', href: '#freelancing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>UK IT Solutions</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-600'}`}
              >
                {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg mr-2 ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-600'}`}
              >
                {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${darkMode ? 'text-white' : 'text-gray-600'}`}
              >
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block py-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className={`pt-16 bg-gradient-to-r ${darkMode ? 'from-blue-900 to-blue-700' : 'from-blue-600 to-blue-800'} text-white`}>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforming Ideas into Digital Reality</h1>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              UK IT Solutions is your trusted partner in digital transformation. We specialize in delivering cutting-edge technology solutions that help businesses thrive in the digital age. With our expertise in web development, mobile applications, and enterprise software, we transform your vision into powerful, scalable solutions.
            </p>
            <div className="space-y-4 text-gray-100 mb-8">
              <p className="flex items-center">
                <span className="mr-2">✓</span>
                Custom software solutions tailored to your business needs
              </p>
              <p className="flex items-center">
                <span className="mr-2">✓</span>
                Expert team of developers and project managers
              </p>
              <p className="flex items-center">
                <span className="mr-2">✓</span>
                Comprehensive support for freelancers and businesses
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className={`${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-white text-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-lg font-semibold transition`}>
                Get Started
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className={`py-16 container mx-auto px-4 ${darkMode ? 'text-white' : ''}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
            <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
              <li>• Native iOS and Android apps</li>
              <li>• Cross-platform solutions</li>
              <li>• UI/UX design</li>
              <li>• App maintenance and updates</li>
            </ul>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
              <li>• Responsive websites</li>
              <li>• E-commerce solutions</li>
              <li>• Custom web applications</li>
              <li>• CMS development</li>
            </ul>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <h3 className="text-xl font-semibold mb-4">Software Services</h3>
            <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
              <li>• Custom software development</li>
              <li>• Enterprise solutions</li>
              <li>• Cloud integration</li>
              <li>• API development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Freelancing Resources Section */}
      <div id="freelancing" className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : ''}`}>Freelancing Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>For Businesses</h3>
              <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                <li>• Access to skilled developers</li>
                <li>• Flexible engagement models</li>
                <li>• Project management support</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>For Freelancers</h3>
              <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
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
      <div id="contact" className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : ''}`}>Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>Our Location</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Flat No 304, SRA Nilayam,<br />
                Huda Layout, Nallagandla,<br />
                Hyderabad, 500019
              </p>
              <div className="flex items-center mb-2">
                <PhoneIcon className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                <a href="tel:+919849666113" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>+91 98496 66113</a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                <a href="mailto:info@uk-it.in" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>info@uk-it.in</a>
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
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-blue-900'} text-white py-8`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 UK IT Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;