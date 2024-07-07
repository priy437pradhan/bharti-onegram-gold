import { jewelryData } from '../lib/jewelaryData';
import Card from '../components/MyCard';

const CardSection = () => {
  return (
    <>
      <main className="container mx-auto py-12">
        <a 
          href="https://wa.me/7077817064" 
          className="block bg-gray-100 border border-gray-300 text-lg text-gray-800 p-6 rounded-lg shadow-md text-center mb-8 transform transition duration-300 hover:scale-105 hover:text-blue-600 hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          For placing an order WhatsApp us on 7077817064
        </a>
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
    </>
  );
};

export default CardSection;
