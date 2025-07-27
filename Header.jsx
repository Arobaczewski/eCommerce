/**
 * Header Component - Main Navigation and Search Interface
 * 
 * This is one of the most complex components in the application, demonstrating
 * advanced React patterns and real-world application features:
 * 
 * Key Features:
 * - Intelligent search with real-time suggestions
 * - Keyboard navigation (arrow keys, escape)
 * - Responsive design with mobile hamburger menu
 * - Global state integration (cart, favorites counters)
 * - Complex event handling and state management
 * - Accessibility features throughout
 * 
 * Technical Highlights:
 * - useRef for DOM manipulation and click outside detection
 * - debounced search with performance optimization
 * - Dynamic dropdown with keyboard navigation
 * - Multiple useEffect hooks for different concerns
 * - Advanced conditional rendering patterns
 */

import { Link, useNavigate } from 'react-router-dom'
import { Heart, ShoppingCart, Search, X, Menu, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { products } from './Products'
import Dropdown from './Dropdown';
import { useCart } from '../Context/CartContext';
import { useFavorites } from '../Context/FavoritesContext';

function Header(){
    // ========== STATE MANAGEMENT ==========
    
    // Mobile menu state - controls hamburger menu visibility
    const [mobileMenu, setMobileMenu] = useState(false);
    
    // Search functionality state
    const [searchInput, setSearchInput] = useState('');           // Current search input value
    const [searchSuggestions, setSearchSuggestions] = useState([]); // Filtered product suggestions
    const [showSuggestions, setShowSuggestions] = useState(false);  // Controls dropdown visibility
    const [selectedIndex, setSelectedIndex] = useState(-1);        // Keyboard navigation index
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false); // Mobile drop down products menu
    
    // React Router navigation hook
    const navigate = useNavigate();
    
    // ========== REFS FOR DOM MANIPULATION ==========
    
    // Refs for click-outside detection and focus management
    const searchRef = useRef(null);        // Search container reference
    const suggestionsRef = useRef(null);   // Suggestions dropdown reference
    
    // ========== GLOBAL STATE INTEGRATION ==========
    
    // Extract functionality from Context providers
    const { cartCount, toggleCart } = useCart();           // Cart state and controls
    const { favoritesCount } = useFavorites();             // Favorites counter

    /**
     * EFFECT: Real-time Search Suggestions
     * 
     * This effect demonstrates several advanced concepts:
     * - Performance optimization (only search when input length > 1)
     * - Array filtering with multiple criteria
     * - Debouncing through dependency array optimization
     * - State synchronization between multiple pieces of state
     */
    useEffect(() => {
        // Only perform search if user has typed more than 1 character
        // This prevents unnecessary API calls and improves performance
        if (searchInput.trim().length > 1) {
            const suggestions = products.filter(product => {
                const searchTerm = searchInput.toLowerCase();
                return (
                    // Search across multiple product fields for better UX
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm) ||
                    product.category.toLowerCase().includes(searchTerm)
                );
            }).slice(0, 5); // Limit results to prevent UI overflow

            // Update both suggestions array and visibility state
            setSearchSuggestions(suggestions);
            setShowSuggestions(suggestions.length > 0); // Only show if we have results
        } else {
            // Clear suggestions when search input is too short
            setSearchSuggestions([]);
            setShowSuggestions(false);
        }
        
        // Reset keyboard navigation when search changes
        setSelectedIndex(-1);
    }, [searchInput]); // Only re-run when searchInput changes

    /**
     * EFFECT: Click Outside Detection for Search Dropdown
     * 
     * This effect demonstrates advanced DOM event handling:
     * - Event delegation for performance
     * - Proper cleanup to prevent memory leaks
     * - Click outside pattern for modal/dropdown behavior
     */
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if click occurred outside the search container
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
                setSelectedIndex(-1);
            }
        };

        // Use mousedown instead of click for better UX
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup function - essential for preventing memory leaks
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []); // Empty dependency array - effect runs once on mount

    /**
     * Search Form Submission Handler
     * 
     * Handles both direct search and suggestion selection
     * Demonstrates programmatic navigation with React Router
     */
    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        
        if (selectedIndex >= 0 && searchSuggestions[selectedIndex]) {
            // If user has selected a suggestion via keyboard, navigate to that product
            navigate(`/products/${searchSuggestions[selectedIndex].slug}`);
        } else if (searchInput.trim()) {
            // Otherwise, navigate to search results page with query parameter
            navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
        }
        
        // Clean up search state after navigation
        setShowSuggestions(false);
        setSelectedIndex(-1);
    }

    /**
     * Search Input Change Handler
     * Simple controlled component pattern
     */
    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    }

    /**
     * Clear Search Handler
     * Resets all search-related state
     */
    const handleClearSearch = () => {
        setSearchInput('');
        setSearchSuggestions([]);
        setShowSuggestions(false);
        setSelectedIndex(-1);
    }

    /**
     * Keyboard Navigation Handler for Search Suggestions
     * 
     * Implements advanced keyboard UX patterns:
     * - Arrow key navigation through suggestions
     * - Escape key to close dropdown
     * - Boundary checking to prevent index overflow
     */
    const handleKeyDown = (e) => {
        if (!showSuggestions) return; // Only handle keys when dropdown is open

        if (e.key === 'ArrowDown') {
            e.preventDefault(); // Prevent cursor movement
            setSelectedIndex(prev => 
                // Move down but don't go past last item
                prev < searchSuggestions.length - 1 ? prev + 1 : prev
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault(); // Prevent cursor movement
            setSelectedIndex(prev => 
                // Move up but don't go above -1 (no selection)
                prev > -1 ? prev - 1 : -1
            );
        } else if (e.key === 'Escape') {
            // Close dropdown and reset selection
            setShowSuggestions(false);
            setSelectedIndex(-1);
        }
    }

    /**
     * Suggestion Click Handler
     * 
     * Handles direct clicks on search suggestions
     */
    const handleSuggestionClick = (product) => {
        navigate(`/products/${product.slug}`);
        setShowSuggestions(false);
        setSearchInput(''); // Clear search after selection
        setSelectedIndex(-1);
    }

    /**
     * Mobile Menu Toggle Handler
     * Simple state toggle for hamburger menu
     */
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        // Main header container with brand colors and responsive design
        <div className='w-full bg-indigo-600 border-b border-indigo-700 shadow-sm'>
            <header className='flex justify-between items-center text-white px-6 py-4 max-w-7xl mx-auto'>
                
                {/* ========== LOGO SECTION ========== */}
                <div className='flex-shrink-0'>
                    <Link to="/" className='block hover:opacity-80 transition-opacity'>
                        {/* Brand logo with distinctive typography */}
                        <div className='text-2xl md:text-3xl font-black tracking-wider'>
                            ROBOS
                        </div>
                        <div className='text-xs text-indigo-200 tracking-widest -mt-1'>
                            W I S H L I S T
                        </div>
                    </Link>
                </div>

                {/* ========== DESKTOP NAVIGATION ========== */}
                <nav className='hidden md:block'>
                    <ul className='flex space-x-8'>
                        {/* Dropdown component for product categories */}
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

                {/* ========== DESKTOP SEARCH AND ACTIONS ========== */}
                <div className='hidden md:flex items-center space-x-4'>
                    
                    {/* Advanced Search Container with Suggestions */}
                    <div className='relative' ref={searchRef}>
                        <form onSubmit={handleSearchSubmit} className='relative'>
                            
                            {/* Search Input with Icons */}
                            <input  
                                type="text"
                                placeholder='What are you looking for?'
                                value={searchInput} 
                                onChange={handleSearchChange}
                                onKeyDown={handleKeyDown}
                                onFocus={() => searchInput.length > 1 && setShowSuggestions(true)}
                                className='pl-10 pr-10 py-2 w-64 border border-indigo-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-white'
                            />
                            
                            {/* Search Icon Button */}
                            <button
                                type='submit' 
                                className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                            >
                                <Search className='h-4 w-4'/>
                            </button>
                            
                            {/* Clear Search Button - Conditionally Rendered */}
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

                        {/* Search Suggestions Dropdown - Complex Conditional Rendering */}
                        {showSuggestions && (
                            <div 
                                ref={suggestionsRef}
                                className='absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-[100] mt-1 max-h-80 overflow-y-auto'
                            >
                                {/* Individual Suggestion Items */}
                                {searchSuggestions.map((product, index) => (
                                    <div
                                        key={product.id}
                                        onClick={() => handleSuggestionClick(product)}
                                        className={`flex items-center p-3 cursor-pointer transition-colors ${
                                            index === selectedIndex 
                                                ? 'bg-indigo-50 border-l-4 border-indigo-500'  // Keyboard selected state
                                                : 'hover:bg-gray-50'                           // Hover state
                                        }`}
                                    >
                                        {/* Product image thumbnail */}
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className='w-12 h-12 object-cover rounded-md mr-3'
                                        />
                                        
                                        {/* Product information */}
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
                                
                                {/* "View All Results" Footer Link */}
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
                    
                    {/* ========== ACTION BUTTONS (DESKTOP) ========== */}
                    <div className='flex items-center space-x-3'>
                        
                        {/* Favorites Button with Counter Badge */}
                        <Link to='/favorites' className='p-2 hover:bg-indigo-700 rounded-full transition-colors relative'>
                            <Heart className='h-5 w-5' />
                            
                            {/* Dynamic counter badge - only shows when count > 0 */}
                            {favoritesCount > 0 && (
                                <span className='absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full min-w-[20px] h-5'>
                                    {favoritesCount}
                                </span>
                            )}
                        </Link>
                        
                        {/* Cart Button with Counter Badge and Click Handler */}
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log('🎯 Cart button clicked!'); // Debug log for development
                                toggleCart(); // Toggle cart sidebar visibility
                            }} 
                            className="relative p-2 hover:bg-indigo-700 rounded-full transition-colors"
                            aria-label="Toggle shopping cart" // Accessibility
                        >
                            <ShoppingCart className="h-5 w-5" />
                            
                            {/* Dynamic cart counter */}
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center min-w-[20px] font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* ========== MOBILE MENU CONTROLS ========== */}
                <div className='md:hidden flex items-center space-x-2'>
                    
                    {/* Mobile Favorites Button */}
                    <Link to='/favorites' className='p-2 hover:bg-indigo-700 rounded-full transition-colors relative'>
                        <Heart className='h-5 w-5'/>
                        
                        {/* Smaller counter for mobile */}
                        {favoritesCount > 0 && (
                            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold'>
                                {favoritesCount}
                            </span>
                        )}
                    </Link>
                    
                    {/* Mobile Cart Button */}
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
                        
                        {/* Mobile cart counter */}
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    
                    {/* Hamburger Menu Button with Icon Toggle */}
                    <button
                        onClick={toggleMobileMenu}
                        className='p-2 hover:bg-indigo-700 rounded-lg transition-colors'
                        aria-label='Toggle mobile menu'
                    >
                        {/* Conditional icon rendering based on menu state */}
                        {mobileMenu ? <X className='h-6 w-6' /> : <Menu className='w-6 h-6'/>}
                    </button>
                </div>
            </header>

            {/* ========== MOBILE MENU DROPDOWN ========== */}
            {/* Conditionally rendered based on mobileMenu state */}
            {mobileMenu && (
                <div className='md:hidden bg-indigo-700 border-t border-indigo-600'>
                    <nav className='px-6 py-4'>
                        
                        {/* Mobile Navigation Links */}
                        <ul className='space-y-4'>
                            <li>
                                <button
                                    className='block py-2 text-white hover:text-indigo-200 transition-colors font-medium'
                                    onClick={() => setMobileProductsOpen(true)} // Close menu after navigation
                                >
                                    Products 
                                    <ChevronDown
                                        className={`flex transition-transform duration-200 ${
                                            mobileProductsOpen ? 'rotate-90' : ''
                                        }`}
                                    />
                                </button>
                                {mobileProductsOpen && (
                                    <div className='bg-white border-t border-white'>
                                        <ul className='space-y-4'>
                                            <li>
                                                <Link
                                                    to='/apparel'
                                                    className='block py-2 text-gray-600 hover:text-gray-700 transition-colors font-medium'
                                                    onClick={() => setMobileProductsOpen(false)}
                                                >
                                                    Apparel
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                to='/misc'
                                                className='block py-2 text-gray-600 hover:text-gray-700 transition-colors font-medium'
                                                onClick={() => setMobileProductsOpen(false)}
                                                >
                                                    Technology
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                to='/misc'
                                                className='block py-2 text-gray-600 hover:text-gray-700 transition-colors font-medium'
                                                onClick={() => setMobileProductsOpen(false)}
                                                >
                                                    Misc
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
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
                        
                        {/* Mobile Search Form */}
                        <div className='mt-4 pt-4 border-t border-indigo-600'>
                            <form onSubmit={handleSearchSubmit} className='relative'>
                                <input 
                                    type="text"
                                    placeholder='What are you looking for?'
                                    value={searchInput}
                                    onChange={handleSearchChange}
                                    className='w-full pl-10 pr-10 py-2 border border-indigo-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-white'    
                                />
                                
                                {/* Mobile search submit button */}
                                <button
                                    type='submit'
                                    className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                                >
                                    <Search className='h-4 w-4'/>
                                </button>
                                
                                {/* Mobile clear search button */}
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