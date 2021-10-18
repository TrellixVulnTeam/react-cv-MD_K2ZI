import { BrowserRouter, Route, Switch } from "react-router-dom";
import Presentation from "./pages/Presentation";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="container-fluides">
      <div className="row">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Presentation} />
            <Route path="/knowledges" exact component={Knowledges} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
