import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DynamicHeader from 'react-sticky-dynamic-header';
export default class TopBar extends Component {
	render() {
		return (
						<DynamicHeader hasEffect={false} effectDuration={0} useHeadersDifference={true}>
													<div style={{height: "135px", width: "100%", position: "relative", top: 0, zIndex: 9, textAlign: "left",}}>

													<div id="mainNav" className="top-bar">
																	 <nav>
																		 <NavLink exact to="/" className="brand">Beatnik Records</NavLink>
																			<ul className="nav">
																			 <li className="link-anim nav-item"><NavLink to="/projects"><span>Projects</span></NavLink></li>
																			 <li className="link-anim nav-item"><NavLink to="/about-us"><span>About Us</span></NavLink></li>
																			 <li className="link-anim nav-item"><NavLink to="/contact-us"><span>Contact</span></NavLink></li>
																		 </ul>
																	 </nav>
																	</div>

																</div>
												<div style={{height: "50px",  width: "100%", position: "fixed", top: 0, zIndex: 9, textAlign: "left", }}>
													<div id="mainNav" className="top-bar">
										 					<nav>
										 						<NavLink exact to="/" className="brand">GTN</NavLink>
										 					</nav>

													</div>
												</div>
					 </DynamicHeader>
			)
	}
}
