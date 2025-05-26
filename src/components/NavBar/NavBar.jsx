import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'

export default function NavBar() {
     return (
          <div className="nav-bar">
               <h1 className='Logo'>Logo</h1>
                    <div className="nav-links">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            <CartWidget />
                   </div>
          </div>
     )
}