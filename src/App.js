import React from 'react';
//import AnimatedRoutes from "./AnimatedRoutes";
import { withRouter, Switch, Route} from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//import CSSTransitionGroup from 'react-addons-css-transition-group';
//import AnimatedSwitch from "./animated_switch";
import TopBar from "./top_bar";
import Home from './Home';
import Projects from './Projects';
import ProjectItem from "./project_item";
import Aboutme from './Aboutme';
import Music from './Music';
import Moment from 'moment';
//import Waypoint from 'react-waypoint';
//import $ from "jquery";

const location  = this.props;
const App = ({ location }) => {
  //const currentKey = location.pathname.split('/')[1] || '/'
  const currentKey = location.pathname.split('/')[1] || '/';
  if (currentKey === "/") {
    //console.log("hello");
  }
  Moment.locale('en');
  var CurrentDate = Moment();
  return (

  <div className="App" id={currentKey}>
      <TopBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-9 col-lg-10">
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={{appear:500,enter:500,exit:700}} classNames="fade" mountOnEnter={true} unmountOnExit={true}>
                  <Switch>
              <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/projects/:id" component={ProjectItem} />
                  <Route path="/about-me" component={Aboutme} />
                    <Route path="/beatnik-records" component={Music} />
            </Switch>
             </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-2 info_col">
    <aside className="fixed_info"><div className="entry"><div className="red_bar">{Moment(CurrentDate).format('MMMM')}</div>
      <time>{Moment(CurrentDate).format('DD')}.</time>
        <div className="red_bar">{Moment(CurrentDate).format('Y')}</div>
        <div className="meta_info">{Moment(CurrentDate).format('HH:mm:ss')}</div>
        <div className="meta_info last"><b>E:</b> <a href="mailto:freddie.horstmann@gmail.com?Subject=Hello" target="_top">Contact Me</a></div>
      </div>
    </aside>
        </div>
    </div>
    </div>
      <div className="noise"></div>
  </div>


  )
}
export default withRouter(App)


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-9 col-lg-10">
        <AnimatedRoutes>

          <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
              <Route exact path="/articles" component={ArticlesPage} />
                </AnimatedRoutes>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
          <aside className="fixed_info"><div className="entry"><div className="red_bar">{Moment(CurrentDate).format('MMMM')}</div>
            <time>{Moment(CurrentDate).format('DD')}.</time>
              <div className="red_bar">{Moment(CurrentDate).format('Y')}</div>
              <div className="meta_info">{Moment(CurrentDate).format('HH:mm:ss')}</div>
              <div className="meta_info">Freddie Horstmann</div>
              <div className="meta_info">E: Email</div>
            </div>
          </aside>
      </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
*/
