import React, {Component} from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
//import coverimg from './hw.jpg';
//import covervid from './hw.mp4';
//import covervidtwo from './hw.ogv';


class Video extends Component {
  render() {
    return (
      <div className="">
               <video loop autoplay='' muted>
                   <source src="https://www.losangelesapparel-imprintable.net/img/our-mission/thats-la-apparel-video.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                   <source src="https://www.losangelesapparel-imprintable.net/img/our-mission/thats-la-apparel-video.mp4" type="video/ogg" />Your browser does not support the video tag. I suggest you upgrade your browser.
               </video>
      </div>
    );
  }
}

export default Video;
