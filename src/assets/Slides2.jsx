import React, { useEffect, useState, useRef } from "react";

// Slides data
const slides = [
  {
    title: "Buy 1 Get 1 Free",
    subtitle: "Pizzas",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cheesy-pizza-ad-template-design-d28e1780a25baaf5d679e35e85701166_screen.jpg?ts=1598794008",
    brand: "from Oven Story",
  },
  {
    title: "Wraps Starting at ₹99",
    subtitle: "",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-ads-design-template-45789a000e4e530f6a7b6abeb92e4176_screen.jpg?ts=1614168657",
    brand: "from Faasos",
  },
  {
    title: "Desserts Starting at ₹79",
    subtitle: "",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/momo-video-ads-design-template-61ff96b47d2c793dc8340c512f314b99_screen.jpg?ts=1737353493",
    brand: "from Sweet Truth",
  },
  {
    title: "Burger Combo ₹149",
    subtitle: "",
    image: "https://i.ytimg.com/vi/jx4AhF_KPOs/maxresdefault.jpg",
    brand: "from Burger House",
  },
  {
    title: "Sushi Platter ₹299",
    subtitle: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhUi8UUnS-cmTnUw7rxwaNOpTwLlOAvTfCA&s",
    brand: "from Sushi World",
  },
  {
    title: "Ice Cream @ ₹59",
    subtitle: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjsuaPGjOud8os5VhT4NkDtLEpfbPOi0f-w&s",
    brand: "from Frozen Magic",
  },
];

// DotLoader Component
const DotLoader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 items-center justify-center py-4">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1 rounded-full transition-all duration-200 ${
            i === activeIndex ? "bg-indigo-600 w-8" : "bg-gray-300 w-4"
          }`}
        />
      ))}
    </div>
  );
};

// Carousel Component
const Carousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth; // Adjust as needed
      if (direction === "left") {
        carouselRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        carouselRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="mt-8 max-w-screen-lg mx-auto">
      {/* Scrolling Carousel */}
      <div className="relative overflow-hidden group">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth"
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="flex-none w-1/3 h-[200px] md:h-[300px] lg:h-[300px] relative rounded-lg overflow-hidden mx-2"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-sm font-bold">{slide.title}</h2>
                <p className="text-xs">{slide.subtitle}</p>
                <div className="text-xs font-semibold mt-1">{slide.brand}</div>
              </div>

              {/* Navigation Buttons */}
              {idx === 0 && (
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white text-2xl"
                >
                  &#8592;
                </button>
              )}
              {idx === slides.length - 1 && (
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white text-2xl"
                >
                  &#8594;
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dot Loader AFTER the images */}
      <DotLoader />
    </div>
  );
};

export default Carousel;
