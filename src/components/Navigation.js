import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = props => {
  let myNavigation =
    "  myNavigation text-right p-5 text-light d-flex flex-column align-middle";
  let navItem = "nav-item p-4  ";
  let navLinkStyle = "navLink text-decoration-none text-light display-6 ";

  const iconR = (intitule, reseauxS) => {
    let reseauSocial = intitule + reseauxS + " display-1 mx-3";
    return reseauSocial;
  };

  return (
    <div className="col-xl-3">
      <div className="profilNamePhoto d-flex justify-content-center px-5 mb-4 my-2">
        <h1 className="display-3 fw-bold  ">
          <p className=" display-6 text-dark">Developpeur Web</p>
          MAHAMOUD
          <br />
          MOUSSA
        </h1>

        <img src={props.imgchaque} className="card-img-top " alt="myProfil" />
      </div>
      <div className={myNavigation}>
        <div className="items">
          <ul className="nav d-flex flex-column list-group text-light ">
            {" "}
            <NavLink
              exact
              to="/"
              className={navLinkStyle}
              activeClassName="nav-active"
            >
              <li className={navItem}>
                <i className="far fa-user"></i> About
              </li>
            </NavLink>
            <NavLink
              exact
              to="/knowledges"
              className={navLinkStyle}
              activeClassName="nav-active"
            >
              <li className={navItem}>
                <i className="fab fa-angellist"></i> Knowledges
              </li>
            </NavLink>
            <NavLink
              exact
              to="/portfolio"
              className={navLinkStyle}
              activeClassName="nav-active"
            >
              <li className={navItem}>
                {" "}
                <i className="far fa-images"></i> Portfolio
              </li>
            </NavLink>
            <NavLink
              exact
              to="/contact"
              className={navLinkStyle}
              activeClassName="nav-active"
            >
              <li className={navItem}>
                <i className="far fa-id-card"></i> Contact
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="myReseaux d-flex justify-content-center">
          <i className={iconR("fab fa-", "facebook")}></i>
          <i className={iconR("fab fa-", "github")}></i>
          <i className={iconR("fab fa-", "linkedin")}></i>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
