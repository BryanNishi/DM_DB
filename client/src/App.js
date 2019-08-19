import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import DM from "./pages/DM";
import Monster from "./pages/Monster";
import Spellbook from "./pages/Spellbook";
import Generators from "./pages/Generators";
import Character from "./pages/Character";




const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={About} />
      <Route path="/dmscreen" component={DM} />
      <Route path="/monster" component={Monster} />
      <Route path="/spell" component={Spellbook} />
      <Route path="/generators" component={Generators} />
      <Route path="/character" component={Character} />
    </div>
  </Router>
);

export default App;
