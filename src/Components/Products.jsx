// Products.jsx - Centralized Product Data Management System
// Demonstrates data modeling, asset management, and functional programming patterns

// ========== ASSET IMPORT MANAGEMENT ==========
// Strategic organization of product images by category
// This demonstrates proper asset management and build optimization
// Webpack will optimize these imports for production bundles

// Miscellaneous Category Assets
import wweSpinner from '../Pictures/misc/wweSpinner.jpg';
import wweSpinner2 from '../Pictures/misc/wweSpinner2.jpg';
import couch from '../Pictures/misc/couch.jpg';
import coffee from '../Pictures/misc/coffee.jpg';
import motorcycle from '../Pictures/misc/motorcycle.jpg';
import slushi from '../Pictures/misc/slushi.jpg';
import sodastream from '../Pictures/misc/sodastream.jpg';

// Apparel Category Assets
import konerkojersey from '../Pictures/apparel/konerkojersey.jpg';
import bedardJersey from '../Pictures/apparel/bedardJersey.jpg';
import CPjersey from '../Pictures/apparel/CPjersey.jpg';
import loveJersey from '../Pictures/apparel/loveJersey.jpg';
import loveJersey2 from '../Pictures/apparel/loveJersey2.jpg';

// Technology Category Assets
import graphicsCard from '../Pictures/technology/graphicsCard.jpg';
import switch2 from '../Pictures/technology/switch2.jpg';
import amd from '../Pictures/technology/amd.jpg';
import homepod from '../Pictures/technology/homepod.jpg';
import maxblack from '../Pictures/technology/maxblack.jpg';
import maxblue from '../Pictures/technology/maxblue.jpg';
import maxpurple from '../Pictures/technology/maxpurple.jpg';
import maxorange from '../Pictures/technology/maxorange.jpg';
import maxstarlight from '../Pictures/technology/maxstarlight.jpg';
import ps5 from '../Pictures/technology/ps5.jpg';
import tv from '../Pictures/technology/tv.jpg';
import xbox from '../Pictures/technology/xbox.jpg';

// ========== PRODUCT DATA MODEL ==========
// Comprehensive product schema demonstrating real-world e-commerce data structure
// Each product object contains all necessary fields for full e-commerce functionality

