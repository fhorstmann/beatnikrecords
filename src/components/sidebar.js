import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";




class ParentComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
      return (
    // Pass on our props
    <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
    <nav>
      <ul className="mobile_nav">
      <li className="link-anim nav-item"><NavLink className="bm-item" to="/projects"><span onClick={() => this.closeMenu()}>Projects</span></NavLink></li>
      <li className="link-anim nav-item"><NavLink className="bm-item" to="/about-me"><span onClick={() => this.closeMenu()}>About Me</span></NavLink></li>
      <li className="link-anim nav-item"><NavLink className="bm-item" to="/beatnik-records"><span onClick={() => this.closeMenu()}>Beatnik Records</span></NavLink></li>
      </ul>

    </nav>

    </Menu>
  );
}}
export default ParentComponent;
