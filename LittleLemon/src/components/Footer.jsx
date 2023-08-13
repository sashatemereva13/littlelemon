import "./Footer.css";
import logo from "../img/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerFlex">
        <img src={logo} alt="little lemon logo" />
        <div className="navigationFlex">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/orderonline">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="contactsFlex">
          <h4>Contacts</h4>
          <p>address</p>
          <p>phone number</p>
          <p>email</p>
        </div>
        <div className="socialsFlex">
          <h4> Social Media</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
