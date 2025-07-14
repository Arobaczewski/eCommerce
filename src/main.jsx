import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import App from './App.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import Favorites from './Pages/Favorites.jsx'
import NotFound from './Pages/NotFound.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Belt from './productPages/misc/Belt.jsx'
import Blackhawks from './productPages/apparel/Blackhawks.jsx'
import Chelsea from './productPages/apparel/Chelsea.jsx'
import Couch from './productPages/misc/Couch.jsx'
import GraphicsCard from './productPages/technology/GraphicsCard.jsx'
import Packers from './productPages/apparel/Packers.jsx'
import Switch2 from './productPages/technology/Switch2.jsx'
import WhiteSox from './productPages/apparel/WhiteSox.jsx'
import Checkout from './Pages/Checkout.jsx'
import Category from './Pages/Category.jsx'
import Coffee from './productPages/misc/Coffee.jsx'
import Motorcycle from './productPages/misc/Motorcycle.jsx'
import Slushi from './productPages/misc/Slushi.jsx'
import Sodastream from './productPages/misc/Sodastream.jsx'
import Airpodsmax from './productPages/technology/Airpodsmax.jsx'
import Amd from './productPages/technology/Amd.jsx'
import Homepod from './productPages/technology/Homepod.jsx'
import Ps5 from './productPages/technology/ps5.jsx'
import Tv from './productPages/technology/tv.jsx'
import Xbox from './productPages/technology/xbox.jsx'

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
    path: 'products/wwe-championship-spinner', 
    element: <Belt />
  },
  {
    path: 'products/bedard-away-jersey', 
    element: <Blackhawks />
  },
  {
    path: 'products/palmer-home-jersey', 
    element: <Chelsea />
  },
  {
    path: 'products/couch', 
    element: <Couch />
  },
  {
    path: 'products/love-black-jersey', 
    element: <Packers/>
  },
  {
    path: 'products/nvidia-graphics-card', 
    element: <GraphicsCard />
  },
  {
    path: 'products/nintendo-switch-2', 
    element: <Switch2 />
  },
  {
    path: 'products/konerko-home-jersey', 
    element: <WhiteSox />
  },
  {
    path: 'products/ninja-coffee', 
    element: <Coffee />
  },
  {
    path: 'products/motorcycle', 
    element: <Motorcycle />
  },
  {
    path: 'products/ninja-slushi', 
    element: <Slushi />
  },
  {
    path: 'products/sodastream', 
    element: <Sodastream />
  },
  {
    path: 'products/amd', 
    element: <Amd />
  },
  {
    path: 'products/home-pod', 
    element: <Homepod />
  },
  {
    path: 'products/airpods-max', 
    element: <Airpodsmax />
  },
  {
    path: 'products/ps5', 
    element: <Ps5 />
  },
  {
    path: 'products/tv', 
    element: <Tv />
  },
  {
    path: 'products/xbox', 
    element: <Xbox />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
