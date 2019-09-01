import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import DM from "./pages/DM";
import Generators from "./pages/Generators";
import Monster from "./pages/Monster";
import Spellbook from "./pages/Spellbook";
import Characters from "./pages/Characters";
import Inn from "./pages/Inn";
import Land from "./pages/Land";
import Name from "./pages/Name";
import Features from "./pages/Features";
import Classes from "./pages/Classes";
// import AdvCharacter from "./pages/AdvCharacter";
// import NPC from "./pages/NPC";
import Dungeon from "./pages/Dungeon";
import Treasure from "./pages/Treasure";
import Weapon from "./pages/Weapon";
import City from "./pages/City";
import Fail from "./pages/Fail";
import Trap from "./pages/Trap";





const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={About} />
      <Route path="/dmscreen" component={DM} />
      <Route path="/monster" component={Monster} />
      <Route path="/spell" component={Spellbook} />
      <Route path="/generators" component={Generators} />
      <Route path="/character" component={Characters} />
      <Route path="/inn" component={Inn} />
      <Route path="/land" component={Land} />
      <Route path="/name" component={Name} />
      <Route path="/features" component={Features} />
      <Route path="/classes" component={Classes} />
      {/* <Route path="/character" component={AdvCharacter} /> */}
      {/* <Route path="/npc" component={NPC} /> */}
      <Route path="/dungeon" component={Dungeon} />
      <Route path="/treasure" component={Treasure} />
      <Route path="/weapon" component={Weapon} />
      <Route path="/city" component={City} />
      <Route path="/fail" component={Fail} />
      <Route path="/trap" component={Trap} />
    </div>
  </Router>
);

export default App;
