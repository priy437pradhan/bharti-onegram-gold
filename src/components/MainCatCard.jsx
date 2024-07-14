// import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { BiHeart } from 'react-icons/bi'; 
import '../App.css';

const MainCatCard = ({ id, title, discount, imageUrl, price }) => {
  const navigate = useNavigate();
  // const [isWishlisted, setIsWishlisted] = useState(false);

  // const handleWishlistClick = (e) => {
  //   e.stopPropagation(); 
  //   setIsWishlisted(!isWishlisted);
  //   console.log('Added to wishlist');
  // };

  const handleCardClick = () => {
    navigate(`/jewellery/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-mono mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-800">Rs: {price}</span>
          {discount && <span className="text-sm text-red-500">-{discount}%</span>}
        </div>
        {/* <button
          onClick={handleWishlistClick}
          className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full"
        >
          <BiHeart className={`text-${isWishlisted ? 'pink' : 'gray'}-500 w-6 h-6`} />
        </button> */}
      </div>
    </div>
  );
};

MainCatCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  discount: PropTypes.string,
};

export default MainCatCard;
