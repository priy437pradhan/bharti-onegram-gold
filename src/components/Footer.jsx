import { Link } from 'react-router-dom';
import { BiHome, BiCart, BiSearch } from 'react-icons/bi'; 
import { FaHeart } from 'react-icons/fa';
import { useCart } from '../Context/CartContext';

function Footer() {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full flex justify-between items-center">
      <Link to="/" className="hover:text-gray-400 flex flex-col items-center">
        <BiHome className="h-6 w-6" />
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/cart" className="relative hover:text-gray-400 flex flex-col items-center">
        <BiCart className="h-6 w-6" />
        {totalQuantity > 0 && (
          <span className="absolute left-6 bg-red-500 text-white font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center" style={{ top: -12 }}>
            {totalQuantity > 9 ? '9+' : totalQuantity}
          </span>
        )}
        <span className="text-xs">Cart</span>
      </Link>
      <Link to="/wishlist" className="hover:text-gray-400 mr-2 flex flex-col items-center">
  <FaHeart className="h-6 w-6" />
  <span className="text-xs">Favorites</span>
</Link>
      <Link to="/search" className="hover:text-gray-400 flex flex-col items-center">
        <BiSearch className="h-6 w-6" />
        <span className="text-xs">Search</span>
      </Link>
    </footer>
  );
}

export default Footer;
