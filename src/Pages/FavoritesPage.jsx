import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import { useFavorites } from '../Context/FavoritesContext';
import Cart from '../Components/Cart.jsx';

function Favorites() {
    const { favorites, clearAllFavorites, favoritesCount } = useFavorites();

    const handleClearAll = () => {
        if (window.confirm('Are you sure you want to remove all items from your favorites?')) {
            clearAllFavorites();
        }
    };

    return (
        <>
            <Header />
            <div className="bg-gray-50 min-h-screen py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        
                        {/* Header Section */}
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center mb-4">
                                <Heart className="h-12 w-12 text-red-500 fill-current mr-3" />
                                <h1 className="text-4xl font-bold text-gray-900">
                                    My Favorites
                                </h1>
                            </div>
                            <p className="text-xl text-gray-600">
                                {favoritesCount > 0 
                                    ? `You have ${favoritesCount} item${favoritesCount === 1 ? '' : 's'} in your favorites`
                                    : 'Your favorites list is empty'
                                }
                            </p>
                        </div>

                        {favorites.length > 0 ? (
                            <>
                                {/* Actions Bar */}
                                <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm border">
                                    <div className="flex items-center text-gray-600">
                                        <ShoppingBag className="h-5 w-5 mr-2" />
                                        <span className="font-medium">
                                            {favoritesCount} item{favoritesCount === 1 ? '' : 's'} saved
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-sm text-gray-500">
                                            Click the trash icon on each item to remove individually
                                        </span>
                                        <button
                                            onClick={handleClearAll}
                                            className="flex items-center px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Clear All
                                        </button>
                                    </div>
                                </div>

                                {/* Products Grid with Delete Buttons */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {favorites.map(product => (
                                        <ProductCard 
                                            key={product.id} 
                                            product={product}
                                            showDeleteButton={true}
                                        />
                                    ))}
                                </div>

                                {/* Continue Shopping CTA */}
                                <div className="mt-16 text-center bg-indigo-50 rounded-lg p-8 border border-indigo-200">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        Looking for More?
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        Discover more items that might catch your interest
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            to="/products"
                                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                                        >
                                            Browse All Products
                                        </Link>
                                        <Link
                                            to="/category/apparel"
                                            className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
                                        >
                                            Shop Apparel
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ) : (
                            /* Empty State */
                            <div className="text-center py-16">
                                <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <Heart className="h-16 w-16 text-gray-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    No Favorites Yet
                                </h2>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                    Start browsing and click the heart icon on products you love to save them here for later.
                                </p>
                                
                                {/* Quick Category Links */}
                                <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                                    <Link
                                        to="/category/apparel"
                                        className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow text-center"
                                    >
                                        <div className="text-2xl mb-2">👕</div>
                                        <h3 className="font-semibold text-gray-900">Apparel</h3>
                                        <p className="text-sm text-gray-600">Sports jerseys & more</p>
                                    </Link>
                                    
                                    <Link
                                        to="/category/technology"
                                        className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow text-center"
                                    >
                                        <div className="text-2xl mb-2">💻</div>
                                        <h3 className="font-semibold text-gray-900">Technology</h3>
                                        <p className="text-sm text-gray-600">Gaming & electronics</p>
                                    </Link>
                                    
                                    <Link
                                        to="/category/misc"
                                        className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow text-center"
                                    >
                                        <div className="text-2xl mb-2">🏆</div>
                                        <h3 className="font-semibold text-gray-900">Misc</h3>
                                        <p className="text-sm text-gray-600">Collectibles & home</p>
                                    </Link>
                                </div>

                                <Link
                                    to="/products"
                                    className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
                                >
                                    <ShoppingBag className="h-5 w-5 mr-2" />
                                    Start Shopping
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
            <Cart/>
        </>
    );
}

export default Favorites;