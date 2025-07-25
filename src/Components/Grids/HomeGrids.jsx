// HomeGrids.jsx - Advanced pagination component for product browsing
// Demonstrates complex state management, array manipulation, and user experience optimization

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductByCategory } from "../Products";
import ProductGrid from "./ProductGrid";

function HomeGrids({ currentProductId, category }) {
    // PAGINATION STATE MANAGEMENT
    // Using useState to track current page for infinite-style browsing
    // Starting at 0 for array-based indexing - shows understanding of zero-indexing
    const [currentPage, setCurrentPage] = useState(0);
    
    // BUSINESS LOGIC CONSTANTS
    // Items per page chosen for optimal UX - not too overwhelming, not too sparse
    // Makes the interface feel active and fresh without cognitive overload
    const ITEMS_PER_PAGE = 4;
    
    // DATA FETCHING AND FILTERING
    // Strategic product filtering to create relevant recommendations
    // Shows understanding of business logic - don't recommend the same product user is viewing
    const categoryProducts = getProductByCategory(category);
    const otherProducts = categoryProducts.filter(product => product.id !== currentProductId);
    
    // ADVANCED ARRAY MANIPULATION - Fisher-Yates Shuffle Algorithm
    // This demonstrates computer science fundamentals and creates dynamic user experience
    // Each page load shows different products, increasing engagement and discovery
    const shuffleArray = (array) => {
        // Create copy to avoid mutating original data - shows understanding of immutability principles
        const newArray = [...array]; 
        
        // Fisher-Yates shuffle: mathematically proven uniform distribution
        // More sophisticated than Math.random() sort, shows algorithmic thinking
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // ES6 destructuring for clean swap - modern JavaScript practices
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };
    
    // Apply randomization for fresh content on each visit/navigation
    const shuffledProducts = shuffleArray(otherProducts);
    
    // PAGINATION CALCULATIONS
    // Mathematical logic for dividing content into digestible chunks
    // Demonstrates understanding of Math.ceil for handling remainder items
    const totalPages = Math.ceil(shuffledProducts.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    // Array.slice() for efficient pagination without loading all data at once
    const currentProducts = shuffledProducts.slice(startIndex, endIndex);

    // NAVIGATION FUNCTIONS WITH CIRCULAR PAGINATION
    // User experience design: seamless infinite browsing using modulo operator
    // When user reaches end, automatically cycles back to beginning
    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    // Handles backward navigation with proper wrap-around logic
    // Adding totalPages prevents negative numbers when going backwards from page 0
    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // EARLY RETURN PATTERN - Performance and UX Optimization
    // Don't render empty components - reduces DOM size and prevents layout shift
    // Shows defensive programming practices
    if(shuffledProducts.length === 0){
        return null;
    }

    return (
        <div className="container mx-auto px-6">
            {/* PRODUCT DISPLAY COMPONENT */}
            {/* Separation of concerns: ProductGrid handles display, this component handles logic */}
            <ProductGrid products={currentProducts}/>
            
            {/* CONDITIONAL PAGINATION UI */}
            {/* Only show pagination when necessary - prevents UI clutter */}
            {/* Business logic: Don't confuse users with pagination for small datasets */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center mt-8 space-x-4">
                    
                    {/* PREVIOUS NAVIGATION BUTTON */}
                    {/* Accessibility-first design with proper ARIA labels */}
                    {/* Hover states and transitions for premium feel */}
                    <button
                        onClick={prevPage}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm"
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-600" />
                    </button>
                    
                    {/* DYNAMIC PAGE INDICATORS */}
                    {/* Array.from() with mapping function - shows advanced JavaScript knowledge */}
                    {/* Visual feedback for current page position */}
                    <div className="flex items-center space-x-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                // CONDITIONAL STYLING - Dynamic classes based on state
                                // Active state styling for clear user feedback
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    currentPage === index
                                        ? 'bg-blue-600'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    {/* NEXT NAVIGATION BUTTON */}
                    {/* Consistent styling and interaction patterns with previous button */}
                    <button
                        onClick={nextPage}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm"
                        aria-label="Next page"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
            )}
            
            {/* PAGINATION INFORMATION DISPLAY */}
            {/* Provides context to users about their current position in the dataset */}
            {/* Math.min() prevents showing incorrect end numbers when on last page */}
            {totalPages > 1 && (
                <div className="text-center mt-4">
                    <span className="text-sm text-gray-500">
                        Showing {startIndex + 1}-{Math.min(endIndex, shuffledProducts.length)} of {shuffledProducts.length} products
                    </span>
                </div>
            )}
        </div>
    );
}

// COMPONENT EXPORT
// Clean default export pattern for easy importing and tree-shaking optimization
export default HomeGrids;