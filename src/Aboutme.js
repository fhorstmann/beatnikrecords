import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import Fade from 'react-reveal/Fade';
import Stepper from 'react-reveal/Stepper';
import Video from "./components/video";
//<img alt="hello" src={require('./images/new_logo.svg')} />
  class About_me extends Component {
    constructor(props) {
      super(props);
      this.state = {
        animations: []
      };
    this.step = new Stepper().step('title', 500).step('b_bottom', 100).step('txt_bottom', 300);

    }

    render() {
      return (
  <div className="page about_me">
    <section className="section-content">
      <div className="container">
        <div className="section-title">
          <div className="v-center">
            <h1 className="text-left">
              <Fade bottom cascade={50} delay={300} duration={500} force={true} step={this.step.is('title')} style={{
                display: 'inline-block'
              }}>
                Ab
              </Fade>
              <Fade bottom delay={400} duration={500} force={true} step={this.step.is('title')} style={{
                display: 'inline-block'
              }}>
                <div className="mdash"></div>
              </Fade>
              <Fade bottom cascade={50} delay={400} duration={500} force={true} step={this.step.is('title')} style={{
                display: 'block'
              }}>
                out
              </Fade>
              <Fade bottom cascade={50}  delay={450} duration={500} force={true} step={this.step.is('title')} style={{
                display: 'block'
              }}>
                Us
              </Fade>
            </h1>
            <div>
              <Fade fraction={0} force={true} bottom delay={600} duration={500} step={this.step.is('b_bottom')} style={{
                display: 'block'
              }} className="border-bottom">&nbsp;</Fade>
            </div>
            <Waypoint onLeave={({event }) => {
            // do something useful!
            //console.log("going down");
            const el = document.getElementById('the_hand');
              if(el) {
                el.className += ' rotate_it';
              }
            }} onEnter={({event }) => {
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
           }}
            />
            <div id="the_hand" className="updown">
              <Fade bottom delay={1000} duration={1200} fraction={0} force={true}>
                <span className="handpointing rotate_down">&nbsp;</span>
              </Fade>
            </div>
          </div>
        </div>
        <section className="intro_section">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 offset-md-5 col-lg-5 offset-lg-6 mb-5">
              <Fade force={true} bottom delay={300} duration={700} step={this.step.is('txt_bottom')}>
              <div className="entry intro_copy">
                <p>
                  <span className="drop_cap">G</span>reater Than Nice (GTN) is used to describe something better than good. It's used to descibe something great. And that's exactly what we do in every project we have our hands on here at GTN. Not only do we excel at our craft, but we specialize in creating lastly relationships with our clients.
                </p>
                <p>
                  A few clients GTN has the pleasure of working with and making their dreams come true.
                </p>
              </div>
            </Fade>
            </div>
          </div>



          <ul className="client-list-group row">
            <div className="col-12 mt-5">
                <Fade force={true} bottom delay={300} duration={700} step={this.step.is('txt_bottom')}>
                <div className="entry intro_copy">
                  <p>
                    <span className="drop_cap">Our Clients</span>
                    </p>
                  </div>
                    </Fade>
                </div>
            <li className="item col-6 col-sm-6 col-md-4">
                  <Fade force={true} bottom delay={50} duration={700} step={this.step.is('txt_bottom')}>
                <img className="img-fluid" alt="Ahlem" src={require('./images/ahlem-text-logo.svg')} />
                  </Fade>
              </li>
              <li className="item col-6 col-sm-6 col-md-4 ">
                <Fade  force={true} bottom delay={100} duration={700} step={this.step.is('txt_bottom')}>
                  <img className="img-fluid" alt="Ahlem" src={require('./images/laa-logo.svg')} />
                    </Fade>
                </li>
                  <li className="item col-6 col-sm-6 col-md-4">
                      <Fade  force={true} bottom delay={250} duration={700} step={this.step.is('txt_bottom')}>
                      <img className="img-fluid" alt="Ahlem" src={require('./images/everlane-logo.svg')} />
                        </Fade>
                    </li>
                  <li className="item col-6 col-sm-6 col-md-4">
                      <Fade  force={true} bottom delay={200} duration={700} step={this.step.is('txt_bottom')}>
                      <img className="img-fluid" alt="Ahlem" src={require('./images/madefor-logo.svg')} />
                        </Fade>
                    </li>
                    <li className="item col-6 col-sm-6 col-md-4">
                        <Fade  force={true} bottom delay={150} duration={700} step={this.step.is('txt_bottom')}>
                        <img className="img-fluid" alt="Ahlem" src={require('./images/ioan-logo.svg')} />
                          </Fade>
                      </li>
                      <li className="item col-6 col-sm-6 col-md-4">
                          <Fade  force={true} bottom delay={250} duration={700} step={this.step.is('txt_bottom')}>
                          <img className="img-fluid" alt="Ahlem" src={require('./images/toyota-logo.svg')} />
                            </Fade>
                        </li>
                </ul>


              <div className="row">

                <div className="col-12 my-5">
                    <Fade force={true} bottom delay={300} duration={700} step={this.step.is('txt_bottom')}>
                    <div className="entry intro_copy">
                      <p>
                        <span className="drop_cap">Meet the Team</span>
                        </p>
                      </div>
                        </Fade>
                    </div>

              </div>


        </section>
        <section className="intro_section d-none">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 offset-md-5 col-lg-5 offset-lg-6">
              <Fade force={true} bottom delay={300} duration={700} step={this.step.is('txt_bottom')}>
              <div className="entry intro_copy">
                <p>
            <span className="drop_cap">i</span>like to know how things work. Whether it's a website or a washing machine, I'll pick it apart until the purpose of each piece becomes clear, then put it back together again. I've spent seven years deconstructing the web, thousands of hours analyzing every POST and GET, from back-end to front-end and back again.
                </p>
              </div>
                </Fade>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="entry">
              <p>
                I began my career in 2010 making a personal website for my music. Then a friend asked for one. Then another. After word spread, I met Jonathan who asked me to join Eat,Sleep,Work,.Inc as an associate front-end developer. 7 years later and here I am, lead full-stack developer and still as passionate about a good website as the day I started.</p>
              <p>
                I've shared my passion with my family and my community, teaching website building courses through Compton YouthBuild to students who'd otherwise have no access to the tools and resources of cutting edge development.</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="entry">
              <figure>
                <img className="img-fluid" alt="Freddie & Luna coding" src="https://frhdesigns.com/wp-content/themes/frh/dist/images/freddie-bio-1.jpg"/>
              </figure>
            </div>
          </div>
        </div>
        <div className="row d-none">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 rotate_it">
                <Fade left delay={300} duration={700} fraction={0}>
            <div className="entry alt-title">
              <h3 className="text-animate">Skill Set</h3>

              <ul>
                <li className="text-animate">− PHP</li>
                <li className="text-animate">− Javascript/ES6</li>
                <li className="text-animate">− jQuery/AJAX</li>
                <li className="text-animate">− SQL/MySQL</li>
                <li className="text-animate">− RESTful API
                </li>
                <li className="text-animate">− HTML5 &amp; CSS3/SCSS
                </li>
                <li className="text-animate">− UI/UX Design</li>
              </ul>

            </div>
              </Fade>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 rotate_it">
              <Fade left delay={400} duration={700}>
            <div className="entry alt-title">
              <h3 className="text-animate">Build Tools</h3>

              <ul>
                <li className="text-animate">− LAMP Stack</li>
                <li className="text-animate">− Bootstrap 3.0/4</li>
                <li className="text-animate">− Grunt/Gulp/Bower</li>
                <li className="text-animate">− Node/NPM</li>
                <li className="text-animate">− AWS: EC2, RDS, S3</li>
                <li className="text-animate">− Git</li>
              </ul>

            </div>
              </Fade>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 rotate_it">
              <Fade left delay={500} duration={700}>
            <div className="entry alt-title">
              <h3 className="text-animate">Frameworks</h3>

              <ul>
                <li className="text-animate">− Wordpress</li>
                <li className="text-animate">− Angular</li>
                <li className="text-animate">− React</li>
                <li className="text-animate">− Ionic</li>
                <li className="text-animate">− Magento/Woocommerce</li>
                <li className="text-animate">− JQuery Mobile</li>
                <li className="text-animate">− Shopify</li>
              </ul>

            </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}
}
export default About_me;
