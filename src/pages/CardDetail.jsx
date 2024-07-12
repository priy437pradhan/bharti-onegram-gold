import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HandleShare from '../components/HandleShare';
import HandleOrder from '../components/HandleOrder';
import OrderCard from '../components/OrderCard';
import '../App.css';
import {CombinedData} from '../lib/CombinedData';
import GoBackButton from '../components/GoBackButton';
const CardDetail = () => {
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);

  const CombinedDataItem = CombinedData.find((item) => item.id === id) || {};
  

  const card = {...CombinedDataItem };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!card.title) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <p>Card not found</p>
      </div>
    );
  }

  return (
    <div className="p-2">
      <GoBackButton />
      <div className={`card-detail-container relative rounded-lg overflow-hidden shadow-lg lg:m-4 my-4 mx-1 group cursor-pointer lg:float-left ${isExpanded ? 'h-expanded hi-expanded' : ''}`} onClick={toggleExpand}>
  <div className="relative">
    <img
      src={card.imageUrl}
      alt={card.title}
      className={`card-detail-image ${isExpanded ? 'hi-expanded' : ''} object-cover w-full h-full`}
    />
    <div className="absolute inset-0 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-90"></div> 
      <div className="absolute inset-x-0 bottom-0 p-4 text-white text-center">
        <div className="font-bold text-3xl mb-2">{card.title}</div>
        <p className="text-gray-300 text-lg">{`Price: Rs ${card.price}`}</p>
        <p className="text-green-500 font-semibold text-lg">{card.discount}</p>
        
      </div>
    </div>
  </div>
      </div>






      <div className={`shareOrder p-2 ${isExpanded ? 'btn-mt-2' : ''}`}>
        <HandleShare card={card} />
        <HandleOrder card={card} />
        <OrderCard />
      </div>
    </div>
  );
};

export default CardDetail;
