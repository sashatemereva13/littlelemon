import "./Testimonials.css";
import woman from "../img/woman.jpg";
import woman1 from "../img/woman1.jpg";
import woman2 from "../img/woman2.jpg";
import man from "../img/man.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="testimonialsFlex">
        <h2>Testimonials</h2>
        <div className="usersFlex">
          <div className="userReview">
            <p> User Profile</p>
            <img src={woman} alt="woman" />
            <p>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </p>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="userReview">
            <p> User Profile</p>
            <img src={woman1} alt="woman" />
            <p>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </p>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="userReview">
            <p> User Profile</p>
            <img src={woman2} alt="woman" />
            <p>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </p>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="userReview">
            <p> User Profile</p>
            <img src={man} alt="man" />
            <p>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </p>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
