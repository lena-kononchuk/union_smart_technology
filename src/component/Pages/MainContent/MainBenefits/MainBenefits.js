import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MainBenefits.scss";
import benefits from "./img/benefits.svg";
import benefits2 from "./img/benefits2.svg";
import benefits3 from "./img/benefits3.svg";
import benefits4 from "./img/benefits4.svg";

class MainBenefits extends Component {
  render() {
    return (
      <div className="benefits">
        <Container>
          <Row>
            <Col xl={12} lg={10} xs={12}>
              <div className="benefits_info">
                <div className="benefits_title">Наши </div>
                <div className="benefits_subtitle">Преимущества</div>
                <div className="benefits_text">
                  Основная ценность нашей компании - создание качественного
                  продукта и удовлетворение потребностей клиента. Поэтому перед
                  началом разработки мы проводим маркетинговые исследования и
                  помогаем клиенту определить стратегию развития продукта.
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} sm={12} xs={12}>
              <div className="benefits_main">
                <img src={benefits} alt="" />
                <div className="benefits_about">
                  Разработка программного обеспечения
                </div>
                <div className="benefits_item">
                  Мы обеспечиваем полный цикл разработки программного
                  обеспечения, развертывания и послерелизной поддержки. Вы
                  получите функциональный, масштабируемый и безопасный продукт,
                  идеально подходящий для бизнеса. MVP за 90 дней.
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} sm={12} xs={12}>
              <div className="benefits_main">
                <img src={benefits2} alt="" />
                <div className="benefits_about items">
                  «Спасение» вашего проекта
                </div>
                <div className="benefits_item">
                  Мы присоединяемся к любому этапу разработки, анализируем
                  текущее состояние продукта, возвращаем процесс разработки в
                  нужное русло и выпускаем продукт вовремя.
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} sm={12} xs={12}>
              <div className="benefits_main">
                <img src={benefits3} alt="" />
                <div className="benefits_about">
                  Создание выделенного ИТ-центра
                </div>
                <div className="benefits_item">
                  Мы предоставляем выделенные команды на полный рабочий день,
                  включающие аналитиков, дизайнеров, разработчиков, QA-инженеров
                  и менеджеров проектов. Соберите свою команду всего за
                  несколько дней.
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} sm={12} xs={12}>
              <div className="benefits_main">
                <img src={benefits4} alt="" />
                <div className="benefits_about items">
                  Профессионализм команды
                </div>
                <div className="benefits_item">
                  Избегайте затрат на инвестиции в развитие внутренних навыков.
                  Нанимайте профессионалов с необходимыми навыками для
                  обеспечения результатов проекта и своевременной доставки.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainBenefits;
