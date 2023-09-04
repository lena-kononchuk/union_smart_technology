import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MainOffers.scss";
import programing from "./img/programing.svg";
import testing from "./img/testing.svg";
import support from "./img/support.svg";
import analise from "./img/analise.svg";
import prototipe from "./img/prototipe.svg";
import design from "./img/design.svg";
import arrow from "./img/arrow.svg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

class MainOffers extends Component {
  render() {
    return (
      <div className="offers">
        <Container>
          <Row>
            <Col lg={9} md={12} sm={12} xs={12}>
              <div className="offers_title">Наши предложения</div>
              <div className="offers_subtitle">Разработка полного цикла</div>
              <div className="offers_text">
                Мы можем разработать для вас любое индивидуальное решение. Наша
                компания обладает широкими возможностями для успешного создания
                технически-сложных систем.
              </div>
            </Col>
            {/*<Col lg={4} xs={1}></Col>*/}
            <Col lg={4} md={6} xs={12}>
              <div className="offers_block">
                <img src={programing} alt="programing" />
                <h3>Программируем</h3>
                <p>
                  Создаём расширяемую архитектуру, пишем чистый и стабильный
                  код. Интегрируемся с технологиями заказчика.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="offers_block block">
                <img src={testing} alt="testing" />
                <h3>Тестируем</h3>
                <p>
                  Проводим ручное функциональное тестирование и пишем
                  UI-автотесты. Готовим чек-листы и тест-кейсы.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="offers_block block">
                <img src={support} alt="support" />
                <h3>Поддерживаем</h3>
                <p>
                  Работаем по SLA. Следим за стабильностью работы приложения,
                  обновляем под новые устройства и версии iOS и Android.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="offers_block">
                <img src={analise} alt="analise" />
                <h3>Анализируем</h3>
                <p>
                  Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии
                  заказчика и потребности пользователей.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="offers_block">
                <img src={prototipe} alt="prototipe" />
                <h3>Прототипируем</h3>
                <p>
                  Прорабатываем пользовательские сценарии, проектируем логику
                  приложения, скечируем основные экраны.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="offers_block">
                <img src={design} alt="design" />
                <h3>Дизайним</h3>
                <p>
                  Адаптируем фирменный стиль заказчика к гайдлайнам платформ.
                  Рисуем удобные и понятные интерфейсы.
                </p>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <div className="offers_button">
                <a
                  onClick={scrollToTop}
                  href="#/services"
                  className="btn btn-primary3 btn-lg "
                  role="button"
                  aria-pressed="true"
                >
                  Все услуги
                  {/* <span>
                    {" "}
                    <img src={arrow} alt="arrow" className="img-primary3" />
                  </span> */}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainOffers;
