import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Cart from '../Components/Cart';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // EmailJS configuration - Replace with your actual IDs from EmailJS dashboard
    const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;     // From EmailJS dashboard
    const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_AUTO_REPLY_TEMPLATE_ID;  // Template ID you created
    const INQUIRY_TEMPLATE_ID = import.meta.env.VITE_INQUIRY_TEMPLATE_ID;       // Template ID you created  
    const EMAIL_USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_ID;           // From EmailJS dashboard

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Send notification email TO YOU
            await emailjs.send(
                EMAIL_SERVICE_ID,
                INQUIRY_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    timestamp: new Date().toLocaleString(),
                    to_email: 'alexander.robaczewski@gmail.com' // Your email
                },
                EMAIL_USER_ID
            );

            // Send auto-reply TO THEM
            await emailjs.send(
                EMAIL_SERVICE_ID,
                AUTO_REPLY_TEMPLATE_ID,
                {
                    to_email: formData.email,
                    to_name: formData.name,
                    inquiry_subject: formData.subject,
                    // Update these links with your actual URLs
                    resume_link: '/resume/Alexander_Robaczewski_Resume.pdf',
                    portfolio_link: window.location.origin
                },
                EMAIL_USER_ID
            );

            console.log('Both emails sent successfully!');
            setIsSubmitted(true);
            
            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, 5000);

        } catch (error) {
            console.error('Email failed to send:', error);
            alert('Failed to send message. Please try again or email me directly.');
        }

        setIsLoading(false);
    };

    return (
        <>
            <Header />
            <div className="bg-gray-50 min-h-screen py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        
                        {/* Header Section */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Get In Touch
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Interested in working together? I'd love to hear about your project and discuss how I can help bring your ideas to life.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            
                            {/* Contact Information */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Let's Connect
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    I'm actively seeking opportunities in front-end development, React development, 
                                    or any role where I can contribute while continuing to grow. Feel free to reach out!
                                </p>
                                
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                            <Mail className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Email</h3>
                                            <a 
                                                href="mailto:alex.robaczewski@gmail.com" 
                                                className="text-indigo-600 hover:text-indigo-500 transition-colors"
                                            >
                                                Alexander.Robaczewski@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                            <Phone className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Phone</h3>
                                            <a 
                                                href="tel:+1234567890" 
                                                className="text-indigo-600 hover:text-indigo-500 transition-colors"
                                            >
                                                (312) 330-4288
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                            <MapPin className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Location</h3>
                                            <p className="text-gray-600">Chicago, Illinois</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h3 className="font-semibold text-gray-900 mb-4">Find me online</h3>
                                    <div className="flex space-x-4">
                                        <a 
                                            href="https://www.linkedin.com/in/alexander-robaczewski/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors"
                                        >
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                            </svg>
                                        </a>
                                        <a 
                                            href="https://github.com/Arobaczewski" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                                        >
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white rounded-lg shadow-md p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Send a Message
                                </h2>
                                
                                {isSubmitted ? (
                                    <div className="text-center py-8">
                                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                                        <p className="text-gray-600 mb-4">Thanks for reaching out. I'll get back to you soon!</p>
                                        <p className="text-sm text-indigo-600">
                                            Check your email for a confirmation message with my portfolio links.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                placeholder="Job Opportunity / Project Discussion"
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                placeholder="Tell me about your project or opportunity..."
                                            />
                                        </div>
                                        
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors flex items-center justify-center disabled:opacity-50"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5 mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                        {/* Replace the CTA section with this */}
                        <div className="mt-16 text-center bg-indigo-50 rounded-lg p-8 border border-indigo-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Why Work With Me?
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="text-center">
                                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">🎯</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">User-Focused</h3>
                                    <p className="text-gray-600 text-sm">8+ years of customer service experience means I build with users in mind</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Fast Learner</h3>
                                    <p className="text-gray-600 text-sm">Built this entire portfolio in 4 weeks while learning React and Tailwind</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">🤝</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Team Player</h3>
                                    <p className="text-gray-600 text-sm">Management experience in fast-paced tech environments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Cart/>
        </>
    );
}

export default Contact;