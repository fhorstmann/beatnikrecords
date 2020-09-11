import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Stepper from 'react-reveal/Stepper';
import * as Animated from "animated/lib/targets/react-dom";

//{props.match.params.name}
//http://frhdesigns.com/wp-json/wp/v2/project-api/${this.props.match.params.id}
/* <div className="col-12 col-sm-12 col-md-8 offset-md-3 col-lg-8 offset-lg-3">
<figure className="img_holder"><img className="img-fluid" src={`http://frhdesigns.com/${this.state.post[0].better_featured_image.source_url}`} /></figure></div> */

class ProjectItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      animate: new Animated.Value(0)
    };
    this.step = new Stepper().step('title', 500).step('txt_bottom', 500);
  }
  componentDidMount() {
    fetch(`https://frhdesigns.com/wp-json/wp/v2/project-api/?slug=${this.props.match.params.id}`).then(response => {
      if (!response.ok) {
        throw Error("Network request failed")
      }
      return response
    }).then(d => d.json()).then(d => {
      this.setState({post: d})
      console.log(d);
      setTimeout(() => Animated.spring(this.state.animate, {toValue: 1}).start(), 800);

    }, () => {
      this.setState({requestFailed: true})
      console.log(`${this.props.match.params.id}`);
    })
  }
  render() {
    const goBackStyle = {
      transform: Animated.template `
    translate3d(${this.state.animate.interpolate({
        inputRange: [
          0, 1
        ],
        outputRange: ["-24px", "0px"]})},0,0)`,
        opacity: Animated.template `${this.state.animate}`
      };
      if (this.state.requestFailed)
        return <p>Failed!</p>
      if (!this.state.post)
        return <p>Loading...</p>
      const introCopy = this.state.post[0].content.rendered;
      const div = document.createElement("div");
      div.innerHTML = introCopy;
      return (
        <div className="inner_page post_details">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="section-title post-title">
                <div className="v-center">
                    <h1 dangerouslySetInnerHTML={{
                        __html: this.state.post[0].title.rendered
                      }}/>
                  <ul className="meta-data">
                    <li dangerouslySetInnerHTML={{
                        __html: this.state.post[0].meta_box._project_case_text
                      }}/>
                    <li>
                      <a target="_blank" href={this.state.post[0].meta_box._project_url}>Visit Site
                        <svg className="icon-big-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.3 5.8">
                          <path className="st0" d="M25.8 0l-.6.8 1.9 1.6h-27.1v1h27.1l-1.9 1.6.6.8 3.5-2.9z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <Animated.span style={goBackStyle} className="goBack">
                  <a onClick={e => {
                      e.preventDefault();
                      this.props.history.goBack();
                    }}>
                    <div id="the_hand" className="updown">
                      <Fade bottom delay={450} duration={1200} fraction={0} step={this.step.is('txt_bottom')}>
                        <span className="handpointing rotate_down"></span>
                      </Fade>
                    </div>
                  </a>
                </Animated.span>
              </div>
            </div>

            <div className="intro_section">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-7 offset-md-5 col-lg-5 offset-lg-6">
                  <Fade bottom delay={300} duration={700} step={this.step.is('txt_bottom')}>
                    <div className="entry intro_copy">
                      <div dangerouslySetInnerHTML={{
                          __html: div.innerText
                        }}/>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <section className="below_view">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-9 offset-md-2 col-lg-9 offset-lg-2">
                <div className="content_details">
                  {
                    this.state.post[0].meta_box.page_builder_group.map(function(name, index) {
                      //console.log(name.FormatType);
                      if (name.FormatType == "Plain_Text") {
                        return <p key={index}><div dangerouslySetInnerHTML={{
                            __html: name.plain_text_area
                          }}/></p>;
                      }
                    })
                  }

                  {
                    this.state.post[0].acf.additional_content.map(function(item, i) {
                      console.log(item.full_width_image);
                      return <div key={i}>
                        <figure className="img_holder"><img className="img-fluid" src={`http://frhdesigns.com/${item.full_width_image}`}/></figure>
                      </div>;
                    })
                  }

                </div>
              </div>

            </div>
          </section>
        </div>
      </div>)
    }
  }

  export default ProjectItem;
