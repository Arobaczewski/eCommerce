// FilterBar.jsx - Advanced sorting component with comprehensive product organization
// Demonstrates complex state management, user interaction patterns, and business logic

import { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';

// MAIN FILTERBAR COMPONENT
// Props pattern: Callback function for parent communication + current state for controlled component
const FilterBar = ({ onSortChange, currentSort = 'newest' }) => {
    // LOCAL STATE MANAGEMENT
    // Controls dropdown visibility - demonstrates controlled vs uncontrolled component patterns
    const [isOpen, setIsOpen] = useState(false);

    // SORT OPTIONS CONFIGURATION
    // Business logic: Comprehensive sorting options that real e-commerce sites would need
    // Each option includes visual emoji icons for better UX and scannability
    const sortOptions = [
        { value: 'newest', label: 'Newest First', icon: '🆕' },
        { value: 'price-low', label: 'Price: Low to High', icon: '💰' },
        { value: 'price-high', label: 'Price: High to Low', icon: '💎' },
        { value: 'name-asc', label: 'Name: A to Z', icon: '🔤' },
        { value: 'name-desc', label: 'Name: Z to A', icon: '🔡' },
        { value: 'popular', label: 'Most Popular', icon: '⭐' }
    ];

    // CURRENT SELECTION LOOKUP
    // Array.find() for efficient O(n) lookup of current selection
    // Used to display current state in the button
    const currentOption = sortOptions.find(option => option.value === currentSort);

    // SELECTION HANDLER
    // Demonstrates callback pattern for parent-child communication
    // Parent component maintains the actual sorted data, this component just triggers changes
    const handleSortSelect = (sortValue) => {
        onSortChange(sortValue); // Notify parent component
        setIsOpen(false);        // Close dropdown after selection
    };

    return (
        <div className="relative inline-block text-left">
            
            {/* SORT TRIGGER BUTTON */}
            {/* Complex responsive design: full width on mobile, auto width on desktop */}
            {/* Focus states for accessibility compliance */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-between w-full md:w-auto min-w-[200px] px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            >
                {/* BUTTON CONTENT WITH VISUAL HIERARCHY */}
                <div className="flex items-center">
                    {/* Filter icon provides visual context */}
                    <Filter className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                        Sort by: <span className="text-indigo-600">{currentOption?.label}</span>
                    </span>
                </div>
                
                {/* ANIMATED CHEVRON - Advanced CSS Transform */}
                {/* Conditional rotation based on open state */}
                {/* Shows smooth animation principles for polished interactions */}
                <ChevronDown 
                    className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`} 
                />
            </button>

            {/* CONDITIONAL DROPDOWN RENDERING */}
            {/* Only renders DOM elements when needed - performance optimization */}
            {isOpen && (
                <>
                    {/* CLICK-OUTSIDE HANDLER - Advanced UX Pattern */}
                    {/* Invisible backdrop that closes dropdown when clicked */}
                    {/* Fixed positioning covers entire viewport */}
                    {/* z-10 ensures it's above page content but below dropdown */}
                    <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsOpen(false)}
                    />
                    
                    {/* DROPDOWN CONTENT CONTAINER */}
                    {/* z-20 ensures dropdown appears above backdrop */}
                    {/* Professional styling with shadows and borders */}
                    <div className="absolute right-0 z-20 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <div className="py-2">
                            
                            {/* SECTION HEADER */}
                            {/* Typography hierarchy: smaller, uppercase, tracked text for section labeling */}
                            {/* Border provides visual separation */}
                            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                                Sort Options
                            </div>
                            
                            {/* DYNAMIC OPTION RENDERING */}
                            {/* Maps over sortOptions array for maintainable code */}
                            {sortOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleSortSelect(option.value)}
                                    // DYNAMIC STYLING - Conditional classes based on selection state
                                    // Selected item gets special highlighting and checkmark
                                    className={`w-full flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                                        currentSort === option.value 
                                            ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-500' 
                                            : 'text-gray-700'
                                    }`}
                                >
                                    {/* EMOJI ICONS for visual appeal and quick recognition */}
                                    <span className="mr-3 text-lg">{option.icon}</span>
                                    <span className="font-medium">{option.label}</span>
                                    
                                    {/* SELECTED STATE INDICATOR */}
                                    {/* Checkmark appears only for currently selected option */}
                                    {currentSort === option.value && (
                                        <span className="ml-auto text-indigo-500">✓</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

// UTILITY FUNCTION - Product Sorting Logic
// Separated from component for reusability and testability
// Demonstrates functional programming principles
export const sortProducts = (products, sortType) => {
    // IMMUTABILITY PRINCIPLE - Create copy to avoid mutations
    // Spread operator ensures original array remains unchanged
    const sortedProducts = [...products];
    
    // COMPREHENSIVE SORTING ALGORITHM
    // Switch statement for clean, readable multiple condition handling
    switch (sortType) {
        case 'price-low':
            // Numeric sorting using simple subtraction comparison
            return sortedProducts.sort((a, b) => a.price - b.price);
            
        case 'price-high':
            // Reverse numeric sorting for descending order
            return sortedProducts.sort((a, b) => b.price - a.price);
            
        case 'name-asc':
            // Alphabetical sorting using localeCompare for proper string comparison
            // localeCompare handles accents, case sensitivity, and locale-specific ordering
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            
        case 'name-desc':
            // Reverse alphabetical sorting
            return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            
        case 'newest':
            // BUSINESS LOGIC: Assuming higher ID = newer product
            // This is a common pattern in databases with auto-incrementing IDs
            return sortedProducts.sort((a, b) => b.id - a.id);
            
        case 'popular':
            // PLACEHOLDER LOGIC: Currently sorts by price as popularity proxy
            // In real app, this would use view counts, purchase frequency, etc.
            // Shows understanding that business logic can evolve
            return sortedProducts.sort((a, b) => b.price - a.price);
            
        default:
            // DEFENSIVE PROGRAMMING: Return unchanged array for unknown sort types
            return sortedProducts;
    }
};

// EXAMPLE IMPLEMENTATION COMPONENT
// Shows how FilterBar integrates with parent components
// Demonstrates proper state management patterns for sorting functionality
export const ProductPageExample = ({ products, ProductCard }) => {
    // STATE MANAGEMENT for sorting
    const [sortBy, setSortBy] = useState('newest');
    const [sortedProducts, setSortedProducts] = useState(products);

    // SORT CHANGE HANDLER
    // Updates both sort type and triggers re-sorting of products
    // Shows proper state synchronization patterns
    const handleSortChange = (newSortBy) => {
        setSortBy(newSortBy);
        const sorted = sortProducts(products, newSortBy);
        setSortedProducts(sorted);
    };

    return (
        <div className="container mx-auto px-6 py-8">
            {/* HEADER SECTION with responsive layout */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
                    {/* DYNAMIC PRODUCT COUNT - Real-time feedback */}
                    <p className="text-gray-600 mt-1">{sortedProducts.length} products found</p>
                </div>
                
                {/* FILTERBAR INTEGRATION */}
                {/* Demonstrates proper prop passing and callback patterns */}
                <FilterBar 
                    onSortChange={handleSortChange}
                    currentSort={sortBy}
                />
            </div>

            {/* RESPONSIVE PRODUCT GRID */}
            {/* Same responsive pattern as other grid components for consistency */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product}
                        showDeleteButton={false}
                    />
                ))}
            </div>
        </div>
    );
};

// ARCHITECTURAL BENEFITS DEMONSTRATED:
// 1. Separation of Concerns - UI component separate from sorting logic
// 2. Reusability - sortProducts function can be used anywhere
// 3. Controlled Components - Parent manages state, child handles UI
// 4. Performance - Conditional rendering prevents unnecessary DOM updates
// 5. User Experience - Smooth animations and clear visual feedback
// 6. Accessibility - Proper focus management and semantic HTML
// 7. Responsive Design - Adapts layout for different screen sizes

export default FilterBar;