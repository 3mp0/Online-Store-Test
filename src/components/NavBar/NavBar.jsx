import './NavBar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useState } from 'react'

function NavBar() {
  const [menu, setMenu] = useState("Tienda")
  const NavBarClickeada = (click) =>{
    setMenu(click)
  }
  return (
  <div className='navbar'>
    <div className='nav-logo'>
     <img src={logo} alt="Logo"/>
     <p>Tilines Store</p>
    </div>
    <ul className='nav-menu'>
        <li onClick={() => NavBarClickeada("Tienda")}>
          Tienda{menu === "Tienda" && <hr />}
        </li>
        <li onClick={() => NavBarClickeada("Potaxies")}>
          Potaxies{menu === "Potaxies" && <hr />}
        </li>
        <li onClick={() => NavBarClickeada("Tilines")}>
          Tilines{menu === "Tilines" && <hr />}
        </li>
        <li onClick={() => NavBarClickeada("Acerca")}>
          Acerca{menu === "Acerca" && <hr />}
        </li>
    </ul>
    <div className='nav-login-cart'>
      <button>Login</button>
      <img src={cart_icon} alt="carro"/>
    </div>
  </div>)
}

export default NavBar;
