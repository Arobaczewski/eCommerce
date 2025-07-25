// Dropdown.jsx - Advanced CSS-only dropdown navigation component
// Demonstrates modern CSS techniques, accessibility principles, and smooth animations

import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function Dropdown() {
  return (
    // HOVER-BASED DROPDOWN CONTAINER
    // Using CSS :hover pseudo-class via Tailwind's group functionality
    // This approach avoids JavaScript state management for simple interactions
    // Performance benefit: No re-renders on hover, pure CSS transitions
    <div className="relative inline-block text-left group">
      
      {/* DROPDOWN TRIGGER BUTTON */}
      {/* Visual design: Uses flexbox for perfect icon/text alignment */}
      {/* Accessibility: Cursor pointer indicates interactive element */}
      <div className="inline-flex items-center gap-x-1.5 font-medium text-white cursor-pointer">
        Products
        {/* ANIMATED CHEVRON ICON */}
        {/* Sophisticated animation: 180-degree rotation on hover */}
        {/* aria-hidden="true" prevents screen readers from announcing decorative icon */}
        {/* Smooth transition using duration-200 for premium feel */}
        <ChevronDown 
          aria-hidden="true" 
          className="size-5 transition-transform duration-200 group-hover:rotate-180" 
        />
      </div>

      {/* DROPDOWN MENU CONTAINER */}
      {/* Advanced CSS animation using opacity, visibility, and transform */}
      {/* Initial state: invisible and slightly scaled down for smooth entrance effect */}
      {/* z-50 ensures dropdown appears above other content */}
      {/* origin-top-right sets transform origin for natural scaling animation */}
      <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform scale-95 group-hover:scale-100">
        
        {/* MENU CONTENT WRAPPER */}
        {/* Padding provides comfortable spacing around menu items */}
        <div className="py-1">
          
          {/* PRIMARY NAVIGATION ITEM - "View All" */}
          {/* Design decision: Larger font and bold weight to emphasize main action */}
          {/* React Router Link for SPA navigation without page refreshes */}
          {/* Hover states provide clear interactive feedback */}
          <Link 
            to='/products'
            className="block px-4 py-2 font-bold text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            View All
          </Link>
          
          {/* CATEGORY NAVIGATION ITEMS */}
          {/* Consistent styling with smaller font to create visual hierarchy */}
          {/* Each category gets its own route for deep linking and SEO benefits */}
          <Link 
            to='/category/apparel'
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            Apparel
          </Link>
          
          <Link 
            to='/category/technology'
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            Technology
          </Link>
          
          <Link 
            to='/category/misc'
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            Misc
          </Link>
        </div>
      </div>
    </div>
  );
}

// DESIGN DECISIONS AND TECHNICAL BENEFITS:
// 
// 1. CSS-ONLY INTERACTION: No JavaScript state management needed for simple hover behavior
//    - Better performance (no re-renders)
//    - Simpler component logic
//    - Works even if JavaScript fails
//
// 2. TAILWIND GROUP MODIFIER: Elegant parent-child hover relationships
//    - group on parent enables group-hover: on children
//    - Creates sophisticated interactions with minimal code
//
// 3. SMOOTH ANIMATIONS: Multiple transition properties for polished UX
//    - Chevron rotation provides visual feedback
//    - Opacity + visibility + scale creates smooth entrance/exit
//    - ease-in-out timing function feels natural
//
// 4. ACCESSIBILITY CONSIDERATIONS:
//    - aria-hidden on decorative icon
//    - Semantic Link components for proper navigation
//    - High contrast colors for readability
//
// 5. RESPONSIVE POSITIONING: 
//    - absolute positioning with right-0 prevents overflow on mobile
//    - Fixed width (w-56) ensures consistent layout
//    - Proper z-index layering prevents visual conflicts

export default Dropdown;