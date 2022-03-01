import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Navbar from "./components/elements/Navbar";
import Footer from "./components/elements/Footer";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" id="app-home">
          <Navbar />
          <Home />
          <Footer />
        </Route>
        {/* <Route path="/:id">
          <p>ไม่มี pathนี้</p>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
