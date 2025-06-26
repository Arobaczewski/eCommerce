import roboslogo from '../logos/roboslogo.png'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, Search, X, Menu } from 'lucide-react'
import { useState } from 'react'

function Header(){
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(true);
    }

    return (
        <div className='w-full border-b border-gray-200 shadow-sm'>
            <header className='flex justify-between items-center bg-gray-800 text-white px-6 py-4 max-w-7x1 mx-auto'>
                <div className='flex-shrink-0'>
                    <Link to="/">
                        <div className='text-2x1 md:text-3x1 font-black tracking-wider'>
                            ROBOS
                        </div>
                        <div className='text-xs text-gray-400 tracking-widest -mt-1'>
                            W I S H L I S T
                        </div>
                    </Link>
                </div>
                <nav className='hidden md:block'>
                    <ul className='flex space-x-8'>
                        <li>
                            <Link to='/products' className='hover:text-gray-300 transition-colors font-medium'>
                            Products
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' className='hover:text-gray-300 transition-colors font-medium'>
                            About
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='hover:text-gray-300 transition-colors font-medium'>
                            Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button
                    onClick={toggleMobileMenu}
                    className='md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors'
                    aria-label='Toggle mobile menu'
                >
                    {mobileMenu ? <X className='h-6 w-6' /> : <Menu className='w-6 h-6'/>}
                </button>
                <div className='flex items-center space-x-4'>
                    <div className='relative'>
                        <input  
                            type="text"
                            placeholder='What are you looking for?' 
                            className='pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                        />
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4'/>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <Link to='/favorites' className='p-2 hover:bg-gray-800 rounded-full transition-colors'>
                            <Heart className='h-5 w-5'/>
                        </Link>
                        <Link to='/checkout' className='p-2 hover:bg-gray-800 rounded-full transition-colors'>
                            <ShoppingCart className='h-5 w-5'/>
                        </Link>
                    </div>
                </div>
                <div className='md:hidden flex items-center space-x-2'>
                    <Link to='/favorites' className='p-2 hover:bg-gray-800 rounded-full transition-colors'>
                    <Heart className='h-5 w-5'></Heart>
                    </Link>
                    <Link to='/checkout' className='p-2 hover:bg-gray-800 rounded-full transition-colors'>
                    <ShoppingCart className='h-5 w-5'></ShoppingCart>
                    </Link>
                </div>
            </header>
            {mobileMenu && (
                <div className='md:hidden bg-black border-t border-gray-700'>
                    <nav className='px-6 py-4'>
                        <ul className='space-y-4'>
                            <li>
                                <Link
                                    to='/products'
                                    className='block py-2 text-white hover:text-gray-300 transition-colors font-medium'
                                    onClick={() => setMobileMenu(false)}
                                >
                                Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/about'
                                    className='block py-2 text-white hover:text-gray-300 transition-colors font-medium'
                                    onClick={() => setMobileMenu(false)}
                                >
                                About
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to='/contact'
                                    className='block py-2 text-white hover:text-gray-300 transition-colors font-medium'
                                    onClick={() => setMobileMenu(false)}
                                >
                                Contact
                                </Link>
                            </li>
                        </ul>
                        <div className='mt-4 pt-4 border-t border-gray-700'>
                            <div className='relative'>
                                <input 
                                    type="text"
                                    placeholder='What are you looking for?'
                                    className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'    
                                />
                                <Search className='absolute left-3 top-1/2 transform trnaslate-y-1/2 text-gray-400 h-4 w-4'></Search>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    )
}

export default Header