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
    <div className="relative max-w-xs rounded overflow-hidden shadow-lg m-4 group cursor-pointer" style={{  width: '200px' }}>
        <div className="relative">
          <img
            src={card.imageUrl}
            alt={card.title}
            style={{ height: '168px', width: '200px', objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent flex items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="py-2">{card.material}</span>
          </div>
        </div>
        <div className="px-6 py-4 relative z-10">
          <div className="font-500 text-m mb-2">{card.title}</div>
          <p className="text-gray-700 text-base">${card.price}</p>
        </div>
      </div>
  );
};



export default CardDetail;
