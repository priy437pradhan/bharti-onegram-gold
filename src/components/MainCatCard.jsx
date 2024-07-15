import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { CombinedData } from '../lib/CombinedData';
import '../App.css';
import { useWishList } from '../Context/WishListContext';

const MainCatCard = ({ id, title, discount, imageUrl, price }) => {
  const CombinedDataItem = CombinedData.find((item) => item.id === id) || {};
  const card = { ...CombinedDataItem };

  const navigate = useNavigate();
  const { addToWishList, removeFromWishList, wishListItems } = useWishList();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const isItemWishlisted = wishListItems.some(item => item.id === id);
    setIsWishlisted(isItemWishlisted);
  }, [wishListItems, id]);

  const handleWishListClick = (e) => {
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishList(id);
    } else {
      addToWishList(card);
    }
    setIsWishlisted(!isWishlisted);
  };

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
        <button
          onClick={handleWishListClick}
          className="absolute top-2 right-2 p-2 bg-white rounded-full"
        >
          <FaHeart className={isWishlisted ? 'text-[#ff0066]' : 'text-gray-300'} />
        </button>
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
