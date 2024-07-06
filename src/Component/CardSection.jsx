import Card from './MyCard';
import J1Image from '../assets/j-1.jpg';
import J2Image from '../assets/j-2.jpg';
import J3Image from '../assets/j-3.jpg';

const jewelryData = [
  {
    id: 1,
    title: 'Diamond Necklace',
    price: 2500,
    imageUrl: J1Image,
    material: 'Diamond and Gold'
  },
  {
    id: 2,
    title: 'Gold Bracelet',
    price: 800,
    imageUrl: J2Image,
    material: '24K Gold'
  },
  {
    id: 3,
    title: 'Silver Earrings',
    price: 120,
    imageUrl: J3Image ,
    material: 'Sterling Silver'
  },
  {
    id: 4,
    title: 'Silver Earrings',
    price: 120,
    imageUrl: J3Image ,
    material: 'Sterling Silver'
  },
  {
    id: 5,
    title: 'Silver Earrings',
    price: 120,
    imageUrl: J3Image ,
    material: 'Sterling Silver'
  },
  {
    id: 6,
    title: 'Silver Earrings',
    price: 120,
    imageUrl: J3Image ,
    material: 'Sterling Silver'
  },
];

const CardSection = () => {
  return (
    <main className="container mx-auto py-12">
      <div className="flex flex-wrap justify-center">
        {jewelryData.map((item) => (
          <Card 
            key={item.id} 
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
