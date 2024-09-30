// src/About.js
import React from 'react';
import Slider from 'react-slick';
import background from "./aboutbg.jpg";
import { FaStar } from 'react-icons/fa'; // Import an icon from react-icons

const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
    arrows: false, // Disable arrows
  };

  return (
    <div className='aboutbg'>
      <div style={{ backgroundImage: `url(${background})` }} className='bg_image_banner_about'>
      <h1>About Me</h1> 
      <div class="space-border mt-4 "></div>
      <p>
        As a seasoned Front-End Web Designer with 4+ years of experience,
        I specialize in UI/UX, crafting beautiful and responsive web experiences.
        My passion lies in creating user-friendly interfaces that leave a lasting impression.
        Proficient in HTML5, CSS3, Bootstrap, WordPress, React.js, JQuery, and more, I love to get new
        experiences and always learn from my surroundings. I've done more than 285 projects.
        You can check it through portfolio section on this website.
        I looking forward to any opportunities and challenges.
      </p>

    <div className='max_width'>
      <Slider {...settings}>
        <div>
          <img src="./react.svg" alt="React" />
        </div>
        <div>
          <img src="./figma w.svg" alt="Angular" />
        </div>
        <div>
          <img src="./bootstrap.svg" alt="Bootstrap" />
        </div>
        <div>
          <img src="./wp w.svg" alt="WordPress" />
        </div>
        <div>
          <img src="./swi prolog .svg" alt="Swi Prolog" />
        </div>
        <div>
          <img src="./adobe w.svg" alt="adobe" />
        </div>
        <div>
          <img src="/shopify w.svg" alt="shopify" />
        </div>
      </Slider>
    </div>
         <div className='marqBox pt-5 mt-5'>
          <marquee direction="left" behavior="scroll" scrollamount="10"> <FaStar size={30} color="#fff" /> {/* Star Icon */} design is not just how it looks, design is how it works, operates &amp; serves its purpose effectively<FaStar size={30} color="#fff" /></marquee>
          </div>
    </div>
    </div>
  );
};

export default About;
