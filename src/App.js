import React, { Component } from 'react'
import Navbar from './containers/Navbar' 
import Header from './containers/Header'
import Transition from './containers/Transition'
import About from './containers/About' 
import Services from './containers/Services'
import Clients from './containers/Clients'
import Contact from './containers/Contact'
import Footer from './containers/Footer'

import './App.scss'

class App extends Component {

  render() {
    return (
      <>
        <Navbar>
        </Navbar>
        <Header>

        </Header>
        <Transition>

        </Transition>
        <About>

        </About>
        <Services>

        </Services>
        <Clients>

        </Clients>
        <Contact>

        </Contact>
        <Footer>

        </Footer>

      </>
    );
  }
}

export default App
