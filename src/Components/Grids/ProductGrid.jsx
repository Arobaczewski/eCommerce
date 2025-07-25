// ProductGrid.jsx - Reusable grid layout component for product display
// Demonstrates component composition, responsive design, and graceful empty state handling

import ProductCard from "../ProductCard";

// FLEXIBLE COMPONENT DESIGN
// Props destructuring for clean parameter handling
// Optional title prop makes this component reusable across different contexts
function ProductGrid({ products, title }) {

    return(
        <div className="py-8">
            {/* CONDITIONAL TITLE RENDERING */}
            {/* Using short-circuit evaluation for clean conditional rendering */}
            {/* Shows understanding of truthy/falsy evaluation in React */}
            {title && (
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                </div>
            )}
            
            {/* RESPONSIVE GRID LAYOUT */}
            {/* Mobile-first responsive design using Tailwind's breakpoint system */}
            {/* Strategic breakpoints chosen for optimal product viewing experience:
                - 1 column on mobile (phones) - prevents overcrowding on small screens
                - 2 columns on md (tablets) - balanced layout for medium screens  
                - 3 columns on lg (small laptops) - good use of horizontal space
                - 4 columns on xl (large screens) - maximizes large screen real estate */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* DYNAMIC PRODUCT RENDERING */}
                {/* Array.map() for efficient list rendering with proper key prop */}
                {/* Each product gets its own ProductCard component - separation of concerns */}
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

            {/* EMPTY STATE HANDLING - UX Best Practice */}
            {/* Prevents blank pages and provides helpful user feedback */}
            {/* Shows consideration for edge cases and user experience */}
            {products.length === 0 && (
                <div className="text-center py-12">
                    {/* Primary message with appropriate visual hierarchy */}
                    <div className="text-gray-400 text-lg">No products found</div>
                    {/* Secondary message with lighter styling for additional context */}
                    <p className="text-gray-500 mt-2">Check back soon for new items!</p>
                </div> 
            )}
        </div>
    );
}

// COMPONENT ARCHITECTURE NOTES:
// This component demonstrates several important React/development principles:
// 1. Single Responsibility - Only handles grid layout and display
// 2. Reusability - Can be used with any product array and optional title
// 3. Composition - Delegates individual product rendering to ProductCard
// 4. Responsive Design - Adapts to different screen sizes gracefully
// 5. Error Handling - Gracefully handles empty product arrays
// 6. Performance - Uses efficient map rendering with proper keys

export default ProductGrid;