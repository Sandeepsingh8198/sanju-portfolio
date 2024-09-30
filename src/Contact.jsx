// src/About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import background from "./contactbg.jfif"
const Contact = () => {
  return (
    <div className='contact__bg'>
      <div style={{ backgroundImage: `url(${background})` }} className='bg_image_banner'>
        <section id="section-contact" class="jarallax">
                <div class="de-gradient-edge-top"></div>
                <img src="images/background/5.jpg" class="jarallax-img" alt="" />
                <div class="container z-index-1000 conatctcenter_">
                    <div class="row">
                        <div class="col-md-12 text-center wow fadeInUp">
                            <h1>Contact Me</h1>
                            <div class="space-border mt-4 "></div>
                        </div>
                        <div class="col-lg-8 offset-lg-2 wow fadeInUp">
                            <div class="contact_form_wrapper">
                                <form name="contactForm" id="contact_form" class="form-border" method="post"  action="https://api.web3forms.com/submit">
                                     <input type="hidden" name="access_key" value="c185d2ed-d766-4510-b8db-a781e993aa7a" />
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="field-set">
                                                <input type="text" name="Name" id="name" class="form-control" placeholder="Your Name" required />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="field-set">
                                                <input type="text" name="Email" id="email" class="form-control" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="field-set">
                                                <input type="text" name="phone" id="phone" class="form-control" placeholder="Your Phone" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <div class="field-set">
                                            <textarea name="message" id="message" class="form-control" placeholder="Your Message" required></textarea>
                                        </div>
                                        <div class="g-recaptcha" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"></div>
                                        <div id='submit' class="mt10">
                                            <input type='submit' id='send_message' value='Send Message' class="btn-main" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="spacer-double"></div>
                            <div class="row text-center wow fadeInUp">
                                <div class="col-md-4">
                                    <div class="wm-1">
                                        <h6>Email Me</h6>
                                        <a href="mailto:sandeepsingh786687@gmail.com">sandeepsingh786687@gmail.com</a>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="wm-1">
                                        <h6>Call Me</h6>
                                        <a href="tel:+91 81988-22984">+91 81988-22984</a>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="wm-1">
                                        <h6>Address</h6>
                                        <a href="https://maps.app.goo.gl/fX1JnzchRX3iF3vJ8">Sector 74, Mohali, Punjab</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="de-gradient-edge-bottom"></div>
            </section>
            </div>
</div>
  );
};

export default Contact;
