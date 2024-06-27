import './App.css';
import Products from './components/Products/Products.js';
import { useState, useEffect } from 'react';
import CartContext from './context/CartContext.js';

function App() {

  const [cart, setCart] = useState({});
  function increaseQuantity(product) {
    const newCart = {...cart};
    if (!newCart[product.title]) {
      newCart[product.title] = { ...product, quantity:0};
    } 
    newCart[product.title].quantity += 1;
    
    setCart(newCart);
  }

  function decreaseQuantity(product) {

    const newCart = {...cart};

    if (!newCart[product.title]) return;

    newCart[product.title].quantity -= 1;
    if (newCart[product.title].quantity <= 0) {
      delete newCart[product.title];
    } 
    
    setCart(newCart);
  }


  
  return (
    <CartContext.Provider value={{cart,increaseQuantity,decreaseQuantity}}>
        <div className="App">
          <Products />
        </div>
    </CartContext.Provider>
  );
}

export default App;
// Global Parent
// Global state
// way to manipulate the state
// way to consume the state


//  Provider
//  Store
    // State
    // Reducer
// Action
// Dispatcher
// Selectors
