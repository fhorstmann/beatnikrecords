import React from 'react';
//import AnimatedRoutes from "./AnimatedRoutes";
import {withRouter, Switch, Route} from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
//import CSSTransitionGroup from 'react-addons-css-transition-group';
//import AnimatedSwitch from "./animated_switch";
import TopBar from "./top_bar";
import Home from './Home';
import Projects from './Projects';
import ProjectItem from "./project_item";
import Aboutme from './Aboutme';
import Music from './Music';
import Moment from 'moment';
import Footer from "./Footer";
import SideBar from "./components/sidebar";
//import Waypoint from 'react-waypoint';
//import $ from "jquery";
//const location  = this.props;
const App = ({location}) => {
  //const currentKey = location.pathname.split('/')[1] || '/'
  const currentKey = location.pathname.split('/')[1] || '/';
  if (currentKey === "/") {}
  Moment.locale('en');
  var CurrentDate = Moment();
  return (<div className="App" id={currentKey}>

    <SideBar pageWrapId={"page-wrap"}/>
    <div id="page-wrap">
      <TopBar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-9 col-lg-10">
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={{ enter: 700, exit: 700 }}
                onExit={node => {
                  node.style.position = "fixed";
                  node.style.top = -1 * window.scrollY + "px";
                }} classNames="fade" mountOnEnter={true} unmountOnExit={true}>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/projects" component={Projects}/>
                  <Route path="/projects/:id" component={ProjectItem}/>
                  <Route path="/about-us" component={Aboutme}/>
                  <Route path="/beatnik-records" component={Music}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-2 info_col">
            <aside className="fixed_info">
              <div className="entry">
                <div className="red_bar">{Moment(CurrentDate).format('MMMM')}</div>
                <time>{Moment(CurrentDate).format('DD')}.</time>
                <div className="red_bar">{Moment(CurrentDate).format('Y')}</div>
                <div className="meta_info">{Moment(CurrentDate).format('HH:mm:ss')}</div>
                <div className="meta_info last">
                  <b>E:</b>
                  <a href="mailto:freddie@greaterthannice.com?Subject=Hello" target="_top"> Contact Me</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div className="noise"></div>
        <Footer/>
    </div>
  </div>)
}
export default withRouter(App)
