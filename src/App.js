import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/partials/navigation";
import Home from "./components/pages/home";
import Details from "./components/pages/details";

function App() {
  return (
    <Router>
      <div className="storyhub">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" exact component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
