import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

// Background Options
const label = 'Color Variants';
const options = {
    Light: 'light',
    Dark: 'dark',
    None: null,
};
const defaultValue = 'light';
const groupId = 'GROUP-ID1';

const imageAlt = {
    alt: 'Staples Logo'
};


class NavbarToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Link 1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Link 2</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Link 3</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Link 4</NavLink>
                        </NavItem>
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret size="sm" className="mt-1 ml-2" color="tertiary">
                                Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>
                                    Header
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Another Action
                                </DropdownItem>
                                <DropdownItem>
                                    Another Action
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Another Action
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </Nav>
                </Collapse>
            </>
        )
    }
}


storiesOf("Navigation", module)
    .add("Navbar", () => (
        <div>
            <Navbar color="light" expand="md" >
                <NavbarBrand href="/" className="mr-md-5 pr-md-5 py-3 pl-3" >
                    <svg width="150" height="31" viewBox="0 0 282 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M260 29.9H251.7V6.7H260V0H251.6C248 0 245 3 245 6.6V30C245 33.6 248 36.6 251.6 36.6H260V29.9Z" fill="#E1251B" />
                            <path d="M266.6 6.7H274.9V29.9H266.6V36.6H275C278.6 36.6 281.6 33.6 281.6 30V6.6C281.6 3 278.6 0 275 0H266.6V6.7Z" fill="#E1251B" />
                            <path d="M18.5 49.9C8.6 49.9 1.2 44.7 0 36.3H10.2C11.6 39.6 15.6 40.9 18.5 40.9C22.5 40.9 25.6 39.7 25.6 37.4C25.6 35.2 24.2 34.3 17.4 33.2C10.4 32.1 1.1 30.2 1.1 21.5C1.1 15.3 6.4 9 17.8 9C26.8 9 33.4 13.9 34.7 21.2H24.3C23.7 19.4 21.5 17.9 17.8 17.9C13.2 17.9 11.3 19.6 11.3 21C11.3 23 14.2 23.7 19 24.5C28.7 26.1 35.7 28.2 35.7 36.7C35.7 44.5 28.5 49.9 18.5 49.9Z" fill="#E1251B" />
                            <path d="M59 48.9C47.5 50.1 41.5 43.2 41.5 32.5V21.2H36.8V12.3H41.5V0H51.5V12.3H59V21.2H51.5V32.7C51.5 38.2 54 40.2 59 39.9V48.9Z" fill="#E1251B" />
                            <path d="M125.2 18.4C119.7 18.4 115.2 23.3 115.2 29.4C115.2 35.5 119.7 40.6 125.2 40.6C130.7 40.6 135.2 35.8 135.2 29.4C135.2 23.1 130.7 18.4 125.2 18.4ZM126.6 49.8C122.1 49.8 118.1 48.1 115.1 45.2V58.9H105V9.9H114.6V14C117.6 10.9 121.8 9 126.5 9C136.7 9 145.1 17.8 145.1 29.3C145.2 41 136.8 49.8 126.6 49.8Z" fill="#E1251B" />
                            <path d="M158.4 0H148.4V49H158.4V0Z" fill="#E1251B" />
                            <path d="M191.5 25.2C190.3 20.6 186.5 17.8 181.7 17.8C177.1 17.8 173.5 20.7 172.1 25.2H191.5ZM171.9 33.4C173.2 38.2 177 41.1 181.7 41.1C185 41.1 188.3 39.7 190 36.5H200.7C198.4 44.5 191.5 49.9 181.8 49.9C170.8 49.9 161.8 40.8 161.8 29.5C161.8 18.2 170.8 8.9 181.8 8.9C193.3 8.9 202.9 17.9 201.5 33.3H171.9V33.4Z" fill="#E1251B" />
                            <path d="M221.7 24.5C216.8 23.7 214 23.1 214 21C214 19.6 215.9 17.9 220.5 17.9C224.2 17.9 226.4 19.3 227 21.2H237.4C236.1 13.8 229.4 9 220.5 9C209.2 9 203.8 15.4 203.8 21.5C203.8 30.2 213.1 32.1 220.1 33.2C226.9 34.3 228.3 35.2 228.3 37.4C228.3 39.7 225.3 40.9 221.2 40.9C218.3 40.9 214.5 39.8 213 36.7H202.7C204 44.9 211.3 50.1 221.2 50.1C231.2 50.1 238.3 44.6 238.3 36.9C238.3 28.2 231.4 26.1 221.7 24.5Z" fill="#E1251B" />
                            <path d="M80.3 40.6C85.8 40.6 90.3 35.7 90.3 29.6C90.3 23.5 85.8 18.4 80.3 18.4C74.8 18.4 70.3 23.2 70.3 29.6C70.3 35.9 74.8 40.6 80.3 40.6ZM78.9 9.1C83.4 9.1 87.4 10.8 90.4 13.7V9.9H100.5V49H90.9V44.9C87.9 48 83.7 49.9 79 49.9C68.8 49.9 60.4 41.1 60.4 29.6C60.3 18 68.6 9.1 78.9 9.1Z" fill="#E1251B" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="281.6" height="58.9" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </NavbarBrand>
                <NavbarToggle className="mr-2" />
            </Navbar>
            <br />
            <Navbar color="dark" expand="md">
                <NavbarBrand href="/" className="mr-md-5 pr-md-5 py-3 pl-3" ><svg width="150" height="31" viewBox="0 0 282 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M260 29.9H251.7V6.7H260V0H251.6C248 0 245 3 245 6.6V30C245 33.6 248 36.6 251.6 36.6H260V29.9Z" fill="white" />
                        <path d="M266.6 6.7H274.9V29.9H266.6V36.6H275C278.6 36.6 281.6 33.6 281.6 30V6.6C281.6 3 278.6 0 275 0H266.6V6.7Z" fill="white" />
                        <path d="M18.5 49.9C8.6 49.9 1.2 44.7 0 36.3H10.2C11.6 39.6 15.6 40.9 18.5 40.9C22.5 40.9 25.6 39.7 25.6 37.4C25.6 35.2 24.2 34.3 17.4 33.2C10.4 32.1 1.1 30.2 1.1 21.5C1.1 15.3 6.4 9 17.8 9C26.8 9 33.4 13.9 34.7 21.2H24.3C23.7 19.4 21.5 17.9 17.8 17.9C13.2 17.9 11.3 19.6 11.3 21C11.3 23 14.2 23.7 19 24.5C28.7 26.1 35.7 28.2 35.7 36.7C35.7 44.5 28.5 49.9 18.5 49.9Z" fill="white" />
                        <path d="M59 48.9C47.5 50.1 41.5 43.2 41.5 32.5V21.2H36.8V12.3H41.5V0H51.5V12.3H59V21.2H51.5V32.7C51.5 38.2 54 40.2 59 39.9V48.9Z" fill="white" />
                        <path d="M125.2 18.4C119.7 18.4 115.2 23.3 115.2 29.4C115.2 35.5 119.7 40.6 125.2 40.6C130.7 40.6 135.2 35.8 135.2 29.4C135.2 23.1 130.7 18.4 125.2 18.4ZM126.6 49.8C122.1 49.8 118.1 48.1 115.1 45.2V58.9H105V9.9H114.6V14C117.6 10.9 121.8 9 126.5 9C136.7 9 145.1 17.8 145.1 29.3C145.2 41 136.8 49.8 126.6 49.8Z" fill="white" />
                        <path d="M158.4 0H148.4V49H158.4V0Z" fill="white" />
                        <path d="M191.5 25.2C190.3 20.6 186.5 17.8 181.7 17.8C177.1 17.8 173.5 20.7 172.1 25.2H191.5V25.2ZM171.9 33.4C173.2 38.2 177 41.1 181.7 41.1C185 41.1 188.3 39.7 190 36.5H200.7C198.4 44.5 191.5 49.9 181.8 49.9C170.8 49.9 161.8 40.8 161.8 29.5C161.8 18.2 170.8 8.9 181.8 8.9C193.3 8.9 202.9 17.9 201.5 33.3H171.9V33.4Z" fill="white" />
                        <path d="M221.7 24.5C216.8 23.7 214 23.1 214 21C214 19.6 215.9 17.9 220.5 17.9C224.2 17.9 226.4 19.3 227 21.2H237.4C236.1 13.8 229.4 9 220.5 9C209.2 9 203.8 15.4 203.8 21.5C203.8 30.2 213.1 32.1 220.1 33.2C226.9 34.3 228.3 35.2 228.3 37.4C228.3 39.7 225.3 40.9 221.2 40.9C218.3 40.9 214.5 39.8 213 36.7H202.7C204 44.9 211.3 50.1 221.2 50.1C231.2 50.1 238.3 44.6 238.3 36.9C238.3 28.2 231.4 26.1 221.7 24.5Z" fill="white" />
                        <path d="M80.3 40.6C85.8 40.6 90.3 35.7 90.3 29.6C90.3 23.5 85.8 18.4 80.3 18.4C74.8 18.4 70.3 23.2 70.3 29.6C70.3 35.9 74.8 40.6 80.3 40.6ZM78.9 9.1C83.4 9.1 87.4 10.8 90.4 13.7V9.9H100.5V49H90.9V44.9C87.9 48 83.7 49.9 79 49.9C68.8 49.9 60.4 41.1 60.4 29.6C60.3 18 68.6 9.1 78.9 9.1Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="281.6" height="58.9" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                </NavbarBrand>
                <NavbarToggle className="mr-2" />
            </Navbar>
            <br />
            <Navbar color="primary" expand="md">
                <NavbarBrand href="/" className="mr-md-5 pr-md-5 py-3 pl-3" ><svg width="150" height="31" viewBox="0 0 282 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M260 29.9H251.7V6.7H260V0H251.6C248 0 245 3 245 6.6V30C245 33.6 248 36.6 251.6 36.6H260V29.9Z" fill="white" />
                        <path d="M266.6 6.7H274.9V29.9H266.6V36.6H275C278.6 36.6 281.6 33.6 281.6 30V6.6C281.6 3 278.6 0 275 0H266.6V6.7Z" fill="white" />
                        <path d="M18.5 49.9C8.6 49.9 1.2 44.7 0 36.3H10.2C11.6 39.6 15.6 40.9 18.5 40.9C22.5 40.9 25.6 39.7 25.6 37.4C25.6 35.2 24.2 34.3 17.4 33.2C10.4 32.1 1.1 30.2 1.1 21.5C1.1 15.3 6.4 9 17.8 9C26.8 9 33.4 13.9 34.7 21.2H24.3C23.7 19.4 21.5 17.9 17.8 17.9C13.2 17.9 11.3 19.6 11.3 21C11.3 23 14.2 23.7 19 24.5C28.7 26.1 35.7 28.2 35.7 36.7C35.7 44.5 28.5 49.9 18.5 49.9Z" fill="white" />
                        <path d="M59 48.9C47.5 50.1 41.5 43.2 41.5 32.5V21.2H36.8V12.3H41.5V0H51.5V12.3H59V21.2H51.5V32.7C51.5 38.2 54 40.2 59 39.9V48.9Z" fill="white" />
                        <path d="M125.2 18.4C119.7 18.4 115.2 23.3 115.2 29.4C115.2 35.5 119.7 40.6 125.2 40.6C130.7 40.6 135.2 35.8 135.2 29.4C135.2 23.1 130.7 18.4 125.2 18.4ZM126.6 49.8C122.1 49.8 118.1 48.1 115.1 45.2V58.9H105V9.9H114.6V14C117.6 10.9 121.8 9 126.5 9C136.7 9 145.1 17.8 145.1 29.3C145.2 41 136.8 49.8 126.6 49.8Z" fill="white" />
                        <path d="M158.4 0H148.4V49H158.4V0Z" fill="white" />
                        <path d="M191.5 25.2C190.3 20.6 186.5 17.8 181.7 17.8C177.1 17.8 173.5 20.7 172.1 25.2H191.5V25.2ZM171.9 33.4C173.2 38.2 177 41.1 181.7 41.1C185 41.1 188.3 39.7 190 36.5H200.7C198.4 44.5 191.5 49.9 181.8 49.9C170.8 49.9 161.8 40.8 161.8 29.5C161.8 18.2 170.8 8.9 181.8 8.9C193.3 8.9 202.9 17.9 201.5 33.3H171.9V33.4Z" fill="white" />
                        <path d="M221.7 24.5C216.8 23.7 214 23.1 214 21C214 19.6 215.9 17.9 220.5 17.9C224.2 17.9 226.4 19.3 227 21.2H237.4C236.1 13.8 229.4 9 220.5 9C209.2 9 203.8 15.4 203.8 21.5C203.8 30.2 213.1 32.1 220.1 33.2C226.9 34.3 228.3 35.2 228.3 37.4C228.3 39.7 225.3 40.9 221.2 40.9C218.3 40.9 214.5 39.8 213 36.7H202.7C204 44.9 211.3 50.1 221.2 50.1C231.2 50.1 238.3 44.6 238.3 36.9C238.3 28.2 231.4 26.1 221.7 24.5Z" fill="white" />
                        <path d="M80.3 40.6C85.8 40.6 90.3 35.7 90.3 29.6C90.3 23.5 85.8 18.4 80.3 18.4C74.8 18.4 70.3 23.2 70.3 29.6C70.3 35.9 74.8 40.6 80.3 40.6ZM78.9 9.1C83.4 9.1 87.4 10.8 90.4 13.7V9.9H100.5V49H90.9V44.9C87.9 48 83.7 49.9 79 49.9C68.8 49.9 60.4 41.1 60.4 29.6C60.3 18 68.6 9.1 78.9 9.1Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="281.6" height="58.9" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                </NavbarBrand>
                <NavbarToggle className="mr-2" />
            </Navbar>
        </div>
    ))
