import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { ExternalLink, Github, Linkedin, Code, Trophy, Target } from 'lucide-react';

function About() {
    return (
        <>
            <Header />
            <div className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                    <div className="container mx-auto px-6 py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Hey, I'm Alexander Robaczewski
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                                Career-changer turning 8+ years of tech sales experience into web development passion
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
                                <Target className="mr-3 text-blue-600" />
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
                                <p className="font-semibold text-blue-600">
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
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">🏆 The Sports Fan</h3>
                                    <p className="text-gray-700 text-sm">
                                        Chicago born and raised, but I'm a rebel – White Sox over Cubs, 
                                        Packers over Bears. Chelsea has been my soccer team since childhood, 
                                        and yes, I still watch WWE.
                                    </p>
                                </div>
                                
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">💻 The Tech Enthusiast</h3>
                                    <p className="text-gray-700 text-sm">
                                        That Nintendo Switch 2 and RTX 5070? Not placeholder products – 
                                        these are on my actual wishlist. I've always needed to know about the latest tech.
                                    </p>
                                </div>
                                
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">🎯 The Real Person</h3>
                                    <p className="text-gray-700 text-sm">
                                        The couch, motorcycle, theater sectional – these represent real wants and needs, 
                                        making this project authentic rather than generic.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Technical Journey */}
                        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <Code className="mr-3 text-blue-600" />
                                The Technical Journey
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Building this site has been a masterclass in learning by doing. I'm currently working 
                                through Codecademy's full-stack development course, and this project represents my first major React application.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Mastered</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                            <strong>React & JavaScript</strong> - Component architecture, state management
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                            <strong>Tailwind CSS</strong> - First time using it, total game-changer
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                            <strong>React Router</strong> - useParams(), slugs, dynamic routing
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                            <strong>Responsive Design</strong> - Mobile-first, professional layouts
                                        </li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Features I'm Proud Of</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center text-gray-700">
                                            <Trophy className="w-4 h-4 mr-3 text-yellow-500" />
                                            <strong>Dynamic Product Cards</strong> - Auto-generating content from data
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <Trophy className="w-4 h-4 mr-3 text-yellow-500" />
                                            <strong>Category Filtering</strong> - Reusable, scalable system
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <Trophy className="w-4 h-4 mr-3 text-yellow-500" />
                                            <strong>Professional UI/UX</strong> - Clean, modern interface
                                        </li>
                                    </ul>
                                    
                                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                                        <p className="text-sm text-gray-700">
                                            <strong>The Challenge:</strong> Styling has been my nemesis! But that's exactly 
                                            why I started with front-end – to get comfortable being uncomfortable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* What's Next */}
                        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Next</h2>
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    This project took about two weeks (minus some 4th of July downtime), but I'm far from done. 
                                    Next up: adding PostgreSQL and Node.js to create a full-stack application with real backend 
                                    functionality and database integration.
                                </p>
                                <p className="font-semibold text-blue-600">
                                    The plan is simple: keep learning, keep building, keep getting better until I'm undeniable.
                                </p>
                            </div>
                        </section>

                        {/* Why I'm Different */}
                        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why I'm Different</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <h3 className="font-semibold text-gray-900">Real-world Experience</h3>
                                        <p className="text-gray-700 text-sm">
                                            10+ years of customer-facing roles, team leadership, and working in fast-paced tech environments.
                                        </p>
                                    </div>
                                    
                                    <div className="border-l-4 border-green-500 pl-4">
                                        <h3 className="font-semibold text-gray-900">Genuine Passion</h3>
                                        <p className="text-gray-700 text-sm">
                                            I spent months after leaving Verizon trying different tech paths, but nothing resonated like coding.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="border-l-4 border-purple-500 pl-4">
                                        <h3 className="font-semibold text-gray-900">Continuous Learner</h3>
                                        <p className="text-gray-700 text-sm">
                                            Finishing this project doesn't mean I stop learning. I'm committed to constantly improving.
                                        </p>
                                    </div>
                                    
                                    <div className="border-l-4 border-red-500 pl-4">
                                        <h3 className="font-semibold text-gray-900">Team Player</h3>
                                        <p className="text-gray-700 text-sm">
                                            Management experience taught me collaboration, goal-hitting, and quick adaptation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Let's Connect */}
                        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Let's Connect</h2>
                            <p className="text-center text-blue-100 mb-8 leading-relaxed">
                                I'm actively seeking opportunities in front-end development, React development, or any role 
                                where I can contribute while continuing to grow.
                            </p>
                            
                            {/* Portfolio Projects */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4 text-center">Portfolio Projects</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <a 
                                        href="https://ayrtips.netlify.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors flex items-center"
                                    >
                                        <ExternalLink className="mr-3" size={20} />
                                        <div>
                                            <div className="font-semibold">Tip Calculator</div>
                                            <div className="text-sm text-blue-100">Clean, responsive utility app</div>
                                        </div>
                                    </a>
                                    
                                    <a 
                                        href="https://weatherbeatz.netlify.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors flex items-center"
                                    >
                                        <ExternalLink className="mr-3" size={20} />
                                        <div>
                                            <div className="font-semibold">Spotify Weather App</div>
                                            <div className="text-sm text-blue-100">Music recommendations based on weather</div>
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
                            
                            <p className="text-center text-blue-100 mt-6">
                                Thanks for checking out my work – and yes, I really do want all these products! 😄
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
