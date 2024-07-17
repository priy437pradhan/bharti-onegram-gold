import { useState } from 'react';
import { BiX } from 'react-icons/bi';
import { useCart } from '../Context/CartContext';
import OrderCard from '../components/OrderCard';
import GoBackButton from '../components/GoBackButton';
import QuickViewModal from '../components/QuickViewModal';

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const discountAmount = item.discount ? item.price * (item.discount / 100) : 0;
      const discountedPrice = item.price - discountAmount;
      return total + discountedPrice * item.quantity;
    }, 0);
  };

  return (
    <div className="container mx-auto mt-2 mb-28 p-4">
      <GoBackButton />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md overflow-hidden h-40 flex items-center space-x-4 relative hover:shadow-xl transition-shadow duration-300"
              onClick={() => handleCardClick(item)}
            >
              <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover" />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-base text-gray-800">Rs. {item.price}</p>
                {item.discount && (
                  <p className="text-sm text-red-500">Discount: {item.discount}%</p>
                )}
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <div className="flex items-center">
                  <button onClick={(e) => { e.stopPropagation(); decrementQuantity(item.id); }} className="px-1 py-1 bg-gray-200 rounded text-xs">-</button>
                  <span className="px-2 text-sm">{item.quantity}</span>
                  <button onClick={(e) => { e.stopPropagation(); incrementQuantity(item.id); }} className="px-1 py-1 bg-gray-200 rounded text-xs">+</button>
                </div>
              </div>
              <BiX className="text-red-500 cursor-pointer" onClick={(e) => { e.stopPropagation(); removeFromCart(item.id); }} />
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg font-bold">Rs. {getTotalPrice().toFixed(2)}</p>
          </div>
          
          <OrderCard />
        </div>
      )}
      {selectedItem && <QuickViewModal item={selectedItem} onClose={closeModal} />}
    </div>
  );
};

export default Cart;
