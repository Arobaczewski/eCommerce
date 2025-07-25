import { useState, useEffect } from 'react';
import { ChevronDown, Filter, Search, X } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import { products } from '../Components/Products.js';
import Cart from '../Components/Cart';

// Enhanced FilterBar Component
const FilterBar = ({ 
    onSortChange, 
    onCategoryFilter, 
    onSearchFilter,
    currentSort = 'newest',
    selectedCategory = 'all',
    searchTerm = '',
    totalProducts,
    filteredCount 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState(searchTerm);

    const sortOptions = [
        { value: 'newest', label: 'Newest First', icon: '🆕' },
        { value: 'price-low', label: 'Price: Low to High', icon: '💰' },
        { value: 'price-high', label: 'Price: High to Low', icon: '💎' },
        { value: 'name-asc', label: 'Name: A to Z', icon: '🔤' },
        { value: 'name-desc', label: 'Name: Z to A', icon: '🔡' },
        { value: 'popular', label: 'Most Popular', icon: '⭐' }
    ];

    const categories = [
        { value: 'all', label: 'All Categories', count: totalProducts },
        { value: 'technology', label: 'Technology', count: products.filter(p => p.category === 'Technology').length },
        { value: 'apparel', label: 'Apparel', count: products.filter(p => p.category === 'Apparel').length },
        { value: 'misc', label: 'Misc', count: products.filter(p => p.category === 'Misc').length }
    ];

    const currentOption = sortOptions.find(option => option.value === currentSort);

    const handleSortSelect = (sortValue) => {
        onSortChange(sortValue);
        setIsOpen(false);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearchFilter(searchInput);
    };

    const clearSearch = () => {
        setSearchInput('');
        onSearchFilter('');
    };

    return (
        <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
            <div className="container mx-auto px-6 py-4">
                {/* Top Row - Title and Results Count */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
                        <p className="text-gray-600 mt-1">
                            {filteredCount === totalProducts 
                                ? `${totalProducts} products` 
                                : `Showing ${filteredCount} of ${totalProducts} products`
                            }
                            {searchTerm && (
                                <span className="ml-2 text-sm">
                                    for "<span className="font-medium text-indigo-600">{searchTerm}</span>"
                                </span>
                            )}
                        </p>
                    </div>
                </div>

                {/* Filter Controls Row */}
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                    
                    {/* Search Bar */}
                    <div className="flex-1 max-w-md">
                        <form onSubmit={handleSearchSubmit} className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            {searchInput && (
                                <button
                                    type="button"
                                    onClick={clearSearch}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hover:text-gray-600"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </form>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => onCategoryFilter(category.value)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    selectedCategory === category.value
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category.label}
                                <span className="ml-1.5 text-xs opacity-75">({category.count})</span>
                            </button>
                        ))}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-between min-w-[200px] px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        >
                            <div className="flex items-center">
                                <Filter className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-sm font-medium text-gray-700">
                                    <span className="text-indigo-600">{currentOption?.label}</span>
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
                                <div 
                                    className="fixed inset-0 z-10" 
                                    onClick={() => setIsOpen(false)}
                                />
                                
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
                </div>

                {/* Active Filters Display */}
                {(searchTerm || selectedCategory !== 'all') && (
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                        <span className="text-sm text-gray-600 font-medium">Active filters:</span>
                        {searchTerm && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                Search: {searchTerm}
                                <button 
                                    onClick={clearSearch}
                                    className="ml-2 hover:text-indigo-600"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                        {selectedCategory !== 'all' && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                Category: {categories.find(c => c.value === selectedCategory)?.label}
                                <button 
                                    onClick={() => onCategoryFilter('all')}
                                    className="ml-2 hover:text-indigo-600"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

// Main ProductPage Component
function ProductPage() {
    const [allProducts] = useState(products);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sortBy, setSortBy] = useState('newest');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Apply all filters whenever dependencies change
    useEffect(() => {
        let filtered = [...allProducts];

        // Apply category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => 
                product.category.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply sorting
        filtered = sortProducts(filtered, sortBy);

        setFilteredProducts(filtered);
    }, [allProducts, selectedCategory, searchTerm, sortBy]);

    // Sort function
    const sortProducts = (products, sortType) => {
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
                return sortedProducts.sort((a, b) => b.id - a.id);
            case 'popular':
                return sortedProducts.sort((a, b) => b.price - a.price);
            default:
                return sortedProducts;
        }
    };

    const handleSortChange = (newSortBy) => {
        setSortBy(newSortBy);
    };

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchFilter = (search) => {
        setSearchTerm(search);
    };

    return (
        <>
            <Header />
            
            {/* Professional Filter Bar */}
            <FilterBar
                onSortChange={handleSortChange}
                onCategoryFilter={handleCategoryFilter}
                onSearchFilter={handleSearchFilter}
                currentSort={sortBy}
                selectedCategory={selectedCategory}
                searchTerm={searchTerm}
                totalProducts={allProducts.length}
                filteredCount={filteredProducts.length}
            />

            {/* Main Content */}
            <div className="container mx-auto px-6 py-8">
                {/* No Results Message */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-600 mb-4">
                            Try adjusting your search or filter criteria
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('all');
                                setSortBy('newest');
                            }}
                            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}

                {/* Products Grid */}
                {filteredProducts.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard 
                                key={product.id} 
                                product={product}
                                showDeleteButton={false}
                            />
                        ))}
                    </div>
                )}
            </div>

            <Footer />
            <Cart />
        </>
    );
}

export default ProductPage;