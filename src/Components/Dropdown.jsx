import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

function Dropdown() {
  return (
    <div className="relative inline-block text-left group">
      {/* Dropdown Button */}
      <div className="inline-flex items-center gap-x-1.5 font-medium text-white cursor-pointer">
        Products
        <ChevronDown 
          aria-hidden="true" 
          className="size-5 transition-transform duration-200 group-hover:rotate-180" 
        />
      </div>

      {/* Dropdown Menu */}
      <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform scale-95 group-hover:scale-100">
        <div className="py-1">
          <Link 
            to='/products'
            className="block px-4 py-2 font-bold text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            View All
          </Link>
          
          <Link 
            to='/category/apparel'
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            Apparel
          </Link>
          
          <Link 
            to='/category/technology'
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            Technology
          </Link>
          
          <Link 
            to='/category/misc'
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            Misc
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dropdown