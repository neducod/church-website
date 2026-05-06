import { useState, useEffect } from "react";

const testimonials = [
    { name: "John", text: "This is amazing!" },
    { name: "Sarah", text: "Loved the service!" },
    { name: "Mike", text: "Highly recommend!" },
];



export default function TestimonialSlider() {
    const [index, setIndex] = useState(0);
  
    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    };
  
    const prevSlide = () => {
      setIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    };
return(
    <div className="max-w-xl mx-auto text-center p-6 shadow-lg rounded-2xl">
  <p className="text-lg italic mb-4">
    "{testimonials[index].text}"
  </p>
  <h4 className="font-bold">{testimonials[index].name}</h4>

  <div className="flex justify-center gap-4 mt-4">
    <button onClick={prevSlide}>Prev</button>
    <button onClick={nextSlide}>Next</button>
  </div>
</div>
    );
    }