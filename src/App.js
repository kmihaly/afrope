import React, { Component } from 'react'
import { Scrollbar } from 'react-scrollbars-custom'
import Navigation from './containers/Navigation/Navigation'
import Header from './containers/Header/Header'
import Transition from './containers/Transition/Transition'
import About from './containers/About/About'
import Services from './containers/Services/Services'
import Clients from './containers/Clients/Clients'
import Contact from './containers/Contact/Contact'
import Footer from './containers/Footer/Footer'

import './App.scss'

class App extends Component {

  render() {
    return (
      <>
        <Navigation />
        <div className="scrollbar-frame">
          <Scrollbar style={{ width: '100%', height: '100%', minHeight: 100 }}  >
            <Header />
            <main>
              <Transition />
              <About />
              <Services />
              <Clients />
              <Contact />
            </main>
            <Footer />
          </Scrollbar>
        </div>
      </>
    );
  }
}

export default App
