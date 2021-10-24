import React, { useEffect } from "react";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Presentation from "./pages/Presentation";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  console.log(history);
  console.log(window.location.href);

  useEffect(() => {
    const wheelMyPage = e => {
      console.log("wheel :", e.wheelDeltaY);

      let url = window.location.origin + "/";

      const wheelTopBottom = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 2000);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 2000);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            history.push("knowledges");
          }
          break;

        case url + "knowledges":
          wheelTopBottom("portfolio", "");
          break;

        case url + "portfolio":
          wheelTopBottom("contact", "knowledges");
          break;

        case url + "contact":
          if (e.wheelDeltaY > 0) {
            history.push("portfolio");
          }
          break;
        default:
          console.log("ok");
      }
    };
    window.addEventListener("wheel", wheelMyPage);
  }, [history]);

  return (
    <div className="container-fluides">
      <div className="row">
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Presentation} />
          <Route path="/knowledges" exact component={Knowledges} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />

          <Redirect to="/portfolio" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
