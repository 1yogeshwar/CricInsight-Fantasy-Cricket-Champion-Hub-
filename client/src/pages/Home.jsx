import React, { useState, useEffect } from 'react';
import backgroundImage1 from '../images/hock.jpg'; // Import the image
import backgroundImage2 from '../images/Che.jpg'; // Import the image
import Join from './Join';
import Testimonial from './Testimonial';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      image: backgroundImage2,
      h1: "Welcome to CricInsight",
      h4: "Unlock Cricket Insights for Winning Fantasy Teams",
      button: "Join Now"
      },
      {
        image: backgroundImage1,
        h1: "Optimize Your Fantasy Team Strategy",
        h4: "Strengthen Your Fantasy Team with Comprehensive Statistical Analysis",
        button: "Know More"
      }
      
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
    <div className="testimonial-slider">
      <div className="testimonial-content">
        <img src={testimonials[currentSlide].image} alt={`Testimonial ${currentSlide + 1}`} />
        <div className="content">
          <h1 style={{fontFamily:"initial"}}>{testimonials[currentSlide].h1}</h1>
          <h4>{testimonials[currentSlide].h4}</h4>
          {/* Join Now button */}
          {currentSlide === 0 ? (
            <Link to="/register" className="white-button">{testimonials[currentSlide].button}</Link>
          ) : (
            <Link to="/service" className="white-button">{testimonials[currentSlide].button}</Link>
          )}
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span key={index} className={index === currentSlide ? "dot active" : "dot"} onClick={() => setCurrentSlide(index)}></span>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
      <Join/>
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
