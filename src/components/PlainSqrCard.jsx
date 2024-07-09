import PropTypes from 'prop-types';

const ChainCards = ({ id, title, price, imageUrl, material }) => {
  return (

    <a href={`/${id}`}>
      <div className="card-hover relative max-w-xs rounded overflow-hidden shadow-lg m-4 group cursor-pointer" style={{  width: '200px' }}>
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            style={{ height: '168px', width: '200px', objectFit: 'cover' }}
          />
          <div className="materialCard absolute inset-0 bg-gradient-to-r flex items-center p-4 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="py-2">{material}</span>
          </div>
        </div>
        <div className="px-6 py-4 relative z-1">
          <div className="font-500 text-m mb-2">{title}</div>
          <p className="text-gray-700 text-base">{price}</p>
        </div>
        
      </div>
    </a>
  );
};

ChainCards.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
};

export default ChainCards;