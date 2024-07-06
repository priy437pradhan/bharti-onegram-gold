import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const CardDetail = ({ cards }) => {
  const { id } = useParams();
  const card = cards.find((card) => card.id === parseInt(id));

  

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img className="w-full" src={card.imageUrl} alt={card.title} />
      <h2 className="text-2xl font-bold">{card.title}</h2>
      <p className="text-gray-700 text-base">${card.price}</p>
      <p>{card.material}</p>
    </div>
  );
};

CardDetail.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      material: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardDetail;
