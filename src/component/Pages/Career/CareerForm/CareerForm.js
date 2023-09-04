import React, { Component } from "react";
import "./CareerForm.scss";

class CareerForm extends Component {
  render() {
    return (
      <div className="CareerForm">
        <form>
          <div className="form-group row">
            <label htmlFor="inputName" className="col-xl-6 col-xl-6 col-sm-12 col-xs-12 col-form-label">
              Персональная информация <br /> Расскажите, как к вам обращаться и
              как можно связаться с вами
            </label>
            <div className="col-xl-6 col-xl-6 col-sm-12">
              <input
                type="text"
                placeholder="Имя"
                className="form-control"
                id="inputName"
                required
              />
              <input
                type="email"
                placeholder="Электронная почта"
                name="email"
                className="form-control"
              />
              <input
                type="tel"
                placeholder="Телефон"
                name="tel"
                className="form-control"
              />
            </div>

            <label htmlFor="inputFile" className="col-xl-6 col-md-6 col-sm-12 col-xs-12 col-form-label">
              Резюме/Портфолио <br /> Загрузите сюда свое резюме
            </label>
            <div className="col-xl-6 col-xl-6 col-sm-12">
              <input type="file" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputQuestions" className="col-xl-6 col-md-6 col-sm-12 col-xs-12 col-form-label">
              Вопросы <br /> Пожалуйста, ответьте на вопросы
            </label>
            <div className="col-xl-6 col-xl-6 col-sm-12">
              <textarea
                type="text"
                name="file"
                placeholder="Сопроводительное письмо"
                className="form-control"
              />
              <button className="button1" type="submit">
                Подать заявку
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CareerForm;
