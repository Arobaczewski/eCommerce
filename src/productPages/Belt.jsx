import wweSpinner from '../Pictures/wweSpinner.jpeg';
import wweSpinner2 from '../Pictures/wweSpinner2.jpeg';
import { HeartPlus, Plus } from 'lucide-react';
import { useState } from 'react';

function Belt(){
const [isOpen, setIsOpen] = useState(true);

const toggleInfo = () => {
    setIsOpen(!isOpen);
}

    return (
    <div className='container mx-auto px-6 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
                <img src={wweSpinner} alt="WWE Spinner Belt" className='w-full rounded-lg shadow-lg'/>
                <img src={wweSpinner2} alt="WWE Spinner Belt" className='w-full rounded-lg shadow-lg'/>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold text-gray-900'>WWE Championship Spinner Replica Title Belt</h2>
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
                        <p>Experience Championship Glory with the Iconic WWE Championship Spinner Replica Title Belt</p>
                        <p>Introduced by John Cena in 2005, this replica title belt perfectly embodies the Word Life aesthetic, sporting an eye-catching design and bling to the nines. This isn't just a collectible—it's a piece of WWE history that defined an era.</p>
                    <div>
                        <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
                            <ul className='space-y-2 text-sm'>
                                <li>• Signature Spinning Center Plate: The WWE logo in the middle spins flawlessly, just like the championship worn by your favorire superstars!</li>
                                <li>• Authentic Weight & Feel: Weighs approximately 8-9 pounds with very large plates and strap just like the TV version.</li>
                                <li>• Premium Construction: Detailed metalwork with intricate design elements that capture every detail of the original</li>
                                <li>• Adult Size: Full-size replica designed for serious collectors and wrestling enthusiasts</li>
                                <li>• Display Ready: Comes with protective storage bag to keep your championship dust-free and pristine</li>
                                <li>• The Championship That Defined an Era</li>
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

export default Belt