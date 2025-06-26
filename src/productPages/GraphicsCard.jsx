import { HeartPlus, Plus } from 'lucide-react';
import graphicsCard from '../Pictures/graphicsCard.jpg'
import { useState } from "react";


function GraphicsCard(){
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleInfo = () => {
        setIsOpen(!isOpen);
    }

    return (
    <div className='container mx-auto px-6 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
                <img src={graphicsCard} alt="Graphics Card" className='w-full rounded-lg shadow-lg'/>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold text-gray-900'>GIGABYTE GeForce RTX 5070 Gaming OC 12G Graphics Card, 12GB 192-bit GDDR7, PCIe 5.0, WINDFORCE Cooling System, GV-N5070GAMING OC-12GD Video Card</h2>
                        <div>
                            <span className='inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full'>In Stock</span>
                            <span className='text-3x1 font-bold text-gray-900'>Your Price: $677.99</span>
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
                        <p>Ahead of its time, ahead of the game is the GIGABYTE GeForce RTX 5070 GAMING OC 12G Graphics Cards. 
                            Powered by NVIDIA's new RTX architecture, the GIGABYTE GeForce RTX 5070 GAMING OC 12G brings stunning visuals, 
                            amazingly fast frame rates, and AI acceleration to games and creative applications with its enhanced RT Cores and Tensor Cores, 
                            along with a staggering 12 GB of GDDR7 memory.
                        </p>
                        <div>
                            <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
                                <ul className='space-y-2 text-sm'>
                                    <li>• Brand: GIGABYTE</li>
                                    <li>• Max Screen Resolution: 7680x4320 Pixels</li>
                                    <li>• Memory Speed: 2600 MHz</li>
                                    <li>• Graphics Coprocessor: NVIDIA GeForce RTX 5070</li>
                                    <li>• Ram Size: 12 GB</li>
                                    <li>• Video Output Interface: Display Port, HDMI</li>
                                    <li>• Powered by the NVIDIA Blackwell architecture and DLSS 4</li>
                                    <li>• Integrated with 12 GB GDDR7 192 bit memory interface</li>
                                    <li>• PCIe 5.0</li>
                                    <li>• WINDFORCE cooling system</li>
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

export default GraphicsCard