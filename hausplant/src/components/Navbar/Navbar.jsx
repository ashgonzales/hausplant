import React, { Component } from 'react';
import { NavbarItems } from './NavbarItems';
import './Navbar.css';

class Navbar extends Component {
  // Set state so that when you click on menu icon, it says true or false
  state = { clicked: false }

  // Set click to the opposite value whenever you click it (which toggles between icons)
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo">HausPlant <i className="fas fa-seedling"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          {/* If this.state is clicked, changed bars icon to the times icon */}
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        {/* If clicked, adds clas of active; if not, stays nav-menu */}
        <ul className={this.state.clicked ? 'navbar-menu active' : 'navbar-menu'}>
          {NavbarItems.map((el, idx) => {
            return (
              <li key={idx}>
                <a
                  className={el.class}
                  href={el.url}>
                  {el.title}
                  </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar;