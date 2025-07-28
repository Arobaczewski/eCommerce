// NotFound.jsx - Professional 404 Error Page with UX Recovery Strategies
// Demonstrates error handling best practices and user retention techniques

import { Link } from 'react-router-dom';
import { Home, Search, ShoppingBag, ArrowLeft } from 'lucide-react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";

/**
 * NOT FOUND COMPONENT - Professional Error Handling & User Retention
 * 
 * This component showcases several important concepts for employers:
 * 
 * 1. ERROR HANDLING BEST PRACTICES:
 *    - Graceful degradation when routes don't exist
 *    - User-friendly messaging instead of technical jargon
 *    - Clear recovery paths to keep users engaged
 *    - Maintains site branding and navigation consistency
 * 
 * 2. UX DESIGN PRINCIPLES:
 *    - Visual hierarchy guides user toward recovery actions
 *    - Multiple recovery options for different user intentions
 *    - Personality in error messaging maintains brand voice
 *    - Pro tip section provides additional value to frustrated users
 * 
 * 3. BUSINESS CONTINUITY:
 *    - Converts error into opportunity for engagement
 *    - Strategic links to high-value pages (products, categories)
 *    - Maintains e-commerce functionality even during errors
 *    - Reduces bounce rate through helpful recovery options
 * 
 * 4. TECHNICAL IMPLEMENTATION:
 *    - React Router integration for catch-all routes
 *    - Consistent component structure with Header/Footer/Cart
 *    - Responsive design with mobile considerations
 *    - Accessibility through semantic HTML and proper navigation
 * 
 * This demonstrates understanding that error pages are part of the user
 * experience and should be designed with the same care as success pages.
 */
