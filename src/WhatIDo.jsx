// src/About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import backgroundVideo from './whatido.mp4'; // Import the background video
import { SlNote } from "react-icons/sl"; // Import an icon from react-icons
import { HiComputerDesktop } from "react-icons/hi2";
import { FaFileCode } from "react-icons/fa";


const WhatIDo = () => {
  return (
    <div className='whatIDo'>
      {/* Video Background */}
      <video autoPlay muted loop id="background-video" style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        top: 0,
        left: 0,
        zIndex: -2
      }}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#151C22B3', // Semi-transparent overlay color
        zIndex: -1
      }}></div>
 
      <div className='bg_image_banner'>
        <section id="section-contact" className="jarallax">
          <div className="container z-index-1000 whatdc">
            <div className="row">
              <div className="col-md-12 text-center wow fadeInUp text-white">
                <h1>What I Do</h1>
                <div className="space-border mt-4 mb-5"></div>
              </div>
            </div>
            <div className='conatctcenter_'>
            <div className='row'>
             
              <div className='skills__ col-md-4 text-center ps-4'>
                <div className='d-flex gap-3'> 
                   <div> <SlNote size={40} color="#b5d051" /> </div>
                   <h3>Web Designer</h3>
                </div>
                   <p className='pt-4'>A web designer creates visual elements for websites, focusing on layout, color, typography, user experience, aesthetics, and interactive features.</p>
              </div>

              <div className='skills__ col-md-4 text-center ps-4'>
                <div className='d-flex gap-3'> 
                   <div> <HiComputerDesktop size={40} color="#b5d051" /> </div>
                   <h3>UI/UX Designer</h3>
                </div>
                   <p className='pt-4'>UI/UX designers focus on user interface and user experience, crafting intuitive layouts, user flows, interactions, usability, accessibility, and visual design.</p>
              </div>

              <div className='skills__ col-md-4 text-center ps-4'>
                <div className='d-flex gap-3'> 
                   <div> <FaFileCode  size={40} color="#b5d051" /> </div>
                   <h3>Web Development</h3>
                </div>
                   <p className='pt-4'>Web development involves designing, coding, and maintaining websites, including front-end and back-end, databases, server management, security, and performance optimization.</p>
              </div>
            </div>
            </div>
          </div>
          
          <div className="de-gradient-edge-bottom"></div>
        </section>
        
      </div>
    </div>
  );
};

export default WhatIDo;
