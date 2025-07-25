import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { ExternalLink, Github, Linkedin, Code, Trophy, Target, CheckCircle, Zap } from 'lucide-react';
import Cart from '../Components/Cart';

function About() {
    return (
        <>
            <Header />
            <div className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
                    <div className="container mx-auto px-6 py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Hey, I'm Alexander Robaczewski
                            </h1>
                            <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed">
                                Career-changer turning 8+ years of tech sales experience into full-stack development expertise
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-6 py-12">
                    <div className="max-w-4xl mx-auto">
                        
                        {/* Why This Site Exists */}
                        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <Target className="mr-3 text-indigo-600" />
                                Why This Site Exists
                            </h2>
                            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    After years of selling technology at AT&T and Verizon (including management roles), 
                                    I realized I loved the tech but hated the sales pressure. So I quit Verizon in 
                                    November 2023, determined to find my place in the tech world.
                                </p>
                                <p>
                                    What followed was months of exploration – trying cybersecurity, networking, basic IT – 
                                    but nothing clicked. Eventually, financial reality hit, and I took a position at a 
                                    retail cannabis store in June 2024. But the tech dream never died.
                                </p>
                                <p className="font-semibold text-indigo-600">
                                    In March 2025, I finally found my answer: coding. I enrolled in Codecademy's full-stack 
                                    development course and immediately knew this was it. Time to build things instead of just selling them.
                                </p>
                            </div>
                        </section>

                        {/* Personal Story */}
                        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Personal Touch</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                This ecommerce site isn't just a portfolio piece – it's a collection of items I genuinely want. 
                                Every product here tells a story about who I am:
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-6 mt-6">
                                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                                    <h3 className="font-bold text-gray-900 mb-2">🏆 The Sports Fan</h3>
                                    <p className="text-gray-700 text-sm">
                                        Chicago born and raised, but I'm a rebel – White Sox over Cubs, 
                                        Packers over Bears. Chelsea has been my soccer team since childhood, 
                                        and yes, I still watch WWE.
                                    </p>
                                </div>
                                
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-2">💻 The Tech Enthusiast</h3>
                                    <p className="text-gray-700 text-sm">
                                        That Nintendo Switch 2 and RTX 5070? Not placeholder products – 
                                        these are on my actual wishlist. I've always needed to know about the latest tech.
                                    </p>
                                </div>
                                
                                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                                    <h3 className="font-bold text-gray-900 mb-2">🎯 The Real Person</h3>
                                    <p className="text-gray-700 text-sm">
                                        The championship belt, motorcycle, theater sectional – these represent real wants and needs, 
                                        making this project authentic rather than generic.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Technical Skills Deep Dive */}
                        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <Code className="mr-3 text-indigo-600" />
                                Technical Skills Mastered
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Building this full-featured ecommerce site has been a comprehensive learning experience. 
                                Here's everything I've implemented from scratch:
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* React Fundamentals */}
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                        <Zap className="mr-2 text-blue-500" size={20} />
                                        React Fundamentals
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>useState & useEffect:</strong> Managing component state, side effects, and lifecycle events
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>useContext:</strong> Global state management for cart, favorites, and checkout data
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>useRef:</strong> DOM manipulation and focus management in search functionality
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Conditional Rendering:</strong> Dynamic UI based on state (cart empty/full, loading states, error handling)
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Advanced Features */}
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                        <Trophy className="mr-2 text-purple-500" size={20} />
                                        Advanced Features
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Dynamic Routing:</strong> useParams() for product detail pages with SEO-friendly slugs
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Advanced Filtering:</strong> Real-time search, category filtering, and multi-option sorting
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Complex Forms:</strong> Multi-step checkout with validation, size selection, and email integration
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Email Integration:</strong> EmailJS for contact forms and order confirmations
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* UI/UX & Design */}
                                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                        <Code className="mr-2 text-green-500" size={20} />
                                        UI/UX & Styling
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Tailwind CSS:</strong> Utility-first responsive design with custom components
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Mobile-First Design:</strong> Fully responsive across all device sizes
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Interactive Elements:</strong> Hover effects, animations, and smooth transitions
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Accessibility:</strong> Semantic HTML, ARIA labels, and keyboard navigation
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Data Management */}
                                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                        <Target className="mr-2 text-orange-500" size={20} />
                                        Data & Logic
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Complex State Management:</strong> Cart persistence, favorites tracking, and checkout flow
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Data Modeling:</strong> Product schemas, user inputs, and relational data structures
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Error Handling:</strong> Graceful fallbacks and user feedback for edge cases
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong>Performance Optimization:</strong> Efficient re-renders and component optimization
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Specific Implementation Examples */}
                        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Implementation Examples</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Here are specific features I built that demonstrate these skills in action:
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                                        <h4 className="font-semibold text-gray-900 mb-2">🛒 Smart Shopping Cart</h4>
                                        <p className="text-sm text-gray-700">
                                            useContext for global state, quantity management with useState, 
                                            conditional rendering for empty/full states, and localStorage persistence.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                        <h4 className="font-semibold text-gray-900 mb-2">🔍 Advanced Search & Filter</h4>
                                        <p className="text-sm text-gray-700">
                                            Real-time filtering with useEffect, useRef for search input focus, 
                                            multiple state variables for complex filtering logic.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                        <h4 className="font-semibold text-gray-900 mb-2">📧 Contact & Checkout Forms</h4>
                                        <p className="text-sm text-gray-700">
                                            Multi-step forms with validation, controlled components, 
                                            EmailJS integration, and error handling with loading states.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                        <h4 className="font-semibold text-gray-900 mb-2">🎯 Dynamic Product Pages</h4>
                                        <p className="text-sm text-gray-700">
                                            useParams() for slug-based routing, conditional rendering for different 
                                            product types, size selection with useState, and breadcrumb navigation.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                        <h4 className="font-semibold text-gray-900 mb-2">❤️ Favorites System</h4>
                                        <p className="text-sm text-gray-700">
                                            useContext for persistent favorites, conditional rendering for heart states, 
                                            array manipulation for add/remove functionality.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                                        <h4 className="font-semibold text-gray-900 mb-2">📱 Responsive Design</h4>
                                        <p className="text-sm text-gray-700">
                                            Mobile-first Tailwind implementation, conditional styling based on screen size, 
                                            touch-friendly interface with proper spacing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Learning Process */}
                        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Learning Process</h2>
                            <div className="bg-gradient-to-r from-indigo-50 to-gray-50 p-6 rounded-lg border border-indigo-100">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    This project took about three weeks of intensive development, but more importantly, 
                                    it represents hundreds of hours of research, debugging, and iteration. Every feature 
                                    taught me something new:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">🧠 Problem-Solving Skills</h4>
                                        <p className="text-sm text-gray-700">
                                            Debugging React hooks, managing complex state interactions, 
                                            and troubleshooting CSS layout issues.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">📚 Documentation Reading</h4>
                                        <p className="text-sm text-gray-700">
                                            Became proficient at reading React docs, Tailwind documentation, 
                                            and third-party library guides.
                                        </p>
                                    </div>
                                </div>
                                <p className="font-semibold text-indigo-600 mt-4">
                                    Next up: Adding PostgreSQL, Node.js, and Express to create a full-stack application 
                                    with real backend functionality, user authentication, and database persistence.
                                </p>
                            </div>
                        </section>

                        {/* Why I'm Different */}
                        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why I'm Different</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="border-l-4 border-indigo-500 pl-4">
                                        <h3 className="font-semibold text-gray-900">Real-world Experience</h3>
                                        <p className="text-gray-700 text-sm">
                                            8+ years of customer-facing roles, team leadership, and working in fast-paced tech environments 
                                            means I understand user needs and business requirements.
                                        </p>
                                    </div>
                                    
                                    <div className="border-l-4 border-indigo-400 pl-4">
                                        <h3 className="font-semibold text-gray-900">Genuine Passion</h3>
                                        <p className="text-gray-700 text-sm">
                                            I didn't stumble into coding – I actively sought it out after trying other tech paths. 
                                            This is exactly where I want to be.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="border-l-4 border-gray-500 pl-4">
                                        <h3 className="font-semibold text-gray-900">Rapid Learning Ability</h3>
                                        <p className="text-gray-700 text-sm">
                                            Built this entire application in 3 weeks while learning React, Tailwind, 
                                            and advanced JavaScript concepts from scratch.
                                        </p>
                                    </div>
                                    
                                    <div className="border-l-4 border-indigo-600 pl-4">
                                        <h3 className="font-semibold text-gray-900">Business-Minded Developer</h3>
                                        <p className="text-gray-700 text-sm">
                                            Management experience means I think about user experience, project timelines, 
                                            and how technical decisions impact business goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Let's Connect */}
                        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg p-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Let's Connect</h2>
                            <p className="text-center text-indigo-100 mb-8 leading-relaxed">
                                I'm actively seeking opportunities in front-end development, React development, or any role 
                                where I can contribute while continuing to grow my full-stack capabilities.
                            </p>
                            
                            {/* Portfolio Projects */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4 text-center">Portfolio Projects</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <div className="font-semibold mb-2">🛒 This Ecommerce Site</div>
                                        <div className="text-sm text-indigo-100 mb-2">
                                            Full-featured React app with cart, favorites, filtering, and checkout
                                        </div>
                                        <div className="text-xs text-indigo-200">
                                            React • Tailwind • EmailJS • Context API
                                        </div>
                                    </div>
                                    
                                    <a 
                                        href="https://ayrtips.netlify.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
                                    >
                                        <div className="flex items-center mb-2">
                                            <ExternalLink className="mr-2" size={16} />
                                            <div className="font-semibold">Tip Calculator</div>
                                        </div>
                                        <div className="text-sm text-indigo-100 mb-2">Clean, responsive utility app</div>
                                        <div className="text-xs text-indigo-200 pt-5">
                                            JavaScript • CSS • HTML
                                        </div>
                                    </a>
                                    
                                    <a 
                                        href="https://weatherbeatz.netlify.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
                                    >
                                        <div className="flex items-center mb-2">
                                            <ExternalLink className="mr-2" size={16} />
                                            <div className="font-semibold">Spotify Weather App</div>
                                        </div>
                                        <div className="text-sm text-indigo-100 mb-2">Music recommendations based on weather</div>
                                        <div className="text-xs text-indigo-200">
                                            JavaScript • CSS • Spotify • OpenWeather
                                        </div>
                                    </a>
                                </div>
                            </div>
                            
                            {/* Social Links */}
                            <div className="flex justify-center space-x-6">
                                <a 
                                    href="https://www.linkedin.com/in/alexander-robaczewski/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
                                >
                                    <Linkedin className="mr-2" size={20} />
                                    LinkedIn
                                </a>
                                
                                <a 
                                    href="https://github.com/Arobaczewski" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
                                >
                                    <Github className="mr-2" size={20} />
                                    GitHub
                                </a>
                            </div>
                            
                            <p className="text-center text-indigo-100 mt-6">
                                Thanks for checking out my work – and yes, I really do want all these products! 😄
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
            <Cart/>
        </>
    );
}

export default About;