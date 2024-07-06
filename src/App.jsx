import { Routes, Route } from 'react-router-dom';

import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Accordion from './Component/Accordion';
import Contact from './Component/Contact';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
      

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About  />} />
        <Route path="/service" element={<Accordion  />} />
        <Route path="/Contact" element={<Contact  />} />
      </Routes>
    </>
  );
}

export default App;
