import logo from "../../assets/svg-logo.svg";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="navbody">
      <div className="left">
        <h2>
          <a href="#" className="brand" onClick={closeMenu}>
            <img src={logo} alt="" className="nav-logo" />
            <span className="brand-name">Radiant Plates</span>
          </a>
        </h2>
      </div>

      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="nav-links"
        aria-label="Toggle menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <div
        id="nav-links"
        className={`nav-links${open ? " open" : ""}`}
        onClick={closeMenu}
      >
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#faq">FAQ</a>
        <a href="#support">Support</a>
        <a href="#contact">Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar;
