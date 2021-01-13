import React, { useState} from "react";
import Home from "./components/Home";
import './App.css';
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SideBarLeft from "./components/SideBarLeft";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [menu, setMenu] = useState({
    menuState: {
      project: "PROJECTS",
      news: "NEWS",
      profile: "PROFILE",
      press: "PRESS",
      contact: "CONTACT"
    }
  });
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Navbar title={menu.menuState.project} />
            <Projects />
            <SideBarLeft/>
          </Route>
          <Route exact path="/news">
            <Navbar title={menu.menuState.news} />
            <div>NEWS</div>
            <SideBarLeft/>
          </Route>
          <Route exact path="/profile">
            <Navbar title={menu.menuState.profile} />
            <div>PROFILE</div>
            <SideBarLeft/>
          </Route>
          <Route path="/press">
            <Navbar title={menu.menuState.press} />
            <div>PRESS</div>
            <SideBarLeft/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
