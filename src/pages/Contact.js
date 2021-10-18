import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  });
  return (
    <>
      <Navigation imgchaque="../../../images/mdOne.webp" />
      <div className="col-xl ">
        <h1 className="profile display-4 fw-bolder">Contact</h1>
        <div className="row ">
          <div className="profileDeux" data-aos="fade-up">
            <div className="app-form ">
              <div className="app-form-group">
                <input className="app-form-control " placeholder="NAME" />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="EMAIL" />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="CONTACT NO" />
              </div>
              <div className="app-form-group message">
                <input className="app-form-control" placeholder="MESSAGE" />
              </div>
              <div className="app-form-group buttons">
                <button className="app-form-button">CANCEL</button>
                <button className="app-form-button">SEND</button>
              </div>
            </div>

            <ul className="contact ">
              <li>
                <i className="fas fa-map-marked-alt"></i> Valence
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> 06.90.98.43.12
              </li>
              <li>
                <i className="far fa-envelope-open"></i> Manuscrit974@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="col-xl">
        <div className="app-form ">
          <div className="app-form-group">
            <input className="app-form-control" placeholder="NAME" />
          </div>
          <div className="app-form-group">
            <input className="app-form-control" placeholder="EMAIL" />
          </div>
          <div className="app-form-group">
            <input className="app-form-control" placeholder="CONTACT NO" />
          </div>
          <div className="app-form-group message">
            <input className="app-form-control" placeholder="MESSAGE" />
          </div>
          <div className="app-form-group buttons">
            <button className="app-form-button">CANCEL</button>
            <button className="app-form-button">SEND</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
