import MainCatCard from '../components/MainCatCard';
import { CategorySevenData } from '../lib/CategorySevenData';

function CategorySeven() {
  return (
    <div className="flex flex-wrap justify-start">
      {CategorySevenData.map((card, index) => (
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

export default CategorySeven;
