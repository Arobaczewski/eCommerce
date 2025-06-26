import { Link } from "react-router-dom"
import Header from "../Components/Header"
import Footer from '../Components/Footer'

function Contact(){

    return (
        <div>
            <Header/>
            <h1>Contact Us</h1>
            <label>If you have any questions regarding this website, please contact us at:</label>
            <ul>
                <li>Phone: 3123304288</li>
                <li>Email: Alexander.Robaczewski@gmail.com</li>
                <li><Link to='https://www.linkedin.com/in/alexander-robaczewski/'>Linkedin</Link></li>
            </ul>
            <Footer/>
        </div>
    )
}

export default Contact