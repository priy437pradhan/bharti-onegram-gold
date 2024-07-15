

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import { CartProvider } from './Context/CartContext'; 
import { WishListContextProvider} from './Context/WishListContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
      <WishListContextProvider>
          <App />
        </WishListContextProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
