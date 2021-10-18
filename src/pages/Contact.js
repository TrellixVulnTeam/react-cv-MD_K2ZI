import React from "react";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />

      <div className="col-xl">
        <h1 className="profile display-4 fw-bolder">Contact</h1>

        <div className="profileDeux">
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
    </>
  );
};

export default Contact;
