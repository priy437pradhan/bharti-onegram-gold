import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from '../assets/mainLogo.png';
// import Search from '../components/SearchBar'
import '../App.css';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 left-0 text-yellow-400 shadow-md z-20 w-full" style={{ backgroundColor: "#082217" }}>
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        <div onClick={() => navigate(`/`)}>
          <img src={mainLogo} alt="" className='mainLogo' />
        </div>
        {/* <Search/> */}
        <nav className="hidden md:flex space-x-6">
          <a href="about" className="hover:text-yellow-500 transition-colors duration-200">About</a>
          <a href="service" className="hover:text-yellow-500 transition-colors duration-200">Services</a>
          <a href="contact" className="hover:text-yellow-500 transition-colors duration-200">Contact</a>
        </nav>
     
        {/* Toggle button for mobile */}
        <div className="md:hidden absolute top-5 right-4">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-400 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800 absolute top-full left-0 w-full z-30 p-2` }>
        <a href="about" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">About</a>
        <a href="service" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Services</a>
        <a href="contact" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Contact</a>
      </div>
    </header>
  );
};

export default Header;
