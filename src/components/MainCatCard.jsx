import PropTypes from 'prop-types';
import '../App.css'
const MainCatCard = ({ id, title, imageUrl}) => {
  return (
    <>
    <a href={`/${id}`}>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-2 py-2">
        <div className="font-bold text-xl mb-1">{title}</div>
        
      </div>
    </div>
    </a>
    <div className="flex justify-start">
    
    </div>
    </>
  );
};

MainCatCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
};

export default MainCatCard;