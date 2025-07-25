import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import App from './App.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import ProductDetail from './Pages/ProductDetail.jsx'
import Favorites from './Pages/FavoritesPage.jsx'
import NotFound from './Pages/NotFound.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Checkout from './Pages/Checkout.jsx'
import Category from './Pages/Category.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'
import SearchResults from './Components/SearchResults.jsx'
import { FavoritesProvider } from './Context/FavoritesContext.jsx'
import { CheckoutProvider } from './Context/CheckoutContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/products',
    element: <ProductPage/>
  },
  {
    path: '/products/:slug',
    element: <ProductDetail/>
  },
  {
    path: '/favorites',
    element: <Favorites/>
  },
  {
    path: '/checkout', 
    element: <Checkout />
  },
  {
    path: '*', 
    element: <NotFound />
  },
  {
    path: '/category/:categoryName',
    element: <Category/>
  },
  {
    path: '/search',
    element: <SearchResults/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <CheckoutProvider>
        <FavoritesProvider>
          <RouterProvider router={router}>
            <ScrollToTop/>
          </RouterProvider>
        </FavoritesProvider>
      </CheckoutProvider>
    </CartProvider>
  </StrictMode>,
)