import dayjs from 'dayjs';
import './Footer.css'

function Footer() {
    return(
        <footer className='footer'>
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Radiant Plates</h3>
                    <p>Insert small mission statement here.</p>
                </div>
                <div className="footer-links">
                    <a href="#about">About Us</a>
                    <a href="#services">Our Services</a>
                    <a href="mailto:info@radiantplate.org" target='_blank'>Contact Us</a>
                </div>
                <div className="footer-bottom">
                    <small>
                        &copy; {dayjs().year()} Radiant Plates. All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;