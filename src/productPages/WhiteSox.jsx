import konerkoJersey from '../Pictures/konerkoJersey.jpg'
import { useState } from "react";
import { HeartPlus, Plus } from 'lucide-react';


function WhiteSox(){
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleInfo = () => {
        setIsOpen(!isOpen);
    }

    return (
    <div className='container mx-auto px-6 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
                <img src={konerkoJersey} alt="Paul Konerko Jersey" className='w-full rounded-lg shadow-lg'/>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold text-gray-900'>Chicago White Sox Nike Home Limited Paul Konerko Retired Roster Jersey - White</h2>
                        <div>
                            <span className='inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full'>In Stock</span>
                            <span className='text-3x1 font-bold text-gray-900'>Your Price: $199.99</span>
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
                        <p>Chicago White Sox Nike Home Limited Pick-A-Player Retired Roster Jersey - White</p>
                        <div>
                            <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
                                <ul className='space-y-2 text-sm'>
                                    <li>• Brand: Nike</li>
                                    <li>• Standard, tailored fit</li>
                                    <li>• Inspired by the On-Field jersey using recycled trims</li>
                                    <li>• Vapor Premier chassis improves mobility, enhances moisture management and provides a lightweight feel with maximum flexibility</li>
                                    <li>• Heat-applied twill appliques with faux stitching</li>
                                    <li>• Embroidered Nike Swoosh</li>
                                    <li>• MLB Batterman silhouette below back neck seam</li>
                                    <li>• Heat-applied woven jock tag</li>
                                    <li>• Material: 100% Recycled Polyester Double-Knit Mesh</li>
                                    <li>• Machine wash, tumble dry low</li>
                                    <li>• Jersey Color Style: Home</li>
                                    <li>• Dri-FIT® technology wicks away moisture</li>
                                    <li>• Officially licensed</li>
                                    <li>• Nike Limited</li>

                                </ul>
                        </div>
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

export default WhiteSox