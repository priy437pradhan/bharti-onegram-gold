import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const MainCatCard = ({ id, title, discount, imageUrl,price}) => {
  const navigate = useNavigate();
  return (
    <>
   
        <div onClick={() => navigate(`/jewellery/${id}`)} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">${price}</span>
                    {discount && <span className="text-sm text-red-500">-{discount}</span>}
                </div>
            </div>
        </div>
    </>
  );
};

MainCatCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
};

export default MainCatCard;