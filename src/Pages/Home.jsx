// Home.jsx - Portfolio Landing Page with Strategic Personal Branding
// Demonstrates advanced React patterns, responsive design, and conversion-focused UX

import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';
import HomeGrids from "../Components/Grids/HomeGrids";

/**
 * HOME COMPONENT - Portfolio Landing Page Strategy
 * 
 * This component serves as both a functional e-commerce demo AND a strategic 
 * personal branding showcase. It demonstrates several key technical and 
 * business concepts that employers value:
 * 
 * TECHNICAL ARCHITECTURE:
 * - React Router integration for SPA navigation
 * - Component composition with reusable HomeGrids
 * - Responsive design with mobile-first approach
 * - Performance optimization through strategic component structure
 * 
 * UX/UI DESIGN PRINCIPLES:
 * - Conversion-focused landing page layout
 * - Progressive disclosure of information
 * - Clear visual hierarchy and call-to-action placement
 * - Accessibility considerations with semantic HTML
 * 
 * PERSONAL BRANDING STRATEGY:
 * - Storytelling through career transition narrative
 * - Social proof via experience metrics
 * - Technical credibility through portfolio showcase
 * - Clear value proposition for potential employers
 * 
 * BUSINESS UNDERSTANDING:
 * - E-commerce user flow patterns
 * - Marketing funnel implementation
 * - Conversion optimization techniques
 * - Customer journey mapping
 */
