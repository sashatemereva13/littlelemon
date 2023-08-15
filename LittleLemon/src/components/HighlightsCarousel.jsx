import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Make sure to import the CSS
import HighlightCard from "./HighlightCard"; // Import your HighlightCard component
import "./Highlights.css";

import greekSaladImage from "../img/greekSalad.jpg";
import bruschettaImage from "../img/bruschetta.png";
import lemonDessertImage from "../img/lemonDessert.jpg";
import grilledChickenImage from "../img/grilledChicken.jpg";
import deliCouscousImage from "../img/deliCouscous.jpg";
import antipastiSalmonImage from "../img/antipastiSalmon.jpg";

const CustomCarousel = () => {
  const cardData = [
    {
      image: greekSaladImage,
      name: "Greek Salad",
      price: "$12.99",
      description:
        "Refreshing salad with tomato, lettuce, feta cheese, and olives.",
    },
    {
      image: bruschettaImage,
      name: "Bruschetta",
      price: "$16.99",
      description: "Toasted bread topped with tomato, prosciutto, and cheese.",
    },
    {
      image: lemonDessertImage,
      name: "Lemon Dessert",
      price: "$8.50",
      description: "Fresh baked lemon bread coated in salt and sugar.",
    },
    {
      image: grilledChickenImage,
      name: "Grilled Chicken with Quinoa Greek Salad",
      price: "$18.99",
      description: "Grilled chicken served with quinoa Greek salad.",
    },
    {
      image: deliCouscousImage,
      name: "Deli Couscous",
      price: "$14.99",
      description: "Delicious couscous with assorted vegetables.",
    },
    {
      image: antipastiSalmonImage,
      name: "Antipasti Salmon",
      price: "$22.99",
      description: "Antipasti-style salmon served with fresh herbs.",
    },
    // Add more cards here
  ];

  return (
    <div className="carouselContainer">
      <Carousel
        showArrows={true}
        showThumbs={false} // Show the thumbs (indicator dots)
        className="carousel"
        emulateTouch={true} // Allow touch interactions
        showStatus={false} // Hide the status bar
        swipeable={false} // Enable swipe gestures
        infiniteLoop={true} // Loop through the carousel
        dynamicHeight={false} // Set to true if you want dynamic card heights
        centerMode={true} // Enable center mode for responsive display
        centerSlidePercentage={25} // Adjust based on your design
        selectedItem={1} // Start with the first item selected
      >
        {cardData.map((card, index) => (
          <div key={index} className="carouselCard">
            <HighlightCard
              image={card.image}
              name={card.name}
              price={card.price}
              description={card.description}
              className="card"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
