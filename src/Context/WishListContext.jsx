import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';

const WishListContext = createContext();

export const useWishList = () => {
  return useContext(WishListContext);
};

export const WishListContextProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState(() => {
    const savedwishListItems = localStorage.getItem('wishListItems');
    return savedwishListItems ? JSON.parse(savedwishListItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishListItems', JSON.stringify(wishListItems));
  }, [wishListItems]);

  // Function to add an item to the wish list
  const addToWishList = (item) => {
    setWishListItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((wishListItem) => wishListItem.id === item.id);
      if (existingItemIndex !== -1) {
        // If the item exists, move it to the top
        const updatedItems = [...prevItems];
        const [existingItem] = updatedItems.splice(existingItemIndex, 1);
        return [existingItem, ...updatedItems];
      } else {
        // If the item does not exist, add it to the top with a quantity of 1
        return [{ ...item, quantity: 1 }, ...prevItems];
      }
    });
  };

  // Function to remove an item from the wish list
  const removeFromWishList = (itemId) => {
    setWishListItems((prevItems) =>
      prevItems.reduce((acc, wishListItem) => {
        if (wishListItem.id === itemId) {
          if (wishListItem.quantity > 1) {
            acc.push({ ...wishListItem, quantity: wishListItem.quantity - 1 });
          }
          // If quantity is 1, the item is removed by not adding it to the accumulator
        } else {
          acc.push(wishListItem);
        }
        return acc;
      }, [])
    );
  };

  return (
    <WishListContext.Provider value={{ wishListItems, addToWishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

WishListContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
