import { HeartPlus, Plus } from 'lucide-react';
import bedardJersey from '../Pictures/bedardJersey.jpg'
import { useState } from "react";

function Blackhawks(){
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleInfo = () => {
        setIsOpen(!isOpen);
    }

    return (
    <div className='container mx-auto px-6 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
                <img src={bedardJersey} alt="Connor Bedard Jersey" className='w-full rounded-lg shadow-lg'/>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold text-gray-900'>Men's Chicago Blackhawks Connor Bedard Fanatics Red Home Premium Jersey</h2>
                        <div>
                            <span className='inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full'>In Stock</span>
                            <span className='text-3x1 font-bold text-gray-900'>Your Price: $229.99</span>
                        </div>
                </div>
                <div className='space-y-4'>
                    <div className='flex items-center gap-4'>
                        <label className='font-semibold text-gray-700'>Quantity:</label>
                            <select className='px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        <button className='p-2 text-gray-600 hover:text-red-500 transition-colors'><HeartPlus /></button>
                    </div>
                    <div className='items-center justify-center mb-4'>
                        <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200'>Add To Cart</button>
                    </div>
                </div>
                <div className='mt-8'>
            <button
                classname='flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border transition-colors'
                onClick={toggleInfo}
            >
                <span className='font-semibold text-gray-900'>View Product Information</span>
                <Plus className={`transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}/>
            </button>
                {isOpen && (
                    <div className='mt-4 p-6 bg-white border rounded-lg text-gray-700 leading-relaxed space-y-4'>
                        <p>When you're watching the on-ice action, you need a jersey to match. 
                           With this Chicago Blackhawks Fanatics Home Premium Jersey you get just that! 
                           This premium jersey is made for the loyal Chicago Blackhawks fan like you and takes inspiration from what your team wears on gameday. 
                           Available in traditional colors, this Connor Bedard jersey possesses a more adjusted fit and mesh panels to enhance your comfort no matter where you enjoy the game!
                        </p>
                    <div>
                        <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
                            <ul className='space-y-2 text-sm'>
                                <li>• Premium chassis is not as wide as Authentic Pro jersey, but still larger than Breakaway jersey</li>
                                <li>• Sewn-down tackle twill with embroidered crest and shoulder patches</li>
                                <li>• Holographic NHL Shield</li>
                                <li>• Authentic tie-down fight strap inside lower back</li>
                                <li>• All-new neck tape and jock tag designs</li>
                                <li>• Rounded droptail hem with side vents</li>
                                <li>• Material: 100% Polyester Pique</li>
                                <li>• Long sleeve</li>
                                <li>• Machine wash, tumble dry low</li>
                                <li>• Jersey Color Style: Away</li>
                                <li>• Officially licensed</li>
                            </ul>
                    </div>
                        <p>
                            This spinner design became synonymous with the "Cenation" era and was carried by legendary superstars including John Cena, Edge, and Triple H. Its signature spinning center plate makes this title a must-have collectible for any Universe member looking to elevate their WWE collection. WWE Championship Spinner Replica Title Belt
                            Whether you're displaying it in your office, adding it to your wrestling memorabilia collection, or celebrating your fandom, this championship replica delivers the authentic look and feel that makes you feel like "The Champ Is Here."
                        </p>    
                    </div>   
                )}
        </div>

            </div>

        </div>
        <div className='mt-12 border-t pt-8'>
            <h2 className='text-xl font-bold text-gray-900 mb-6'>You May Also Like</h2>
        </div>
    </div>
    )
}

export default Blackhawks