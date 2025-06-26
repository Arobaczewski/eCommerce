import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import App from './App.jsx'
import ProductPage from './productPages/ProductPage.jsx'
import Favorites from './Pages/Favorites.jsx'
import NotFound from './Pages/NotFound.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Belt from './productPages/Belt.jsx'
import Blackhawks from './productPages/Blackhawks.jsx'
import Chelsea from './productPages/Chelsea.jsx'
import Couch from './productPages/Couch.jsx'
import GraphicsCard from './productPages/GraphicsCard.jsx'
import Packers from './productPages/GraphicsCard.jsx'
import Switch2 from './productPages/Switch2.jsx'
import WhiteSox from './productPages/WhiteSox.jsx'
import Checkout from './Pages/Checkout.jsx'

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
    path: '/belt', 
    element: <Belt />
  },
  {
    path: '/blackhawks', 
    element: <Blackhawks />
  },
  {
    path: '/chelsea', 
    element: <Chelsea />
  },
  {
    path: '/couch', 
    element: <Couch />
  },
  {
    path: '/graphicscard', 
    element: <GraphicsCard />
  },
  {
    path: '/packers', 
    element: <Packers />
  },
  {
    path: '/switch', 
    element: <Switch2 />
  },
  {
    path: '/whitesox', 
    element: <WhiteSox />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
