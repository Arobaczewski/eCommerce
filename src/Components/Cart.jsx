import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from 'lucide-react';
import { useCart } from "../Context/CartContext";

function Cart() {
    const { 
        cartItems, 
        removeFromCart, 
        clearCart, 
        updateQuantity, 
        cartTotal, 
        isOpen, 
        closeCart 
    } = useCart();

    console.log('🛒 Cart rendered, isOpen:', isOpen, 'cartItems:', cartItems.length);

    // Handle escape key and click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if click is on the backdrop
            if (event.target.classList.contains('cart-backdrop')) {
                closeCart();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isOpen) {
                closeCart();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
            // Prevent body scroll when cart is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, closeCart]);

    const handleRemoveItem = (productId) => {
        if (window.confirm('Remove this item from your cart?')) {
            removeFromCart(productId);
        }
    }

    const handleQuantityChange = (productId, newQuantity) => {
        const qty = parseInt(newQuantity);
        updateQuantity(productId, qty);
    }

    // Don't render if cart is closed
    if (!isOpen) return null;

    return (
        <div 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="drawer-title" 
            className="fixed inset-0 z-50"
        >
            {/* Backdrop */}
            <div 
                className="cart-backdrop fixed inset-0 bg-gray-500 bg-opacity-75 cursor-pointer"
                aria-hidden="true"
            />

            {/* Cart Panel */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                        <div className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                                
                                {/* Header */}
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2 id="drawer-title" className="text-lg font-medium text-gray-900">
                                            Shopping cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                                        </h2>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button 
                                                type="button" 
                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 transition-colors" 
                                                onClick={closeCart}
                                                aria-label="Close cart"
                                            >
                                                <span className="absolute -inset-0.5"></span>
                                                <span className="sr-only">Close</span>
                                                <svg 
                                                    viewBox="0 0 24 24" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    strokeWidth="1.5" 
                                                    aria-hidden="true" 
                                                    className="size-6"
                                                >
                                                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Cart Items */}
                                    <div className="mt-8">
                                        <div className="flow-root">
                                            {cartItems.length === 0 ? (
                                                // Empty cart state
                                                <div className="text-center py-12">
                                                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-gray-500 mb-4">Your cart is empty</p>
                                                    <Link 
                                                        to="/products" 
                                                        onClick={closeCart}
                                                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                                                    >
                                                        Continue Shopping →
                                                    </Link>
                                                </div>
                                            ) : (
                                                // Cart items
                                                <div className="space-y-4">
                                                    {cartItems.map((item) => (
                                                        <div key={item.id} className="border-b pb-4 last:border-b-0">
                                                            <div className="flex items-start space-x-4">
                                                                <div className="relative flex-shrink-0">
                                                                    <img 
                                                                        src={item.image} 
                                                                        alt={item.name}
                                                                        className="w-16 h-16 object-cover rounded-md border"
                                                                    />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <h3 className="font-semibold text-gray-900 text-sm mb-2">
                                                                        {item.name}
                                                                    </h3>
                                                                    <p className="text-indigo-600 font-bold mb-3">
                                                                        ${item.price.toFixed(2)} each
                                                                    </p>
                                                                    
                                                                    {/* Quantity and Remove Controls */}
                                                                    <div className="flex items-center justify-between">
                                                                        <div className="flex items-center space-x-2">
                                                                            <label className="text-sm text-gray-600">Qty:</label>
                                                                            <select 
                                                                                value={item.quantity} 
                                                                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                                                className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                                            >
                                                                                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                                                                                    <option key={num} value={num}>{num}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                        
                                                                        <button
                                                                            onClick={() => handleRemoveItem(item.id)}
                                                                            className="text-red-600 hover:text-red-700 p-1 hover:bg-red-50 rounded"
                                                                            title="Remove item"
                                                                        >
                                                                            <Trash2 className="h-4 w-4" />
                                                                        </button>
                                                                    </div>
                                                                    
                                                                    {/* Item Subtotal */}
                                                                    {item.quantity > 1 && (
                                                                        <p className="text-xs text-gray-500 mt-1">
                                                                            Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer - Only show if cart has items */}
                                {cartItems.length > 0 && (
                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6 bg-gray-50">
                                        <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                                            <p>Subtotal</p>
                                            <p>${cartTotal.toFixed(2)}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500 mb-6">
                                            Shipping and taxes calculated at checkout.
                                        </p>
                                        
                                        {/* Clear Cart Button */}
                                        <div className="mb-4">
                                            <button 
                                                onClick={() => {
                                                    if (window.confirm('Clear all items from cart?')) {
                                                        clearCart();
                                                    }
                                                }}
                                                className="w-full text-sm text-red-600 hover:text-red-700 py-2 hover:bg-red-50 rounded"
                                            >
                                                Clear Cart
                                            </button>
                                        </div>

                                        {/* Checkout Button */}
                                        <div className="mb-4">
                                            <Link 
                                                to="/checkout" 
                                                onClick={closeCart}
                                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                            >
                                                <span>Checkout</span>
                                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                        
                                        {/* Continue Shopping */}
                                        <div className="flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or{' '}
                                                <Link 
                                                    to='/products' 
                                                    onClick={closeCart}
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Continue Shopping
                                                    <span aria-hidden="true"> →</span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;