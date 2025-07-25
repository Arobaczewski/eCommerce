import ProductCard from "../ProductCard.jsx";

function ProductGrid({ products, title }){

    return(
        <div className="py-8">
            {title && (
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

            {products.length === 0 && (
            <div className="text-center py-12">
                <div className="text-gray-400 text-lg">No products found</div>
                    <p className="text-gray-500 mt-2">Check back soon for new items!</p>
            </div> 
            )}
        </div>
    );
}

export default ProductGrid