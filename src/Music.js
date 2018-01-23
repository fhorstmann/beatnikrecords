import React from 'react';
//import ReactDOM from 'react-dom';
import {PlayButton, Timer, Progress} from 'react-soundplayer/components';
import {withSoundCloudAudio} from 'react-soundplayer/addons';
import songs from './songs.json';
import Waypoint from 'react-waypoint';
import Fade from 'react-reveal/Fade';
import Stepper from 'react-reveal/Stepper';
import $ from "jquery";
//const clientId = '4530657cfd429e1c0396cf8a1a7ed39c';
//const resolveUrl = 'https://soundcloud.com/freddiehorstmann/where-i-want-to-be';
//const give_it_to_me_baby = 'https://soundcloud.com/freddiehorstmann/give-it-to-me-baby';
/*
 <img className="img-fluid" alt={song.name} src={require(`./images/${song.image}`)} />
*/

const Player = withSoundCloudAudio(props => {
  let {track, currentTime} = props;

  //let classes = classnames('specialbutton', {active: this.state.active});
  return (
    <div className="player">
      <PlayButton onPlayClick={() => {
        console.log('play button clicked!');
      }} {...props}/>

      <Timer className="player-timer" duration={track
        ? track.duration / 1000
        : 0} currentTime={currentTime} {...props}/>

      <Progress className="progress_bar" {...props}/>

    </div>
  );
});

const Songs = withSoundCloudAudio(props => {
  function onPlayClick() {
    console.log('hello');
  }
  return (
    <section className="music-list">
      <div className="row wide-gutter">
        {songs.map((song, i) => (
          <article key={i} id="post" className={`song-item col-12 col-md-4`}>
            <div className="entry">
              <div className="entry-title">
                <h3 dangerouslySetInnerHTML={{
                  __html: song.name
                }}/>
                <Player onPlayClick={() => {
                  console.log('play button clicked!');
                }} clientId="4530657cfd429e1c0396cf8a1a7ed39c" resolveUrl={song.resolveUrl} onReady={() => $('.song-item').on('click', function() {
                  $('.active').removeClass('active');
                  $(this).addClass('active');
                })}/>
              </div>
              <div className="count">
                <span></span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

  );
}, this);

class Music extends React.Component {
  constructor(props) {
    super(...arguments, props);
    this.state = {
      animations: []
    };
    this.step = new Stepper().step('title', 500).step('b_bottom', 500).step('beat_logo', 300).step('txt_bottom', 300);
  }
  render() {
    return (
      <div className="container">
        <div className="section-title">
          <div className="v-center">

            <h1 className="text-left">
              <Fade bottom cascade={50} delay={300} duration={500} step={this.step.is('title')} style={{
                display: 'inline-block'
              }}>
                Beat
              </Fade>
              <Fade bottom delay={400} duration={500} step={this.step.is('title')} style={{
                display: 'inline-block'
              }}>
                <div className="mdash"></div>
              </Fade>
              <Fade bottom cascade={50} delay={400} duration={500} step={this.step.is('title')} style={{
                display: 'block'
              }}>
                nik
              </Fade>
              <Fade bottom cascade={50} delay={450} duration={500} step={this.step.is('title')} style={{
                display: 'block'
              }}>
                Records

              </Fade>
              <Fade delay={450} duration={500} step={this.step.is('beat_logo')} className="beatnik_icon">
                <span></span>
            </Fade>
            </h1>
            <div>
              <Fade bottom delay={450} duration={500} step={this.step.is('b_bottom')} style={{
                display: 'block'
              }} className="border-bottom">hello</Fade>
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
              <span className="handpointing rotate_down"></span>
            </div>
          </div>
        </div>
        <section className="intro_section">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-7 offset-md-5 col-lg-5 offset-lg-6">
              <div className="entry intro_copy">
                <p className="text-animate">
                  <span className="drop_cap">B</span>
                  eatnik Records was an idea that never found it's footing. The concept was to sign aspiring musicians passionate about creating and sharing their music to the world and promoting them through live performances and social networks. Although, the label never succeded, it did have a huge impact on my life: While putting the pieces together in the early stages of the label, I drafted a business model, and one thing that kept coming up was the need to have web presence. Since funds were low, I took it upon myself to learn and build a site. Since then, music and coding have been an equal passion of mine.</p>
              </div>
            </div>
          </div>
        </section>
        <Songs/>

      </div>

    );
  }
}

export default Music;
