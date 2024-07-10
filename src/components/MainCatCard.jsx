import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const MainCatCard = ({ id, title, imageUrl,price}) => {
  const navigate = useNavigate();
  return (
    <>
    <div
      onClick={() => navigate(`/jewellery/${id}`)}>
      <div className="MainCatCard max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="CardDescription px-2 py-2">
        <div className="font-400 text-m mb-1">{title}</div>
        <div className="font-600 text-s mb-1">{`Rupees : ${price}`}</div>
        
      </div>
    </div>
    </div>
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