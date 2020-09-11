import React, {Component} from 'react';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import Stepper from 'react-reveal/Stepper';
//<img alt="hello" src={require('./images/new_logo.svg')} />
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animations: []
    };
    this.step = new Stepper().step('b_bottom', 100).step('title', 500).step('txt_bottom', 500);
  }
  render() {
    return (
      <div className="page home">
        <section className="intro">
          <h1>
            <Fade bottom delay={300} duration={1200} step={this.step.is('title')} style={{
              display: 'inline-block'
            }}>Greater Than</Fade>
            <small>
              <Fade top delay={350} duration={1200} step={this.step.is('title')}>Nice</Fade>
            </small>
            <Fade bottom delay={400} duration={1200} step={this.step.is('title')} className="circle_fix">
              <span className="circle_art">
                <i>
                  <Typist className="typing_text" avgTypingSpeed={100} startDelay={2000} cursor={{
                    show: true,
                    blink: true,
                    element: '',
                    hideWhenDone: true,
                    hideWhenDoneDelay: 100,
                  }}>
                    <span>Hello</span>
                    <Typist.Backspace count={8} delay={400}/>
                    <span>Ciao</span>
                    <Typist.Backspace count={8} delay={400}/>
                    <span>Hola</span>
                    <Typist.Backspace count={8} delay={400}/>
                    <span>Hallo</span>
                    <Typist.Backspace count={8} delay={400}/>
                    <span>Jello</span>
                    <Typist.Backspace count={8} delay={400} hideWhenDone={true}/>
                    <span>⌐■-■</span>
                  </Typist>
                </i>
              </span>
            </Fade>
          </h1>
        </section>
        <section className="cta_bottom">
          <div className="entry-wrap">
            <h2>
              <small>
                <Fade bottom delay={300} duration={1200} step={this.step.is('txt_bottom')}>Designing</Fade>
              </small>
              <Fade bottom delay={300} duration={1200} step={this.step.is('txt_bottom')} style={{
                display: 'inline-block'
              }}>Change</Fade>
              <span className="rotate">
                <Fade bottom delay={300} duration={1200} step={this.step.is('txt_bottom')} style={{
                  display: 'inline-block'
                }}>Here</Fade>
              </span>
            </h2>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
