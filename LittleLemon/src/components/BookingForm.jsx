import "./BookingForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.svg";

const BookingForm = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");

  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");

  const [chosenTime, setChosenTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  const handleDateChange = (e) => {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setChosenTime(
      props.availableTimes.map((times) => <option>{times}</option>)
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFName("");
    setLName("");
    setEmail("");
    setTel("");
    setDate("");
    setGuests("");
    setOccasion("");
    setPreferences("");
    setChosenTime("");
  };

  return (
    <>
      <div className="bookingFormPosition">
        <img src={logo} className="logo" />
        <div>
          <form onSubmit={handleSubmit} className="bookingFormFlex">
            <div className="Form">
              <label htmlFor="fName">First Name:</label>
              <input
                type="text"
                id="fName"
                placeholder="First Name"
                required
                minLength={2}
                maxLength={50}
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>

            <div className="Form">
              <label htmlFor="lName">Last Name:</label>
              <input
                type="text"
                id="lName"
                placeholder="Last Name"
                required
                minLength={2}
                maxLength={50}
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>

            <div className="Form">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                required
                minLength={4}
                maxLength={200}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="Form">
              <label htmlFor="phonenum">Phone Number</label>
              <input
                type="tel"
                id="phonenum"
                placeholder="(xxx)-xxx-xxxx"
                value={tel}
                required
                minLength={10}
                maxLength={25}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>

            <div className="Form">
              <label htmlFor="date">
                <i className="bx bx-calendar-check"></i>Date: {date}
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={handleDateChange}
                required
              />
            </div>

            <div className="Form">
              <label htmlFor="time">
                <i className="bx bx-time"></i>Time: {setChosenTime}
              </label>
              <select id="time" required>
                {chosenTime}
              </select>
            </div>

            <div className="Form">
              <label htmlFor="guests">
                <i className="bx bx-smile"></i>Number of guests: {guests}
              </label>
              <input
                id="guests"
                type="range"
                min="1"
                max="15"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <div className="Form">
              <label htmlFor="occasion">
                <i className="bx bx-party"></i>Occasion: {occasion}
              </label>
              <select
                id="occasion"
                type="text"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option> None</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Annivarsary</option>
                <option>Other</option>
              </select>
            </div>

            <div className="Form">
              <label htmlFor="preferences">Additional preferences:</label>
              <textarea
                id="preferences"
                rows={8}
                cols={50}
                placeholder="Additional preferences"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
              ></textarea>
            </div>

            <div>
              <Link to="/confirmation">
                <button
                  aria-label="submit the form"
                  disabled={
                    !fName || !lName || !email || !tel || !date || !guests
                  }
                  type="submit"
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
