import React, { Component } from "react";
import "./Services.scss";
import backgroundServices from "./img/ourProduct_bg.png";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Services1 from "./img/info_block1.png";
import Services2 from "./img/info_block2.png";
import Services3 from "./img/info_block3.png";
import Services4 from "./img/info_block4.png";
import Services5 from "./img/info_block5.png";
import analise from "../MainContent/MainOffers/img/analise.svg";
import proto from "../MainContent/MainOffers/img/prototipe.svg";
import design from "../MainContent/MainOffers/img/design.svg";
import programing from "../MainContent/MainOffers/img/programing.svg";
import testing from "../MainContent/MainOffers/img/testing.svg";
import support from "../MainContent/MainOffers/img/support.svg";
import VROOM from "./img/VROOM_logo.png";
import Danone from "./img/Danone_logo.png";
import Spase from "./img/Code_Spase_logo.png";
import actual from "./img/actual.png";
import chat from "./img/chat.svg";
import vr from "./img/iconar.svg";
import game from "./img/game.svg";
import technicalSpecifications from "./img/techtask.svg";
import serverDevelopment from "./img/serdevs.svg";
import outsourcing from "./img/autsors.svg";
import Header from "../../Header/Header";

const scrollToTop = () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

function  GetServicesAdditional(props){
  return(
      <div className="additional_block">
        <span><img src={props.additionalImg} alt="logotipe"/></span>
        <h5>{props.additInfo}</h5>
      </div>
  );
}

// function  get Services Pages
function  GetServicesPages(props){
  return(
      <div className="services_pages">
        <h5>{props.name}</h5>
        <p>{props.description}</p>
        <div>{props.done}</div>
        <img src={props.img} alt="client_logo"/>
      </div>
  );
}

// function  get Services Item
function GetServicesItem(props) {
  return (
      <div className="content-block">
        <img src={props.img} alt="img"></img>
        <h5>{props.about}</h5>
      </div>
  );
}

