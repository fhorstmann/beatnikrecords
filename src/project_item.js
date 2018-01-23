import React, { Component } from 'react';

import * as Animated from "animated/lib/targets/react-dom";

//{props.match.params.name}
//http://frhdesigns.com/wp-json/wp/v2/project-api/${this.props.match.params.id}
class ProjectItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      animate: new Animated.Value(0)
    }
  }
  componentDidMount() {
    fetch(`https://frhdesigns.com/wp-json/wp/v2/project-api/?slug=${this.props.match.params.id}`)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          post: d
        })
        console.log(d);
        setTimeout(
  				() =>
  					Animated.spring(this.state.animate, { toValue: 1 }).start(),
  				800
  			);

      }, () => {
        this.setState({
          requestFailed: true
        })
          console.log(`${this.props.match.params.id}`);
      })
  }
  render() {

const goBackStyle = {
  transform: Animated.template`
    translate3d(${this.state.animate.interpolate({
    inputRange: [0, 1],
    outputRange: ["-24px", "0px"]
  })},0,0)
  `,
  opacity: Animated.template`${this.state.animate}`
};

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.post) return <p>Loading...</p>
    return (

      <div className="inner_page post_details">
        <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="section-title">
                <div className="v-center">
            <h1 dangerouslySetInnerHTML={{ __html: this.state.post[0].title.rendered }} />
              <Animated.span style={goBackStyle} className="goBack handpointing">
                <a
                  onClick={e => {
                    e.preventDefault();
                    this.props.history.goBack();
                  }}
                >
                  ←
                </a>
              </Animated.span>
        </div>
        </div>
      </div>
  <div className="col-12 col-sm-12 col-md-8">
      <div className="into_desc">
        <div dangerouslySetInnerHTML={{ __html: this.state.post[0].content.rendered }} />
      </div>
        </div>
        </div>
    <section className="below_view">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 offset-md-3 col-lg-8 offset-lg-3">
        <div className="content_details">
            <div dangerouslySetInnerHTML={{ __html: this.state.post[0].meta_box._project_case_text }} />


              {this.state.post[0].meta_box.page_builder_group.map(function(name, index){
                console.log(name.FormatType);
                if (name.FormatType == "Plain_Text") {
                    return <li key={ index }><div dangerouslySetInnerHTML={{ __html: name.plain_text_area }} /></li>;
                }
                  })}

                {this.state.post[0].acf.additional_content.map(function(item, i){
                        console.log(item.full_width_image);
                    return  <li key={ i }>
  <figure className="img_holder"><img className="img-fluid" src={`http://frhdesigns.com/${item.full_width_image}`} /></figure>
                  </li>;
                      })}

        </div>
        </div>
      <div className="col-12 col-sm-12 col-md-8 offset-md-3 col-lg-8 offset-lg-3">
      <figure className="img_holder"><img className="img-fluid" src={`http://frhdesigns.com/${this.state.post[0].better_featured_image.source_url}`} /></figure></div>
      </div>
      </section>
      </div>
      </div>
    )
  }
}

export default ProjectItem;
