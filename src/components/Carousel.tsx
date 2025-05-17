import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCircleFill } from "react-icons/ri";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx"; 

function Carousel() {
  const carouselData = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "Jane Doe",
      role: "Head of Growth at ABC Ltd",
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "Michael Chen",
      role: "CTO at Startly",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = carouselData[currentIndex];

  const handleDotClick = (index: number) => setCurrentIndex(index);

  const goPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );

  const goNext = () =>
    setCurrentIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="bg-black rounded-3xl p-20 text-center text-white m-full mx-auto relative">
      {/* Carousel content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{opacity: 0, x: 20 }}
          animate={{opacity: 1,  x: 0 }}
          exit={{ opacity:0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg mb-4">{current.text}</p>
          <h4 className="font-semibold text-lg flex flex-col gap-2 text-primary">
            {current.name}{" "}
            <span className="text-white font-normal text-sm">{current.role}</span>
          </h4>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-3 -translate-y-1/2 text-white text-5xl"
        aria-label="Previous"
      >
        <RxChevronLeft />
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-3 -translate-y-1/2 text-white text-5xl"
        aria-label="Next"
      >
        <RxChevronRight />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {carouselData.map((_, index) => (
          <RiCircleFill
            key={index}
            onClick={() => handleDotClick(index)}
            className={`cursor-pointer text-2xl ${
              index === currentIndex ? "text-primary" : "text-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
