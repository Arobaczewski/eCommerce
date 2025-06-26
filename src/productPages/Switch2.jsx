import { HeartPlus, Plus } from 'lucide-react';
import switch2 from '../Pictures/switch2.jpg'
import { useState } from "react";


function Switch2(){
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleInfo = () => {
        setIsOpen(!isOpen);
    }


    return (
    <div className='container mx-auto px-6 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
                <img src={switch2} alt="Nintendo Switch 2" className='w-full rounded-lg shadow-lg'/>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold text-gray-900'>Nintendo Switch 2 System - Nintendo Switch 2</h2>
                        <div>
                            <span className='inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full'>In Stock</span>
                            <span className='text-3x1 font-bold text-gray-900'>Your Price: $449.99</span>
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
                        <p>Experience the most powerful Nintendo console ever with revolutionary features that redefine portable and home gaming.</p>
                        <div>
                            <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
                                <ul className='space-y-2 text-sm'>
                                    <li>• Stunning 7.9-Inch 1080p HDR Display - 
                                          Crystal-clear visuals with 120fps gameplay and vibrant HDR colors for the ultimate handheld experience.</li>
                                    <li>• 4K Gaming When Docked -
                                          Connect to your TV for gorgeous 4K resolution gaming at 60fps, 
                                          bringing console-quality graphics to your living room.</li>
                                    <li>• Revolutionary Magnetic Joy-Con 2 Controllers - 
                                          Effortless attach/detach with strong magnetic connectors, 
                                          plus innovative mouse functionality that turns any surface into a control pad.</li>
                                    <li>• Custom NVIDIA Processor with Ray-Tracing - 
                                          Advanced graphics with real-time ray-tracing and DLSS technology for stunning visuals and smooth performance.</li>
                                    <li>• 256GB Internal Storage - 8x more storage than the original Switch, 
                                          plus support for microSD Express cards up to 2TB for your entire game library.</li>
                                    <li>• GameChat Social Features - Built-in microphone, 
                                          one-touch voice chat, screen sharing, and video calling to stay connected with friends while gaming.</li>
                                    <li>• Full Switch Game Compatibility - Play your entire Nintendo Switch library with enhanced performance, 
                                          improved graphics, and faster loading times.</li>
                                    <li>• Three Gaming Modes - Seamlessly switch between handheld, 
                                          tabletop (with improved 150° kickstand), and docked TV gaming.</li>
                                    <li>• Wi-Fi 6 & Dual USB-C Ports - Lightning-fast online gaming and convenient charging from 
                                          top or bottom ports for ultimate flexibility.</li>
                                    <li>• 5,220mAh Long-Life Battery - Extended gaming sessions with 
                                          2-6.5 hours of playtime, plus quick 3-hour recharge time.</li>
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

export default Switch2