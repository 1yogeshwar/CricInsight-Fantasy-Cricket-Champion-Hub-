import React, { useState, useEffect } from 'react';
import Client1 from '../images/ins.webp'; 
import Client2 from '../images/rav.webp'; 
import Client3 from '../images/ch.jpg';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle automatic slide change every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 9000); // Change interval time as needed

    return () => clearInterval(intervalId); // Clean up the interval
  }, []); // Empty dependency array to run the effect only once

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const testimonials = [

    {
      text: "Stats and matchups are vital in cricket, aiding strategy, decision-making, and adaptation to field conditions for success.",
      name: "Ian Chappell",
      image: Client1 // Use the imported image here
    },
    {
      text: "Fantasy cricket success hinges on stats, pitch insights, and strategic player selection. Choose wisely for optimal team performance.",
      name: "Akash Chopra",
      image: Client3
    },
  
    {
      text: "Pitch reports are crucial. They guide our strategy by revealing conditions. Understanding the pitch is key to success in cricket.",
      name: "Ravi Shastri",
      image: Client2
    }
  ];

  return (
    <section className="testimonial text-center">
      <div className="container">
        <div className="heading white-heading">
        Expert Views
        </div>
        <div id="testimonialCarousel" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="false" data-duration="2000">

          <div className="carousel-inner" role="listbox">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={index === activeIndex ? "carousel-item active" : "carousel-item"}>
                <div className="testimonial4_slide">
                  <img src={testimonial.image} className="img-circle img-responsive" alt={`testimonial-${index}`} />
                  <p>{testimonial.text}</p>
                  <h4>{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
          <ol className="carousel-indicators">
            {testimonials.map((_, index) => (
              <li key={index} className={index === activeIndex ? "active" : ""} onClick={() => handleDotClick(index)}></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
