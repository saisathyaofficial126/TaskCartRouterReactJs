import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
    return (
        <nav className="navbar">
            <p className="logo">FakeStore Shop</p>
            <div className="menus" >
                <NavLink to="/" className="nav-menu" >PRODUCTS</NavLink>
                <NavLink to="/cart" className="nav-menu">CART</NavLink><span className="cart-count-bg">{cartCount}</span>
            </div>
        </nav>
    );
};

export default Navbar;