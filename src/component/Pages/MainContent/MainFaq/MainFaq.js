import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MainFaq.scss";
import plus from "./plus.svg";

class MainFaq extends Component {
  constructor(props) {
    super(props);

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
    this.state = { isToggleOn: [false, false, false, false] };
  }

  handleClick(i) {
    console.log("btn pressed " + i);
    // let oldArray = this.props.isToggleOn;
    // oldArray[i] = !oldArray[i];
    // this.setState({ isToggle: oldArray });

    this.setState((state) => {
      let oldArray = state.isToggleOn;
      oldArray[i] = !oldArray[i];

      return {
        oldArray,
      };
    });
  }

  render() {
    return (
      <div className="Faq">
        <Container>
          <div className="Faq_content">
            <Row>
              <Col xl={10} lg={12} sm={12} xs={12}>
                <div className="Faq_title">
                  <p>FAQ</p>
                  <h3>Возможно, у вас остались вопросы? Отвечаем</h3>
                </div>
              </Col>
              <Col lg={11} sm={11} xs={10}>
                <div className="Faq_main">
                  <span>Когда я смогу использовать готовый продукт?</span>
                  {this.state.isToggleOn[0] === true && (
                    <p>
                      Мы обеспечиваем полный цикл разработки программного
                      обеспечения, развертывания и послерелизной поддержки. Вы
                      получите функциональный, масштабируемый и безопасный
                      продукт, идеально подходящий для бизнеса. MVP за 90 дней.
                    </p>
                  )}
                </div>
              </Col>
              <Col lg={1} sm={1} xs={1}>
                <button id="btn1" onClick={() => this.handleClick(0)}>
                  <img src={plus} alt="" />
                </button>
              </Col>
              <Col lg={11} sm={11} xs={10}>
                <div className="Faq_main">
                  <span>
                    У меня есть недоработанное приложение. Вы можете его
                    доработать?
                  </span>
                  {this.state.isToggleOn[1] === true && (
                    <p>
                      Мы обеспечиваем полный цикл разработки программного
                      обеспечения, развертывания и послерелизной поддержки. Вы
                      получите функциональный, масштабируемый и безопасный
                      продукт, идеально подходящий для бизнеса. MVP за 90 дней.
                    </p>
                  )}
                </div>
              </Col>
              <Col lg={1} sm={1} xs={1}>
                <button id="btn2" onClick={() => this.handleClick(1)}>
                  <img src={plus} alt="" />
                </button>
              </Col>
              <Col lg={11} sm={11} xs={10}>
                <div className="Faq_main">
                  <span>Сколько стоит разработка сайта?</span>
                  {this.state.isToggleOn[2] === true && (
                    <p>
                      Мы обеспечиваем полный цикл разработки программного
                      обеспечения, развертывания и послерелизной поддержки. Вы
                      получите функциональный, масштабируемый и безопасный
                      продукт, идеально подходящий для бизнеса. MVP за 90 дней.
                    </p>
                  )}
                </div>
              </Col>
              <Col lg={1} sm={1} xs={1}>
                <button id="btn3" onClick={() => this.handleClick(2)}>
                  <img src={plus} alt="" />
                </button>
              </Col>
              <Col lg={11} sm={11} xs={10}>
                <div className="Faq_main">
                  <span>Вы даёте гарантию на мобильное приложение?</span>
                  {this.state.isToggleOn[3] === true && (
                    <p>
                      Мы обеспечиваем полный цикл разработки программного
                      обеспечения, развертывания и послерелизной поддержки. Вы
                      получите функциональный, масштабируемый и безопасный
                      продукт, идеально подходящий для бизнеса. MVP за 90 дней.
                    </p>
                  )}
                </div>
              </Col>
              <Col lg={1} sm={1} xs={1}>
                <button id="btn4" onClick={() => this.handleClick(3)}>
                  <img src={plus} alt="" />
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default MainFaq;
