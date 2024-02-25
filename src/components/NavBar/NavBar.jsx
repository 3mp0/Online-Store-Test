import './NavBar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useState, useEffect} from 'react'
import { Link, parsePath } from 'react-router-dom'

function NavBar() {
  const estadoInicial = localStorage.getItem('menu') || 'Tienda'
  const [menu, setMenu] = useState(estadoInicial)
  console.log(estadoInicial)
  const NavBarClickeada = (categoria, event) =>{
    event.preventDefault();
    setMenu(categoria);
  }
  
  useEffect(() => {
    localStorage.setItem('menu', menu);
  }, [menu]);
  
  return (
  <div className='navbar'>
    <div className='nav-logo'>
     <img src={logo} alt="Logo"/>
     <p>Tilines Store</p>
    </div>
    <ul className='nav-menu' style={{ display:'flex' ,justifyContent: 'center'}}>
      <li onClick={(event) => NavBarClickeada("Tienda", event)}>  
        <Link to='/' style={{textDecoration: 'none', color: 'inherit', height:'100%'}} >
          Tienda{menu === "Tienda" && <hr />}
        </Link>
      </li>
      <li onClick={(event) => NavBarClickeada("Hombre", event)}> 
        <Link to='/hombre' style={{textDecoration: 'none', color: 'inherit', height:'100%'}}>
          Hombre{menu === "Hombre" && <hr />}
        </Link>
      </li>   
      <li onClick={(event) => NavBarClickeada("Mujer", event)}>  
        <Link to='/mujer' style={{textDecoration: 'none', color: 'inherit', height:'100%'}}>
          Mujer{menu === "Mujer" && <hr />}
        </Link>
      </li> 
      <li onClick={(event) => NavBarClickeada("Nino", event)}>  
        <Link to='/nino' style={{textDecoration: 'none', color: 'inherit', height:'100%'}}>
          Niño{menu === "Nino" && <hr />}
        </Link>
      </li> 
    </ul>
    <div className='nav-login-cart'>
      <button>Login</button>
      <img src={cart_icon} alt="carro"/>
    </div>
  </div>)
}

export default NavBar;
