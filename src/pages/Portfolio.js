import React, { Component } from "react";
import Navigation from "../components/Navigation";
import PorfolioProject from "../components/PorfolioProject";
import porfolioData from "../data/porfolioData";
import Aos from "aos";

Aos.init({ duration: 200 });
class Portfolio extends Component {
  state = {
    myPortolioUn: porfolioData
  };
  render() {
    let { myPortolioUn } = this.state;
    return (
      <>
        <Navigation imgchaque="../../../images/mdThree.webp" />

        <div className="col-xl">
          <h1 className="profile display-4 fw-bolder">Portfolio</h1>

          <div className="profilProject" data-aos="fade-up">
            <PorfolioProject myPorftolioUn={myPortolioUn} />
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
