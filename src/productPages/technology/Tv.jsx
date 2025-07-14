import { HeartPlus, Plus } from 'lucide-react';
import { useState } from "react";
import { products } from '../../Components/Products'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RecommendedGrids from '../../Components/Grids/RecommendedGrids';


function Tv(){
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleInfo = () => {
        setIsOpen(!isOpen);
    }

    return (
    <>
    <Header/>
    <div className='container mx-auto px-6 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
                <img src={products[16].image} alt="Graphics Card" className='w-full rounded-lg shadow-lg'/>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold text-gray-900'>{products[16].name}</h2>
                        <div>
                            {products[16].inStock ?
                            <span className='inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full'>In Stock</span> :
                            <span className='inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full'>Out Of Stock</span>
                            }
                            <span className='text-3xl font-bold text-gray-900'>Your Price: ${products[16].price}</span>
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
                        {products[16].inStock ? 
                            <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200'>Add To Cart</button> : 
                            <button className='w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold'>Out Of Stock</button>
                        }
                    </div>
                </div>
                <div className='mt-8'>
            <button
                className='flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border transition-colors'
                onClick={toggleInfo}
            >
                <span className='font-semibold text-gray-900'>View Product Information</span>
                <Plus className={`transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}/>
            </button>
                {isOpen && (
                    <div className='mt-4 p-6 bg-white border rounded-lg text-gray-700 leading-relaxed space-y-4'>
                        <p>{products[16].description}</p>
                        <div>
                            <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
                                <ul className='space-y-2 text-sm'>
                                    <li>• PurColor</li>
                                    <li>• 4K Upscaling</li>
                                    <li>• Motion Xcelerator</li>
                                    <li>• Object Tracking Sound Lite</li>
                                    <li>• Mega Contrast</li>
                                    <li>• HDR</li>
                                    <li>• Q Symphony</li>
                                    <li>• Crystal Processor 4K</li>
                                    <li>• Samsung TV Plus</li>
                                    <li>• Samsung Tizen OS</li>
                                </ul>
                        </div>    
                    </div>   
                )}
        </div>

            </div>

        </div>
        <RecommendedGrids
            currentProductId={products[16].id}
            category={products[16].category}
        />
    </div>
    <Footer/>
    </>
    )
}

export default Tv