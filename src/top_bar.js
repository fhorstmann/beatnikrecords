import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DynamicHeader from 'react-sticky-dynamic-header';
export default class TopBar extends Component {
	render() {
		return (

			<DynamicHeader hasEffect={false} effectDuration={100} useHeadersDifference={true}>
						 <div id="mainNav" className="top-bar">

								 					<nav>
								 						<NavLink exact to="/" className="brand">Beatnik Records</NavLink>
								 						<ul className="nav">
								 						<li className="link-anim nav-item"><NavLink to="/projects"><span>Projects</span></NavLink></li>
								 						<li className="link-anim nav-item"><NavLink to="/about-me"><span>About Me</span></NavLink></li>
								 						<li className="link-anim nav-item"><NavLink to="/beatnik-records"><span>Beatnik Records</span></NavLink></li>
														</ul>
								 					</nav>

						 </div>
					 		<div id="mainNav" className="top-bar">
								 					<nav>
								 						<NavLink exact to="/" className="brand">Beatnik Records</NavLink>
								 					</nav>
								 				</div>
					 </DynamicHeader>


			)
	}
}
