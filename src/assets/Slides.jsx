import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


// Slides data
const slides = [
  {
    title: "Buy 1 Get 1 Free",
    subtitle: "Pizzas",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cheesy-pizza-ad-template-design-d28e1780a25baaf5d679e35e85701166_screen.jpg?ts=1598794008",
    brand: "from Oven Story",
    link: "/faasosNoidaPage", // Ensure this matches the route in App.jsx
  },
  {
    title: "Wraps Starting at ₹99",
    subtitle: "",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-ads-design-template-45789a000e4e530f6a7b6abeb92e4176_screen.jpg?ts=1614168657",
    brand: "from Faasos",
    link: "/wrapsPage", // Add a route for this slide
  },
  {
    title: "Desserts Starting at ₹79",
    subtitle: "",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/momo-video-ads-design-template-61ff96b47d2c793dc8340c512f314b99_screen.jpg?ts=1737353493",
    brand: "from Sweet Truth",
    link: "/dessertsPage", // Add a route for this slide
  },
  {
    title: "Burger Combo ₹149",
    subtitle: "",
    image: "https://i.ytimg.com/vi/jx4AhF_KPOs/maxresdefault.jpg",
    brand: "from Burger House",
    link: "/burgerPage", // Add a route for this slide
  },
  {
    title: "Sushi Platter ₹299",
    subtitle: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhUi8UUnS-cmTnUw7rxwaNOpTwLlOAvTfCA&s",
    brand: "from Sushi World",
    link: "/sushiPage", // Add a route for this slide
  },
  {
    title: "Ice Cream @ ₹59",
    subtitle: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjsuaPGjOud8os5VhT4NkDtLEpfbPOi0f-w&s",
    brand: "from Frozen Magic",
    link: "/iceCreamPage", // Add a route for this slide
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
  const navigate = useNavigate();

  const handleSlideClick = (link) => {
    if (link) {
      navigate(link); // Navigate to the specified route
    }
  };

  return (
    <div className="mt-8 max-w-screen-lg mx-auto">
      {/* Scrolling Carousel */}
      <div className="relative overflow-hidden group">
        <div className="flex animate-scroll group-hover:animate-none">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="flex-none w-1/6 relative rounded-lg overflow-hidden mx-2 cursor-pointer"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "150px",
              }}
              onClick={() => handleSlideClick(slide.link)} // Handle click event
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-sm font-bold">{slide.title}</h2>
                <p className="text-xs">{slide.subtitle}</p>
                <div className="text-xs font-semibold mt-1">{slide.brand}</div>
              </div>
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