import React, { Component } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./Footer.scss";
import linkedin from "../Pages/MainContent/MainContact/RegistrationForm/img/LinkedIn.svg";
import google from "../Pages/MainContent/MainContact/RegistrationForm/img/Google.svg";
import facebook from "../Pages/MainContent/MainContact/RegistrationForm/img/Facebook.svg";
import dribble from "../Pages/MainContent/MainContact/RegistrationForm/img/Dribbble.svg";
import instagram from "../Pages/MainContent/MainContact/RegistrationForm/img/Instagram.svg";
import { MenuItems } from "../Header/MenuItems";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};



function GetCompanyAddress(props) {
  return (
    <div className="footer_item">
      <h4>{props.name}</h4>
      <div className="footer_contact">
        <p>
          <a href={"mailto:" + props.email}>{props.email}</a>
        </p>
        <p>
          <a href={"tel:" + props.tel}>{props.tel}</a>
        </p>
      </div>
      <p>{props.address}</p>
    </div>
  );
}

class Footer extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col xl={3} lg={3} md={6} xs={6}>
              <GetCompanyAddress
                name="Украинcкая команда"
                email="contact@unionsmarttech.org"
                tel="+380 94 539-852"
                address="24 Entuziastov stree, Ukraine, 191 119"
              />
            </Col>
            <Col xl={3} lg={3} md={6} xs={6}>
              <GetCompanyAddress
                name="Словакская команда"
                email="contact@unionsmarttech.org"
                tel="+380 94 539-852"
                address="24 Entuziastov stree, Ukraine, 191 119"
              />
            </Col>
            <Col xl={3} lg={3} md={12} sm={12} xs={12}>
              <div className="footer_navigation">
                <nav>
                  <ul className={this.state.clicked ? "nav-footer active" : "nav-footer"}>
                    {MenuItems.map((item, index) => {
                      return (
                        <li key={index} onClick={scrollToTop}>
                          <Link className={item.cName} to={item.url}>
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </Col>
            {/*<Col xl={2} lg={2} md={6} sm={12} xs={6}>*/}
            {/*  <div className="footer_navigation "></div>*/}
            {/*</Col>*/}
            <Col xl={3} lg={3} md={12} sm={12} xs={12}>
              <div className="footer_social">
                <a href="https://www.linkedin.com">
                  <p>linkedin</p>
                  <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://www.google.com">
                  <p>google</p>
                  <img src={google} alt="google" />
                </a>
                <a href="https://www.facebook.com">
                  <p>facebook</p>
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.dribble.com">
                  <p>dribble</p>
                  <img src={dribble} alt="dribble" />
                </a>
                <a href="https://www.instagram.com">
                  <p>instagram</p>
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </Col>
            {/* <Col lg={6} md={12} xs={12}>
              <div className="footer_about">
                <span>Разработка: студия ЯР</span>
              </div>
            </Col>
            <Col lg={6} md={12} xs={12}>
              <div className="footer_cookies"> */}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {/* <a href="#">
                  Политика конфиденциальности
                </a>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
