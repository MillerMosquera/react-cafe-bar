import {useState} from 'react';

//agregar al carrito sin repetir desde el localStorage



export const useAddToCart = (cart, product) => {
    const [cartItems, setCartItems] = useState(cart);

    const addToCart = (product) => {
        const cartItem = cartItems.find(item => item.id === product.id);
        if (cartItem) {
            setCartItems(
                cartItems.map(item =>
                    item.id === product.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}]);
        }
    };

    return {
        cartItems,
        addToCart
    };
};