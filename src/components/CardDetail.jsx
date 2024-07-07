import { useParams } from 'react-router-dom';
import { jewelryData } from '../lib/jewelaryData';

const CardDetail = () => {
  console.log("cardDetail")
  const { id } = useParams();
  const card = jewelryData.find((card) => card.id === id); 

  if (!card) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <p>Card not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img className="w-full" src={card.imageUrl} alt={card.title} />
      <h2 className="text-2xl font-bold">{card.title}</h2>
      <p className="text-gray-700 text-base">${card.price}</p>
      <p>{card.material}</p>
    </div>
  );
};



export default CardDetail;
