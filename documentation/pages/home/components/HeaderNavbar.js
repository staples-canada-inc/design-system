import * as React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';


import logo from '@images/Staples_Logo_White_EN.svg'

export const HeaderNavbar = () => {
    return (
        <Navbar color="dark" dark expand="md">
            <Container>
                <Col className="pl-0">
                    <NavbarBrand href="/">
                        <img className="py-4 pl-0" style={{ width: 140 }} src={logo} /> <p className="border-left pl-3 ml-3 d-inline">Design System</p>
                    </NavbarBrand>
                </Col>
                <Col xs={1} md={6}>
                    <NavbarToggler className="ml-auto text-right" />
                    <Collapse  navbar>
                        <Nav className="ml-auto text-right" navbar>
                            <NavItem>
                                <NavLink href="/docs/">Version 1.0</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem> */}
                        </Nav>
                    </Collapse>
                </Col>
            </Container>
        </Navbar>
    )
}