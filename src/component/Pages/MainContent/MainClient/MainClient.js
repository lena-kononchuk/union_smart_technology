import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MainClient.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import client1 from "./img/client1.png";
import client2 from "./img/client2.png";
import client3 from "./img/client3.png";
import client4 from "./img/client4.png";
import client5 from "./img/client5.png";

function GetCarousel(props) {
  console.log("get carousel: " + props.direction);
  if (props.direction === undefined || !props) {
    console.log("Invalid data. Can't process");
    return <div />;
  }

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={props.deviceType !== "mobile"}
      autoPlaySpeed={1000}
      additionalTransfrom={props.direction ? 0 : 3}
      keyBoardControl={false}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      // dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
    >
      <div>
        <img src={client1} alt="client1" />
      </div>
      <div>
        <img src={client2} alt="client1" />
      </div>
      <div>
        <img src={client3} alt="client1" />
      </div>
      <div>
        <img src={client4} alt="client1" />
      </div>
      <div>
        <img src={client5} alt="client1" />
      </div>
      <div>
        <img src={client4} alt="client1" />
      </div>
    </Carousel>
  );
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 390, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class MainClient extends Component {
  render() {
    return (
      <div className="client">
        <Container>
          <Row>
            <Col xxl={12} lg={12} md={12} xs={12}>
              <div className="client_title">Клиенты</div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <GetCarousel direction="true" responsive="true" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainClient;
