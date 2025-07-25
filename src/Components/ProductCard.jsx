import { ShoppingCart, Heart, Trash2, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useFavorites } from "../Context/FavoritesContext";
import { useCart } from "../Context/CartContext";

function ProductCard({ product, showDeleteButton = false }) {
    const { toggleFavorite, isFavorite, removeFromFavorites } = useFavorites();
    const { addToCart } = useCart();
    const isProductFavorite = isFavorite(product.id);
    
    // Size selection state
    const [selectedSize, setSelectedSize] = useState('');
    const [showSizeDropdown, setShowSizeDropdown] = useState(false);

    // Size options for apparel
    const sizeOptions = product.category === 'Apparel' ? ['XS', 'S', 'M', 'L', 'XL', 'XXL'] : [];
    const isApparelItem = product.category === 'Apparel';
    const isSizeRequired = isApparelItem && !selectedSize;

    const handleCartClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Don't proceed if size is required but not selected
        if (isSizeRequired) {
            return;
        }

        // Add product to cart with size if applicable
        const productToAdd = {
            ...product,
            size: selectedSize || undefined
        };
        
        addToCart(productToAdd);
    }

    const handleSizeSelect = (size, e) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedSize(size);
        setShowSizeDropdown(false);
        // ✅ Remove auto-add to cart - let user click button
    }

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(product);
    };

    const handleDeleteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.confirm(`Remove "${product.name}" from your favorites?`)) {
            removeFromFavorites(product.id);
        }
    };

    const handleSizeDropdownToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowSizeDropdown(!showSizeDropdown);
    };

    return(
        <div className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300 relative">
            {/* Individual Delete Button (only shows on favorites page) */}
            {showDeleteButton && (
                <button
                    onClick={handleDeleteClick}
                    className="absolute top-3 right-3 z-10 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    aria-label="Remove from favorites"
                >
                    <Trash2 className="h-4 w-4" />
                </button>
            )}

            <Link to={`/products/${product.slug}`} className='block'>
                <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full 
                        ${product.inStock 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'}`
                    }>
                        {product.inStock ? 'In Stock' : 'Out Of Stock'}
                        </span>
                    </div>
                </div>
            </Link>

            <div className="p-4">
                <div className="mb-2">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                        {product.category}
                    </span>
                </div>
                <Link to={`/products/${product.slug}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                </p>
                
                {/* Size Selection for Apparel Items */}
                {isApparelItem && (
                    <div className="mb-3 relative">
                        <label className="text-xs text-gray-600 mb-1 block">Size:</label>
                        <div className="relative">
                            <button
                                onClick={handleSizeDropdownToggle}
                                className={`w-full px-3 py-2 text-left border rounded-md text-sm transition-colors ${
                                    selectedSize 
                                        ? 'border-indigo-300 bg-indigo-50 text-indigo-700' 
                                        : 'border-gray-300 bg-white text-gray-500'
                                } hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                            >
                                {selectedSize || 'Select Size'}
                                <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-transform ${
                                    showSizeDropdown ? 'rotate-180' : ''
                                }`} />
                            </button>
                            
                            {/* Size Dropdown */}
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
                        {isSizeRequired && showSizeDropdown && (
                            <p className="text-red-500 text-xs mt-1">Please select a size to add to cart</p>
                        )}
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                    </span>
                    <div className="flex items-center space-x-2">
                        {/* Show heart button only if not on favorites page */}
                        {!showDeleteButton && (
                            <button 
                                onClick={handleFavoriteClick}
                                className={`p-2 rounded-full transition-colors ${
                                    isProductFavorite 
                                        ? 'text-red-500 bg-red-50 hover:bg-red-100' 
                                        : 'text-gray-600 hover:text-red-500 hover:bg-gray-100'
                                }`}
                                aria-label={isProductFavorite ? "Remove from favorites" : "Add to favorites"}
                            >
                                <Heart 
                                    className={`h-5 w-5 ${isProductFavorite ? 'fill-current' : ''}`}
                                />
                            </button>
                        )}
                        
                        {/* Show remove button if on favorites page */}
                        {showDeleteButton && (
                            <button 
                                onClick={handleDeleteClick}
                                className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
                                aria-label="Remove from favorites"
                            >
                                <Trash2 className="h-5 w-5" />
                            </button>
                        )}
                        
                        <button 
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                !product.inStock 
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : isSizeRequired
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                            onClick={handleCartClick}
                            disabled={!product.inStock || isSizeRequired}
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