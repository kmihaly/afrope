import React, { Component } from 'react'
import Navbar from './containers/Navbar/Navbar' 
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
