import React, {Component} from 'react';
import * as Animated from 'animated/lib/targets/react-dom';
//import TransitionGroup from "react-transition-group/TransitionGroup";
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Waypoint from 'react-waypoint';
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Stepper from 'react-reveal/Stepper';
import ReactHover from 'react-hover'
import './component.css'
//import ScrollAnimation from 'react-animate-on-scroll';
function revealFunc() {}
class Projects extends Component {
  constructor(props) {
    super(...arguments, props);
    this.state = {
      Posts: [],
      animations: []
    };
    this.step = new Stepper().step('title', 500).step('b_bottom', 100).step('txt_bottom', 300);
  }
  componentDidMount()
  {
    fetch('https://frhdesigns.com/wp-json/wp/v2/project-api').then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Server response wasn't OK");
      }
    }).then((responseData) => {
      this.setState({
        Posts: responseData,
        animations: responseData.map((_, i) => new Animated.Value(0))
      }, () => {
        Animated.stagger(100, this.state.animations.map(anim => Animated.spring(anim, {toValue: 1}))).start();
      });
      //console.log(responseData);
    })
  }
  render() {
    let moreposts = this.state.Posts.map((post, index) => {
      const style = {
        opacity: this.state.animations[index],
        transform: Animated.template `
             translate3d(0,${this.state.animations[index].interpolate({
          inputRange: [
            0, 1
          ],
          outputRange: ["12px", "0px"]})},0)`
        }
        let optionsCursorTrueWithMargin = {
          followCursor: true,
          shiftX: 200,
          shiftY: -350
        };

        return (
          <Fade duration={700} onReveal={() => revealFunc('element revealed')} key={post.id} id="post-item" className={`col-12 col-md-8 col-lg-6 offset-md-${index > 4
            ? `${index - 4}`
            : `${index + 0}`}`}>
              <Link className="entry" to={`/projects/${post.slug}`}>
              <ReactHover options={optionsCursorTrueWithMargin}>
                  <ReactHover.Trigger type='trigger'>
                <div className="entry-title">
                  <h3 dangerouslySetInnerHTML={{
              __html: post.title.rendered
              }}/>
              <span dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered
                        }}/>
                </div>
                  <div className="count">
                        <span>№ {index + 1}.</span>
                      <img className="img-fluid d-none" alt={post.title.rendered}
                          src={`https://frhdesigns.com/${post.better_featured_image.source_url}`}/>
                          </div>
                        </ReactHover.Trigger>
                        <ReactHover.Hover type='hover'>
                          <div className="hover">
                            <img className="thumbnail img-fluid" alt={post.title.rendered} src={`https://frhdesigns.com/${post.better_featured_image.source_url}`} />
                        </div>
                    </ReactHover.Hover>
                  </ReactHover>
              </Link>
          </Fade>
        );})
      return (
        <div className="page">
          <div className="container">
            <div className="section-title">
              <div className="v-center">
                <h1 className="text-left">
                  <Fade bottom cascade={50} delay={300} force={true} duration={500} step={this.step.is('title')} style={{
                    display: 'inline-block'
                  }}>
                    pr
                  </Fade>
                  <Fade bottom delay={400} duration={500} force={true} step={this.step.is('title')} style={{
                    display: 'inline-block'
                  }}>
                    <div className="mdash"></div>
                  </Fade>
                  <Fade bottom cascade={50} delay={400} duration={500} force={true} step={this.step.is('title')} style={{
                    display: 'block'
                  }}>
                    oj
                  </Fade>
                  <Fade bottom cascade={50} delay={450} duration={500} force={true} step={this.step.is('title')} style={{
                    display: 'block'
                  }}>
                    ects
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
            <div className="intro_section">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-7 offset-md-5 col-lg-5 offset-lg-6">
                  <Fade bottom delay={300} duration={700} step={this.step.is('txt_bottom')}>
                    <div className="entry intro_copy">
                      <p>
                        <span className="drop_cap">B</span>elow is a sample of projects we've designed and built over the years. Some were built at the request of friends, while others were just for the heck of it: learning new code and putting it to practice is the same to us as a carpenter getting a new piece of machinery and creating something awesome out of it.</p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
            <section className="projects-list">
              <div className="row">
                {moreposts}
              </div>
            </section>
          </div>
        </div>
      );
    }}
  export default Projects;
