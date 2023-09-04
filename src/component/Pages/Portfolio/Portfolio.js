import React, { Component } from "react";
import "./Portfolio.scss";
import portfolio_background from "./img/portfolio_block_bg.png";
import {Col, Container, Row} from "react-bootstrap";
import X from "./img/x.png";
import helper from "./img/helper.png";
import atol from "./img/atol.png";
import vr from "./img/vr.png";
import forClient from "./img/forClient.png";
import cinzano from "./img/cinzano.png";
import actual from "./img/actual.png";
import Client from "../MainContent/MainClient/MainClient";
import portfolio_footer from "./img/portfolio_block_bg_footer.png";
import Header from "../../Header/Header";


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
}
  function GetPortfolioInfo(props) {
    return (
        <div className="Portfolio_group">
          <img src={props.img} alt="team"/>
          <h5>{props.title}</h5>
          <p>{props.description}</p>
        </div>
    );
  }


  class Portfolio extends Component {
    render() {
      return (
          <div className="Portfolio" style={{backgroundImage: `url(${portfolio_background})`}}>
            <Header/>
            <Container>
              <Row>
                <Col xl={9} lg={9} md={12} sm={12}>
                  <div className="Portfolio_main">
                    <h2>Портфолио</h2>
                    <p>Мы можем разработать для вас любое индивидуальное решение.
                      Наша компания обладает широкими возможностями для
                      успешного создания технически-сложных систем.</p>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block Portfolio_button"
                    >
                      Заказать проект
                    </button>
                  </div>
                </Col>
              </Row>
              <div className="Portfolio_page">
                <Row>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <GetPortfolioInfo
                        img={X}
                        title="Прораб-x"
                        description="Мобильное приложение для строителей"
                    />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <GetPortfolioInfo
                        img={helper}
                        title="Голосовой помошник"
                        description="Сервис для работы со списками задач"
                    />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <GetPortfolioInfo
                        img={atol}
                        title="ATOL-бонус"
                        description="Мобильное приложение для профессионалов"
                    />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <GetPortfolioInfo
                        img={vr}
                        title="Vroomgames"
                        description="Сервис для работы со списками заказов"
                    />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <GetPortfolioInfo
                        img={forClient}
                        title="Сервис для работы с клиентами и партнерами"
                        description="Сервис для работы с клиентами"
                    />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <GetPortfolioInfo
                        img={cinzano}
                        title="Промо-система Cinzano"
                        description="Сервис для работы со списками заказов"
                    />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12}>
                    <GetPortfolioInfo
                        img={actual}
                        title="Актуаль"
                        description="Сайт промо игры"
                    />

                  </Col>
                </Row>
                <Row>
                  <Col xl={12} lg={12} md={12} sm={12}>
                    <div className="Portfolio_client">
                      <Client/>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="Portfolio_footer" style={{backgroundImage: `url(${portfolio_footer})`}}>
              <Container>
                <Row>
                  <Col xl={8} lg={8} md={10} sm={12}>
                    <div className="Portfolio_footer-main">
                      <p>Есть идея?</p>
                      <h2>Свяжитесь с нами</h2>
                      <p>У вас есть уже существующий проект, который вы хотите усовершенствовать?
                        Вы хотите воплотить в жизнь смелую идею, но вам нужна помощь?
                        Или вы вообще не знаете, с чего начать реализацию проекта?
                      </p>
                      <a
                          onClick={scrollToTop}
                          href="#/contact"
                          className="btn btn-primary btn-lg btn-block button_footer"
                          role="button"
                          aria-pressed="true"
                      > Связаться</a>

                    </div>
                  </Col>
                </Row>
              </Container>

            </div>

          </div>
      );
    }
  }
export default Portfolio;