// function for get Carousel Items description
function GetCarouselItemsDescription(props) {
  return (
    <div className="card-block">
      <h5>{props.title}</h5>
      <span>{props.text}</span>
    </div>
  );
}
// function Carousel
function GetCarouselItem(props) {
  if (props.direction === undefined || !props) {
    return <div />;
  }
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={props.deviceType !== "mobile"}
      autoPlaySpeed={2000}
      additionalTransfrom={props.direction ? 0 : 3}
      keyBoardControl={false}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      // centerPadding="30px"
    >
      <div className="item ml-1">
        <img src={Services1} alt="client1" />
        <GetCarouselItemsDescription
          title="Быстрое масштабирование"
          text="Мы управляем каждым проектом так, чтобы помочь вам быстро
            масштабировать бизнес-решения и соответствовать изменениям в
            потребностях клиентов вне зависимости от региона, часового пояса или
            требующейся функциональности."
        />
      </div>
      <div className="item">
        <img src={Services2} alt="client1" />
        <GetCarouselItemsDescription
          title="Прозрачное взаимодействие"
          text="Ваши результаты — основа нашего успеха. Мы используем новейшие
            технологии, нструменты и платформы для совместной работы, чтобы
            гарантировать прозрачность взаимодействия и возможность
            контролировать его из любой точки мира."
        />
      </div>
      <div className="item">
        <img src={Services3} alt="client1" />
        <GetCarouselItemsDescription
          title="Смешанные команды"
          text="Для создания цифрового опыта или продукта требуются экспертный опыт
            и знания специалистов по различным предметным областям. Мы создаем
            многопрофильные команды для разработки комплексных технологических
            решений, которые помогут вам добиться необходимых результатов."
        />
      </div>
      <div className="item">
        <img src={Services4} alt="client1" />
        <GetCarouselItemsDescription
          title="ПРОИЗВОДСТВО ЦИФРОВЫХ РЕШЕНИЙ"
          text="Пользовательский опыт, данные, процессы, технологии: мы умеем
            создавать из этих компонентов единую систему вне зависимости от
            масштаба задачи и обеспечивать реальный эффект от инвестиций в
            цифровые проекты."
        />
      </div>
      <div className="item">
        <img src={Services5} alt="client1" />
        <GetCarouselItemsDescription
          title="ОТКРЫТОСТЬ"
          text="Мы используем свободное и открытое ПО и сотрудничаем с
            ИТ-сообществами. Мы отказываемся от закрытости и применении только
            проприетарных технологий — и получаем новые преимущества: гибкость,
            доступ к экспериментальным идеям и возможность сотрудничества для
            создания лучших решений."
        />
      </div>
    </Carousel>
  );
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class Services extends Component {
  render() {
    return (
      <div
        className="Services"
        style={{ backgroundImage: `url(${backgroundServices})` }}
      >
        <Header/>
        <Container>
          <Row>
            <Col xl={7} lg={7} xs={12}>
              <div className="Services_info">
                <p>Как мы выполняем</p>
                <h2>Наши проекты</h2>
                <span>
                  Мы осуществляем технологическую и бизнес-трансформацию,
                  используя методологию Agile, проверенные на практике платформы
                  для организации совместной работы с заказчиком, передовые
                  инструменты для разработки, многопрофильные команды
                  специалистов с различными навыками и распределенную глобальную
                  модель оказания услуг.
                </span>
                <div className="Services_button">
                  <a
                      onClick={scrollToTop}
                    href="#/portfolio"
                    className="btn btn-primary4"
                    role="button"
                    aria-pressed="true"
                  >
                    Заказать проект
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={10} lg={10} md={10} xs={12}>
              <div className="Services_cooperation">
                <p>Сотрудничество</p>
                <h2>С учетом Bаших потребностей</h2>
              </div>
            </Col>
            <Col xl={12} lg={12} xs={12}>
              <div className="Services_carousel">
                <GetCarouselItem direction="true" responsive="true" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="Services_items" style={{ backgroundColor: "#E6E8EF" }}>
          <Container>
            <Row>
              <Col xl={12} lg={12} xs={12} >
            <div className="Services_full" >
              <span>Полный спектр</span>
              <h2>Наших услуг</h2>
            </div>
              </Col>
            <div className="Services_fullItem">
              <Col xl={2} lg={2} sm={4} xs={6}  >
              <GetServicesItem
                  img={analise}
                  about="Анализируем"
              />
              </Col>
              <Col xl={2} lg={2} sm={4}  xs={6}  >
              <GetServicesItem
                  img={proto}
                  about="Прототипируем"
              />
              </Col>
              <Col xl={2} lg={2} sm={4} xs={6} >
              <GetServicesItem
                  img={design}
                  about="Дизайним"
              />
              </Col>
              <Col xl={2} lg={2} sm={4}  xs={6} >
              <GetServicesItem
                  img={programing}
                  about="Программируем"
              />
              </Col>
              <Col  xl={2} lg={2}  sm={4} xs={6} >
              <GetServicesItem
                  img={testing}
                  about="Тестируем"
              />
              </Col>
              <Col xl={2} lg={2} sm={4}  xs={6} >
              <GetServicesItem
                  img={support}
                  about="Поддерживаем"
              />
              </Col>
            </div>
            </Row>
          </Container>

        </div>
        <div className="services_page">
          <Container>
            <Row>
            <Col xl={8} lg={8} xs={12}>
              <GetServicesPages
                  name="Анализируем"
                  description="Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей."
                  done="Мы анализировали, когда делали проект для:"
                  img={VROOM}
              />
              <GetServicesPages
                  name="Прототипируем"
                  description="Прорабатываем пользовательские сценарии, проектируем логику приложения, скечируем основные экраны."
                  done="Мы прототипировали, когда делали проект для:"
                  img={Danone}
              />
              <GetServicesPages
                  name="Дизайним"
                  description="Адаптируем фирменный стиль заказчика к гайдлайнам платформ. Рисуем удобные и понятные интерфейсы."
                  done="Мы создавали дизайн, когда делали проект для:"
                  img={actual}
              />
              <GetServicesPages
                  name="Дизайним"
                  description="Адаптируем фирменный стиль заказчика к гайдлайнам платформ. Рисуем удобные и понятные интерфейсы."
                  done="Мы создавали дизайн, когда делали проект для:"
                  img={VROOM}
              />
              <GetServicesPages
                  name="Программируем"
                  description="Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика."
                  done="Мы прогаммировали, когда делали проект для:"
                  img={Spase}
              />
              <GetServicesPages
                  name="Поддерживаем"
                  description="Работаем по SLA. Следим за стабильностью работы приложения, обновляем под новые устройства и версии iOS и Android."
                  done="Мы предоставляем поддержку:"
                  img={Danone}
              />
            </Col>
          </Row>
          </Container>
          </div>
          <div className="services__additional-info">
            <Container>
              <Row>
                <Col  xl={12} lg={12} xs={12}>
                  <h2>Дополнительные услуги</h2>
                </Col>
                  <div className="services_additional">
                    <Col  xl={4} lg={6} md={6} sm={6} xs={12}>
                    <GetServicesAdditional
                    additionalImg={chat}
                    additInfo="Разработка чат-ботов"
                />
                    </Col>
                    <Col  xl={4} lg={6} md={6} sm={6} xs={12}>
                    <GetServicesAdditional
                    additionalImg={vr}
                    additInfo="AR/VR"
                />
                    </Col>
                    <Col  xl={4} lg={6} md={6} sm={6} xs={12}>
                    <GetServicesAdditional
                    additionalImg={game}
                    additInfo="Разработка игр"
                />
                    </Col>
                    <Col  xl={4} lg={6} md={6} sm={6} xs={12}>
                    <GetServicesAdditional
                    additionalImg={technicalSpecifications}
                    additInfo="Техническое задания"
                />
                    </Col>
                    <Col  xl={4} lg={6} md={6} sm={6} xs={12}>
                    <GetServicesAdditional
                    additionalImg={serverDevelopment}
                    additInfo="Серверная разработка"
                />
                    </Col>
                    <Col  xl={4} lg={6} md={6} sm={6} xs={12}>
                    <GetServicesAdditional
                    additionalImg={outsourcing}
                    additInfo="Аутсорсинг"
                />
                    </Col>
              </div>
          </Row>
          </Container>
          </div>
        </div>
    );
  }
}

export default Services;
