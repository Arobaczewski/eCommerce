import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductByCategory } from "../Products.js";
import ProductGrid from "./ProductGrid"

function HomeGrids({ currentProductId, category }) {
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 4;
    
    // Get all products in the same category
    const categoryProducts = getProductByCategory(category);
    
    // Remove the current product from recommendations
    const otherProducts = categoryProducts.filter(product => product.id !== currentProductId);
    
    // Shuffle array 
    const shuffleArray = (array) => {
        const newArray = [...array]; // Create a copy
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };
    
    const shuffledProducts = shuffleArray(otherProducts);
    
    // Calculate pagination
    const totalPages = Math.ceil(shuffledProducts.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProducts = shuffledProducts.slice(startIndex, endIndex);

    // Navigation functions
    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // If no products to show, don't render anything
    if(shuffledProducts.length === 0){
        return null;
    }

    return (
        <div className="container mx-auto px-6">
            {/* Products Grid */}
            <ProductGrid products={currentProducts}/>
            
            {/* Pagination Controls - Only show if more than 4 products */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center mt-8 space-x-4">
                    {/* Previous Button */}
                    <button
                        onClick={prevPage}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm"
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-600" />
                    </button>
                    
                    {/* Page Indicators */}
                    <div className="flex items-center space-x-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    currentPage === index
                                        ? 'bg-blue-600'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    {/* Next Button */}
                    <button
                        onClick={nextPage}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm"
                        aria-label="Next page"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
            )}
            
            {/* Page Info */}
            {totalPages > 1 && (
                <div className="text-center mt-4">
                    <span className="text-sm text-gray-500">
                        Showing {startIndex + 1}-{Math.min(endIndex, shuffledProducts.length)} of {shuffledProducts.length} products
                    </span>
                </div>
            )}
        </div>
    )
}

export default HomeGrids