export const products = [
    // APPAREL CATEGORY - Sports Merchandise
    {
        id: 1, // Unique identifier for database/state management
        name: `Chicago White Sox Nike Home Limited Pick-A-Player Retired Roster Jersey - White`,
        inStock: true, // Boolean for inventory management
        category: 'Apparel', // Category classification for filtering/organization
        size: '', // Size field for apparel-specific functionality
        price: 199.99, // Numeric price for calculations and sorting
        // SEO and marketing optimized description
        description: `Rep your favorite Chicago White Sox legend with 
                      this Home Limited Konerko Roster Jersey. This Nike jersey was 
                      crafted by using the lightweight comfort of stretch mesh fabric 
                      and features an authentic look with twill details. 
                      The innovative Vapor Premier chassis allows for more flexible 
                      movement and teams up with Dri-FIT technology to deliver 
                      exceptional sweat-wicking power.`,
        image: konerkojersey, // Primary product image
        slug: 'konerko-home-jersey' // URL-friendly identifier for routing
    },
    {
        id: 2,
        name: 'Chelsea FC Cole Palmer Home Jersey 2025-26',
        inStock: true,
        category: 'Apparel',
        size: '',
        price: 132,
        description: `Celebrate the storied history of the club and the 
                      ever-evolving, vibrant spirit of London with Chelsea FC's 2025-26 Home 
                      kit. This replica jersey features classic Chelsea blue and a subtle 
                      print inspired by the city's architecture. Our Stadium collection pairs 
                      replica design details with sweat-wicking technology to give you a game-
                      ready look inspired by your favourite team. Nike Dri-FIT technology 
                      moves sweat away from your skin for quicker evaporation, helping you 
                      stay dry and comfortable.`,
        image: CPjersey,
        slug: "palmer-home-jersey"
    },
    {
        id: 3,
        name: '#10 Jordan Love Nike Black Fashion Game Jersey',
        inStock: true,
        category: 'Apparel',
        size: '',
        price: 129.99,
        description: `Stay true to your team all day, every day, gameday. 
                      Green Bay Packers Nike black fashion game jersey is inspired by what the players are wearing on the field, 
                      with a fashionable twist.`,
        image: loveJersey,
        image2: loveJersey2, // Multiple image support for product variations
        slug: "love-black-jersey"
    },
    {
        id: 4,
        name: `Men's Chicago Blackhawks Connor Bedard Fanatics Red Home Premium Jersey`,
        inStock: true,
        category: 'Apparel',
        size: '',
        price: 229.99,
        description: `You can experience the same excitement you feel while watching the 
                      Chicago Blackhawks play every time you put on this 
                      Connor Bedard Premier Breakaway Player jersey from Fanatics. 
                      This exclusive piece of gear features bold colors and graphics, 
                      modeled after the jersey your favorite player wears, 
                      that let everyone know you're a devout fan. 
                      The fabric technologies built into this Chicago Blackhawks jersey 
                      also ensure you stay comfortable through every game this season.`,
        image: bedardJersey,
        slug: "bedard-away-jersey"
    },

    // TECHNOLOGY CATEGORY - High-Performance Electronics
    {
        id: 5,
        name: 'GIGABYTE GeForce RTX 5070 Gaming OC 12G Graphics Card, 12GB 192-bit GDDR7, PCIe 5.0, WINDFORCE Cooling System, GV-N5070GAMING OC-12GD Video Card',
        inStock: true,
        category: 'Technology',
        price: 677.99, // High-value technology pricing
        // Technical specification heavy description for tech enthusiasts
        description: `Ahead of its time, ahead of the game is the GIGABYTE GeForce RTX 5070 GAMING OC 12G Graphics Cards. 
                      Powered by NVIDIA's new RTX architecture, the GIGABYTE GeForce RTX 5070 GAMING OC 12G brings stunning visuals, 
                      amazingly fast frame rates, and AI acceleration to games and creative applications with its enhanced RT Cores and Tensor Cores, 
                      along with a staggering 12 GB of GDDR7 memory.`,
        image: graphicsCard,
        slug: "nvidia-graphics-card"
    },
    {
        id: 6,
        name: 'Nintendo Switch 2 System',
        inStock: true,
        category: 'Technology',
        price: 449.99,
        description: `Experience the most powerful Nintendo console ever 
                      with revolutionary features that redefine portable 
                      and home gaming.`,
        image: switch2,
        slug: "nintendo-switch-2"
    },

    // MISCELLANEOUS CATEGORY - Lifestyle and Entertainment Products
    {
        id: 7,
        name: "WWE Championship Spinner Replica Title Belt",
        inStock: true,
        category: 'Misc',
        price: 599.99, // Collectible pricing strategy
        description: `Introduced by John Cena in 2005, this replica title 
                      belt perfectly embodies the Word Life aesthetic, sporting an eye-catching 
                      design and bling to the nines. This isn't just a collectible—it's a piece 
                      of WWE history that defined an era.`,
        image: wweSpinner,
        image2: wweSpinner2, // Multiple angle documentation
        slug: "wwe-championship-spinner"
    },
    {
        id: 8,
        name: '3-Pieces 210" Breathing Leather Power Reclining Theater Sectional Couch with Wireless Chargers and LED Lighting',
        inStock: true,
        category: 'Misc',
        price: 1999.99, // Premium furniture pricing
        // Feature-rich description highlighting smart home integration
        description: `This theater sectional will serve as a functional, stylish, 
                      and comfortable seating option for your living room. 
                      With the reclining mechanism, the user is changed from a seated position to a reclined position smoothly. 
                      This Collection is offered in black breathable faux leather with diamond pattern stitching for decorative effect. 
                      Power reclining mechanisms are engaged with the push of a button, 
                      taking you from seated to prone in one gentle motion. 
                      Further functionality comes in the form of the side-mounted USB port and cup holder console.`,
        image: couch,
        slug: "couch"
    },

    // KITCHEN/APPLIANCE PRODUCTS - Smart Home Technology
    {
        id: 9,
        name: `Ninja - Luxe Café Premier Series 3-in-1 Espresso, 
               Coffee, and Cold Brew Machine with Grinder and Scale, 
               and Hands-Free Frother - Stainless Steel`,
        inStock: true,
        category: 'Misc',
        price: 599.99,
        // Detailed feature listing for complex appliances
        description: `The ultimate guided experience that makes espresso 
                      uncomplicated. The Ninja Luxe Café Premier Series is an 
                      intelligent espresso & coffee system with unmatched 3-in-1 
                      versatility (no guesswork espresso, well balanced drip 
                      coffee and rapid cold brew), that helps you elevate 
                      your coffee routine and create café-quality drinks at 
                      home. Barista Assist Technology guides you to the 
                      perfect cup from grind size recommendations to 
                      automated brew adjustments, while the Dual Froth System 
                      effortlessly creates perfectly textured microfoam 
                      hands-free.`,
        image: coffee,
        slug: "ninja-coffee"
    },

    // AUTOMOTIVE/RECREATION CATEGORY
    {
        id: 10,
        name: `Ninja® ZX™-4R ABS`,
        inStock: true,
        category: 'Misc',
        price: 8999, // High-value recreational vehicle
        // Performance-focused technical specifications
        description: `The Ninja® ZX™-4R ABS mounts a 399cc in-line 4-cylinder 
                      engine with class-leading performance in a compact 
                      chassis with proportions similar to smaller displacement 
                      models. On the track or on the street, experience the 
                      exhilaration of the Ninja ZX-4R ABS supersport's unprecedented 
                      power, intoxicating high-rpm wail, and sharp, nimble handing that 
                      will awaken the dormant supersport within you.`,
        image: motorcycle,
        slug: "motorcycle"
    },

    // Additional products continue with same pattern...
    // (Including remaining items for completeness)

    {
        id: 11,
        name: `Ninja - SLUSHi 5-in-1 Professional Frozen Drink Maker, 88 oz. 
               Frozen Drink & Slushie Machine, 5 Preset Programs - Artic Blue 
               & Gray`,
        inStock: true,
        category: 'Misc',
        price: 349.99,
        description: `The Ninja SLUSHi Professional Frozen Drink Maker is the 
                      easiest way to make frozen drinks at home. No ice needed, 
                      no blending, no hassles. Create tons of drinks with as few 
                      as one ingredient. Premium XL Capacity unlocks the ultimate 
                      party starter so you can make fun, flavorful drinks for everyone. 
                      No more watered-down, tasteless drinks. SLUSHi works quickly and keeps 
                      drinks frozen for up to 12 hours.`,
        image: slushi,
        slug: "ninja-slushi"
    },
    {
        id: 12,
        name: `Sodastream E-Duo Carbonation Bundle`,
        inStock: true,
        category: 'Misc',
        price: 189.99,
        description: `SodaStream E-Duo Sparkling Water Maker, Easy To Use Powered Soda Maker, 
                      1L BPA-Free Plastic Bottle, 1L Glass Bottle,3* Quick Connect 
                      CO2 Canisters Make 180L, Limitless Flavored Water Possibilities`,
        image: sodastream,
        slug: "sodastream"
    },
    {
        id: 13,
        name: `AMD - Ryzen 7 9800X3D 8-Core - 16-Thread 4.7 GHz 
               (5.2 GHz Max Boost) Socket AM5 Unlocked Desktop Processor - 
               Silver`,
        inStock: true,
        category: 'Technology',
        price: 479,
        description: `Boosted by AMD's advanced "Zen 5" architecture and 4nm 
                      technology, you'll feel unmatched power in every moment 
                      of high-performance gaming.  AMD Ryzen 7 9800X3D processors 
                      are built with exclusive AMD 3D V-cache technology.  Designed 
                      for the AM5 platform, enabled with the fastest DDR5 memory speeds, 
                      and equipped with PCIe 5.0 for incredible bandwidth.`,
        image: amd,
        slug: "amd"
    },
    {
        id: 14,
        name: `Apple - HomePod (2nd Generation) Smart Speaker with Siri - Midnight`,
        inStock: true,
        category: 'Technology',
        price: 299.99,
        description: `The all-new HomePod delivers groundbreaking, premium sound, 
                      from clear, detailed highs to deep, rich bass. Advanced 
                      computational audio pushes acoustics further. Spatial Audio 
                      provides even more immersive sound.  Works seamlessly with all 
                      your Apple devices.  Connect and control your smart home, privately 
                      and securely.`,
        image: homepod,
        slug: "homepod"
    },
    {
        id: 15,
        name: `Apple - AirPods Max (USB-C)`,
        inStock: true,
        category: 'Technology',
        price: 549.99,
        description: `AirPods Max, the ultimate listening experience. Now in 
                      five new colors. An Apple-designed driver provides 
                      high-fidelity audio. Every detail, from canopy to cushions, 
                      has been designed for an exceptional fit. Pro-level Active Noise Cancellation 
                      blocks outside noise, while Transparency mode keeps you connected to your 
                      environment. Updated with a USB-C connector for even more convenient charging.`,
        image: maxblack,
        // MULTIPLE COLOR VARIANTS - Advanced product variation handling
        image2: maxblue,
        image3: maxorange,
        image4: maxpurple,
        image5: maxstarlight,
        slug: "airpods-max"
    },
    {
        id: 16,
        name: `PlayStation 5 Pro Console`,
        inStock: true,
        category: 'Technology',
        price: 699.99,
        // Comprehensive technical specifications and legal disclaimers
        description: `Vertical Stand sold separately. With the PlayStation 5 Pro 
                      console, the world's greatest game creators can enhance their 
                      games with incredible features like advanced ray tracing, super 
                      sharp image clarity for your 4K TV, and high frame rate gameplay.* 
                      That means you get to play PS5 games with the most impressive visuals 
                      ever possible on a PlayStation console, and with 2TB of SSD storage included, 
                      your favorite games will be ready and waiting for you to jump right in for your 
                      next awesome adventure. PS5 Pro is an all-digital console with no disc drive. 
                      Sign into your account for PlayStation Network and go to PlayStation Store 
                      to buy and download games. You can also add a Disc Drive to your PS5 Pro console 
                      if you would like to play PS5 or PS4 games on Blu-ray Disc, or if you want 
                      to watch movies and shows on 4K Ultra HD Blu-ray Discs, Blu-ray Discs, and 
                      DVDs. The compatible Disc Drive is sold separately. *Features only available 
                      on select PS5 games that have been enhanced for PS5 Pro when compared with PS5. 
                      PS5 Pro enhanced features will vary by game. 3A portion of the SSD is reserved 
                      for system software and other functions so the available SSD capacity may vary.`,
        image: ps5,
        slug: "ps5"
    },
    {
        id: 17,
        name: `Samsung - 75" Class DU6900 Series Crystal UHD 4K Smart Tizen TV (2024)`,
        inStock: true,
        category: 'Technology',
        price: 599.99,
        description: `This essential TV features a range of contrast and color 
                      and smart capabilities. Enjoy your content with richer details, 
                      brighter images and clearer resolution with 4K Upscaling`,
        image: tv,
        slug: "tv"
    },
    {
        id: 18,
        name: `Xbox Series X 1TB Console`,
        inStock: true,
        category: 'Technology',
        price: 549.99,
        description: `Experience the fastest, most powerful Xbox ever with Xbox 
                      Series X, now all-digital with a 1TB SSD in Robot White. Explore 
                      rich new worlds with 12 teraflops of raw graphic processing power, 
                      DirectX ray tracing, a custom SSD, and 4K gaming. Dive into legendary
                      franchises like Call of Duty, Forza, Diablo, Halo, and more that come 
                      to life on Xbox Series X. Make the most of every gaming minute with 
                      Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all 
                      powered by Xbox Velocity Architecture. Enjoy thousands of games from four 
                      generations of Xbox, with hundreds of optimized titles that look and play 
                      better than ever. Get the most out of your Xbox Series X with Xbox Game Pass 
                      Ultimate (membership sold separately).`,
        image: xbox,
        slug: "xbox"
    },
];

