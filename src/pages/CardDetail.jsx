import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HandleShare from '../components/HandleShare';
import HandleOrder from '../components/HandleOrder';
import OrderCard from '../components/OrderCard';
import GoBackButton from '../components/GoBackButton';
import { CombinedData } from '../lib/CombinedData';

import '../App.css';
import CategoryThree from '../components/CategoryThree';
import AddToCart from '../components/AddToCart';  


const CardDetail = () => {
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  

  const CombinedDataItem = CombinedData.find((item) => item.id === id) || {};
  const card = { ...CombinedDataItem };

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
        className={`card-detail-container relative rounded-lg overflow-hidden shadow-lg lg:m-4 my-4 mx-1 group cursor-pointer lg:float-left ${isExpanded ? 'h-expanded' : ''}`}
        onClick={toggleExpand}
      >
        <div className="relative">
          <img
            src={card.imageUrl}
            alt={card.title}
            className={`card-detail-image ${isExpanded ? 'hi-expanded' : ''} object-cover w-full`}
          />
          {!isExpanded && (
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <div className="flex  items-center">
          <span className="text-base font-medium text-white-800">Rs:{card.price}</span>
          {card.discount && <span className="text-sm font-bold text-red-600">-Discount : {card.discount}%</span>}
        </div>
             
              <AddToCart />
            </div>
          )}
        </div>
        {isExpanded && (
          <div className="p-4 bg-white">
            <div>
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-800 mr-8">Rs: {card.price}</span>
          {card.discount && <span  className="text-sm font-bold text-red-600">-Discount : {card.discount}%</span>}
        </div>
        <AddToCart />
            </div>
          </div>
        )}
      </div>
      <div className={`shareOrder flex p-2 ${isExpanded ? 'btn-mt-2' : ''}`}>
        <HandleShare card={card} />
        <HandleOrder card={card} />
      </div>
        <OrderCard />
      <CategoryThree />
    </div>
  );
};

export default CardDetail;
