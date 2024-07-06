import CardSection from './CardSection';
import CardDetail from './CardDetail';
import { Routes, Route } from 'react-router-dom';


const Home = () => {

  return (
    <div>
      <Routes>
        <Route path="*" element={<CardSection />} />
        <Route
          path="/cards/:id"
          element={<CardDetail/>}
        />
      </Routes>
    </div>
  );
};

export default Home;
