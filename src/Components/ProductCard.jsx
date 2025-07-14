import { ShoppingCart, Heart } from "lucide-react"
import { Link } from "react-router-dom"


function ProductCard({ product }) {

    return(
    <div className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300">
        <Link to={`/products/${product.slug}`} className='block'>
            <div className="relative overflow-hidden rounded-t-lg">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
                <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full 
                    ${product.inStock 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'}`
                }>
                    {product.inStock ? 'In Stock' : 'Out Of Stock'}
                    </span>
                </div>
            </div>
        </Link>

        <div className="p-4">
            <div className="mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-wider">
                    {product.category}
                </span>
            </div>
            <Link to={`/products/${product.slug}`}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                    {product.name}
                </h3>
            </Link>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
            </p>
            <div className="flex items-center justify-between">
                <span className="text-2x1 font-bold text-gray-900">
                    ${product.price}
                </span>
                <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-red-500 transition-colors rounded-full hover:bg-gray-100 ">
                        <Heart className='h-5 w-5'/>
                    </button>
                    <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        product.inStock 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                        disabled={!product.inStock}
                    >
                        <ShoppingCart className="h-4 w-4 inline mr-1"/>
                        {product.inStock ? 'Add to Cart' : 'Sold Out'}
                    </button>
                </div>
            </div>
        </div>
    </div>
)}

export default ProductCard;