import logo from "../img/Logo.svg";
import Nav from "./Nav";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="headerFlex">
        <img src={logo} alt="logo of the little lemon restaurant" />
        <Nav />
      </div>
    </>
  );
};

export default Header;
