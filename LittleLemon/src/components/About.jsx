import "./About.css";

import chef from "../img/chef.jpg";
import chefs from "../img/chefs.jpg";

const About = () => {
  return (
    <>
      <div className="aboutFlex">
        <div className="aboutTextFlex">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            expedita ut tempora nulla ullam alias voluptas veritatis magni!
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="aboutChefs">
          <img src={chef} alt="Mario" className="Mario" />
          <img src={chefs} alt="Mario and Adrian" className="MarioAdrian" />
        </div>
      </div>
    </>
  );
};

export default About;
