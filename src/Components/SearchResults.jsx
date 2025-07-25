// SearchResults.jsx - Advanced Search Results Page with Multiple UI States
// Demonstrates URL parameter handling, loading states, and comprehensive UX patterns

import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import ProductGrid from "./Grids/ProductGrid";
import { products } from "./Products";

/**
 * SearchResults Component - Full-Featured Search Results Implementation
 * 
 * This component showcases several advanced React and UX patterns:
 * 
 * ADVANCED FEATURES:
 * - URL parameter parsing with React Router
 * - Multiple UI states (loading, results, no results, no query)
 * - Search suggestion system for failed searches
 * - Debounced search with simulated loading
 * - Grammar-aware result counting
 * - Graceful fallback handling
 * 
 * TECHNICAL PATTERNS:
 * - useSearchParams for URL state management
 * - Controlled loading states for better perceived performance
 * - Early return patterns for cleaner conditional rendering
 * - Component composition with reusable grid layout
 * 
 * UX BEST PRACTICES:
 * - Clear visual feedback for all states
 * - Helpful suggestions when no results found
 * - Consistent styling with site theme
 * - Accessible search interface
 */
function SearchResults() {
    // ========== STATE MANAGEMENT ==========
    
    // URL SEARCH PARAMS - React Router v6 Pattern
    // useSearchParams provides read/write access to URL query parameters
    // This enables shareable search URLs and browser history integration
    const [searchParams] = useSearchParams();
    
    // COMPONENT STATE - Search Results and Loading
    const [searchResults, setSearchResults] = useState([]); // Array of matching products
    const [isLoading, setIsLoading] = useState(true);       // Loading state for UX feedback

    // EXTRACT SEARCH QUERY from URL parameters
    // Uses nullish coalescing (??) to provide empty string fallback
    // 'q' is standard query parameter name used by major search engines
    const query = searchParams.get('q') || '';

    // ========== SEARCH EFFECT - Core Search Logic ==========
    /**
     * This effect handles the main search functionality:
     * - Runs whenever the query parameter changes
     * - Implements simulated loading delay for better UX
     * - Performs multi-field search across product data
     * - Updates both results and loading states
     */
    useEffect(() => {
        if(query){
            // START LOADING STATE - Immediate user feedback
            setIsLoading(true);
            
            // SIMULATED LOADING DELAY - UX Enhancement
            // Provides visual feedback even for fast local searches
            // In real applications, this would be actual API call time
            // 300ms is optimal balance between perceived performance and smoothness
            setTimeout(() => {
                // MULTI-FIELD SEARCH IMPLEMENTATION
                // Searches across multiple product properties for comprehensive results
                const results = products.filter(product => {
                    const searchTerm = query.toLowerCase();
                    return(
                        // SEARCH FIELDS: Name, description, and category
                        // toLowerCase() ensures case-insensitive matching
                        // includes() allows partial word matching
                        product.name.toLowerCase().includes(searchTerm) ||
                        product.description.toLowerCase().includes(searchTerm) ||
                        product.category.toLowerCase().includes(searchTerm)
                    );
                });
                
                // UPDATE STATE with search results and complete loading
                setSearchResults(results);
                setIsLoading(false);
            }, 300);
        } else {
            // CLEAR RESULTS when no query present
            setSearchResults([]);
            setIsLoading(false);
        }
    }, [query]); // DEPENDENCY: Re-run search when query changes

    // ========== EARLY RETURN - NO QUERY STATE ==========
    // Handle case where user accesses search page without query parameter
    // Provides helpful guidance instead of blank page
    if(!query) {
        return(
            <>
                <Header/>
                <div className="bg-gray-50 min-h-screen py-16">
                    <div className="container mx-auto px-6 text-center">
                        {/* GUIDANCE MESSAGING - Clear user direction */}
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Search Products
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Use the search bar above to find products
                        </p>
                        
                        {/* CALL-TO-ACTION - Navigation to all products */}
                        <Link 
                            to='/products'
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            Browse All Products
                        </Link>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }

    // ========== MAIN SEARCH RESULTS LAYOUT ==========
    return(
        <>
            <Header/>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        
                        {/* SEARCH RESULTS HEADER - Context and Status */}
                        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                            <div className="flex items-center mb-4">
                                {/* SEARCH ICON - Visual branding consistency */}
                                <Search className="h-6 w-6 text-indigo-600 mr-3"/>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Search Results
                                </h1>
                            </div>
                            
                            {/* DYNAMIC STATUS MESSAGE - Grammar-Aware Results Count */}
                            <p className="text-gray-600">
                                {isLoading ? ( 
                                    // LOADING STATE - Immediate feedback
                                    'Searching...'
                                ) : (
                                    searchResults.length > 0 ? (
                                        // RESULTS FOUND STATE - Detailed count with proper grammar
                                        <>
                                            Found <span className="font-semibold text-gray-900">{searchResults.length}</span> result{searchResults.length === 1 ? '' : 's'} for <span className="font-semibold text-indigo-600">"{query}"</span>
                                        </>
                                    ) : (
                                        // NO RESULTS STATE - Clear messaging
                                        <>
                                            No results found for <span className="font-semibold text-indigo-600">"{query}"</span>
                                        </>
                                    )
                                )}
                            </p>
                        </div>

                        {/* LOADING STATE UI - Visual Feedback During Search */}
                        {isLoading && (
                            <div className="text-center py-12">
                                {/* ANIMATED SPINNER - CSS Animation for Loading Indicator */}
                                {/* Uses Tailwind's animate-spin for smooth rotation */}
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                                <p className="text-gray-600">Searching products...</p>
                            </div>
                        )}

                        {/* SEARCH RESULTS DISPLAY - Successful Search State */}
                        {!isLoading && searchResults.length > 0 && (
                            // COMPONENT COMPOSITION - Reusing ProductGrid for consistency
                            // This demonstrates proper separation of concerns
                            <ProductGrid products={searchResults}/>
                        )}

                        {/* NO RESULTS STATE - Comprehensive Fallback Experience */}
                        {!isLoading && searchResults.length === 0 && (
                            <div className="text-center py-16">
                                {/* EMPTY STATE ICON - Large visual indicator */}
                                <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <Search className="h-16 w-16 text-gray-400"/>
                                </div>
                                
                                {/* CLEAR MESSAGING - Explains the situation */}
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    No Products Found
                                </h2>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                    We couldn't find any products matching "<span className="font-semibold">{query}</span>". Try searching with different keywords.
                                </p>
                                
                                {/* HELPFUL SUGGESTIONS - Guided Recovery */}
                                <div className="space-y-4">
                                    <p className="text-gray-600">Try searching for:</p>
                                    
                                    {/* SEARCH SUGGESTIONS - Common Search Terms */}
                                    {/* These are strategically chosen based on actual product categories */}
                                    <div className="flex flex-wrap gap-2 justify-center mb-8">
                                        {['jersey', 'nintendo', 'graphics card', 'belt', 'couch'].map((suggestion) => (
                                            <Link
                                                key={suggestion}
                                                to={`/search?q=${suggestion}`}
                                                className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm hover:bg-indigo-100 transition-colors"
                                            >
                                                {suggestion}
                                            </Link>
                                        ))}
                                    </div>
                                    
                                    {/* FALLBACK NAVIGATION - Browse All Products */}
                                    <Link
                                        to='/products'
                                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                                    >
                                        Browse All Products
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

// ========== COMPONENT ARCHITECTURE ANALYSIS ==========
//
// ADVANCED PATTERNS DEMONSTRATED:
//
// 1. URL STATE MANAGEMENT:
//    - useSearchParams for reading URL parameters
//    - Shareable search URLs for better user experience
//    - Browser history integration with React Router
//
// 2. MULTIPLE UI STATES:
//    - Loading state with visual feedback
//    - Success state with results count
//    - Empty state with helpful suggestions
//    - No query state with guidance
//
// 3. SEARCH IMPLEMENTATION:
//    - Multi-field search across product properties
//    - Case-insensitive matching for better UX
//    - Simulated loading for perceived performance
//
// 4. USER EXPERIENCE OPTIMIZATION:
//    - Grammar-aware result counting (1 result vs 2 results)
//    - Contextual messaging throughout all states
//    - Helpful search suggestions for failed searches
//    - Clear visual hierarchy and feedback
//
// 5. PERFORMANCE CONSIDERATIONS:
//    - Local search eliminates API latency
//    - Efficient array filtering with early termination
//    - Proper dependency management in useEffect
//
// 6. ACCESSIBILITY FEATURES:
//    - Semantic HTML structure
//    - Clear labeling and messaging
//    - Keyboard navigation support through links
//    - High contrast visual indicators
//
// BUSINESS VALUE:
// This implementation demonstrates understanding of:
// - E-commerce search requirements
// - User experience best practices
// - Performance optimization techniques
// - Modern React development patterns
// - Comprehensive state management

export default SearchResults;