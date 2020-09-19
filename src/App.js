import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Index from "./components/layouts/Index";
import Lyrics from "./components/track/Lyrics";

import { Provider } from "./Context";
function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <Route exact path="/lyrics/track/:id" component={Lyrics}></Route>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
