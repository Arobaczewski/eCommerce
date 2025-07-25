import { Link, useNavigate } from 'react-router-dom'
import { Heart, ShoppingCart, Search, X, Menu } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { products } from './Products.js'
import Dropdown from './Dropdown';
import { useCart } from '../Context/CartContext'; // ✅ Fixed: uppercase 'Context'
import { useFavorites } from '../Context/FavoritesContext'; // ✅ Fixed: uppercase 'Context'

function Header(){
    const [mobileMenu, setMobileMenu] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const navigate = useNavigate();
    const searchRef = useRef(null);
    const suggestionsRef = useRef(null);
    const { cartCount, toggleCart } = useCart(); // ✅ Using toggleCart correctly
    const { favoritesCount } = useFavorites();

    // Search for suggestions as user types
    useEffect(() => {
        if (searchInput.trim().length > 1) {
            const suggestions = products.filter(product => {
                const searchTerm = searchInput.toLowerCase();
                return (
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm) ||
                    product.category.toLowerCase().includes(searchTerm)
                );
            }).slice(0, 5); // Limit to 5 suggestions

            setSearchSuggestions(suggestions);
            setShowSuggestions(suggestions.length > 0);
        } else {
            setSearchSuggestions([]);
            setShowSuggestions(false);
        }
        setSelectedIndex(-1);
    }, [searchInput]);

    // Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
                setSelectedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (selectedIndex >= 0 && searchSuggestions[selectedIndex]) {
            // Navigate to selected product
            navigate(`/products/${searchSuggestions[selectedIndex].slug}`);
        } else if (searchInput.trim()) {
            // Navigate to search results
            navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
        }
        setShowSuggestions(false);
        setSelectedIndex(-1);
    }

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleClearSearch = () => {
        setSearchInput('');
        setSearchSuggestions([]);
        setShowSuggestions(false);
        setSelectedIndex(-1);
    }

    const handleKeyDown = (e) => {
        if (!showSuggestions) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => 
                prev < searchSuggestions.length - 1 ? prev + 1 : prev
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => prev > -1 ? prev - 1 : -1);
        } else if (e.key === 'Escape') {
            setShowSuggestions(false);
            setSelectedIndex(-1);
        }
    }

    const handleSuggestionClick = (product) => {
        navigate(`/products/${product.slug}`);
        setShowSuggestions(false);
        setSearchInput('');
        setSelectedIndex(-1);
    }

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        <div className='w-full bg-indigo-600 border-b border-indigo-700 shadow-sm'>
            <header className='flex justify-between items-center text-white px-6 py-4 max-w-7xl mx-auto'>
                {/* Logo */}
                <div className='flex-shrink-0'>
                    <Link to="/" className='block hover:opacity-80 transition-opacity'>
                        <div className='text-2xl md:text-3xl font-black tracking-wider'>
                            ROBOS
                        </div>
                        <div className='text-xs text-indigo-200 tracking-widest -mt-1'>
                            W I S H L I S T
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden md:block'>
                    <ul className='flex space-x-8'>
                        <Dropdown/>
                        <li>
                            <Link to='/about' className='hover:text-indigo-200 transition-colors font-medium'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='hover:text-indigo-200 transition-colors font-medium'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Desktop Search and Actions */}
                <div className='hidden md:flex items-center space-x-4'>
                    <div className='relative' ref={searchRef}>
                        <form onSubmit={handleSearchSubmit} className='relative'>
                            <input  
                                type="text"
                                placeholder='What are you looking for?'
                                value={searchInput} 
                                onChange={handleSearchChange}
                                onKeyDown={handleKeyDown}
                                onFocus={() => searchInput.length > 1 && setShowSuggestions(true)}
                                className='pl-10 pr-10 py-2 w-64 border border-indigo-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-white'
                            />
                            <button
                                type='submit' 
                                className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                            >
                                <Search className='h-4 w-4'/>
                            </button>
                            {searchInput && (
                                <button
                                    type='button'
                                    onClick={handleClearSearch}
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                                >
                                    <X className='h-4 w-4'/>   
                                </button>
                            )}
                        </form>

                        {/* Search Suggestions Dropdown */}
                        {showSuggestions && (
                            <div 
                                ref={suggestionsRef}
                                className='absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-[100] mt-1 max-h-80 overflow-y-auto'
                            >
                                {searchSuggestions.map((product, index) => (
                                    <div
                                        key={product.id}
                                        onClick={() => handleSuggestionClick(product)}
                                        className={`flex items-center p-3 cursor-pointer transition-colors ${
                                            index === selectedIndex 
                                                ? 'bg-indigo-50 border-l-4 border-indigo-500' 
                                                : 'hover:bg-gray-50'
                                        }`}
                                    >
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className='w-12 h-12 object-cover rounded-md mr-3'
                                        />
                                        <div className='flex-1'>
                                            <h4 className='text-sm font-semibold text-gray-900 line-clamp-1'>
                                                {product.name}
                                            </h4>
                                            <p className='text-xs text-gray-500 uppercase tracking-wider'>
                                                {product.category}
                                            </p>
                                            <p className='text-sm font-bold text-indigo-600'>
                                                ${product.price}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                
                                {/* View All Results Link */}
                                <div className='border-t border-gray-200 p-3'>
                                    <Link
                                        to={`/search?q=${encodeURIComponent(searchInput)}`}
                                        onClick={() => setShowSuggestions(false)}
                                        className='flex items-center justify-center text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors'
                                    >
                                        <Search className='h-4 w-4 mr-2' />
                                        View all results for "{searchInput}"
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className='flex items-center space-x-3'>
                        <Link to='/favorites' className='p-2 hover:bg-indigo-700 rounded-full transition-colors relative'>
                            <Heart className='h-5 w-5' />
                            {favoritesCount > 0 && (
                                <span className='absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full min-w-[20px] h-5'>
                                    {favoritesCount}
                                </span>
                            )}
                        </Link>
                        
                        {/* ✅ Cart Button - removed excessive z-index */}
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log('🎯 Cart button clicked!'); // Debug log
                                toggleCart();
                            }} 
                            className="relative p-2 hover:bg-indigo-700 rounded-full transition-colors"
                            aria-label="Toggle shopping cart"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center min-w-[20px] font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button and Icons */}
                <div className='md:hidden flex items-center space-x-2'>
                    <Link to='/favorites' className='p-2 hover:bg-indigo-700 rounded-full transition-colors relative'>
                        <Heart className='h-5 w-5'/>
                        {favoritesCount > 0 && (
                            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold'>
                                {favoritesCount}
                            </span>
                        )}
                    </Link>
                    
                    {/* ✅ Mobile Cart Button - removed excessive z-index */}
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('📱 Mobile cart button clicked!'); // Debug log
                            toggleCart();
                        }} 
                        className="relative p-2 hover:bg-indigo-700 rounded-full transition-colors"
                        aria-label="Toggle shopping cart"
                    >
                        <ShoppingCart className="h-5 w-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    
                    <button
                        onClick={toggleMobileMenu}
                        className='p-2 hover:bg-indigo-700 rounded-lg transition-colors'
                        aria-label='Toggle mobile menu'
                    >
                        {mobileMenu ? <X className='h-6 w-6' /> : <Menu className='w-6 h-6'/>}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className='md:hidden bg-indigo-700 border-t border-indigo-600'>
                    <nav className='px-6 py-4'>
                        <ul className='space-y-4'>
                            <li>
                                <Link
                                    to='/products'
                                    className='block py-2 text-white hover:text-indigo-200 transition-colors font-medium'
                                    onClick={() => setMobileMenu(false)}
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/about'
                                    className='block py-2 text-white hover:text-indigo-200 transition-colors font-medium'
                                    onClick={() => setMobileMenu(false)}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to='/contact'
                                    className='block py-2 text-white hover:text-indigo-200 transition-colors font-medium'
                                    onClick={() => setMobileMenu(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className='mt-4 pt-4 border-t border-indigo-600'>
                            <form onSubmit={handleSearchSubmit} className='relative'>
                                <input 
                                    type="text"
                                    placeholder='What are you looking for?'
                                    value={searchInput}
                                    onChange={handleSearchChange}
                                    className='w-full pl-10 pr-10 py-2 border border-indigo-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-white'    
                                />
                                <button
                                    type='submit'
                                    className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                                >
                                    <Search className='h-4 w-4'/>
                                </button>
                                {searchInput && (
                                    <button
                                        type='button'
                                        onClick={handleClearSearch}
                                        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                                    >
                                        <X className='h-4 w-4'/>
                                    </button>
                                )}
                            </form>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    )
}

export default Header;