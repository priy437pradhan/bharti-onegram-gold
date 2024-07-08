import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Accordion from './components/Accordion';
import Contact from './pages/Contact';
import './App.css';
import CardDetail from './components/CardDetail';
import CardSection from './pages/CardSection';
// import baseURL from './config';
function App() {
  return (
    <>
      <Header />
      <Routes>
      

        <Route path="/about" element={<About  />} />
        <Route path="/service" element={<Accordion  />} />
        <Route path="/Contact" element={<Contact  />} />
        
        <Route path="/" element={<CardSection />} />



        <Route path="/:id" element={<CardDetail />}/>

      
        
      </Routes>

    </>
  );
}

export default App;
