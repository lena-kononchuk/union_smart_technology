import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WhyUts from "./WhuUst.png";
import "./MainAbout.scss";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

class MainAbout extends Component {
  render() {
    return (
      <div className="about">
        <Container>
          <Row>
            <Col lg={12} md={12} xs={12}>
              <div className="about_title">
              </div>
            </Col>
            <Col xl={7} lg={7} md={12} xs={12}>
              <div className="about_img">
                <img src={WhyUts} alt="UTS" />
              </div>
            </Col>

            <Col xl={5} lg={5} md={10} sm={10} xs={12}>
              <div className="about_text">
                <h2>Почему UTS</h2>
                <p>
                  К услугам наших клиентов разработка программного обеспечения
                  на заказ, проектирование пользовательских интерфейсов,
                  создание сайтов (в том числе на основе индивидуальной CMS) и
                  их поддержка.
                  <br />
                  <br /> Мы также предлагаем услугу IT-консалтинга — налаживание
                  работы любых информационно-аналитических систем и
                  онлайн-решений компании для большей эффективности
                  бизнес-процессов. <br />
                  <br />
                  Сегодня компания «Union Smart Technology» имеет
                  представительства с умелыми project‑менеджерами в Словакии.
                  <br />
                  <br />
                  Такая география позволяет привлекать наиболее ответственных и
                  квалифицированных программистов и живо реагировать на
                  потребности заказчиков со всего света, сохраняя комфортный
                  уровень цен.
                </p>
              </div>
              <div className="about_button">
                <a
                  onClick={scrollToTop}
                  href="#/career"
                  className="btn btn-primary btn-lg "
                  role="button"
                  aria-pressed="true"
                >
                  Вакансии
                </a>
                <a
                  href="/"
                  className="btn btn-secondary btn-lg active"
                  role="button"
                  aria-pressed="true"
                >
                  Читать далee
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainAbout;
