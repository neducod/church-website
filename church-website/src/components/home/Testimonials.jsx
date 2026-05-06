import { useState, useEffect } from "react";

import { GrPrevious } from "react-icons/gr";
// import { GrFormNext } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const testimonials = [
    { 
        name: "John Kennedy",
        title: "Trusting Through the Storm",
        text: "Losing my job during a difficult economic season left me hopeless and deeply stressed about how to provide for my family. The church not only rallied around us with practical support but also surrounded us with a community that reminded us of God's faithfulness. Through the waiting, my faith deepened, and I eventually found a career that is more fulfilling than I could have imagined"
    },
    { 
        name: "Sarah", 
        title: "Rebuilding What Was Broke",
        text: "A few years ago, my marriage was on the verge of collapsing. We had stopped communicating and were living like roommates heading in opposite directions. Through the church's marriage mentorship program and the prayer ministry, we learned how to forgive, communicate, and rebuild. Today, our marriage is stronger, healthier, and more Christ-centered than it has ever been" 
    },
    { 
        name: "Mike",
        title: "A Fresh Start",
        text: "I spent years carrying the heavy weight of my past mistakes, feeling entirely unworthy of God's love. One Sunday, hearing a message about radical grace changed everything for me. I finally stopped trying to earn my worth and accepted that I am already forgiven. The chains of shame are broken, and I am walking forward with a renewed sense of purpose."  
    },
    {
        name: "Grace Sel",
        title: "Hope in the Valley",
        text: "During my battle with illness, the fear was completely overwhelming, and my faith was tested to its limits. There were days I couldn't pray, but this church family prayed for me. The meals, the visits, and the unwavering support carried me through the darkest season of my life. God’s healing and comforting presence became so real to me through the hands and hearts of His people"
    },
    {
        name: "Chris Zoe",
        title: "From Isolation to Family",
        text: "When I first moved to this city, I felt completely alone and overwhelmed. Walking through the doors of the church for the first time, I was terrified. But the genuine warmth of the people, combined with the community I found in my small group, quickly turned that fear into a sense of belonging. I didn’t just find a building; I found a home and a family that has stood by me ever since."
    }
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
    <div className="max-w-xl mx-auto text-center p-8 shadow-lg rounded-2xl">
        <div>
            <h1 className="text-2xl p-4">What marvellous thing has the Lord done in your life</h1>
        </div>
  <p className="text-lg italic mb-4 bg-[#954535] text-white p-4 border-double border-pink-700">
    "{testimonials[index].text}"
  </p>
  <h4 className="font-bold">{testimonials[index].name}</h4>
  <p className="text-pink-600">{testimonials[index].title}</p>

  <div className="flex justify-center gap-4 mt-4">
    <button onClick={prevSlide}><GrPrevious /></button>
    <button onClick={nextSlide}><GrNext /></button>
  </div>
</div>
    );
    }