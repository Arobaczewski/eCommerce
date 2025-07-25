import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import App from './App.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import ProductDetail from './Pages/ProductDetail.jsx' // ✅ New dynamic component
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
    path: '/products/:slug', // ✅ Dynamic product route
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
  // ✅ REMOVE all these individual product routes:
  // { path: 'products/wwe-championship-spinner', element: <Belt /> },
  // { path: 'products/bedard-away-jersey', element: <Blackhawks /> },
  // { path: 'products/palmer-home-jersey', element: <Chelsea /> },
  // { path: 'products/couch', element: <Couch /> },
  // { path: 'products/love-black-jersey', element: <Packers/> },
  // { path: 'products/nvidia-graphics-card', element: <GraphicsCard /> },
  // { path: 'products/nintendo-switch-2', element: <Switch2 /> },
  // { path: 'products/konerko-home-jersey', element: <WhiteSox /> },
  // { path: 'products/ninja-coffee', element: <Coffee /> },
  // { path: 'products/motorcycle', element: <Motorcycle /> },
  // { path: 'products/ninja-slushi', element: <Slushi /> },
  // { path: 'products/sodastream', element: <Sodastream /> },
  // { path: 'products/amd', element: <Amd /> },
  // { path: 'products/home-pod', element: <Homepod /> },
  // { path: 'products/airpods-max', element: <Airpodsmax /> },
  // { path: 'products/ps5', element: <Ps5 /> },
  // { path: 'products/tv', element: <Tv /> },
  // { path: 'products/xbox', element: <Xbox /> },
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