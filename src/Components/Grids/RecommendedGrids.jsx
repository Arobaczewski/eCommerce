// RecommendedGrids.jsx - Smart product recommendation component
// Implements recommendation algorithm and component reusability patterns

import ProductGrid from "../Grids/ProductGrid";
import { getProductByCategory } from "../Products";

// RECOMMENDATION ENGINE COMPONENT
// Takes current product context and generates intelligent suggestions
// Props: currentProductId (to exclude), category (for relevant recommendations)
function RecommendedGrids({ currentProductId, category }) {
    
    // DATA FILTERING FOR RELEVANT RECOMMENDATIONS
    // Business logic: Show products from same category for cross-selling opportunities
    // This mimics real e-commerce recommendation strategies (Amazon's "customers also viewed")
    const categoryProducts = getProductByCategory(category);
    
    // INTELLIGENT FILTERING - Prevent Self-Recommendation
    // Critical UX decision: Don't recommend the product user is currently viewing
    // Shows understanding of user context and prevents redundant suggestions
    const otherProducts = categoryProducts.filter(product => product.id !== currentProductId);
    
    // RANDOMIZATION ALGORITHM - Fisher-Yates Shuffle Implementation
    // Same high-quality shuffle algorithm as HomeGrids - demonstrates code consistency
    // Creates dynamic recommendations that feel fresh on each page visit
    const shuffleArray = (array) => {
        // IMMUTABILITY PRINCIPLE - Create copy to avoid side effects
        // Shows understanding that we shouldn't mutate original data structures
        const newArray = [...array]; 
        
        // FISHER-YATES SHUFFLE - Computer Science Fundamentals
        // Mathematically proven uniform random distribution
        // More reliable than simple Math.random() sorting approaches
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // ES6 DESTRUCTURING - Modern JavaScript swap technique
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };
    
    // RECOMMENDATION STRATEGY - Limited Selection for Focus
    // Business decision: Show only 3 recommendations to avoid choice paralysis
    // Slice after shuffle ensures we get random selection, not just first 3 items
    // This approach balances discovery with cognitive load
    const randomProducts = shuffleArray(otherProducts).slice(0, 3);

    // DEFENSIVE PROGRAMMING - Graceful Degradation
    // If no recommendations available, component disappears cleanly
    // Prevents empty sections that would create poor user experience
    // Shows understanding of edge cases in recommendation systems
    if(randomProducts.length === 0){
        return null;
    }

    // COMPONENT COMPOSITION - Reusing ProductGrid
    // Demonstrates DRY (Don't Repeat Yourself) principles
    // ProductGrid handles all display logic, this component focuses on data logic
    // Clean separation of concerns between recommendation logic and presentation
    return (
        <ProductGrid products={randomProducts}/>
    );
}

// ARCHITECTURAL DECISIONS DEMONSTRATED:
// 1. Single Responsibility - Component only handles recommendation logic
// 2. Reusability - Uses existing ProductGrid for consistent presentation  
// 3. Business Logic - Implements smart filtering and randomization
// 4. Performance - Efficient array operations with proper immutability
// 5. User Experience - Handles edge cases gracefully
// 6. Code Consistency - Same shuffle algorithm across components

// FUTURE ENHANCEMENT OPPORTUNITIES:
// - Could accept recommendation count as prop for flexibility
// - Could implement more sophisticated recommendation algorithms (viewed together, purchased together)
// - Could add loading states for async recommendation fetching
// - Could implement A/B testing for different recommendation strategies

export default RecommendedGrids;