import "./Highlights.css";
import Carousel from "./HighlightsCarousel";

const Highlights = () => {
  return (
    <>
      <div className="highlightsFlex">
        <div className="headerButton">
          <h2>This weeks specials!</h2>
          <button>Online menu</button>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Highlights;
