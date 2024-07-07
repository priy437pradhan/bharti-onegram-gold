import { jewelryData } from '../lib/jewelaryData';
import Card from './MyCard';

const CardSection = () => {
  console.log("CardSection")
  return (
    <main className="container mx-auto py-12">
      <div className="flex flex-wrap justify-center">
        {jewelryData.map((item) => (

          <Card 
            key={item.id} 
            id={item.id}
            title={item.title} 
            price={item.price} 
            imageUrl={item.imageUrl} 
            material={item.material} 
          />
        ))}
      </div>
    </main>
  );
};

export default CardSection;
