import React, {Component, useState} from 'react';
import Waypoint from 'react-waypoint';
import Fade from 'react-reveal/Fade';
import Stepper from 'react-reveal/Stepper';
import Video from "./components/video";
//import emailjs from 'emailjs-com'
//<img alt="hello" src={require('./images/new_logo.svg')} />

import ContactUs from './contactForm';

class Contact_us extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animations: []
    };
    this.step = new Stepper().step('title', 500).step('b_bottom', 100).step('txt_bottom', 300);

  }


  render() {
    return (<div className="page contact_us">
      <section className="section-content">
        <div className="container">
          <div className="section-title">
            <div className="v-center">
              <h1 className="text-left">
                <Fade bottom="bottom" cascade={50} delay={300} duration={500} force={true} step={this.step.is('title')} style={{
                    display: 'inline-block'
                  }}>
                  Kän
                </Fade>
                <Fade bottom="bottom" delay={400} duration={500} force={true} step={this.step.is('title')} style={{
                    display: 'inline-block'
                  }}>
                  <div className="mdash"></div>
                </Fade>
                <Fade bottom="bottom" cascade={50} delay={400} duration={500} force={true} step={this.step.is('title')} style={{
                    display: 'block'
                  }}>
                  tak
                </Fade>

              </h1>
              <div>
                <Fade fraction={0} force={true} bottom="bottom" delay={600} duration={500} step={this.step.is('b_bottom')} style={{
                    display: 'block'
                  }} className="border-bottom">&nbsp;</Fade>
              </div>
              <Waypoint onLeave={({event}) => {
                  // do something useful!
                  //console.log("going down");
                  const el = document.getElementById('the_hand');
                  if (el) {
                    el.className += ' rotate_it';
                  }
                }} onEnter={({event}) => {
                  // do something useful!
                  const el = document.getElementById('the_hand');
                  //console.log("going up");
                  if (el.classList.contains("rotate_it")) {
                    // Has my-class in it
                    //console.log("has class");
                    el.classList.remove("rotate_it");
                  } else {
                    // No class :(
                  }
                }}/>
              <div id="the_hand" className="updown">
                <Fade bottom="bottom" delay={1000} duration={1200} fraction={0} force={true}>
                  <span className="handpointing rotate_down">&nbsp;</span>
                </Fade>
              </div>
            </div>
          </div>
          <section className="section intro_section pb-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 offset-md-5 col-lg-5 offset-lg-6 mb-5">
                <Fade force={true} bottom="bottom" delay={300} duration={700} step={this.step.is('txt_bottom')}>
                  <div className="entry intro_copy">
                    <p>
                      <span className="drop_cap">W</span>ant to say hi? We'd love to hear from you. Use the form below to reach out and we'll get back to you as soon as we can. We're always running around, so give us at least 24 hours to get back to you. Woot woot!
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-5">
                <Fade force={true} bottom="bottom" delay={300} duration={700} step={this.step.is('txt_bottom')}>
                  <div className="entry">
                    <h3>How to reach us...</h3>
                  </div>
                </Fade>

                <ContactUs />


              </div>

            </div>
          </section>

        </div>
      </section>
    </div>);
  }
}
export default Contact_us;
