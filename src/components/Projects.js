import React from "react";

const Projects = props => {
  return (
    <>
      <div className="col-xl-6">
        <h1 className={props.className}>
          <i className={props.iconDev}></i>
          {props.title}
        </h1>
        {props.languages.map(item => {
          let years = 2;
          let nbreExp = (item.xp / years) * 100 + "%";

          return (
            <>
              <div className="blocProgress">
                <h2 key={item.id} className="fw-bold">
                  {item.techno}
                  <i className={item.icon}></i>
                </h2>
                <div className="progress mt-2">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: nbreExp }}
                    aria-valuenow="5"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {nbreExp}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
