import PropTypes from 'prop-types';
import { BiX } from 'react-icons/bi';

const QuickViewModal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="absolute top-20 left-0 w-full h-50vh bg-white p-4 rounded-lg overflow-hidden" style={{ backdropFilter: 'blur(10px)' }}>
        <BiX className="absolute top-2 bg-white p-1 rounded-s-full right-2 text-2xl cursor-pointer" onClick={onClose} />
        <div className="flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center">
            <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover" />
          </div>
          <div className="p-4 flex flex-col justify-center">
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-base text-gray-800">Rs. {item.price}</p>
            {item.discount && (
              <p className="text-sm text-red-500">Discount: {item.discount}%</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

QuickViewModal.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QuickViewModal;
