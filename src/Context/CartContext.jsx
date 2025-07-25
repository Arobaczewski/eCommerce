import { createContext, useContext, useState, useEffect } from 'react';

console.log('🛒 CartContext.jsx loaded!'); // Debug log

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    console.log('🛒 CartProvider rendered, isOpen:', isOpen, 'cartItems:', cartItems.length); // Debug log

    // Load cart from localStorage on component mount
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('robos-cart');
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    setCartItems(parsedCart);
                }
            }
        } catch (error) {
            console.error('Failed to load cart from localStorage:', error);
            localStorage.removeItem('robos-cart');
        }
        setIsLoaded(true);
    }, []);

    // Save cart to localStorage whenever cart changes
    useEffect(() => {
        if (isLoaded) {
            try {
                localStorage.setItem('robos-cart', JSON.stringify(cartItems));
                console.log('Cart saved to localStorage:', cartItems);
            } catch (error) {
                console.error('Failed to save cart to localStorage:', error);
            }
        }
    }, [cartItems, isLoaded]);

    const addToCart = (product, quantity = 1) => {
        console.log('🛒 addToCart called with:', product.name, 'quantity:', quantity);
        
        setCartItems(prev => {
            const existingItemIndex = prev.findIndex(item => item.id === product.id);
            
            if (existingItemIndex !== -1) {
                // If item exists, update quantity
                const updatedItems = [...prev];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + quantity
                };
                console.log('Updated quantity for:', product.name);
                return updatedItems;
            } else {
                // If new item, add to cart
                console.log('Adding new item to cart:', product.name);
                return [...prev, { ...product, quantity }];
            }
        });
        
        // ✅ Auto-open cart when item is added - simplified
        console.log('🛒 Opening cart after adding item...');
        setIsOpen(true);
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => {
            const filtered = prev.filter(item => item.id !== productId);
            console.log('Removing from cart, new count:', filtered.length);
            return filtered;
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }
        
        setCartItems(prev =>
            prev.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        console.log('Clearing all cart items');
        setCartItems([]);
    };

    // ✅ Cart control functions
    const openCart = () => {
        console.log('🛒 openCart called'); // Debug log
        setIsOpen(true);
    };

    const closeCart = () => {
        console.log('🛒 closeCart called'); // Debug log
        setIsOpen(false);
    };

    const toggleCart = () => {
        console.log('🛒 toggleCart called, current isOpen:', isOpen);
        setIsOpen(prev => {
            const newValue = !prev;
            console.log('🛒 toggleCart changing to:', newValue);
            return newValue;
        });
    };

    // Calculate totals
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const value = {
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isLoaded,
        isOpen,
        openCart,      
        closeCart,     
        toggleCart     
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};