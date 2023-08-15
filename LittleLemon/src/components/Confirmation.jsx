import { Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import "./Confirmation.css";

const Confirmation = () => {
  return (
    <>
      <header className="confirmation-header">
        <img className="confirmationImg" src={logo} alt="Little Lemon Logo" />
        <div className="reservationDetails">
          <section className="reservationText">
            <h1> Your Reservation is Confirmed!</h1>
            <h4> A confirmation has been sent to your email.</h4>
            <h4>Thanks for dining with us!</h4>
          </section>

          <section className="redirectButtons">
            <Link to="/orderOnline">
              <button>Order Online</button>
            </Link>
            <Link to="/">
              <button>Home Page</button>
            </Link>
          </section>
        </div>
      </header>
    </>
  );
};

export default Confirmation;
