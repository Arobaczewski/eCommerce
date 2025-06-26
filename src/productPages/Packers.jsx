import { HeartPlus, Plus } from 'lucide-react';
import loveJersey from '../Pictures/loveJersey.jpg'
import loveJersey2 from '../Pictures/loveJersey2.jpg'
import { useState } from "react";


function Packers(){
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleInfo = () => {
        setIsOpen(!isOpen);
    }

    return (
    <div className='container mx-auto px-6 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
                <img src={loveJersey} alt="Jordan Love Jersey" className='w-full rounded-lg shadow-lg'/>
                <img src={loveJersey2} alt="Jordan Love Jersey" className='w-full rounded-lg shadow-lg'/>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold text-gray-900'>#10 Jordan Love Nike Black Fashion Game Jersey</h2>
                        <div>
                            <span className='inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full'>In Stock</span>
                            <span className='text-3x1 font-bold text-gray-900'>Your Price: $599.99</span>
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
                        <p>Stay true to your team all day, every day, gameday. 
                            Green Bay Packers Nike black fashion game jersey is inspired by what the players are wearing on the field, 
                            with a fashionable twist.
                        </p>
                        <div>
                            <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
                                <ul className='space-y-2 text-sm'>
                                    <li>• Fashion game jersey </li>
                                    <li>• Tailored fit designed for comfort and movement</li>
                                    <li>• Strategic ventilation for breathability</li>
                                    <li>• Woven jock tag at front lower left</li>
                                    <li>• Printed numbers and letters</li>
                                    <li>• Recycled polyester</li>
                                    <li>• Brand: Nike</li>
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

export default Packers