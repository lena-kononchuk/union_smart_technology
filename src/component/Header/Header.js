import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Header.scss";
import logo from "./logo.png";
import { MenuItems } from "./MenuItems";
import { Link} from "react-router-dom";

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <Container>
            <img
              className="navbar-logo"
              src={logo}
              alt="logo"
              width="376"
              height="74"
            />
            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </nav>
      </>
    );
  }
}

export default Header;
