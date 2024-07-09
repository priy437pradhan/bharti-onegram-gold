import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

import CardDetail from './pages/CardDetail';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';
import CategoryOne from './pages/CategoryOne';
import CategoryTwo from './pages/CategoryTwo';
import CategoryThree from './pages/CategoryThree';
import CategoryFour from './pages/CategoryFour';
import CategoryFive from './pages/CategoryFive';
import CategorySix from './pages/CategorySix';
import CategorySeven from './pages/CategorySeven';
import CategoryEight from './pages/CategoryEight';
function App() {
  return (
    <>
      <Header />
      <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/category1" element={<CategoryOne/>} />
        <Route path="/category2" element={<CategoryTwo/>} />
        <Route path="/category3" element={<CategoryThree/>} />
        <Route path="/category4" element={<CategoryFour/>} />
        <Route path="/category5" element={<CategoryFive/>} />
        <Route path="/category6" element={<CategorySix/>} />
        <Route path="/category7" element={<CategorySeven/>} />
        <Route path="/category8" element={<CategoryEight/>} />

        <Route path="/:id" element={<CardDetail />}/>
        <Route path="/about" element={<About  />} />
        <Route path="/service" element={<Services  />} />
        <Route path="/Contact" element={<Contact  />} /> 
      </Routes>

    </>
  );
}

export default App;
