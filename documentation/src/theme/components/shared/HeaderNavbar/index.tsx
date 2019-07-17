import * as React from "react";
import { SFC} from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import styled from "styled-components";
import { mq } from "../../../styles/responsive";
import logo from "@images/Staples_Logo_White_EN.svg";


interface OpenProps {
	opened: boolean;
    theme?: any;
}

const BrandWrapper = styled.div<OpenProps>`
${mq({
  paddingLeft: [60, 60, 60, 1],
})};
`

export const HeaderNavbar: SFC = () => {
	return (
		<Navbar color="dark" dark className="navbar navbar-toggleable-md navbar-inverse py-3 fixed-top">
            <BrandWrapper>
                <NavbarBrand href="/">
                    <img style={{ width: 140 }} src={logo} />{" "}
                    <p className=" py-1 pl-0 border-left pl-3 ml-3 d-inline">
                        Design System
                    </p>
                </NavbarBrand>
            </BrandWrapper>
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink href="/docs/">V 1.0</NavLink>
				</NavItem>
			</Nav>

		</Navbar>
	);
};
