import React, { Components } from 'react';
import { MenuItems } from './MenuItems';

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="NavbarLogo">HausPlant</h1>
        <div className="MenuIcon">

        </div>
        <ul>
          {MenuItems.map((item, idx) => {
            return (
              <li key={idx}>
                <a
                  className={item.classNames}
                  href={item.url}>
                  {item.title}
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