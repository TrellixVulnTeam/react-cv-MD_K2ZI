import React from "react";

const PorfolioProject = props => {
  return (
    <div className="row ">
      {props.myPorftolioUn.map(myFolio => (
        <a
          key={myFolio.id}
          target="_blank"
          href={myFolio.myLink}
          className="text-decoration-none text-dark card  "
          style={{
            width: "28rem",

            marginTop: "20px",
            marginRight: "30px",
            padding: 0
          }}
        >
          <img src={myFolio.myImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bolder text-uppercase text-center">
              {" "}
              {myFolio.mytitle}{" "}
            </h5>
            <p className="card-text">{myFolio.myContent}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PorfolioProject;
