import { BiX } from 'react-icons/bi';
import { useWishList } from '../Context/WishListContext';
import GoBackButton from '../components/GoBackButton';

const WishList = () => {
  const { wishListItems, removeFromWishList } = useWishList();

  return (
    <div className="container mx-auto mt-2 mb-28 p-4">
      <GoBackButton />
      {wishListItems.length === 0 ? (
        <p>Your WishList is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishListItems.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md overflow-hidden h-40 flex items-center space-x-4">
              <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover" />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-base text-gray-800">Rs. {item.price}</p>
                {item.discount && (
                  <p className="text-sm text-red-500">Discount: {item.discount}%</p>
                )}
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <BiX className="text-red-500 cursor-pointer" onClick={() => removeFromWishList(item.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
