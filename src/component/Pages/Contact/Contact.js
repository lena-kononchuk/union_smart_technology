import React, { Component } from 'react';
import Header from "../../Header/Header";
import teamBG from "../MainContent/MainContact/img/form.bg.png";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.scss";
import RegistrationForm from "../MainContent/MainContact/RegistrationForm/RegistrationForm";

class Contact extends Component {
    render() {
        return (
            <div className="Contact" style={{ backgroundImage: `url(${teamBG})` }}>
                <Header />
                <Container>
                    <Row>
                        <Col xl={8} lg={10} md={12} sm={12} xs={11}>
                            <div className="Contact_title">Связаться</div>
                            <div className="Contact_text">
                                Готовы предложить Вам лучшие IT-решения
                            </div>
                        </Col>
                        <Col xl={12} lg={12} md={12} xs={12}>
                            <RegistrationForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;