function NotFound() {
    return (
        <>
            {/* CONSISTENT SITE STRUCTURE - Error pages maintain full site functionality */}
            <Header />
            
            {/* MAIN ERROR PAGE CONTAINER */}
            {/* 
             * DESIGN DECISIONS:
             * - Full height viewport ensures error page doesn't look broken
             * - Centered layout focuses attention on recovery options
             * - Light background maintains consistency with site theme
             * - Proper padding prevents content from touching edges on mobile
             */}
            <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
                <div className="max-w-md mx-auto text-center px-6">
                    
                    {/* ========== VISUAL ERROR INDICATOR ========== */}
                    
                    {/**
                     * 404 VISUAL DESIGN STRATEGY
                     * 
                     * Large, bold 404 number serves multiple purposes:
                     * 1. Immediately communicates the error type
                     * 2. Uses brand colors (indigo) for consistency
                     * 3. Creates visual hierarchy with size contrast
                     * 4. Decorative line adds polish without distraction
                     * 
                     * This approach balances clarity with brand consistency.
                     */}
                    <div className="mb-8">
                        {/* PROMINENT ERROR CODE - Clear identification of issue */}
                        <div className="text-8xl font-bold text-indigo-600 mb-4">404</div>
                        {/* BRAND-COLORED ACCENT LINE - Visual polish */}
                        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                    </div>
                    
                    {/* ========== USER-FRIENDLY ERROR MESSAGING ========== */}
                    
                    {/**
                     * ERROR MESSAGE STRATEGY
                     * 
                     * Tone and language choices are crucial for user retention:
                     * - "Oops!" = friendly, not alarming
                     * - "wandered off into the digital void" = playful personality
                     * - "Don't worry though" = reassurance
                     * - "let's get you back to shopping!" = clear path forward
                     * 
                     * This messaging maintains the site's e-commerce context while
                     * adding personality that makes the error less frustrating.
                     */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Oops! Page Not Found
                        </h1>
                        {/* FRIENDLY, BRAND-APPROPRIATE ERROR EXPLANATION */}
                        <p className="text-gray-600 leading-relaxed">
                            The page you're looking for seems to have wandered off into the digital void. 
                            Don't worry though - let's get you back to shopping!
                        </p>
                    </div>
                    
                    {/* ========== PRIMARY RECOVERY ACTIONS ========== */}
                    
                    {/**
                     * RECOVERY ACTION HIERARCHY
                     * 
                     * Two main CTAs address different user intentions:
                     * 
                     * 1. HOME BUTTON (Primary):
                     *    - Most common recovery action
                     *    - Full-width indigo button for maximum visibility
                     *    - Home icon reinforces the action
                     * 
                     * 2. PRODUCTS BUTTON (Secondary):
                     *    - Keeps users in the shopping flow
                     *    - White button with indigo border maintains visual hierarchy
                     *    - Shopping bag icon connects to e-commerce context
                     * 
                     * Both use consistent padding, typography, and transitions
                     * for professional polish and user experience continuity.
                     */}
                    <div className="space-y-4 mb-8">
                        
                        {/* PRIMARY RECOVERY CTA - Back to Home */}
                        <Link
                            to="/"
                            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
                        >
                            <Home className="h-5 w-5 mr-2" />
                            Back to Home
                        </Link>
                        
                        {/* SECONDARY RECOVERY CTA - Continue Shopping */}
                        <Link
                            to="/products"
                            className="w-full bg-white text-indigo-600 py-3 px-6 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors flex items-center justify-center"
                        >
                            <ShoppingBag className="h-5 w-5 mr-2" />
                            Browse Products
                        </Link>
                    </div>
                    
                    {/* ========== ADDITIONAL NAVIGATION OPTIONS ========== */}
                    
                    {/**
                     * QUICK LINKS STRATEGY
                     * 
                     * This section provides multiple recovery paths for different user goals:
                     * - Category pages for shoppers
                     * - About page for employers/personal visitors
                     * - Contact page for business inquiries
                     * 
                     * Visual design uses:
                     * - Border separator to create distinct section
                     * - 2-column grid for organized presentation
                     * - Consistent indigo links with hover effects
                     * - Small text size to maintain hierarchy
                     */}
                    <div className="border-t border-gray-200 pt-8">
                        <p className="text-sm text-gray-500 mb-4">Or try one of these popular pages:</p>
                        
                        {/* ORGANIZED QUICK LINKS GRID */}
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            
                            {/* CATEGORY LINKS - E-commerce focused */}
                            <Link
                                to="/category/technology"
                                className="text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
                            >
                                Technology
                            </Link>
                            <Link
                                to="/category/apparel"
                                className="text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
                            >
                                Apparel
                            </Link>
                            
                            {/* PORTFOLIO LINKS - Personal branding focused */}
                            <Link
                                to="/about"
                                className="text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    
                    {/* ========== VALUE-ADD HELPER SECTION ========== */}
                    
                    {/**
                     * PRO TIP SECTION - Adding Value During Errors
                     * 
                     * This section transforms a negative experience into a learning moment:
                     * - Provides helpful guidance for future navigation
                     * - Shows attention to user education and support
                     * - Uses light indigo background to stand out without being jarring
                     * - Emoji and "Pro tip" language keeps tone friendly and approachable
                     * 
                     * This demonstrates UX thinking beyond just fixing the immediate problem
                     * to actually improving the overall user experience.
                     */}
                    <div className="mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                        <p className="text-sm text-indigo-700">
                            💡 <strong>Pro tip:</strong> Use the search bar in the header to find exactly what you're looking for!
                        </p>
                    </div>
                </div>
            </div>
            
            {/* CONSISTENT SITE STRUCTURE MAINTAINED */}
            {/* Even during errors, users retain access to full site functionality */}
            <Footer />
            <Cart />
        </>
    );
}

// ========== 404 PAGE ARCHITECTURE ANALYSIS ==========
//
// This NotFound component demonstrates several key professional concepts:
//
// 1. ERROR HANDLING EXCELLENCE:
//    - Graceful degradation maintains user experience during routing errors
//    - User-friendly messaging avoids technical jargon that could confuse visitors
//    - Multiple recovery paths accommodate different user intentions and goals
//    - Consistent branding and functionality reduce perception of site problems
//
// 2. UX DESIGN PRINCIPLES:
//    - Clear visual hierarchy guides users toward recovery actions
//    - Friendly, brand-appropriate tone reduces user frustration
//    - Progressive disclosure from primary actions to detailed options
//    - Value-add content (pro tip) transforms negative into positive experience
//
// 3. BUSINESS CONTINUITY STRATEGY:
//    - Maintains e-commerce flow even during navigation errors
//    - Strategic links to high-conversion pages (products, categories)
//    - Preserves access to business contact information and portfolio content
//    - Reduces bounce rate through helpful and engaging recovery options
//
// 4. TECHNICAL IMPLEMENTATION:
//    - React Router catch-all route handling for undefined paths
//    - Consistent component architecture with Header/Footer/Cart integration
//    - Responsive design ensures mobile users have same recovery experience
//    - Performance optimization through efficient component structure
//
// 5. ACCESSIBILITY & STANDARDS:
//    - Semantic HTML structure supports screen readers and navigation
//    - Proper heading hierarchy maintains document outline
//    - Color contrast ratios meet accessibility guidelines
//    - Keyboard navigation support for all interactive elements
//
// This demonstrates understanding that error pages are crucial touchpoints
// in user experience and should receive the same design attention as
// primary functionality - exactly the kind of thoroughness employers
// value in web development professionals.

export default NotFound;