import React, { Component } from 'react';
import ScheduleButton from '../../components/ScheduleButton/ScheduleButton';
import Logo from '../../components/Logo';

class Navbar extends Component {

        render() {

        return (
            <div className="navbar">
                <Logo logoStyle="navbar__logo">
                </Logo>
                <div className="navbar-items">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#clients">Clients</a>
                    <a href="https://zsuzsaafrika.blog.hu">Publications</a>
                    <a href="#contact">Contact</a>
                    <ScheduleButton>
                    </ScheduleButton>
                </div>
            </div>
        );
    }
}

export default Navbar;