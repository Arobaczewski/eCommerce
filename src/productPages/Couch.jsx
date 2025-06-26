import { HeartPlus, Plus } from 'lucide-react';
import couch from '../Pictures/couch.jpeg'
import { useState } from "react";


function Couch(){
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleInfo = () => {
        setIsOpen(!isOpen);
    }

    return (
    <div className='container mx-auto px-6 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
                <img src={couch} alt="Sectional Couch with LED lights" className='w-full rounded-lg shadow-lg'/>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold text-gray-900'>3-Pieces 210" Breathing Leather Power Reclining Theater Sectional with Wireless Chargers and LED Lighting</h2>
                        <div>
                            <span className='inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full'>In Stock</span>
                            <span className='text-3x1 font-bold text-gray-900'>Your Price: $1999.99</span>
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
                        <p>This theater sectional will serve as a functional, stylish, 
                            and comfortable seating option for your living room. 
                            With the reclining mechanism, the user is changed from a seated position to a reclined position smoothly. 
                            This Collection is offered in black breathable faux leather with diamond pattern stitching for decorative effect. 
                            Power reclining mechanisms are engaged with the push of a button, 
                            taking you from seated to prone in one gentle motion. 
                            Further functionality comes in the form of the side-mounted USB port and cup holder console.
                        </p>
                        <div>
                            <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
                                <ul className='space-y-2 text-sm'>
                                    <li>• Product Type: Theater Sectional</li>
                                    <li>• Seating Capacity: 5</li>
                                    <li>• Adjustable Headrest: No</li>
                                    <li>• Weight Capacity: 1,400 lb</li>
                                    <li>• Durability: Water Resistant</li>
                                    <li>• LED Lighting</li>
                                    <li>• Built-in USB Port</li>
                                    <li>• Adjustability: Reclining</li>
                                    <li>• Arm Compartment</li>
                                    <li>• Assembly Required</li>
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

export default Couch