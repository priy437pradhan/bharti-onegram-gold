import MainCatCard from '../components/MainCatCard';
import { CategoryTwoData } from '../lib/CategoryTwoData';

function CategoryTwo() {
  return (
    <div className="flex flex-wrap justify-start">
      {CategoryTwoData.map((card, index) => (
        <div key={index} className="w-1/2 p-2">
          <MainCatCard
           key={card.id} 
           id={card.id}
            title={card.title}
            imageUrl ={card.imageUrl}
            price ={card.price}
          />
        </div>
      ))}
    </div>
  );
}

export default CategoryTwo;
