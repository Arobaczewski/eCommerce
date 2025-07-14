import { useParams } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ProductGrid from "../Components/Grids/ProductGrid"
import { getProductByCategory } from "../Components/Products"

function Category(){
    const { categoryName = '' } = useParams();

    if(!categoryName) {
        return (
            <>
            <Header/>
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Category</h1>
                <p className="text-gray-600">Please Select a valid category</p>
            </div>
            <Footer/>
            </>
        )
    }

    const displayCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    const categoryProducts = getProductByCategory(displayCategory);

    if(categoryProducts.length === 0){
        return (
            <>
            <Header/>
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
                <p className="text-gray-600">Sorry, we couldn't find any products in the {displayCategory} category.</p>
            </div>
            <Footer/>
            </>
        );
    }

    return (
        <>
        <Header/>
        <div className="container mx-auto px-6">
            <div className="py-8 text-center border-b border-gray-200 mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{displayCategory}</h1>
                <p className="text-gray-600">Discover our {displayCategory.toLowerCase()} collection</p>
            </div>
            
            <ProductGrid products={categoryProducts}/>
        </div>
        <Footer/>
        </>
    )

}

export default Category