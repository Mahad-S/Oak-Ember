import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
           
                 <Link to="/" className="logo-image"></Link>
           

            <div className= "links">
                <Link to = "/shop">Shop</Link>
                <Link to="/location">Location</Link>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;