import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

import CardDetail from './pages/CardDetail'
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

import CombinedCategories from './pages/CombinedCatagories';
import FilteredPage from './pages/FilteredPage';
import FilterSort from './components/FilterSort';
function App() {
  return (
    <>
      <Header />
      <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/category/:category" element={<CombinedCategories />} />
        

        <Route path="/jewellery/:id" element={<CardDetail />}/>
        <Route path="/about" element={<About  />} />
        <Route path="/service" element={<Services  />} />
        <Route path="/Contact" element={<Contact  />} /> 
        <Route path="/FilterSort" element={<FilterSort />} />
        <Route path="/filteredData" element={<FilteredPage/>} /> 
      </Routes>

    </>
  );
}

export default App;
