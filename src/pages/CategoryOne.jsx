import MainCatCard from '../components/MainCatCard';
import { CatagoryOneData } from '../lib/CategoryOneData';

function CategoryOne() {
  return (
    <div className="flex flex-wrap justify-start">
      {CatagoryOneData.map((card, index) => (
        <div key={index} className="w-1/2 p-2">
          <MainCatCard
           key={card.id} 
           id={card.id}
            title={card.title}
            imageUrl ={card.imageUrl}
          />
        </div>
      ))}
    </div>
  );
}

export default CategoryOne;