function Home() {
  return (
    <>
      {/* ========== HERO SECTION - FIRST IMPRESSIONS MATTER ========== */}
      {/*
       * HERO SECTION DESIGN STRATEGY
       * 
       * This hero section implements modern landing page best practices:
       * 
       * 1. VISUAL HIERARCHY: Large typography draws attention to key message
       * 2. SOCIAL PROOF: Portfolio badge establishes technical credibility
       * 3. STORYTELLING: "From Selling Technology to Building It" narrative
       * 4. DUAL CTA STRATEGY: Primary action (view work) + secondary (learn more)
       * 5. BACKGROUND PATTERNS: Subtle visual interest without distraction
       * 
       * The background gradient uses CSS transforms and blur effects to create
       * depth without impacting performance or accessibility.
       */}
      <div className="relative isolate overflow-hidden bg-white">
        
        {/* BACKGROUND DECORATION - Modern Visual Appeal */}
        {/* 
         * CSS TRANSFORM OPTIMIZATION:
         * - Uses transform-gpu for hardware acceleration
         * - Blur effects are positioned absolutely to avoid layout shifts
         * - Gradient overlays create depth without additional HTTP requests
         */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-400 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        {/* MAIN HERO CONTENT - Strategic Messaging */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-6 lg:px-8">
          <div className="text-center">
            
            {/* PORTFOLIO CREDIBILITY BADGE */}
            {/* 
             * TECHNICAL CREDIBILITY SIGNAL:
             * - Immediately establishes this as a technical portfolio
             * - Shows specific tech stack knowledge (React & Tailwind)
             * - Creates expectation of code quality and modern practices
             */}
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-indigo-700/10">
                <Code className="mr-2 h-4 w-4" />
                Portfolio Project - React & Tailwind CSS
              </span>
            </div>
            
            {/* PRIMARY HEADLINE - Career Transition Story */}
            {/* 
             * NARRATIVE STRATEGY:
             * - "From Selling Technology to Building It" tells complete career story
             * - Implies understanding of both business and technical sides
             * - Suggests customer-focused development approach
             * - Creates memorable personal brand positioning
             */}
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              From Selling Technology to Building It
            </h1>
            
            {/* VALUE PROPOSITION SUBTITLE */}
            {/* 
             * EXPERIENCE-TO-VALUE TRANSLATION:
             * - "8 years in retail tech taught me what users want" = UX understanding
             * - "Now I'm coding it myself" = technical capability demonstration
             * - "Welcome to my personal wishlist turned portfolio" = authenticity + creativity
             * 
             * This messaging strategy accomplishes multiple goals:
             * 1. Establishes credibility through experience
             * 2. Shows career transition narrative
             * 3. Explains the unique concept behind the site
             * 4. Creates memorable personal brand positioning
             */}
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              8 years in retail tech taught me what users want. Now I'm coding it myself. 
              Welcome to my personal wishlist turned portfolio.
            </p>
            
            {/* DUAL CALL-TO-ACTION STRATEGY */}
            {/* 
             * PRIMARY VS SECONDARY CTA DESIGN:
             * 
             * Primary CTA ("Explore the Collection"):
             * - Prominent indigo button with hover effects
             * - Includes arrow icon animation for engagement
             * - Direct path to showcase technical work
             * 
             * Secondary CTA ("Learn about my journey"):
             * - Text-based link with subtle styling
             * - Lower commitment option for relationship building
             * - Tells the personal story that makes this portfolio unique
             * 
             * This follows conversion optimization best practices:
             * - Clear visual hierarchy between actions
             * - Different commitment levels for different user types
             * - Both lead to valuable portfolio content
             */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/products"
                className="group rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
              >
                Explore the Collection
                {/* MICRO-INTERACTION: Arrow animation on hover enhances user engagement */}
                <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
              >
                Learn about my journey <span aria-hidden="true">→</span>
              </Link>
            </div>
            
            {/* SOCIAL PROOF METRICS - Portfolio Credibility Indicators */}
            {/* 
             * SOCIAL PROOF STRATEGY:
             * 
             * These metrics serve multiple psychological purposes:
             * 1. Demonstrates scope and completeness of the project
             * 2. Shows attention to detail and organization
             * 3. Reinforces the "personal wishlist" concept authenticity
             * 4. Creates curiosity to explore further
             * 
             * Technical Implementation:
             * - Grid layout ensures consistent spacing
             * - Backdrop blur creates modern glass effect
             * - Border styling adds subtle depth without distraction
             * - Numbers are large and bold for immediate impact
             */}
            <div className="mt-16 grid grid-cols-3 gap-4 text-center">
              
              {/* Product Count Metric */}
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-indigo-100">
                <div className="text-2xl font-bold text-gray-900">18</div>
                <div className="text-sm text-gray-600">Products Featured</div>
              </div>
              
              {/* Category Organization Metric */}
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-indigo-100">
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              
              {/* Authenticity Metric - Reinforces Personal Brand */}
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-indigo-100">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Personal Wishlist</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* BOTTOM DECORATION - Visual Balance */}
        {/* Mirror of top decoration for visual symmetry and brand consistency */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-400 to-indigo-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/* ========== FEATURED PRODUCTS SECTIONS - PORTFOLIO SHOWCASE ========== */}
      
      {/**
       * PRODUCT SHOWCASE STRATEGY
       * 
       * This section demonstrates several advanced concepts:
       * 
       * 1. COMPONENT REUSABILITY:
       *    - HomeGrids component used for each category
       *    - Consistent styling with parameterized content
       *    - DRY principle implementation
       * 
       * 2. INFORMATION ARCHITECTURE:
       *    - Clear category separation with visual hierarchy
       *    - Progressive disclosure (overview → category pages)
       *    - Intuitive navigation patterns
       * 
       * 3. CONVERSION OPTIMIZATION:
       *    - "View All" CTAs maintain user engagement
       *    - Category descriptions set expectations
       *    - Visual consistency builds trust
       * 
       * 4. TECHNICAL IMPLEMENTATION:
       *    - React Router Link components for SPA navigation
       *    - Responsive design with mobile considerations
       *    - Accessibility through semantic HTML structure
       */}
      <div className="bg-gray-50 py-16">
        
        {/* ========== APPAREL SECTION ========== */}
        
        {/**
         * CATEGORY SHOWCASE: APPAREL
         * 
         * Personal Branding Elements:
         * - "Sports jerseys from my favorite teams" = personality
         * - Shows authentic interests beyond just tech
         * - Demonstrates understanding of user-focused content organization
         * 
         * Technical Elements:
         * - Consistent section structure for maintainability
         * - Border-top creates visual separation without harsh lines
         * - Flexbox layout ensures proper alignment across screen sizes
         */}
        <section className="mb-16">
          <div className="container mx-auto px-6">
            
            {/* SECTION HEADER WITH VISUAL SEPARATOR */}
            <div className='border-t border-gray-200 pt-8'>
              <div className="flex items-center justify-between mb-6">
                
                {/* CATEGORY INFORMATION */}
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-2'>Shop Apparel</h2>
                  {/* Personality-driven description instead of generic copy */}
                  <p className="text-gray-600">Sports jerseys from my favorite teams</p>
                </div>
                
                {/* CATEGORY CTA WITH HOVER ANIMATION */}
                <Link 
                  to='/category/apparel' 
                  className='inline-flex items-center text-xl font-semibold text-indigo-600 hover:text-indigo-500 transition-colors group'
                >
                  View All
                  {/* Arrow animation enhances interactivity */}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* REUSABLE COMPONENT IMPLEMENTATION */}
          {/* HomeGrids component filters and displays products by category */}
          <HomeGrids category="Apparel" />
        </section>

        {/* ========== TECHNOLOGY SECTION ========== */}
        
        {/**
         * CATEGORY SHOWCASE: TECHNOLOGY
         * 
         * Strategic Messaging:
         * - "Latest gaming and computing hardware" = technical credibility
         * - Aligns with target developer roles
         * - Shows understanding of current tech trends
         */}
        <section className="mb-16">
          <div className="container mx-auto px-6">
            <div className='border-t border-gray-200 pt-8'>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-2'>Shop Tech</h2>
                  {/* Technical focus appeals to developer audience */}
                  <p className="text-gray-600">Latest gaming and computing hardware</p>
                </div>
                <Link 
                  to='/category/technology' 
                  className='inline-flex items-center text-xl font-semibold text-indigo-600 hover:text-indigo-500 transition-colors group'
                >
                  View All
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <HomeGrids category="Technology" />
        </section>

        {/* ========== MISCELLANEOUS SECTION ========== */}
        
        {/**
         * CATEGORY SHOWCASE: MISCELLANEOUS
         * 
         * Authenticity Reinforcement:
         * - "Home goods and collectibles I actually want"
         * - Reinforces the genuine personal wishlist concept
         * - Shows well-rounded personality beyond just tech interests
         */}
        <section className="mb-16">
          <div className="container mx-auto px-6">
            <div className='border-t border-gray-200 pt-8'>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-2'>Shop Everything Else</h2>
                  {/* Authenticity messaging creates memorable personal brand */}
                  <p className="text-gray-600">Home goods and collectibles I actually want</p>
                </div>
                <Link 
                  to='/category/misc' 
                  className='inline-flex items-center text-xl font-semibold text-indigo-600 hover:text-indigo-500 transition-colors group'
                >
                  View All
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <HomeGrids category="Misc" />
        </section>
      </div>

      {/* ========== PORTFOLIO CALL-TO-ACTION SECTION ========== */}
      
      {/**
       * TECHNICAL CREDIBILITY & HIRING CTA
       * 
       * This section serves multiple strategic purposes:
       * 
       * 1. TECHNICAL SHOWCASE:
       *    - Lists specific technologies used (React, Tailwind, React Router)
       *    - Emphasizes "built from scratch" to show foundational knowledge
       *    - "Every component is custom-designed" = attention to detail
       * 
       * 2. HIRING FUNNEL:
       *    - "Impressed by what you see?" = confidence in work quality
       *    - Dual CTAs for different employer preferences:
       *      * Personal story for culture fit assessment
       *      * GitHub for technical validation
       * 
       * 3. VISUAL DESIGN:
       *    - Full-width indigo background creates strong visual impact
       *    - High contrast text ensures readability
       *    - Button styling matches overall brand consistency
       * 
       * 4. ACCESSIBILITY:
       *    - Proper color contrast ratios
       *    - Semantic heading structure
       *    - Target="_blank" with rel="noopener noreferrer" for security
       */}
      <div className="bg-indigo-600">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            
            {/* CONFIDENCE-BUILDING HEADLINE */}
            <h2 className="text-3xl font-bold text-white mb-4">
              Impressed by what you see?
            </h2>
            
            {/* TECHNICAL CREDIBILITY STATEMENT */}
            {/* Lists specific technologies and emphasizes custom development */}
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              This entire site was built from scratch using React, Tailwind CSS, and React Router. 
              Every component is custom-designed and fully responsive.
            </p>
            
            {/* DUAL CTA STRATEGY FOR EMPLOYERS */}
            <div className="flex items-center justify-center gap-4">
              
              {/* PRIMARY CTA: Personal Story */}
              {/* White button stands out against indigo background */}
              <Link
                to="/about"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn About My Journey
              </Link>
              
              {/* SECONDARY CTA: Technical Validation */}
              {/* Border button maintains visual hierarchy while offering code access */}
              <a
                href="https://github.com/Arobaczewski"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View Code on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// ========== HOME COMPONENT ARCHITECTURE ANALYSIS ==========
//
// This Home component demonstrates mastery of several key concepts:
//
// 1. PERSONAL BRANDING EXCELLENCE:
//    - Unique "wishlist portfolio" concept differentiates from generic projects
//    - Career transition narrative creates memorable positioning
//    - Authentic personality elements (sports teams, gaming) humanize the developer
//    - Technical credibility balanced with personal authenticity
//
// 2. CONVERSION-FOCUSED UX DESIGN:
//    - Strategic placement of multiple CTAs with different commitment levels
//    - Social proof through project metrics
//    - Progressive disclosure from overview to detailed category pages
//    - Clear value proposition that appeals to tech employers
//
// 3. TECHNICAL IMPLEMENTATION:
//    - React Router for seamless SPA navigation
//    - Component reusability through HomeGrids pattern
//    - Responsive design with mobile-first approach
//    - Performance optimization through proper component structure
//    - Modern CSS techniques (backdrop-blur, gradients, transforms)
//
// 4. BUSINESS UNDERSTANDING:
//    - E-commerce user flow patterns
//    - Information architecture best practices
//    - Customer journey mapping from landing to detailed exploration
//    - Employer psychology in technical hiring decisions
//
// 5. ACCESSIBILITY & STANDARDS:
//    - Semantic HTML structure for screen readers
//    - Proper color contrast ratios
//    - Keyboard navigation support
//    - External link security with rel="noopener noreferrer"
//
// This demonstrates a developer who understands both technical implementation
// and strategic business/personal branding considerations - exactly what
// employers look for in modern web development roles.

export default Home;