import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import background from "./bgimage.jpg";
import aboutbackground from "./aboutbg.jpg";
import TypingEffect from './Typeeffect';
import Slider from 'react-slick';
import Contact from './Contact';
import Resume from './Resume';
 

 
const Home = () => {
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
          <>
            <div className=''>
               <div style={{ backgroundImage: `url(${background})` }} className='bg_image_banner'>
                    
                    <div className='container inner_content'>
                         <h5>I Am a</h5> 
                         <h1 className='mt-4'> <TypingEffect /></h1>
                         <ul className='list_style mt-4'>
                         <li><h6>web designer</h6>Creative designer</li>
                         <li><h6> UI & UX designer</h6> User experience</li>
                         <li><h6>web development</h6>Code creator</li>
                         </ul>

                    </div>
               </div>

               {/* About Section Start Here */}


               <div className='aboutbg'>
               <div style={{ backgroundImage: `url(${aboutbackground})` }} className='bg_image_banner_about'>
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
               <h1>My Expertise</h1>
               <div class="space-border mt-4 mb-5 "></div>
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
                    {/* <div className='marqBox'>
                    <marquee direction="left" behavior="scroll" scrollamount="10"><i class="fa fa-star id-color"></i> design is not just how it looks, design is how it works, operates &amp; serves its purpose effectively.</marquee>
                    </div> */}
               </div>
              </div>
            </div>
       
         </div>
               <Resume />
               <Contact />

             
          </>
       


// What I Do Section Start Here


         
     );

  };
   export default Home;