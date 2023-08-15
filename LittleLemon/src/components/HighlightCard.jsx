import { Link } from "react-router-dom";
import "./Highlights.css";

export default function HighlightCard(props) {
  return (
    <article>
      <section className="card">
        <img src={props.image} alt="special menu" className="cardImg" />
        <div className="cardText">
          <h4 className="nameOfDish"> {props.name}</h4>
          <h5 className="price">{props.price}</h5>
          <p>{props.description}</p>

          <Link to="orderOnline">
            <button className="orderButton">Order for delivery</button>
          </Link>
        </div>
      </section>
    </article>
  );
}
