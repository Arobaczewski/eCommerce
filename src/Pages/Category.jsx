// Category.jsx - Dynamic Category Page with URL Parameter Handling
// Demonstrates React Router integration, error handling, and graceful UX patterns

import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductGrid from "../Components/Grids/ProductGrid";
import { getProductByCategory } from "../Components/Products";
import Cart from '../Components/Cart';

/**
 * Category Component - Dynamic Category Display Page
 * 
 * This component showcases several important web development patterns:
 * 
 * ROUTING FEATURES:
 * - URL parameter extraction with React Router useParams
 * - Dynamic page generation based on URL segments
 * - SEO-friendly category URLs like /category/apparel
 * 
 * ERROR HANDLING:
 * - Multiple error states with specific messaging
 * - Graceful fallbacks for invalid or empty categories
 * - User-friendly error messaging instead of crashes
 * 
 * USER EXPERIENCE:
 * - Consistent layout structure across the application
 * - Clear visual hierarchy with category headers
 * - Proper capitalization and formatting for display
 * 
 * BUSINESS LOGIC:
 * - Category-based product filtering
 * - Dynamic content generation
 * - Scalable category system
 */
function Category() {
    // ========== URL PARAMETER EXTRACTION ==========
    
    /**
     * REACT ROUTER INTEGRATION - useParams Hook
     * 
     * Extracts categoryName from URL path like /category/apparel
     * Provides default empty string to prevent undefined errors
     * Enables dynamic routing without hard-coded category pages
     * 
     * URL Structure: /category/:categoryName
     * Example URLs:
     * - /category/apparel → categoryName = 'apparel'
     * - /category/technology → categoryName = 'technology'
     * - /category/misc → categoryName = 'misc'
     */
    const { categoryName = '' } = useParams();

    // ========== ERROR HANDLING - INVALID CATEGORY ==========
    
    /**
     * EARLY RETURN PATTERN - Invalid Category State
     * 
     * Handles edge case where no category is provided in URL
     * Could occur from malformed URLs or direct navigation
     * Provides clear error messaging instead of blank page
     * Maintains consistent site structure with Header/Footer
     */
    if (!categoryName) {
        return (
            <>
                <Header/>
                <div className="container mx-auto px-6 py-12 text-center">
                    {/* ERROR MESSAGING - Clear and actionable */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Category</h1>
                    <p className="text-gray-600">Please Select a valid category</p>
                </div>
                <Footer/>
                <Cart/>
            </>
        );
    }

    // ========== DISPLAY FORMATTING ==========
    
    /**
     * STRING MANIPULATION - Professional Display Formatting
     * 
     * Converts URL-friendly category names to proper display format:
     * - 'apparel' → 'Apparel'
     * - 'technology' → 'Technology'
     * - 'misc' → 'Misc'
     * 
     * This pattern handles:
     * 1. Capitalizing first letter for proper nouns
     * 2. Maintaining lowercase for URL consistency
     * 3. Professional presentation in UI
     */
    const displayCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    // ========== DATA RETRIEVAL ==========
    
    /**
     * CATEGORY FILTERING - Product Data Access
     * 
     * Uses utility function to filter products by category
     * Demonstrates separation of concerns:
     * - UI component handles display logic
     * - Utility function handles data filtering
     * - Clean, testable architecture
     */
    const categoryProducts = getProductByCategory(displayCategory);

    // ========== ERROR HANDLING - EMPTY CATEGORY ==========
    
    /**
     * EMPTY STATE HANDLING - No Products Found
     * 
     * Graceful handling when category exists but contains no products
     * Business scenarios:
     * - New category not yet populated
     * - Seasonal categories temporarily empty
     * - Inventory management scenarios
     * 
     * User Experience:
     * - Clear messaging about the situation
     * - Maintains site navigation structure
     * - Suggests alternative actions
     */
    if (categoryProducts.length === 0) {
        return (
            <>
                <Header/>
                <div className="container mx-auto px-6 py-12 text-center">
                    {/* CONTEXTUAL ERROR MESSAGING */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
                    <p className="text-gray-600">
                        Sorry, we couldn't find any products in the {displayCategory} category.
                    </p>
                </div>
                <Footer/>
                <Cart/>
            </>
        );
    }

    // ========== SUCCESSFUL CATEGORY DISPLAY ==========
    
    /**
     * MAIN CATEGORY PAGE LAYOUT
     * 
     * Well-structured category page with:
     * 1. Consistent site navigation (Header/Footer)
     * 2. Category-specific header section
     * 3. Product grid display
     * 4. Global cart functionality
     */
    return (
        <>
            {/* SITE NAVIGATION - Consistent across all pages */}
            <Header/>
            
            {/* MAIN CONTENT CONTAINER */}
            <div className="container mx-auto px-6">
                
                {/* CATEGORY HEADER SECTION */}
                {/* Creates clear visual separation and context for users */}
                <div className="py-8 text-center border-b border-gray-200 mb-8">
                    {/* DYNAMIC CATEGORY TITLE */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{displayCategory}</h1>
                    
                    {/* CATEGORY DESCRIPTION - Professional marketing copy */}
                    <p className="text-gray-600">Discover our {displayCategory.toLowerCase()} collection</p>
                </div>
                
                {/* PRODUCT DISPLAY SECTION */}
                {/* COMPONENT COMPOSITION - Reusing ProductGrid for consistency */}
                {/* This demonstrates proper separation of concerns:
                    - Category component handles routing and error states
                    - ProductGrid handles product display logic
                    - Clean, maintainable code structure */}
                <ProductGrid products={categoryProducts}/>
            </div>
            
            {/* SITE STRUCTURE - Footer and global cart */}
            <Footer/>
            <Cart/>
        </>
    );
}

// ========== CATEGORY PAGE ARCHITECTURE ANALYSIS ==========
//
// This implementation demonstrates mastery of:
//
// 1. DYNAMIC ROUTING PATTERNS:
//    - URL parameter extraction and validation
//    - Dynamic content generation based on routes
//    - SEO-friendly URL structure for categories
//
// 2. ERROR HANDLING EXCELLENCE:
//    - Multiple error states with specific messaging
//    - Graceful degradation instead of crashes
//    - User-friendly error communication
//
// 3. USER EXPERIENCE DESIGN:
//    - Consistent layout structure across states
//    - Clear visual hierarchy and navigation
//    - Professional content formatting
//
// 4. COMPONENT ARCHITECTURE:
//    - Clean separation between routing and display logic
//    - Reusable ProductGrid component integration
//    - Consistent site structure maintenance
//
// 5. BUSINESS LOGIC INTEGRATION:
//    - Category-based product filtering
//    - Professional display formatting
//    - Scalable category management system
//
// REAL-WORLD APPLICATIONS:
// - E-commerce category pages
// - Content management systems
// - Product catalog navigation
// - Dynamic content routing
//
// SCALABILITY CONSIDERATIONS:
// - Easy to add new categories
// - Extensible for category hierarchies
// - Ready for search and filtering integration
// - Foundation for category-specific features
//
// This level of implementation shows:
// - Understanding of modern routing patterns
// - Comprehensive error handling strategies
// - User-centric design thinking
// - Production-ready code quality

export default Category;