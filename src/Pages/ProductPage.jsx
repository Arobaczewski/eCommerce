import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductGrid from '../Components/Grids/ProductGrid.jsx'
import { products } from '../Components/Products.js';

function ProductPage(){


    return (
    <>
    <Header/>
    <div className='container mx-auto px-6'>
        <ProductGrid products={products} title="All Products"/>
    </div>
    <Footer/>
    </>
    )
}

export default ProductPage