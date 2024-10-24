import React, { useContext, useState } from 'react';

const CartContext = React.createContext();

const ShoppingCart = () => {
    const { cart, addItem, removeItem, updateQuantity } = useContext(CartContext);

  return (
    <div>
        <h1>Shopping Cart</h1>
        {cart.map(item => (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>Price : ₹{item.price}</p>
                <input 
                type="number" 
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
                />
                <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
        ))}
        <h3>Total: ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h3>
    </div>
  );
};

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, {...item, quantity: 1 }]);
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCart(cart.map(item => item.id === id ? {...item, quantity: +quantity} : item));
    };
    
    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export { ShoppingCart, CartProvider };
