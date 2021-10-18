import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Aos from "aos";

Aos.init({ duration: 200 });

class Knowledges extends Component {
  state = {
    languages: [
      { id: 2, techno: "HTML ", icon: "fab fa-html5 ", xp: 1.98 },
      { id: 3, techno: "Scss ", icon: "fab fa-sass", xp: 1.95 },
      {
        id: 1,
        techno: "Javascript ",
        icon: "fab fa-js-square ",
        xp: 1.2
      },
      { id: 4, techno: "Bootstrap ", icon: "fab fa-bootstrap", xp: 2 },
      { id: 5, techno: "Reactjs ", icon: "fab fa-react ", xp: 1.5 }
    ],
    Outils: [
      { id: 6, techno: "Illustrator ", icon: "fas fa-bezier-curve", xp: 2 },
      { id: 7, techno: "Photoshop ", icon: "far fa-file-image", xp: 2 },
      { id: 8, techno: "Git & Github ", icon: "fas fa-code-branch", xp: 1.78 },
      { id: 9, techno: "Docker ", icon: "fab fa-docker", xp: 1.5 },
      { id: 10, techno: "Visual Code ", icon: "far fa-file", xp: 1.6 }
    ]
  };
  render() {
    let { languages, Outils } = this.state;

    return (
      <>
        <Navigation imgchaque="../../../images/mdTwo.webp" />
        <div className="col-xl  ">
          <h1 className="profile display-4 fw-bolder">Knowledges</h1>
          <div className="projectBg px-3" data-aos="fade-up">
            <div className="row">
              <Projects
                languages={languages}
                title=" Languages "
                className="fw-bolder pt-2 pb-3"
                iconDev="fas fa-code"
              />

              <Projects
                languages={Outils}
                title=" Outils"
                className="fw-bolder pt-2 pb-3"
                iconDev="fas fa-laptop-code"
              />
            </div>

            <div className="row mt-5">
              <h1 className="fw-bolder pt-2 pb-3">
                <i className="fas fa-globe-americas"></i> Expériences
              </h1>
              <div className="col-xl-6">
                <h1>Developpeur Web</h1>
                <h2>2019-2021</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>

              <div className="col-xl-6">
                <h1>Infographiste</h1>
                <h2>2019-2021</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>

            <div className="row mt-2 d-flex ">
              <div className="row">
                <h1 className="fw-bolder pt-1 pb-3">
                  <i class="far fa-grin-hearts"></i> Centres d'interêts
                </h1>
                <div className="mt-2 d-flex justify-content-between flex-row">
                  <h2>
                    <i className="fab fa-bitcoin "> </i> Crypto
                  </h2>
                  <h2>
                    <i className="far fa-futbol"></i> Football
                  </h2>
                  <h2>
                    <i className="fas fa-gamepad"></i> Game
                  </h2>
                  <h2>
                    <i className="fas fa-plane-departure"></i> Travel
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Knowledges;
