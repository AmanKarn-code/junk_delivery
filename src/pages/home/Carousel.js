import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = ["pizza", "burger", "milkshake", "chocolates"];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      {imageProp.map((image, index) => {
        return (
          <div key={index} style={{ maxHeight: "80vh" }} className=" brightness-50">
            <img
              src={`https://picsum.photos/200/300`}
              alt={image}
              className="object-fill object-center"
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;