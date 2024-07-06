import PropTypes from 'prop-types';

const Cards = ({ id, title, price, imageUrl, material }) => {
  return (
    <a href={`/cards/${id}`}>
      <div className="relative max-w-xs rounded overflow-hidden shadow-lg m-4 group cursor-pointer">
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            style={{ height: '168px', width: '200px', objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent flex items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="py-2">{material}</span>
          </div>
        </div>
        <div className="px-6 py-4 relative z-10">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">${price}</p>
        </div>
      </div>
    </a>
  );
};

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
};

export default Cards;
