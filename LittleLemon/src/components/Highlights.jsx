import "./Highlights.css";
import greekSalad from "../img/greekSalad.jpg";
import bruschetta from "../img/bruschetta.png";
import lemonDessert from "../img/lemonDessert.jpg";
import iconBike from "../img/iconBike.svg";

const Highlights = () => {
  return (
    <>
      <div className="highlightsFlex">
        <div className="headerButton">
          <h2>This weeks specials!</h2>
          <button>Online menu</button>
        </div>

        <div className="cardsFlex">
          <div className="card">
            <img src={greekSalad} alt="greek salad" className="cardImg" />

            <div className="cardTextGrid">
              <h4 className="nameOfDish">Greek Salad</h4>
              <p className="price">£12.99</p>
              <p className="dishDescription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <a href="#" className="orderAdelivery">
                Order a delivery<i class="bx bx-fork"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <img src={bruschetta} alt="bruschetta" className="cardImg" />

            <div className="cardTextGrid">
              <h4 className="nameOfDish">Bruschetta</h4>
              <p className="price">£12.99</p>
              <p className="dishDescription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <a href="#" className="orderAdelivery">
                Order a delivery<i class="bx bx-fork"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <img src={lemonDessert} alt="lemon dessert" className="cardImg" />

            <div className="cardTextGrid">
              <h4 className="nameOfDish"> Lemon Dessert</h4>
              <p className="price">£12.99</p>
              <p className="dishDescription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <a href="#" className="orderAdelivery">
                Order a delivery<i class="bx bx-fork"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlights;
