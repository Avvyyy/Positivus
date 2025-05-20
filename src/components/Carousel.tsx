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
    <div className="bg-black rounded-3xl sm:px-10 py-12 lg:py-20 px-6 text-center text-white w-full mx-auto">
      {/* Carousel content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{opacity: 0, x: 20 }}
          animate={{opacity: 1,  x: 0 }}
          exit={{ opacity:0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-5"
        >
  
          <p className="text-base lg:text-lg text-justify w-full lg:w-3/4 m-auto">{current.text}</p>
          
          <h4 className="font-semibold text-lg flex flex-col gap-2 text-primary">
            {current.name}{" "}
            <span className="text-white font-normal text-sm">{current.role}</span>
          </h4>
        </motion.div>
      </AnimatePresence>
 
     

      {/* Dots */}
      <div className="flex items-center justify-between gap-3 mt-6 mx-auto w-4/5">
      <button
        onClick={goPrev}
        className="text-white text-4xl"
        aria-label="Previous"
      >
        <RxChevronLeft />
      </button>
      <div className="flex justify-center gap-3">
        {carouselData.map((_, index) => (
          <RiCircleFill
            key={index}
            onClick={() => handleDotClick(index)}
            className={`cursor-pointer lg:text-2xl text-lg ${
              index === currentIndex ? "text-primary" : "text-gray-500"
            }`}
          />
        ))}
        </div>
         <button
        onClick={goNext}
        className="text-white text-4xl"
        aria-label="Next"
      >
        <RxChevronRight />
      </button>
      </div>
    </div>
  );
}

export default Carousel;
