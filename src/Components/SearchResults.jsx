import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import ProductGrid from "./Grids/ProductGrid";
import { products } from "./Products.js";

function SearchResults() {
    const [searchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query = searchParams.get('q') || '';

    useEffect(() => {
        if(query){
            setIsLoading(true);
            
            // Add a small delay to simulate loading (optional)
            setTimeout(() => {
                const results = products.filter(product => {
                    const searchTerm = query.toLowerCase();
                    return(
                        product.name.toLowerCase().includes(searchTerm) ||
                        product.description.toLowerCase().includes(searchTerm) ||
                        product.category.toLowerCase().includes(searchTerm)
                    );
                });
                setSearchResults(results);
                setIsLoading(false);
            }, 300);
        } else {
            setSearchResults([]);
            setIsLoading(false);
        }
    }, [query]);

    if(!query) {
        return(
            <>
                <Header/>
                <div className="bg-gray-50 min-h-screen py-16">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Search Products
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Use the search bar above to find products
                        </p>
                        <Link 
                            to='/products'
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            Browse All Products
                        </Link>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }

    return(
        <>
            <Header/>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        
                        {/* Search Header */}
                        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                            <div className="flex items-center mb-4">
                                <Search className="h-6 w-6 text-indigo-600 mr-3"/>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Search Results
                                </h1>
                            </div>
                            <p className="text-gray-600">
                                {isLoading ? ( 
                                    'Searching...'
                                ) : (
                                    searchResults.length > 0 ? (
                                        <>
                                            Found <span className="font-semibold text-gray-900">{searchResults.length}</span> result{searchResults.length === 1 ? '' : 's'} for <span className="font-semibold text-indigo-600">"{query}"</span>
                                        </>
                                    ) : (
                                        <>
                                            No results found for <span className="font-semibold text-indigo-600">"{query}"</span>
                                        </>
                                    )
                                )}
                            </p>
                        </div>

                        {/* Loading State */}
                        {isLoading && (
                            <div className="text-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                                <p className="text-gray-600">Searching products...</p>
                            </div>
                        )}

                        {/* Search Results */}
                        {!isLoading && searchResults.length > 0 && (
                            <ProductGrid products={searchResults}/>
                        )}

                        {/* No Results State */}
                        {!isLoading && searchResults.length === 0 && (
                            <div className="text-center py-16">
                                <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <Search className="h-16 w-16 text-gray-400"/>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    No Products Found
                                </h2>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                    We couldn't find any products matching "<span className="font-semibold">{query}</span>". Try searching with different keywords.
                                </p>
                                
                                <div className="space-y-4">
                                    <p className="text-gray-600">Try searching for:</p>
                                    <div className="flex flex-wrap gap-2 justify-center mb-8">
                                        {['jersey', 'nintendo', 'graphics card', 'belt', 'couch'].map((suggestion) => (
                                            <Link
                                                key={suggestion}
                                                to={`/search?q=${suggestion}`}
                                                className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm hover:bg-indigo-100 transition-colors"
                                            >
                                                {suggestion}
                                            </Link>
                                        ))}
                                    </div>
                                    <Link
                                        to='/products'
                                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                                    >
                                        Browse All Products
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default SearchResults;