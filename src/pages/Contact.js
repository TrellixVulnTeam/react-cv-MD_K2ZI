import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Aos from "aos";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  let myFlex =
    "blocChargement display-1 d-flex flex-column justify-content-center align-item-center h-50 m-auto w-100  text-center mx-auto fw-bolder ";

  useEffect(() => {
    Aos.init({ duration: 200 });
  });
  let $orangeF = "#f05225";
  return (
    <>
      <Navigation imgchaque="../../../images/mdOne.webp" />
      <div className="col-xl ">
        <h1 className="profile display-4 fw-bolder">Contact</h1>
        <div className={myFlex}>
          <h1>
            <i className="fas fa-map-pin" style={{ color: "#f05225" }}></i>{" "}
            Valence
          </h1>

          <CopyToClipboard text="06.69s">
            <h1 onClick={() => alert("Numero copié")}>
              <i className="fas fa-phone-alt" style={{ color: "#f05225" }}></i>{" "}
              06.69.78.65.56
            </h1>
          </CopyToClipboard>

          <h1>
            {" "}
            <i class="far fa-paper-plane" style={{ color: "#f05225" }}></i>{" "}
            Manuscrit2020@gmail.com
          </h1>
        </div>
      </div>
    </>
  );
};

export default Contact;
