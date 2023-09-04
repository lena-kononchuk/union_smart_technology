import React, { Component } from "react";
import "./RegistrationForm.scss";
import { Button, Col, Row } from "react-bootstrap";
import linkedin from "./img/LinkedIn.svg";
import google from "./img/Google.svg";
import facebook from "./img/Facebook.svg";
import dribble from "./img/Dribbble.svg";
import instagram from "./img/Instagram.svg";
import Header from "../../../../Header/Header";

function GetCompanyContact(props) {
  return (
    <div className="item">
      <h4>{props.name}</h4>
      <p>
        <a href={"mailto:" + props.email}>{props.email}</a>
      </p>
      <p>
        <a href={"tel:" + props.tel}>{props.tel}</a>
      </p>
    </div>
  );
}

class RegistrationForm extends Component {
  render() {
    return (
      <div className="registrationForm">
        <Header/>
        <div className="registrationForm_absolute">
          <Row>
            <Col lg={6} md={12} sm={12} xs={12}>
              <div className="registrationForm_idea" id="item1">
                <h4>Есть идея?</h4>
                <p>
                  У вас есть уже существующий проект, который вы хотите
                  усовершенствовать? Вы хотите воплотить в жизнь смелую идею, но
                  вам нужна помощь? Или вы вообще не знаете, с чего начать
                  реализацию проекта?
                </p>
                <div className="registrationForm_info">
                  <GetCompanyContact
                    name="Словения"
                    email="contact@unionsmarttech.org"
                    tel="+380 94 539-852"
                  />
                  <GetCompanyContact
                    name="Украина"
                    email="contact@unionsmarttech.org"
                    tel="+380 94 539-852"
                  />
                </div>
                <div className="social-container">
                  <a href="https://www.linkedin.com">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a href="https://www.google.com">
                    <img src={google} alt="google" />
                  </a>
                  <a href="https://www.facebook.com">
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="https://www.dribble.com">
                    <img src={dribble} alt="dribble" />
                  </a>
                  <a href="https://www.instagram.com">
                    <img src={instagram} alt="instagram" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} xs={12}>
              <div className="form_block" id="item1">
                <h3>Связаться с нами</h3>
                <span>
                  Оставьте свою контактную информацию, и мы с радостью свяжемся
                  с вами!
                </span>
                <form>
                  <p>
                    {" "}
                    <input type="text" name="name" placeholder="Имя" />
                  </p>
                  <p>
                    {" "}
                    <input type="text" name="company" placeholder="Компания" />
                  </p>
                  <p>
                    {" "}
                    <input
                      type="text"
                      name="email"
                      placeholder="Электронная почта"
                    />
                  </p>
                  <p>
                    {" "}
                    <textarea
                      type="text"
                      // cols="43"
                      // rows="3"
                      placeholder="Сообщение"
                    />
                  </p>
                  <Button type="button">Отправить</Button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
