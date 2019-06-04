import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
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

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: '#777',
      borderRadius: '.2rem',
      opacity: .7
    }

    return (
      <div
          style={{ ...style, ...thumbStyle }}
          {...props} 
      />
    )
  }

  render() {
    return (
      <>
        <Navigation />
        <div className="scrollbar-frame">
          <Scrollbars 
            style={{ width: '100%', height: '100%', minHeight: 100 }} 
            renderThumbVertical={this.renderThumb} 
            autoHide
          >
            <Header />
            <main>
              <Transition />
              <About />
              <Services />
              <Clients />
              <Contact />
            </main>
            <Footer />
          </Scrollbars>
        </div>
      </>
    );
  }
}

export default App
