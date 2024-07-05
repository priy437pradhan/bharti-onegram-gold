
import Card from './Card';

const jewelryData = [
  {
    id: 1,
    title: 'Diamond Necklace',
    price: 2500,
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Gold Bracelet',
    price: 800,
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Silver Earrings',
    price: 120,
    imageUrl: 'https://via.placeholder.com/300',
  },

];

const CardSection = () => {
  return (

    <main className="container mx-auto">
        
    <div className="flex flex-wrap justify-center">
      {jewelryData.map((item) => (
        <Card key={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl} />
      ))}
    </div>
        </main>

  );
};

export default CardSection;
