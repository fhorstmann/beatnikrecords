import React, { Component } from 'react';
import { Link } from "react-router-dom";


class ProjectItem extends Component {
  constructor(){
          super(...arguments);
          this.state = {
              Posts: []
          };
      }
      componentDidMount()
      {
          fetch(`http://frhdesigns.com/wp-json/wp/v2/project-api/${this.props.match.params.id}`)
              .then((response) => {
                  if(response.ok){
                      return response.json();
                  } else {
                      throw new Error("Server response wasn't OK");
                  }
              })
              .then((responseData) => {
                  this.setState({Posts:responseData});
                  console.log(responseData);
              })
            }
            render() {
    return (
      <div className="inner_page">
        <div>
            <p>this is the id page solo</p>
            {this.state.Posts.content.rendered}

            {Posts.map((Posts, i) => (
              <div key={i} className="movie-review">
                <h3>
                  { Posts.title } <span className="review-author">by { Posts.author }</span>
                </h3>

                <p>{ Posts.body }</p>
              </div>
            ))}

        </div>

        </div>

    );
}}

   export default ProjectItem;
