import { useState } from 'react';
// import SearchBar from './SearchBar';
import mainLogo from '../assets/mainLogo.png';
import '../App.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 left-0 bg-gray-800 text-orange-400 shadow-md z-10 w-full">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <a href="/"><img src={mainLogo} alt="" className='mainLogo'/></a>
        <div className="p-4">
      {/* <SearchBar /> */}
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="about" className="hover:text-orange-500 transition-colors duration-200">About</a>
          <a href="service" className="hover:text-orange-500 transition-colors duration-200">Services</a>
          <a href="contact" className="hover:text-orange-500 transition-colors duration-200">Contact</a>
        </nav>
      
        <div className="md:hidden">
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
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
        <a href="about" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">About</a>
        <a href="service" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Services</a>
        <a href="contact" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Contact</a>
       
      </div>
    </header>
  );
};

export default Header;
