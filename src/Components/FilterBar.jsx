import { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';

const FilterBar = ({ onSortChange, currentSort = 'newest' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const sortOptions = [
        { value: 'newest', label: 'Newest First', icon: '🆕' },
        { value: 'price-low', label: 'Price: Low to High', icon: '💰' },
        { value: 'price-high', label: 'Price: High to Low', icon: '💎' },
        { value: 'name-asc', label: 'Name: A to Z', icon: '🔤' },
        { value: 'name-desc', label: 'Name: Z to A', icon: '🔡' },
        { value: 'popular', label: 'Most Popular', icon: '⭐' }
    ];

    const currentOption = sortOptions.find(option => option.value === currentSort);

    const handleSortSelect = (sortValue) => {
        onSortChange(sortValue);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            {/* Sort Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-between w-full md:w-auto min-w-[200px] px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            >
                <div className="flex items-center">
                    <Filter className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                        Sort by: <span className="text-indigo-600">{currentOption?.label}</span>
                    </span>
                </div>
                <ChevronDown 
                    className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`} 
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsOpen(false)}
                    />
                    
                    {/* Dropdown Content */}
                    <div className="absolute right-0 z-20 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <div className="py-2">
                            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                                Sort Options
                            </div>
                            {sortOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleSortSelect(option.value)}
                                    className={`w-full flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                                        currentSort === option.value 
                                            ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-500' 
                                            : 'text-gray-700'
                                    }`}
                                >
                                    <span className="mr-3 text-lg">{option.icon}</span>
                                    <span className="font-medium">{option.label}</span>
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

// Updated Sort Function that works with your product structure
export const sortProducts = (products, sortType) => {
    const sortedProducts = [...products];
    
    switch (sortType) {
        case 'price-low':
            return sortedProducts.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedProducts.sort((a, b) => b.price - a.price);
        case 'name-asc':
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        case 'newest':
            // Since your products don't have createdAt, sort by ID (higher ID = newer)
            return sortedProducts.sort((a, b) => b.id - a.id);
        case 'popular':
            // For now, sort by price (you can change this logic)
            // You could add a popularity field to your products later
            return sortedProducts.sort((a, b) => b.price - a.price);
        default:
            return sortedProducts;
    }
};

// Complete ProductPage example showing how to use FilterBar with your data
export const ProductPageExample = ({ products, ProductCard }) => {
    const [sortBy, setSortBy] = useState('newest');
    const [sortedProducts, setSortedProducts] = useState(products);

    const handleSortChange = (newSortBy) => {
        setSortBy(newSortBy);
        const sorted = sortProducts(products, newSortBy);
        setSortedProducts(sorted);
    };

    return (
        <div className="container mx-auto px-6 py-8">
            {/* Header with Filter */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
                    <p className="text-gray-600 mt-1">{sortedProducts.length} products found</p>
                </div>
                
                {/* Sort Filter Component */}
                <FilterBar 
                    onSortChange={handleSortChange}
                    currentSort={sortBy}
                />
            </div>

            {/* Products Grid */}
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

export default FilterBar;