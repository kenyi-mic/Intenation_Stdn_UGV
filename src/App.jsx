import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import Gallery from './Gallery'
import Contact from './Contact'
import FAQ from './Faq'
import {BrowserRouter as Router, Route, Link, Switch}from 'react-router-dom'
import Footer from './Footer'



function App() {

  return (
    <div className="">
      <Router>
        <Header/>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/faq">
            <FAQ/>
          </Route>
          <Route path="/"> 
            <Home />
          </Route>
          <Footer/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
