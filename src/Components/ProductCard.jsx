/**
 * ProductCard Component - Reusable Product Display Card
 * 
 * This is the core component for displaying individual products throughout the application.
 * It handles multiple complex features including size selection for apparel items,
 * favorites functionality, cart operations, and conditional rendering based on context.
 * 
 * Key Features:
 * - Responsive design with hover effects and animations
 * - Context-aware functionality (favorites vs regular display)
 * - Dynamic size selection for apparel categories
 * - Integration with global cart and favorites state
 * - Accessibility features and proper event handling
 * 
 * Props:
 * @param {Object} product - Product object containing all product data
 * @param {boolean} showDeleteButton - Controls whether to show delete button (for favorites page)
 */

import { ShoppingCart, Heart, Trash2, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useFavorites } from "../Context/FavoritesContext";
import { useCart } from "../Context/CartContext";

function ProductCard({ product, showDeleteButton = false }) {
    // Global state hooks for cart and favorites functionality
    const { toggleFavorite, isFavorite, removeFromFavorites } = useFavorites();
    const { addToCart } = useCart();
    
    // Check if this product is currently in user's favorites
    const isProductFavorite = isFavorite(product.id);
    
    // Local state for size selection functionality
    const [selectedSize, setSelectedSize] = useState('');
    const [showSizeDropdown, setShowSizeDropdown] = useState(false);

    // Business logic: Size options only apply to apparel items
    const sizeOptions = product.category === 'Apparel' ? ['XS', 'S', 'M', 'L', 'XL', 'XXL'] : [];
    const isApparelItem = product.category === 'Apparel';
    const isSizeRequired = isApparelItem && !selectedSize;

    /**
     * Handles adding product to cart with validation
     * Prevents addition if apparel item doesn't have size selected
     * Uses event prevention to avoid triggering parent Link navigation
     */
    const handleCartClick = (e) => {
        e.preventDefault(); // Prevent Link navigation
        e.stopPropagation(); // Prevent event bubbling
        
        // Business rule: Apparel items require size selection
        if (isSizeRequired) {
            return; // Exit early if validation fails
        }

        // Create product object with additional cart-specific data
        const productToAdd = {
            ...product, // Spread all existing product properties
            size: selectedSize || undefined // Only include size if one was selected
        };
        
        // Add to global cart state - this will trigger cart sidebar to open
        addToCart(productToAdd);
    }

    /**
     * Handles size selection from dropdown
     * Updates local state and closes dropdown
     * Event prevention ensures parent Link doesn't trigger
     */
    const handleSizeSelect = (size, e) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedSize(size);
        setShowSizeDropdown(false);
        // Note: Deliberately not auto-adding to cart - user must click button for clear UX
    }

    /**
     * Handles favorite toggle functionality
     * Uses global favorites context to add/remove from favorites
     */
    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(product); // Global state update
    };

    /**
     * Handles product removal from favorites (only on favorites page)
     * Includes confirmation dialog for better UX
     */
    const handleDeleteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // User confirmation prevents accidental deletions
        if (window.confirm(`Remove "${product.name}" from your favorites?`)) {
            removeFromFavorites(product.id);
        }
    };

    /**
     * Toggles the size selection dropdown visibility
     * Only relevant for apparel items
     */
    const handleSizeDropdownToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowSizeDropdown(!showSizeDropdown);
    };

    return(
        // Main card container with responsive design and hover effects
        <div className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300 relative">
            
            {/* Conditional delete button - only shows on favorites page */}
            {showDeleteButton && (
                <button
                    onClick={handleDeleteClick}
                    className="absolute top-3 right-3 z-10 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    aria-label="Remove from favorites" // Accessibility
                >
                    <Trash2 className="h-4 w-4" />
                </button>
            )}

            {/* Product image section - wrapped in Link for navigation */}
            <Link to={`/products/${product.slug}`} className='block'>
                <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                    />
                    
                    {/* Stock status badge - positioned absolutely over image */}
                    <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full 
                        ${product.inStock 
                        ? 'bg-green-100 text-green-800' // Green for in stock
                        : 'bg-red-100 text-red-800'}`  // Red for out of stock
                    }>
                        {product.inStock ? 'In Stock' : 'Out Of Stock'}
                        </span>
                    </div>
                </div>
            </Link>

            {/* Product information section */}
            <div className="p-4">
                
                {/* Product category badge */}
                <div className="mb-2">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                        {product.category}
                    </span>
                </div>
                
                {/* Product name - clickable link to product detail page */}
                <Link to={`/products/${product.slug}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        {product.name}
                    </h3>
                </Link>
                
                {/* Product description - truncated with CSS line-clamp */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                </p>
                
                {/* Size Selection Section - Only for Apparel Items */}
                {isApparelItem && (
                    <div className="mb-3 relative">
                        <label className="text-xs text-gray-600 mb-1 block">Size:</label>
                        <div className="relative">
                            
                            {/* Size dropdown button with dynamic styling */}
                            <button
                                onClick={handleSizeDropdownToggle}
                                className={`w-full px-3 py-2 text-left border rounded-md text-sm transition-colors ${
                                    selectedSize 
                                        ? 'border-indigo-300 bg-indigo-50 text-indigo-700' // Selected state styling
                                        : 'border-gray-300 bg-white text-gray-500'         // Default state styling
                                } hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                            >
                                {selectedSize || 'Select Size'}
                                
                                {/* Animated chevron icon */}
                                <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-transform ${
                                    showSizeDropdown ? 'rotate-180' : ''
                                }`} />
                            </button>
                            
                            {/* Size Dropdown Menu - Conditionally rendered */}
                            {showSizeDropdown && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                    {sizeOptions.map((size) => (
                                        <button
                                            key={size}
                                            onClick={(e) => handleSizeSelect(size, e)}
                                            className="w-full px-3 py-2 text-left text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors first:rounded-t-md last:rounded-b-md"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {/* Validation message for size requirement */}
                        {isSizeRequired && showSizeDropdown && (
                            <p className="text-red-500 text-xs mt-1">Please select a size to add to cart</p>
                        )}
                    </div>
                )}

                {/* Price and Action Buttons Section */}
                <div className="flex items-center justify-between">
                    
                    {/* Product price */}
                    <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                    </span>
                    
                    {/* Action buttons container */}
                    <div className="flex items-center space-x-2">
                        
                        {/* Conditional rendering: Heart button OR Delete button */}
                        {!showDeleteButton && (
                            // Favorites heart button - only show when NOT on favorites page
                            <button 
                                onClick={handleFavoriteClick}
                                className={`p-2 rounded-full transition-colors ${
                                    isProductFavorite 
                                        ? 'text-red-500 bg-red-50 hover:bg-red-100' // Favorited state
                                        : 'text-gray-600 hover:text-red-500 hover:bg-gray-100' // Default state
                                }`}
                                aria-label={isProductFavorite ? "Remove from favorites" : "Add to favorites"}
                            >
                                <Heart 
                                    className={`h-5 w-5 ${isProductFavorite ? 'fill-current' : ''}`}
                                />
                            </button>
                        )}
                        
                        {/* Alternative delete button for favorites page */}
                        {showDeleteButton && (
                            <button 
                                onClick={handleDeleteClick}
                                className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
                                aria-label="Remove from favorites"
                            >
                                <Trash2 className="h-5 w-5" />
                            </button>
                        )}
                        
                        {/* Add to Cart Button with Multiple States */}
                        <button 
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                !product.inStock 
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' // Out of stock state
                                    : isSizeRequired
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' // Size required state
                                        : 'bg-blue-600 hover:bg-blue-700 text-white'      // Available state
                            }`}
                            onClick={handleCartClick}
                            disabled={!product.inStock || isSizeRequired} // Disable based on business rules
                        >
                            <ShoppingCart className="h-4 w-4 inline mr-1"/>
                            {!product.inStock 
                                ? 'Sold Out' 
                                : 'Add to Cart'
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;