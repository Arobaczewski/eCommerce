import { useState } from 'react'
import Header from './Components/Header.jsx';
import Products from './Components/Products.jsx';
import Footer from './Components/Footer.jsx';
import bedardJersey from './Pictures/bedardJersey.jpg'
import CPjersey from './Pictures/CPjersey.jpg'
import konerkojersey from './Pictures/konerkojersey.jpg'
import couch from './Pictures/couch.jpeg'
import graphicsCard from './Pictures/graphicsCard.jpg'
import loveJersey from './Pictures/loveJersey.jpg'
import loveJersey2 from './Pictures/loveJersey2.jpg'
import switch2 from './Pictures/switch2.jpg'
import wweSpinner from './Pictures/wweSpinner.jpeg'
import wweSpinner2 from './Pictures/wweSpinner2.jpeg'

function App() {
      const [items, setItems] = useState([{
        apparel: {
          whitesox: {
              size: 'large',
              price: 200,
              description: 'Rep your favorite Chicago White Sox legend with this Home Limited Konerko Roster Jersey. This Nike jersey was crafted by using the lightweight comfort of stretch mesh fabric and features an authentic look with twill details. The innovative Vapor Premier chassis allows for more flexible movement and teams up with Dri-FIT technology to deliver exceptional sweat-wicking power.',
              image: konerkojersey
          },
          chelsea: {
              size: 'extra large',
              price: 132,
              description: `Celebrate the storied history of the club and the ever-evolving, vibrant spirit of London with Chelsea FC's 2025-26 Home kit. This replica jersey features classic Chelsea blue and a subtle print inspired by the city's architecture. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team. Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable.`,
              image: CPjersey
          },
          packers: {
              size: 'large',
              price: 130,
              description: `Celebrate the storied history of the club and the ever-evolving, vibrant spirit of London with Chelsea FC's 2025-26 Home kit. This replica jersey features classic Chelsea blue and a subtle print inspired by the city's architecture. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team. Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable.`,
              image: loveJersey,
              image2: loveJersey2
          },
          blackhawks: {
              size: 'large',
              price: 175,
              description: `You can experience the same excitement you feel while watching the Chicago Blackhawks play every time you put on this Connor Bedard Premier Breakaway Player jersey from Fanatics. This exclusive piece of gear features bold colors and graphics, modeled after the jersey your favorite player wears, that let everyone know you're a devout fan. The fabric technologies built into this Chicago Blackhawks jersey also ensure you stay comfortable through every game this season.`,
              image: bedardJersey
          },
        },
        technology: {
          graphicsCard: {
              size: 'large',
              price: 175,
              description: `You can experience the same excitement you feel while watching the Chicago Blackhawks play every time you put on this Connor Bedard Premier Breakaway Player jersey from Fanatics. This exclusive piece of gear features bold colors and graphics, modeled after the jersey your favorite player wears, that let everyone know you're a devout fan. The fabric technologies built into this Chicago Blackhawks jersey also ensure you stay comfortable through every game this season.`,
              image: graphicsCard
          },
          switch2: {
              size: 'large',
              price: 175,
              description: `You can experience the same excitement you feel while watching the Chicago Blackhawks play every time you put on this Connor Bedard Premier Breakaway Player jersey from Fanatics. This exclusive piece of gear features bold colors and graphics, modeled after the jersey your favorite player wears, that let everyone know you're a devout fan. The fabric technologies built into this Chicago Blackhawks jersey also ensure you stay comfortable through every game this season.`,
              image: switch2
          }
        },
        misc: {
          belt: {
              size: 'large',
              price: 175,
              description: `You can experience the same excitement you feel while watching the Chicago Blackhawks play every time you put on this Connor Bedard Premier Breakaway Player jersey from Fanatics. This exclusive piece of gear features bold colors and graphics, modeled after the jersey your favorite player wears, that let everyone know you're a devout fan. The fabric technologies built into this Chicago Blackhawks jersey also ensure you stay comfortable through every game this season.`,
              image: wweSpinner,
              image2: wweSpinner2
          },
          couch: {
              size: 'large',
              price: 175,
              description: `You can experience the same excitement you feel while watching the Chicago Blackhawks play every time you put on this Connor Bedard Premier Breakaway Player jersey from Fanatics. This exclusive piece of gear features bold colors and graphics, modeled after the jersey your favorite player wears, that let everyone know you're a devout fan. The fabric technologies built into this Chicago Blackhawks jersey also ensure you stay comfortable through every game this season.`,
              image: couch
          }
        }
    }]);

  return (
    <>
    <Header/>
    <div>
    <Products items={items}/>
    </div>
    <Footer/>
    </>
  )
}

export default App
