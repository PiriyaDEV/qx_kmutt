import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Navbar from "./components/elements/Navbar";
import Footer from "./components/elements/Footer";
import Project from "./components/pages/Project";
import Research from "./components/pages/Research";
import Article from "./components/pages/Article";
import Member from "./components/pages/Member";
import About from "./components/pages/About";
import PostTemplate from "./components/pages/PostTemplate";
import MemberTemplate from "./components/pages/MemberTemplate";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" id="app-home">
          <Navbar path={"home"} />
          <Home />
          <Footer />
        </Route>
        <Route path="/project" id="app-project">
          <Navbar path={"project"} />
          <Project />
          <Footer />
        </Route>
        <Route path="/research" id="app-research">
          <Navbar path={"research"} />
          <Research />
          <Footer />
        </Route>
        <Route path="/article" id="app-article">
          <Navbar path={"article"} />
          <Article />
          <Footer />
        </Route>
        <Route path="/member" id="app-member">
          <Navbar path={"member"} />
          <Member />
          <Footer />
        </Route>
        <Route path="/about" id="app-about">
          <Navbar path={"about"} />
          <About />
          <Footer />
        </Route>

        {/* Post */}
        <Route path="/article-post" id="app-article-post">
          <Navbar path={"article-post"} />
          <PostTemplate type={"article"} />
          <Footer />
        </Route>

        <Route path="/project-post" id="app-project-post">
          <Navbar path={"project-post"} />
          <PostTemplate type={"project"} />
          <Footer />
        </Route>

        <Route path="/research-post" id="app-research-post">
          <Navbar path={"research-post"} />
          <PostTemplate type={"research"} />
          <Footer />
        </Route>

        <Route path="/member-info" id="app-member-info">
          <Navbar path={"member-info"} />
          <MemberTemplate />
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
