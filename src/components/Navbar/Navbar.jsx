import './Navbar.css'

function Navbar() {
    return(
        <div className="navbody">
            <div className="left">
                <h2>
                    <a href="#">Radiant Plates</a>
                </h2>
            </div>
            <div className="nav-links">
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#faq">FAQ</a>
            </div>
        </div>
    );
}

export default Navbar;