import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import FAQ from "./components/Faq";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-transparent">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
