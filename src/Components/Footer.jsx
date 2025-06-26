import { Link } from "react-router-dom"
import amex from '../logos/amex.jpg'
import discover from '../logos/discover.jpg'
import mastercard from '../logos/mastercard.jpg'
import paypal from '../logos/paypal.jpg'
import visa from '../logos/visa.jpg'
import facebook from '../logos/facebook.jpg'
import github from '../logos/github.png'
import instagram from '../logos/instagram.jpg'
import linkedin from '../logos/linkedin.png'
import x from '../logos/x.png'

function Footer(){
    return (
        <div className="mt-auto">
            <footer className="bg-gray-800 text-white border-t border-gray-600">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    {/* Main Footer Content */}
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        
                        {/* Company Links */}
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                            <Link 
                                to='/contact' 
                                className="text-gray-300 hover:text-white transition-colors font-medium"
                            >
                                Contact Us
                            </Link>
                            <Link 
                                to='/about' 
                                className="text-gray-300 hover:text-white transition-colors font-medium"
                            >
                                About This Collection
                            </Link>
                        </div>
                        
                        {/* Social Media Links */}
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-400 mr-2">Follow Us:</span>
                            <Link 
                                to='https://github.com/Arobaczewski'
                                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={github} alt="Github" className="h-6 w-auto" />
                            </Link>
                            <Link 
                                to='https://www.linkedin.com/in/alexander-robaczewski/'
                                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={linkedin} alt="LinkedIn" className="h-6 w-auto" />
                            </Link>
                            <Link 
                                to='https://www.facebook.com/alex.robaczewski'
                                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={facebook} alt="Facebook" className="h-6 w-auto" />
                            </Link>
                            <Link 
                                to='https://www.x.com/'
                                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={x} alt="X (Twitter)" className="h-6 w-auto" />
                            </Link>
                            <Link 
                                to='https://www.instagram.com/arobaczewski/'
                                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={instagram} alt="Instagram" className="h-6 w-auto" />
                            </Link>
                        </div>
                        
                        {/* Payment Methods */}
                        <div className="flex flex-col items-center space-y-2">
                            <span className="text-sm text-gray-400">We Accept:</span>
                            <div className="flex items-center space-x-3">
                                <div className="bg-white p-1 rounded">
                                    <img src={visa} alt="Visa" className="h-6 w-auto" />
                                </div>
                                <div className="bg-white p-1 rounded">
                                    <img src={mastercard} alt="Mastercard" className="h-6 w-auto" />
                                </div>
                                <div className="bg-white p-1 rounded">
                                    <img src={amex} alt="American Express" className="h-6 w-auto" />
                                </div>
                                <div className="bg-white p-1 rounded">
                                    <img src={discover} alt="Discover" className="h-6 w-auto" />
                                </div>
                                <div className="bg-white p-1 rounded">
                                    <img src={paypal} alt="PayPal" className="h-6 w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Footer */}
                    <div className="border-t border-gray-600 mt-8 pt-6 text-center">
                        <p className="text-sm text-gray-400">
                            © 2025 Robos Wishlist. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer