import React, {Component} from 'react';
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
    return (<div className="page about_me">
      <section className="section-content">
        <div className="container">
          <div className="section-title">
            <div className="v-center">
              <h1 className="text-left">
                <Fade bottom="bottom" cascade={50} delay={300} duration={500} force={true} step={this.step.is('title')} style={{
                    display: 'inline-block'
                  }}>
                  Ab
                </Fade>
                <Fade bottom="bottom" delay={400} duration={500} force={true} step={this.step.is('title')} style={{
                    display: 'inline-block'
                  }}>
                  <div className="mdash"></div>
                </Fade>
                <Fade bottom="bottom" cascade={50} delay={400} duration={500} force={true} step={this.step.is('title')} style={{
                    display: 'block'
                  }}>
                  out
                </Fade>
                <Fade bottom="bottom" cascade={50} delay={450} duration={500} force={true} step={this.step.is('title')} style={{
                    display: 'block'
                  }}>
                  Us
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
                      <span className="drop_cap">G</span>reater Than Nice (GTN) is used to describe something better than good. It's used to descibe something great. And that's exactly what we do in every project we have our hands on here at GTN. Not only do we excel at our craft, but we specialize in creating lasting relationships with our clients.
                    </p>
                    <p>
                      Here's a few clients we have the pleasure of working with and making their dreams come true.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-5">
                <Fade force={true} bottom="bottom" delay={300} duration={700} step={this.step.is('txt_bottom')}>
                  <div className="entry">
                    <h3>Our Clients</h3>
                  </div>
                </Fade>
              </div>
              <ul className="row client-list-group p-md-5">
                <li className="item col-6 col-sm-6 col-md-4">
                  <Fade force={true} bottom="bottom" delay={50} duration={700} step={this.step.is('txt_bottom')}>
                    <img className="img-fluid" alt="Ahlem" src={require('./images/ahlem-text-logo.svg')}/>
                  </Fade>
                </li>
                <li className="item col-6 col-sm-6 col-md-4 ">
                  <Fade force={true} bottom="bottom" delay={100} duration={700} step={this.step.is('txt_bottom')}>
                    <img className="img-fluid" alt="Los Angeles Apparel" src={require('./images/laa-logo.svg')}/>
                  </Fade>
                </li>
                <li className="item col-6 col-sm-6 col-md-4">
                  <Fade force={true} bottom="bottom" delay={250} duration={700} step={this.step.is('txt_bottom')}>
                    <img className="img-fluid" alt="Everlane" src={require('./images/everlane-logo.svg')}/>
                  </Fade>
                </li>
                <li className="item col-6 col-sm-6 col-md-4">
                  <Fade force={true} bottom="bottom" delay={200} duration={700} step={this.step.is('txt_bottom')}>
                    <img className="img-fluid" alt="Madefor" src={require('./images/madefor-logo.svg')}/>
                  </Fade>
                </li>
                <li className="item col-6 col-sm-6 col-md-4">
                  <Fade force={true} bottom="bottom" delay={150} duration={700} step={this.step.is('txt_bottom')}>
                    <img className="img-fluid" alt="IOAN" src={require('./images/ioan-logo.svg')}/>
                  </Fade>
                </li>
                <li className="item col-6 col-sm-6 col-md-4">
                  <Fade force={true} bottom="bottom" delay={250} duration={700} step={this.step.is('txt_bottom')}>
                    <img className="img-fluid" alt="Toyota" src={require('./images/toyota-logo.svg')}/>
                  </Fade>
                </li>
              </ul>
            </div>
          </section>
          <section className="section py-5">
            <div className="row">
              <div className="col-12">
                <Fade force={true} bottom="bottom" delay={300} duration={700} step={this.step.is('txt_bottom')}>
                  <div className="entry intro_copy">
                    <h3>Meet the Team</h3>
                  </div>
                </Fade>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-lg-12">
                <div className="entry p-md-5">
                  <figure>
                    <img className="img-fluid" alt="Freddie & Luna coding" src={require('./images/me.jpg')}/>
                  </figure>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="entry p-md-5">
                  <h4>Freddie H.</h4>
                  <p>

                    Freddie like's to know how things work. Whether it's a website or a washing machine, I'll pick it apart until the purpose of each piece becomes clear, then put it back together again. I've spent seven years deconstructing the web, thousands of hours analyzing every POST and GET, from back-end to front-end and back again.
                  </p>
                  <p>
                    I began my career in 2010 making a personal website for my music. Then a friend asked for one. Then another. After word spread, I met Jonathan who asked me to join Eat,Sleep,Work,.Inc as an associate front-end developer. 7 years later and here I am, lead full-stack developer and still as passionate about a good website as the day I started.</p>
                  <p>
                    I've shared my passion with my family and my community, teaching website building courses through Compton YouthBuild to students who'd otherwise have no access to the tools and resources of cutting edge development.</p>
                </div>
              </div>
            </div>
            <div className="row p-md-5">
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 rotate_it">
                <div className="entry alt-title">
                  <h3 className="text-animate">Stack</h3>
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

              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 rotate_it">

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

              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 rotate_it">

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

              </div>
            </div>
            <div className="row my-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="entry p-md-5">
                  <figure>
                    <img className="img-fluid" alt="Freddie & Luna coding" src={require('./images/alex.jpg')}/>
                  </figure>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="entry p-md-5">
                    <h4>Alex P.</h4>
                  <p>
                    Alex Potash has over 15 years experience in software development, ranging from desktop to mobile, device firmware, E-commerce, big data analytics and machine learning. After double-majoring in English and Physics from Whittier College, Alex began his career as an Analytics Engineer at Palantir, a Peter Thiel funded "big data" company in Palo Alto. After two years in Silicon Valley, Alex moved to wine country in the heart of Napa Valley to oversee IT/operations at the largest direct-selling winery in the world, WineShop At Home. When the thrill of creating a custom inventory system with UPS/FedEx shipping integrations had faded, Alex sought further excitement at a smart irrigation system startup in Los Angeles called Cyber-Rain. Alex wrote firmware and worked closely with the mechanical/electrical engineers to create custom devices tailored to their patented Zigbee communication systems.</p>
                  <p>
                    Since then, Alex has been consulting and developing for clients ranging from a non-emergency medical transport app to a social media monetization site. He loves the pain leading to pleasure of working with new technologies and creating solutions for systems he's never worked with before. His current passion project is learning how to use a Kinesis Advantage2 after years of standard mechanical keyboards.</p>
                </div>
              </div>
            </div>
            <div className="row p-md-5">
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 rotate_it">

                <div className="entry alt-title">
                  <h3 className="text-animate">Stack</h3>
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

              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 rotate_it">

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

              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 rotate_it">

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

              </div>
            </div>
          </section>
        </div>
      </section>
    </div>);
  }
}
export default About_me;
