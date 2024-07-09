import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HandleShare from '../components/HandleShare';
import HandleOrder from '../components/HandleOrder';
import OrderCard from '../components/OrderCard';
import '../App.css';
import { CategoryOneData } from '../lib/CategoryOneData';
import { CategoryTwoData } from '../lib/CategoryTwoData';
import { CategoryThreeData } from '../lib/CategoryThreeData';
import { CategoryFourData } from '../lib/CategoryFourData';
import { CategoryFiveData } from '../lib/CategoryFiveData';
import { CategorySixData } from '../lib/CategorySixData';
import { CategorySevenData } from '../lib/CategorySevenData';
import { CategoryEightData } from '../lib/CategoryEightData';
const CardDetail = () => {
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryOneItem = CategoryOneData.find((item) => item.id === id) || {};
  const categoryTwoItem = CategoryTwoData.find((item) => item.id === id) || {};
  const categoryThreeItem = CategoryThreeData.find((item) => item.id === id) || {};
  const categoryFourItem = CategoryFourData.find((item) => item.id === id) || {};
  const categoryFiveItem = CategoryFiveData.find((item) => item.id === id) || {};
  const categorySixItem = CategorySixData.find((item) => item.id === id) || {};
  const categorySevenItem = CategorySevenData.find((item) => item.id === id) || {};
  const categoryEightItem = CategoryEightData.find((item) => item.id === id) || {};

  const card = {...categoryOneItem, ...categoryTwoItem, ...categoryThreeItem, ...categoryFourItem, ...categoryFiveItem, ...categorySixItem, ...categorySevenItem, ...categoryEightItem,};

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
    <>
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
        </div>
      </div>
      <div className={`shareOrder ${isExpanded ? 'btn-mt-2' : ''}`}>
        <HandleShare card={card} />
        <HandleOrder card={card} />
        <OrderCard />
      </div>
    </>
  );
};

export default CardDetail;