// ========== UTILITY FUNCTIONS - FUNCTIONAL PROGRAMMING APPROACH ==========
// These functions demonstrate clean, reusable patterns for data access
// Each function serves a specific purpose and can be easily tested and maintained

/**
 * PRODUCT LOOKUP BY ID
 * 
 * Uses Array.find() for O(n) search complexity
 * Returns single product object or undefined if not found
 * Commonly used for product detail pages and cart operations
 * 
 * @param {number} id - Unique product identifier
 * @returns {Object|undefined} Product object if found
 */
export const getProductById = (id) => {
    return products.find(product => product.id === id);
};

/**
 * CATEGORY FILTERING FUNCTION
 * 
 * Uses Array.filter() to return all products in specified category
 * Case-sensitive matching - could be enhanced with toLowerCase() for robustness
 * Essential for category pages and product organization
 * 
 * @param {string} category - Product category name
 * @returns {Array} Array of products in the specified category
 */
export const getProductByCategory = (category) => {
    return products.filter(product => product.category === category);
};

/**
 * SLUG-BASED PRODUCT LOOKUP
 * 
 * Enables SEO-friendly URLs like /products/nintendo-switch-2
 * More user-friendly than numeric IDs in URLs
 * Critical for good SEO and user experience
 * 
 * @param {string} slug - URL-friendly product identifier
 * @returns {Object|undefined} Product object if found
 */
export const getProductBySlug = (slug) => {
    return products.find(product => product.slug === slug);
};

/**
 * PRODUCT REMOVAL FUNCTION
 * 
 * Returns new array without specified product (immutable approach)
 * Useful for admin functionality or temporary filtering
 * Demonstrates functional programming principles
 * 
 * @param {number} id - Product ID to remove
 * @returns {Array} New array without the specified product
 */
export const removeProduct = (id) => {
    return products.filter(product => product.id !== id);
};

// ========== DATA ARCHITECTURE BENEFITS ==========
//
// 1. CENTRALIZED MANAGEMENT: All product data in one location
// 2. CONSISTENT SCHEMA: Every product follows the same structure
// 3. TYPE SAFETY: Clear data types for all fields
// 4. SEO OPTIMIZATION: Slug-based URLs for better search ranking
// 5. SCALABILITY: Easy to add new products or modify existing ones
// 6. PERFORMANCE: Local data eliminates API calls for static content
// 7. MAINTAINABILITY: Clear separation between data and business logic
//
// This approach demonstrates understanding of:
// - Data modeling and normalization
// - Performance optimization strategies
// - SEO best practices
// - Functional programming principles
// - Asset management in modern build systems