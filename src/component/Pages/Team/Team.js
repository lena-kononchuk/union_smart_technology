import React, { Component } from "react";
import "./Team.scss";
import { Col, Container, Row } from "react-bootstrap";
import teamBG from "./img/teamBG.png";
import team1 from "./img/team1.png";
import team2 from "./img/team2.png";
import team3 from "./img/team3.png";
import team4 from "./img/team4.png";
import team5 from "./img/team5.png";
import team6 from "./img/team6.png";
import team7 from "./img/team7.png";
import team8 from "./img/team8.png";
import Header from "../../Header/Header";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

function GetTeamInfo(props) {
  return (
    <div className="Team_group">
      <img src={props.img} alt="team" />
      <p>{props.name}</p>
      <span>{props.position}</span>
    </div>
  );
}

class Team extends Component {
  render() {
    return (
      <div className="Team" style={{ backgroundImage: `url(${teamBG})` }}>
        <Header />
        <Container>
          <Row>
            <Col xl={6} lg={6} md={10} sm={10} xs={12}>
              <div className="Team_info">
                <p>Будем знакомы</p>
                <h2>Команда UST</h2>
                <span>
                  Мы обеспечиваем развитие интеллектуального потенциала
                  компании, способствуем профессиональному росту наших
                  сотрудников. Работаем в России и странах Европы. Мы создаем
                  достойные условия труда и строго соблюдаем законы,
                  регулирующие отношения между компанией, работниками и
                  государством.
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} xs={12}>
              <div className="Team_about">
                <h2>Команда, ориентированная на людей</h2>
                <p>
                  В команде нашей компании работают высококвалифицированные
                  IT-специалисты, которые обладают не только качественными
                  знаниями, но и бесценным опытом в разработке инновационных
                  продуктов. Самое главное - каждый из них влюблен в то, что
                  делает. Вы можете познакомиться с каждым участником нашей
                  команды чуть ближе.
                </p>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <GetTeamInfo
                img={team1}
                name="Николай Шпаков"
                position="Chief Executive Officer"
              />
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <GetTeamInfo img={team2} name="Олег Науменко" position="CТО" />
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <GetTeamInfo
                img={team3}
                name="Дмитрий Ершов"
                position="Руководитель группы IOS"
              />
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <GetTeamInfo
                img={team4}
                name="Ярослав Фомин"
                position="Специалист по подбору талантов"
              />
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <GetTeamInfo
                img={team5}
                name="Елена Горюнова"
                position="Руководитель группы дизайнеров"
              />
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <GetTeamInfo
                img={team6}
                name="Ярослав Фомин"
                position="Руководитель группы QA"
              />
            </Col>
            {/* <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <GetTeamInfo img={team7} name="Николай Шпаков" position="QA" />
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <GetTeamInfo
                img={team8}
                name="Ольга Науменко"
                position="Руководитель группы Android"
              />
            </Col> */}
          </Row>
        </Container>
        <div className="Team_footer" >
          <Container>
            <Row>
              <Col xl={8} lg={8} xs={12}>
                <div className="footer_info">
                  <p>Открытые позиции</p>
                  <h3>Присоединяйтесь к нам</h3>
                  <div className="footer_button">
                    <a
                      onClick={scrollToTop}
                      href="#/career"
                      className="btn btn-primary btn-lg "
                      role="button"
                      aria-pressed="true"
                    >
                      Узнать больше
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Team;
