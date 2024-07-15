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

  const addToWishList = (item) => {
    setWishListItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((wishListItem) => wishListItem.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        const [existingItem] = updatedItems.splice(existingItemIndex, 1);
        return [existingItem, ...updatedItems];
      } else {
        return [{ ...item, quantity: 1 }, ...prevItems];
      }
    });
  };

  const removeFromWishList = (itemId) => {
    setWishListItems((prevItems) =>
      prevItems.reduce((acc, wishListItem) => {
        if (wishListItem.id === itemId) {
          if (wishListItem.quantity > 1) {
            acc.push({ ...wishListItem, quantity: wishListItem.quantity - 1 });
          }
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
