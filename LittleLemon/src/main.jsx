import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Reservations from "./components/Reservations.jsx";
import OrderOnline from "./components/OrderOnline.jsx";
import LogIn from "./components/LogIn.jsx";
import BookingForm from "./components/BookingForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/bookingform" element={<BookingForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
