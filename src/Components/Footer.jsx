import { Link } from "react-router-dom"
import { Github, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react'
import amex from '../Pictures/logos/amex.jpg'
import discover from '../Pictures/logos/discover.jpg'
import mastercard from '../Pictures/logos/mastercard.jpg'
import paypal from '../Pictures/logos/paypal.jpg'
import visa from '../Pictures/logos/visa.jpg'

function Footer(){
    return (
        <div className="mt-auto">
            <footer className="bg-indigo-700 text-white border-t border-indigo-600">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    {/* Main Footer Content */}
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        
                        {/* Company Links */}
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                            <Link 
                                to='/contact' 
                                className="text-indigo-100 hover:text-white transition-colors font-medium"
                            >
                                Contact Us
                            </Link>
                            <Link 
                                to='/about' 
                                className="text-indigo-100 hover:text-white transition-colors font-medium"
                            >
                                About This Collection
                            </Link>
                        </div>
                        
                        {/* Social Media Links */}
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-indigo-200 mr-2">Follow Us:</span>
                            <Link 
                                to='https://github.com/Arobaczewski'
                                className="p-2 hover:bg-indigo-600 rounded-full transition-colors group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="h-6 w-6 text-indigo-100 group-hover:text-white transition-colors" />
                            </Link>
                            <Link 
                                to='https://www.linkedin.com/in/alexander-robaczewski/'
                                className="p-2 hover:bg-indigo-600 rounded-full transition-colors group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="h-6 w-6 text-indigo-100 group-hover:text-white transition-colors" />
                            </Link>
                            <Link 
                                to='https://www.facebook.com/alex.robaczewski'
                                className="p-2 hover:bg-indigo-600 rounded-full transition-colors group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook className="h-6 w-6 text-indigo-100 group-hover:text-white transition-colors" />
                            </Link>
                            <Link 
                                to='https://www.x.com/'
                                className="p-2 hover:bg-indigo-600 rounded-full transition-colors group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="h-6 w-6 text-indigo-100 group-hover:text-white transition-colors" />
                            </Link>
                            <Link 
                                to='https://www.instagram.com/arobaczewski/'
                                className="p-2 hover:bg-indigo-600 rounded-full transition-colors group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="h-6 w-6 text-indigo-100 group-hover:text-white transition-colors" />
                            </Link>
                        </div>
                        
                        {/* Payment Methods */}
                        <div className="flex flex-col items-center space-y-2">
                            <span className="text-sm text-indigo-200">We Accept:</span>
                            <div className="flex items-center space-x-3">
                                <div className="bg-white p-2 rounded-md hover:scale-105 transition-transform shadow-sm">
                                    <img src={visa} alt="Visa" className="h-6 w-auto" />
                                </div>
                                <div className="bg-white p-2 rounded-md hover:scale-105 transition-transform shadow-sm">
                                    <img src={mastercard} alt="Mastercard" className="h-6 w-auto" />
                                </div>
                                <div className="bg-white p-2 rounded-md hover:scale-105 transition-transform shadow-sm">
                                    <img src={amex} alt="American Express" className="h-6 w-auto" />
                                </div>
                                <div className="bg-white p-2 rounded-md hover:scale-105 transition-transform shadow-sm">
                                    <img src={discover} alt="Discover" className="h-6 w-auto" />
                                </div>
                                <div className="bg-white p-2 rounded-md hover:scale-105 transition-transform shadow-sm">
                                    <img src={paypal} alt="PayPal" className="h-6 w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Footer */}
                    <div className="border-t border-indigo-600 mt-8 pt-6 text-center">
                        <p className="text-sm text-indigo-200">
                            © 2025 Robos Wishlist. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer