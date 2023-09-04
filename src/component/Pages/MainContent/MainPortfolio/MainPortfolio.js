import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MainPortfolio.scss";
import offer1 from "./img/offer1.png";
import offer2 from "./img/offer2.png";
import offer3 from "./img/offer3.png";
import offer4 from "./img/offer4.png";
import offer5 from "./img/offer5.png";
import offer6 from "./img/offer6.png";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

class MainPortfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Container>
          <Row>
            <Col lg={12} xs={11}>
              <div className="portfolio_main">
                <p>Портфолио</p>
                <h3>Завершенные проекты</h3>
                <p>
                  Мы специализируемся на предоставлении программного обеспечения
                  высшего качества и предоставлении высококвалифицированных
                  команд с опытом в области разработки блокчейнов, аналитики
                  больших данных и AI/ML, а также услуг по разработке
                  программного обеспечения на заказ.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className="portfolio_info">
                <img src={offer1} alt="offer" />
                <h3>Мобильный контроль</h3>
                <p>Сервис для работы с клиентами и партнерами</p>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className="portfolio_info">
                <img src={offer2} alt="offer" />
                <h3>Голосовое управление</h3>
                <p>Сервис для работы по задачам</p>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className="portfolio_info">
                <img src={offer3} alt="offer" />
                <h3>Vroomgames</h3>
                <p>Сервис для работы со списками заказов</p>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className="portfolio_info">
                <img src={offer4} alt="offer" />
                <h3>ATOL-бонус</h3>
                <p>Мобильное приложение для профессионалов</p>
              </div>
            </Col>
            {/* <Col lg={6} md={6} xs={0}>
              <div className="portfolio_display">
                <div className="portfolio_info info">
                  <img src={offer5} alt="offer" />
                  <h3>Prorab-x</h3>
                  <p>Мобильное приложение для строителей</p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} xs={0}>
              <div className="portfolio_display">
                <div className="portfolio_info info">
                  <img src={offer6} alt="offer" />
                  <h3>Актуаль</h3>
                  <p>Сайт промом игры</p>
                </div>
              </div>
            </Col> */}
            <div className="portfolio_button">
              <a
                onClick={scrollToTop}
                href="#/portfolio"
                className="btn btn-primary btn-lg "
                role="button"
                aria-pressed="true"
              >
                Портфолио
              </a>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainPortfolio;
