import React, { Component } from "react";
import Main from "./Main/Main";
import MainAbout from "./MainAbout/MainAbout";
import MainOffers from "./MainOffers/MainOffers";
import MainPortfolio from "./MainPortfolio/MainPortfolio";
import MainBenefits from "./MainBenefits/MainBenefits";
import MainClient from "./MainClient/MainClient";
// import MainContact from "./MainContact/MainContact";
import MainFaq from "./MainFaq/MainFaq";

class MainContent extends Component {
  render() {
    return (
      <div className="MainContent">
        <Main />
        <MainAbout />
        <MainOffers />
        <MainPortfolio />
        <MainBenefits />
        <MainClient />
        {/* <MainContact /> */}
        <MainFaq />
      </div>
    );
  }
}

export default MainContent;
