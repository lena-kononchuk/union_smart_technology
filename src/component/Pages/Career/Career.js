import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import backgroundImage from "./img/career_bg_header.png";
import background from "./img/career_bg_footer.png";
import "./Career.scss";
import down from "./img/down.svg";
import CareerForm from "./CareerForm/CareerForm";
import Header from "../../Header/Header";

function GetPositionDescription(props) {
  let wordChars = props.dutiesDescription.split(";");
  const dutiesItems = wordChars.map((point) => <li>{point}</li>); //array of prepared strings

  let requirementsDes = props.requirementsDescription.split(";");
  const requirementsItems = requirementsDes.map((point) => <li>{point}</li>);

  let conditionsDes = props.conditionsDescription.split(";");
  const conditionsItems = conditionsDes.map((point) => <li>{point}</li>);

  return (
    <div className="position_description">
      <h5>{props.skills}</h5>
      <p>{props.skillsDescription}</p>
      <h5>{props.duties}</h5>
      <ul>{dutiesItems}</ul>
      <h5>{props.requirements}</h5>
      <ul>{requirementsItems}</ul>
      <h5>{props.conditions}</h5>
      <ul>{conditionsItems}</ul>
    </div>
  );
}

class Career extends Component {
  constructor(props) {
    super(props);

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
    this.state = { isToggleOn: [false, false, false, false] };
  }

  handleClick(i) {
    console.log("btn pressed " + i);
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
      <div
        className="Career"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Header/>
        <Container>
          <Row>
            <Col xl={6} lg={6} xs={12}>
              <div className="Career_info">
                <h2>Карьера</h2>
                <p>
                  Присоединяйтесь к команде победителей, способных решать
                  масштабные нешаблонные задачи, достойные лучших умов отрасли.
                </p>
                <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block button_career"
                >
                  Узнать больше
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={8} lg={10} md={10} xs={12}>
              <div className="career_description">
                <h3>С нами классно</h3>
                <p>
                  В нашей команде работают исключительно высококвалифицированные
                  специалисты, которые обладают качественными знаниями, навыками
                  и опытом работы с крупными проектами. Мы заботимся о том,
                  чтобы каждый сотрудник имел возможность обучаться и развивать
                  себя в любимом деле. А также о том, чтобы работа была вашим
                  безопасным местом, и вы чувствовали себя комфортно, выполняя
                  свои задачи.
                </p>
              </div>
            </Col>
            <Col xl={8} lg={8} xs={9}>
              <div className="position">
                <h4>Java Developer</h4>
                {this.state.isToggleOn[0] === true && (
                  <GetPositionDescription
                    skills="Навыки"
                    skillsDescription="Java, OPP, Java Spring"
                    duties="Обязанности"
                    dutiesDescription="Участие в разработке серверной части сервиса начисления кешбека.; Покрытие написанных сервисов тестами. Согласование реализуемых методов и подходов с командой разработчиков клиентов.;Реализация логики уведомления клиентов о происходящих событиях."
                    requirements="Требования"
                    requirementsDescription="Опыт коммерческой разработки back-end на Java от 1 года.; Опыт работы с Spring Framework.; Опыт работы с PostgreSQL, Oracle (или другими классическими базами данных).; Умение находить и использовать новые сервисы и технологии."
                    conditions="Условия"
                    conditionsDescription="Участие в разработке серверной части сервиса начисления кешбека.; Каждый специалист уникален, а потому уровень заработной платы обсуждается индивидуально.; Удаленная работа. При необходимости встречаемся в неформальной обстановке.; Стабильная зарплата."
                  />
                )}
              </div>
            </Col>
            <Col lg={1} sm={1} xs={1}>
              <button
                className="button"
                id="btn1"
                onClick={() => this.handleClick(0)}
              >
                <img src={down} alt="" />
              </button>
            </Col>
            <Col xl={8} lg={8} xs={9}>
              <div className="position">
                <h4>IOS-разработчик</h4>
                {this.state.isToggleOn[1] === true && (
                  <GetPositionDescription
                    skills="Навыки"
                    skillsDescription="React Native , Firebase, Git, Admob"
                    duties="Обязанности"
                    dutiesDescription="Разработка и создание приложений для мобильных платформ.; Работа с внешними источниками данных и API.; Рефакторинг и оптимизация кода."
                    requirements="Требования"
                    requirementsDescription="более чем 2 года опыта в разработке iOS. ; хорошее знание SwiftUI 1.​0, Combine, CoreData, URLSession.; опыт работы с мобильными платформами, операционными системами и инфраструктурой"
                    conditions="Условия"
                    conditionsDescription="Каждый специалист уникален, а потому уровень заработной платы обсуждается индивидуально.; Удаленная работа. При необходимости встречаемся в неформальной обстановке.; Стабильная зарплата."
                  />
                )}
              </div>
            </Col>
            <Col lg={1} sm={1} xs={1}>
              <button
                className="button"
                id="btn2"
                onClick={() => this.handleClick(1)}
              >
                <img src={down} alt="" />
              </button>
            </Col>
          </Row>
        </Container>
        <div
          className="Career_footer"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Container>
            <Row>
              <Col xl={12} lg={12} xs={12}>
                <div className="Career_footerMain">
                  <p>Возможность</p>
                  <h3>Готовы стать частью команды UST?</h3>
                  <span>
                    Если вы хотите стать частью нашей команды, оставьте свои
                    контакты и мы свяжемся с вами!
                  </span>
                  <CareerForm />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Career;
