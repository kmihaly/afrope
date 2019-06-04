import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import ScheduleButton from '../../components/ScheduleButton/ScheduleButton';
import Logo from '../../components/Logo';

class Navigation extends Component {

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="$color-dark" dark expand="md" className="navbar">
                <NavbarBrand>
                    <Logo className="navbar__logo" color="white" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#clients">Clients</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink href="https://zsuzsaafrika.blog.hu">Publications</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink href="#contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <ScheduleButton />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigation;