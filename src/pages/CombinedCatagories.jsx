
import { useParams } from 'react-router-dom';
import MainCatCard from '../components/MainCatCard';
import {CombinedData} from '../lib/CombinedData';
import FilterSort from '../components/FilterSort';

function CombinedCategories() {
  
  const { category } = useParams();

  const data = {
    'CategoryOne':CombinedData.filter(item => item.category === 'CategoryOne'),
    'CategoryTwo': CombinedData.filter(item => item.category === 'CategoryTwo'),
    'CategoryThree': CombinedData.filter(item => item.category === 'CategoryThree'),
    'CategoryFour': CombinedData.filter(item => item.category === 'CategoryFour'),
    'CategoryFive': CombinedData.filter(item => item.category === 'CategoryFive'), 
    'CategorySix': CombinedData.filter(item => item.category === 'CategorySix'), 
    'CategorySeven': CombinedData.filter(item => item.category === 'CategorySeven'), 
    'CategoryEight': CombinedData.filter(item => item.category === 'CategorySeven'), };

    const categoryData = data[category];

    if (!categoryData) {
      return <div>Category not found</div>;
    }

  return (
    <>
    <div className="p-4">
    <FilterSort  />
   
    </div>
    <div className="flex flex-wrap justify-start">
      {categoryData.map((card, index) => (
        <div key={index} className="w-1/2 p-2">
          <MainCatCard
            key={card.id}
            id={card.id}
            title={card.title}
            imageUrl={card.imageUrl}
            price={card.price}
          />
        </div>
      ))}
    </div>
    </>
  );
}

export default CombinedCategories;
