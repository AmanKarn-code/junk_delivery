import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = [
  { src: "https://picsum.photos/800/600?random=1", alt: "Interior", title: "Interior" },
  { src: "https://picsum.photos/800/600?random=2", alt: "Bench", title: "Bench" },
  { src: "https://picsum.photos/800/600?random=3", alt: "Landscape", title: "Landscape" },
  { src: "https://picsum.photos/800/600?random=4", alt: "Landscape", title: "Landscape" },
  { src: "https://picsum.photos/800/600?random=5", alt: "Landscape", title: "Landscape" },
  { src: "https://picsum.photos/800/600?random=6", alt: "Landscape", title: "Landscape" },
  { src: "https://picsum.photos/800/600?random=7", alt: "Landscape", title: "Landscape" }
];

function CarouselComponent() {
  return (
    <div className="w-full mx-auto relative py-4">
      <Carousel
        showStatus={false}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={60}
        emulateTouch={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        transitionTime={500}
        swipeable={true}
        dynamicHeight={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent p-8 transition-opacity duration-300 text-white font-bold h-full hover:bg-opacity-75"
              style={{
                // borderRadius: "0px 47px 50px 0px",
                background: "none", // No background by default
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage =
                  "linear-gradient(to bottom, rgb(256 256 256 / 0%),rgb(56 61 62/70%), rgb(256 256 256 / 0%))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
              }}
            >
              &lt;
            </button>
          )
          
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent p-8 transition-opacity duration-300 text-white font-bold h-full hover:bg-opacity-75"
            style={{
              // borderRadius: "0px 47px 50px 0px",
              background: "none", // No background by default
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, rgb(256 256 256 / 0%), rgb(56 61 62/70%), rgb(256 256 256 / 0%))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "none";
            }}
          >
              &gt;
            </button>
          )
        }
      >
        {imageProp.map((image, index) => (
          <div key={index} className="px-2">
            <div className="relative overflow-hidden rounded-lg transition-all duration-300 group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[300px] sm:h-[400px] object-cover transition-all duration-300 brightness-50"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              {/* <p className="absolute bottom-4 left-4 text-white text-lg sm:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.title}
              </p> */}
            </div>
          </div>
        ))}
      </Carousel>
      <style jsx global>{`
        .carousel .slide {
          transition: all 0.5s ease;
        }
        .carousel .slide.selected {
          transform: scale(1.1);
          z-index: 2;
        }
        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .carousel .slide:not(.selected) {
          filter: blur(4px);
          opacity: 0.7;
          transform: scale(0.8);
        }
        @media (max-width: 640px) {
          .carousel .slide:not(.selected) {
            transform: scale(0.9);
          }
        }
      `}</style>
    </div>
  );
}

export default CarouselComponent;
