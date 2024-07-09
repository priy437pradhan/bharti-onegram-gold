import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import CategoryOne from './pages/CategoryOne';
import CardDetail from './pages/CardDetail';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';
function App() {
  return (
    <>
      <Header />
      <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/category1" element={<CategoryOne/>} />

        <Route path="/:id" element={<CardDetail />}/>
        <Route path="/about" element={<About  />} />
        <Route path="/service" element={<Services  />} />
        <Route path="/Contact" element={<Contact  />} /> 
      </Routes>

    </>
  );
}

export default App;
