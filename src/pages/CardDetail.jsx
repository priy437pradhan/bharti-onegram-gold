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
      <div
        className={`c-responsive-image-sc relative rounded overflow-hidden shadow-lg lg:m-4 my-4 mx-1 group cursor-pointer lg:float-left ${isExpanded ? 'h-expanded hi-expanded' : ''}`}
        onClick={toggleExpand}
      >
        <div className="relative">
          <img
            src={card.imageUrl}
            alt={card.title}
            className={`responsive-image-sc ${isExpanded ? 'hi-expanded' : ''}`}
          />
         
        </div>
        <div className="px-2 py-2 absolute">
          <div className="font-500 text-m mb-2">{card.title}</div>
          <p className="text-gray-700 text-base">{`Rupees : ${card.price}`}</p>
          <div className="font-600 text-s mb-1" style={{color:"green" }}>{card.discount}</div>
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
