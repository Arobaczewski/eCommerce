import { HeartPlus, Plus, ChevronRight, Home } from 'lucide-react';
import { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { products } from '../Components/Products.js';
import { useCart } from '../Context/CartContext';
import { useFavorites } from '../Context/FavoritesContext';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Cart from '../Components/Cart';
import RecommendedGrids from '../Components/Grids/RecommendedGrids';

function ProductDetail() {
    const { slug } = useParams();
    const { addToCart } = useCart();
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
    
    // Find product by slug
    const product = products.find(p => p.slug === slug);
    
    // Component state
    const [isInfoOpen, setIsInfoOpen] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // If product not found, show error
    if (!product) {
        return (
            <>
                <Header />
                <div className="container mx-auto px-6 py-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <p className="text-gray-600">The product you're looking for doesn't exist.</p>
                </div>
                <Footer />
                <Cart />
            </>
        );
    }

    // Get all product images
    const productImages = [
        product.image,
        product.image2,
        product.image3,
        product.image4,
        product.image5
    ].filter(Boolean); // Remove undefined images

    // Size options for apparel
    const sizeOptions = product.category === 'Apparel' ? ['XS', 'S', 'M', 'L', 'XL', 'XXL'] : [];
    
    // Check if size selection is required but not selected
    const isSizeRequired = product.category === 'Apparel' && !selectedSize;

    const toggleInfo = () => {
        setIsInfoOpen(!isInfoOpen);
    };

    const handleAddToCart = () => {
        if (isSizeRequired) {
            alert('Please select a size before adding to cart.');
            return;
        }

        const productToAdd = {
            ...product,
            size: selectedSize || undefined,
            quantity: parseInt(quantity)
        };

        addToCart(productToAdd, parseInt(quantity));
    };

    const handleFavoriteToggle = () => {
        if (isFavorite(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const getProductFeatures = (product) => {
        // Custom features based on category or specific products
        switch (product.category) {
            case 'Apparel':
                return [
                    '• Premium quality fabric construction',
                    '• Authentic team colors and logos',
                    '• Machine wash, tumble dry low',
                    '• Officially licensed merchandise',
                    '• Available in multiple sizes',
                    '• Comfortable athletic fit'
                ];
            case 'Technology':
                return [
                    '• Latest generation technology',
                    '• High-performance specifications',
                    '• Energy efficient design',
                    '• Manufacturer warranty included',
                    '• Easy setup and installation',
                    '• Compatible with latest standards'
                ];
            case 'Misc':
                return [
                    '• Premium quality construction',
                    '• Durable materials and design',
                    '• Easy to use and maintain',
                    '• Excellent value for money',
                    '• Suitable for daily use',
                    '• Satisfaction guaranteed'
                ];
            default:
                return [
                    '• High quality construction',
                    '• Excellent performance',
                    '• Great value for money'
                ];
        }
    };

    // ✅ Breadcrumb Component
    const Breadcrumbs = () => {
        return (
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6 bg-gray-50 px-4 py-3 rounded-lg">
                <Link 
                    to="/" 
                    className="flex items-center hover:text-indigo-600 transition-colors"
                >
                    <Home className="h-4 w-4 mr-1" />
                    Home
                </Link>
                
                <ChevronRight className="h-4 w-4 text-gray-400" />
                
                <Link 
                    to="/products" 
                    className="hover:text-indigo-600 transition-colors"
                >
                    Products
                </Link>
                
                <ChevronRight className="h-4 w-4 text-gray-400" />
                
                <Link 
                    to={`/category/${product.category.toLowerCase()}`}
                    className="hover:text-indigo-600 transition-colors"
                >
                    {product.category}
                </Link>
                
                <ChevronRight className="h-4 w-4 text-gray-400" />
                
                <span className="text-gray-900 font-medium truncate max-w-xs">
                    {product.name}
                </span>
            </nav>
        );
    };

    return (
        <>
            <Header />
            <div className='container mx-auto px-6 py-8'>
                {/* ✅ Breadcrumbs */}
                <Breadcrumbs />
                
                <div className='grid md:grid-cols-2 gap-8'>
                    
                    {/* Product Images */}
                    <div className='space-y-4'>
                        <img 
                            src={productImages[currentImageIndex]} 
                            alt={product.name} 
                            className='w-full rounded-lg shadow-lg'
                        />
                        
                        {/* Image thumbnails if multiple images */}
                        {productImages.length > 1 && (
                            <div className='flex space-x-2 overflow-x-auto'>
                                {productImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                                            currentImageIndex === index ? 'border-indigo-500' : 'border-gray-200'
                                        }`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Information */}
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <div className='space-y-4'>
                            <h2 className='text-2xl font-bold text-gray-900'>{product.name}</h2>
                            <div className='space-y-2'>
                                {product.inStock ? (
                                    <span className='inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full'>
                                        In Stock
                                    </span>
                                ) : (
                                    <span className='inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full'>
                                        Out Of Stock
                                    </span>
                                )}
                                <div className='text-3xl font-bold text-gray-900'>
                                    Your Price: ${product.price}
                                </div>
                            </div>
                        </div>

                        <div className='space-y-4 mt-6'>
                            {/* Size Selection for Apparel */}
                            {product.category === 'Apparel' && (
                                <div className='space-y-2'>
                                    <label className='font-semibold text-gray-700'>Size:</label>
                                    <div className='grid grid-cols-3 gap-2'>
                                        {sizeOptions.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`py-2 px-4 border rounded-md text-sm font-medium transition-colors ${
                                                    selectedSize === size
                                                        ? 'bg-indigo-600 text-white border-indigo-600'
                                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                    {isSizeRequired && (
                                        <p className='text-red-500 text-sm'>Please select a size</p>
                                    )}
                                </div>
                            )}

                            {/* Quantity and Favorites */}
                            <div className='flex items-center gap-4'>
                                <label className='font-semibold text-gray-700'>Quantity:</label>
                                <select 
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className='px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
                                >
                                    {[1,2,3,4,5].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                                <button 
                                    onClick={handleFavoriteToggle}
                                    className={`p-2 transition-colors ${
                                        isFavorite(product.id) 
                                            ? 'text-red-500 hover:text-red-600' 
                                            : 'text-gray-600 hover:text-red-500'
                                    }`}
                                >
                                    <HeartPlus />
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <div className='items-center justify-center mb-4'>
                                {product.inStock ? (
                                    <button 
                                        onClick={handleAddToCart}
                                        disabled={isSizeRequired}
                                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                                            isSizeRequired
                                                ? 'bg-gray-400 text-white cursor-not-allowed'
                                                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                        }`}
                                    >
                                        Add To Cart
                                    </button>
                                ) : (
                                    <button className='w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold cursor-not-allowed'>
                                        Out Of Stock
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Product Information Dropdown */}
                        <div className='mt-8'>
                            <button
                                className='flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border transition-colors'
                                onClick={toggleInfo}
                            >
                                <span className='font-semibold text-gray-900'>View Product Information</span>
                                <Plus className={`transition-transform duration-200 ${isInfoOpen ? 'rotate-45' : ''}`}/>
                            </button>
                            
                            {isInfoOpen && (
                                <div className='mt-4 p-6 bg-white border rounded-lg text-gray-700 leading-relaxed space-y-4'>
                                    <p>{product.description}</p>
                                    <div>
                                        <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
                                        <ul className='space-y-2 text-sm'>
                                            {getProductFeatures(product).map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>   
                            )}
                        </div>
                    </div>
                </div>

                {/* Recommended Products */}
                <div className="container mx-auto px-6">
                    <div className='mt-12 border-t pt-8'>
                        <h2 className='text-xl font-bold text-gray-900 mb-6'>You May Also Like</h2>
                    </div>
                </div>
                <RecommendedGrids
                    currentProductId={product.id}
                    category={product.category}
                />
            </div>
            <Footer />
            <Cart />
        </>
    );
}

export default ProductDetail;