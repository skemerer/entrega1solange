import CartWidget from "../CartWidget/CartWidget";
import './NavBar.scss';

const NavBar = () => {
  return (

   <header>
    <h1>Comida Venezolana</h1>
    <nav>
        <ul>
            <li>Tequeños</li>
            <li>Arepas</li>
            <li>Empanadas</li>
            <li>Panaderia</li>
        </ul>
    </nav>

    <CartWidget/>

   </header>
  )
}

export default NavBar