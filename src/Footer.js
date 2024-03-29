import React, {Component} from 'react';
import Moment from 'moment';
import UncontrolledLottie from "./components/UncontrolledLottie";
import { NavLink } from "react-router-dom";
class Footer extends Component {
  render() {
    var CurrentDate = Moment();
    return (<footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-none">
            <UncontrolledLottie/>
          </div>
          <div className="col-xs-6 col-md-3 text-right"></div>
          <div className="col-xs-6 col-md-3 text-right d-none">
            <h6>Say hi</h6>
            <h6>hello@greaterthannice.com</h6>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-12">
            <p className="copyright-text"><small>Copyright &copy; {Moment(CurrentDate).format('Y')} All Rights Reserved by Greater Than Nice, llc</small>
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-12">
            <ul className="social-icons list-inline text-md-right">
              <li className="list-inline-item">
                <a target="_blank" className="facebook" href="https://www.facebook.com/greaterthannice/">
                  <svg viewBox="0 0 512 512">
                    <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
                  </svg>
                </a>
              </li>

              <li className="list-inline-item">
                <a target="_blank" className="Github" href="https://github.com/fhorstmann">
                  <svg viewBox="0 0 512 512">
                    <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <NavLink to="/beatnik-records"><span>Beatnik Records</span></NavLink>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </footer>);
  }
}
export default Footer;
