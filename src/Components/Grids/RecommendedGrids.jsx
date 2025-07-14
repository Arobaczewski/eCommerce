import ProductGrid from "../Grids/ProductGrid"
import { getProductByCategory } from "../Products"

function RecommendedGrids({ currentProductId, category }){
    
    // Get all products in the same category
    const categoryProducts = getProductByCategory(category);
    
    // Remove the current product from recommendations
    const otherProducts = categoryProducts.filter(product => product.id !== currentProductId);
    
    // Shuffle array and take first 3 items
    const shuffleArray = (array) => {
        const newArray = [...array]; // Create a copy
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };
    
    const randomProducts = shuffleArray(otherProducts).slice(0, 3);

    // If no products to recommend, don't show the section
    if(randomProducts.length === 0){
        return null;
    }

    return (
        <div className="container mx-auto px-6">
            <div className='mt-12 border-t pt-8'>
                <h2 className='text-xl font-bold text-gray-900 mb-6'>You May Also Like</h2>
            </div>
            
            <ProductGrid products={randomProducts}/>
        </div>
    )
}

export default RecommendedGrids