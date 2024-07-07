import { jewelleryData } from '../lib/jewelleryData';
import Card from '../components/MyCard';
import { chainData } from '../lib/Chain';

const CardSection = () => {
  return (
    <>
      <main className="container mx-auto py-12">
        <a 
          href="https://wa.me/9861667624" 
          className="block bg-green-700 text-indigo-50 border border-gray-300 text-lg p-6 rounded-lg shadow-md text-center mb-8 transform transition duration-300 hover:scale-95 hover:indigo-100 hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here For placing an order WhatsApp us on 9861667624
        </a>
        <h1 className="px-4 py-2 text-3xl font-bold text-gray-800 mb-4 lg:mx-12">
          Our Jewellery Collection
        </h1>
        <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block">
              <div className="flex flex-nowrap justify-center lg:flex lg:flex-wrap lg:justify-center lg:mx-12">
                {jewelleryData.map((item) => (
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
        </div>
        </div>
        <h1 className="px-4 py-2 text-3xl font-bold text-gray-800 mb-4 lg:mx-12">
          chain
        </h1>
        <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block">
              <div className="flex flex-nowrap justify-center lg:flex lg:flex-wrap lg:justify-center lg:mx-12">
                {chainData.map((item) => (
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
        </div>
        </div>
        <h1 className="px-4 py-2 text-3xl font-bold text-gray-800 mb-4 lg:mx-12">
          Necklace
        </h1>
        <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block">
              <div className="flex flex-nowrap justify-center lg:flex lg:flex-wrap lg:justify-center lg:mx-12">
                {jewelleryData.map((item) => (
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
        </div>
        </div>
        <h1 className="px-4 py-2 text-3xl font-bold text-gray-800 mb-4 lg:mx-12">
          Earrings
        </h1>
        <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block">
              <div className="flex flex-nowrap justify-center lg:flex lg:flex-wrap lg:justify-center lg:mx-12">
                {jewelleryData.map((item) => (
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
        </div>
        </div>
       
        <h1 className="px-4 py-2 text-3xl font-bold text-gray-800 mb-4 lg:mx-12">
          Chain
        </h1>
        <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block">
              <div className="flex flex-nowrap justify-center lg:flex lg:flex-wrap lg:justify-center lg:mx-12">
                {jewelleryData.map((item) => (
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
        </div>
        </div>
        <h1 className="px-4 py-2 text-3xl font-bold text-gray-800 mb-4 lg:mx-12">
          Ring
        </h1>
        <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block">
              <div className="flex flex-nowrap justify-center lg:flex lg:flex-wrap lg:justify-center lg:mx-12">
                {jewelleryData.map((item) => (
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
        </div>
        </div>
        <h1 className="px-4 py-2 text-3xl font-bold text-gray-800 mb-4 lg:mx-12">
          Ear-Ring
        </h1>
        <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block">
              <div className="flex flex-nowrap justify-center lg:flex lg:flex-wrap lg:justify-center lg:mx-12">
                {jewelleryData.map((item) => (
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
        </div>
        </div>
        <h1 className="px-4 py-2 text-3xl font-bold text-gray-800 mb-4 lg:mx-12">
          Set
        </h1>
        <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block">
              <div className="flex flex-nowrap justify-center lg:flex lg:flex-wrap lg:justify-center lg:mx-12">
                {jewelleryData.map((item) => (
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
        </div>
        </div>
      </main>
    </>
  );
};

export default CardSection;
