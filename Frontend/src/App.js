import React, { Suspense } from "react";
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
import Hamburger from "./components/elements/Hamburger";
// import MemberTemplate from "./components/pages/MemberTemplate";

function App() {
  const Loader = () => <div className="App"></div>;

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Switch>
          <Route exact path="/" id="app-home">
            <Hamburger />
            <Navbar path={"home"} />
            <Home />
            <Footer />
          </Route>
          <Route path="/activity" id="app-project">
            <Hamburger />
            <Navbar path={"project"} />
            <Project />
            <Footer />
          </Route>
          <Route path="/research" id="app-research">
            <Hamburger />
            <Navbar path={"research"} />
            <Research />
            <Footer />
          </Route>
          <Route path="/article" id="app-article">
            <Hamburger />
            <Navbar path={"article"} />
            <Article />
            <Footer />
          </Route>
          <Route path="/member" id="app-member">
            <Hamburger />
            <Navbar path={"member"} />
            <Member />
            <Footer />
          </Route>
          <Route path="/about" id="app-about">
            <Hamburger />
            <Navbar path={"about"} />
            <About />
            <Footer />
          </Route>

          {/* Post */}
          <Route path="/article-post/:slug" id="app-article-post">
            <Hamburger />
            <Navbar path={"article-post"} />
            <PostTemplate type={"article"} />
            <Footer />
          </Route>

          <Route path="/activity-post/:slug" id="app-project-post">
            <Hamburger />
            <Navbar path={"activity-post"} />
            <PostTemplate type={"project"} />
            <Footer />
          </Route>

          <Route path="/research-post/:slug" id="app-research-post">
            <Hamburger />
            <Navbar path={"research-post"} />
            <PostTemplate type={"research"} />
            <Footer />
          </Route>

          {/* <Route path="/member-info/:slug" id="app-member-info">
            <Navbar path={"member-info"} />
            <MemberTemplate />
            <Footer />
          </Route> */}

          {/* <Route path="/:id">
          <p>ไม่มี pathนี้</p>
        </Route> */}
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
