import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Character from "./pages/Character";
// import Sheet from "./pages/CharacterSheets";
// import Classes from "./pages/Classes";
import DM from "./pages/DM";
// import Features from "./pages/Features";
import Generators from "./pages/Generators";
// import Inn from "./pages/Inn";
// import Land from "./pages/Land";
import Monster from "./pages/Monster";
import Name from "./pages/Name";
// import NPC from "./pages/NPC";
import Spellbook from "./pages/Spellbook";
// import Dungeon from "./pages/Dungeon";
// import Treasure from "./pages/Treasure";



const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={About} />
      <Route path="/dmscreen" component={DM} />
      <Route path="/monster" component={Monster} />
      <Route path="/spell" component={Spellbook} />
      <Route path="/generators" component={Generators} />
      <Route path="/character" component={Character} />
      {/* <Route path="/npc" component={NPC} /> */}
      {/* <Route path="/sheet" component={Sheet} /> */}
      {/* <Route path="/features" component={Features} /> */}
      {/* <Route path="/Inn" component={Inn} /> */}
      {/* <Route path="/Land" component={Land} /> */}
      {/* <Route path="/Treasure" component={Treasure} /> */}
      <Route path="/name" component={Name} />
      {/* <Route path="/Classes" component={Classes} /> */}
    </div>
  </Router>
);

export default App;
