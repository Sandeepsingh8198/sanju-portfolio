import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Resume() {
  return (
    <div className="resume_bg h-100 pt-5">
      <div className="col-md-12 text-center wow fadeInUp text-white">
        <h1>My Resume</h1>
        <div className="space-border mt-4 mb-5"></div>

        <div className="container">
          <div class="row resume_main justify-content-center align-items-center g-2">
            <div class="col-md-6">
              <div className="d-flex gap-4">
                <img src="./exp.svg" alt="" />
                <h3>Experiences</h3>
              </div>
              <div className="fgjk ps-5 mt-4">
                <h4><span>1</span>May 2023 - Present</h4>
              </div>
              <div className="dataresume ms-3 ps-4">
                <h5>Senior web designer</h5>
                <h6>caresort web solutions</h6>
                <p>
                  As a Senior Web Designer, my role involves leading the design
                  process, creating visually appealing and user-friendly
                  interfaces, collaborating with developers, ensuring brand
                  consistency, and optimizing the overall user experience across
                  web platforms.
                </p>
              </div>
              <br></br>
              <div className="fgjk ps-5 mt-4">
                <h4><span>2</span>April 2022 - May 2023</h4>
              </div>
              <div className="dataresume ms-3 ps-4">
                <h5>web Designer</h5>
                <h6>My Virtual Partners</h6>
                <p>
                  As a Web Designer, I craft visually engaging and user-friendly
                  website layouts, ensuring brand consistency. I collaborate
                  with developers and content creators to create seamless online
                  experiences, focusing on aesthetics and usability.
                </p>
              </div>
              <br></br>
              <div className="fgjk ps-5 mt-4">
                <h4><span>3</span>June 2021 - May 2022</h4>
              </div>
              <div className="dataresume ms-3 ps-4">
                <h5>web Designer</h5>
                <h6>Dabster SoftTech</h6>
                <p>
                  As a Web Designer, I specialize in crafting visually stunning
                  and intuitive website layouts that captivate users and elevate
                  brands. I work closely with developers and content creators to
                  create seamless, immersive online experiences that blend
                  aesthetics with functionality.
                </p>
              </div>
            </div>

            <div class="col-md-6">
               
              <div className="d-flex gap-4">
                <img src="./edu.svg" alt="" />
                <h3>Education</h3>
              </div>
              <div className="fgjk ps-5 mt-4">
                <h4><span>1</span>2013 - 2014</h4>
              </div>
              <div className="dataresume ms-3 ps-4">
                <h5>Diploma in Computer Application (DCA)</h5>
                <h6>Rashtriya Sarv Shiksha Abhiyan - RSSA</h6>
                <p>
                  Through the Rashtriya Sarv Shiksha Abhiyan, I gained
                  foundational knowledge of languages and began applying it
                  practically. This sparked my interest in technology, driving
                  my passion for exploring and mastering new tech advancements.
                </p>
              </div>
              <br></br>
              <div className="fgjk ps-5 mt-4">
                <h4><span>2</span>2015 - 2018</h4>
              </div>
              <div className="dataresume ms-3 ps-4">
                <h5>10+2 (Non-Medical)</h5>
                <h6>S.N.A.S Sr. Sec. School -PSEB</h6>
                <p>
                  During my 10+2 (Non-Medical) studies, I developed a strong
                  foundation in mathematics and sciences, which honed my
                  analytical skills and problem-solving abilities, paving the
                  way for my interest in technology and design.
                </p>
              </div>
              <br></br>
              <div className="fgjk ps-5 mt-4">
                <h4><span>3</span>2019 - 2021</h4>
              </div>
              <div className="dataresume ms-3 ps-4">
                <h5>Bachelor of Computer Applications (BCA)</h5>
                <h6>Baring Union Christian College - GNDU</h6>
                <p>
                  In my Bachelor of Computer Applications program, I acquired
                  comprehensive knowledge in computer science, programming,
                  software development & a transformative experience for me. It
                  not only deepened my understanding of computer science and
                  programming.
                </p>
              </div>
            </div>
            </div>   
          <div className="d-flex justify-content-xxl-around mt-5 pb-5">
             <div className="">
               <h5>800+</h5>
               <p>Hours of Works</p>
             </div>
             <div className="">
               <h5>150+</h5>
               <p>Projects Done</p>
             </div>
             <div className="">
               <h5>60+</h5>
               <p>Satisfied Customers</p>
             </div>
             <div className="">
               <h5>15+</h5>
               <p>Awards Winning</p>
             </div>
          </div>
                      
          </div>
      </div>
    </div>
  );
}

export default Resume;
