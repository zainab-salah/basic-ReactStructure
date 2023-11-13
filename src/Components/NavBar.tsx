// NavBar.js
import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
    <nav>
       <ul className='flex items-center gap-10'>
          <li>
             <NavLink to="/">Home</NavLink>
          </li>
          <li>
             <NavLink to="/about">About</NavLink>
          </li>
          <li>
             <NavLink to="/products">Products</NavLink>
          </li>
       </ul>
    </nav>
 );
};

export default NavBar;