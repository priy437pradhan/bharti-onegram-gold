import { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { FiShoppingCart, FiCheckCircle } from 'react-icons/fi';
import { CombinedData } from '../lib/CombinedData';
import { useParams } from 'react-router-dom';


function AddToCart() {
    const { id } = useParams();
const [addedToCart, setAddedToCart] = useState(false);
const { addToCart } = useCart();
const CombinedDataItem = CombinedData.find((item) => item.id === id) || {};
  const card = { ...CombinedDataItem };

    const addToCartHandler = (e) => {
        e.stopPropagation();
        addToCart(card);
        setAddedToCart(true);
      };
      if (!card.title) {
        return (
          <div className="max-w-2xl mx-auto p-4">
            <p>Card not found</p>
          </div>
        );
      }
  return (
    <button
    onClick={addToCartHandler}
    disabled={addedToCart}
    className={`mt-2 flex items-center justify-center py-1 px-2 rounded-full transition-colors duration-300 ${addedToCart ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold text-sm`}
    >
    {addedToCart ? (
      <>
        <FiCheckCircle className="mr-1 text-white" size={16} />
        Added
      </>
    ) : (
      <>
        <FiShoppingCart className="mr-1 text-white" size={16} />
        Add
      </>
    )}
    </button>
  )
}

export default AddToCart