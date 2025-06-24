import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom'

export default function NavBar() {
     return (
          <div className="nav-bar">
               <h1 className='Logo'>Logo.</h1>
                    <div className="nav-links">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <CartWidget />
                   </div>
          </div>
     )
}