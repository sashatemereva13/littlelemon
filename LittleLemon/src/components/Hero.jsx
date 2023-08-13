import heroImg from "../img/restauranfood.jpg";
import { Link } from "react-router-dom";
import "../components/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="heroFlex">
        <div className="heroTextFlex">
          <h1 className="littleLemonHeader">Little Lemon</h1>
          <h3>Chicago</h3>
          <p className="heroText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            expedita ut tempora nulla ullam alias voluptas veritatis magni!
            Ipsam voluptatibus aspernatur autem blanditiis quo magnam ducimus
            perferendis tempora facere doloribus! Qui consectetur delectus
            laboriosam iste! Ad natus, esse ipsa animi recusandae quaerat modi.
            Officiis neque iure nemo nam adipisci laborum, consequatur nihil
            earum.
          </p>
          <Link to="bookingform">
            <button className="bookAtableButton">Book a table</button>
          </Link>
        </div>
        <img
          className="heroImg"
          src={heroImg}
          alt="chef holding four types of sandwiches"
        />
      </div>
    </>
  );
};

export default Hero;
