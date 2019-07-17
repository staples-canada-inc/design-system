import * as React from "react";
import { SFC } from "react";
import styled from "styled-components";

import { mq } from "../../../styles/responsive";

interface OpenProps {
	opened: boolean;
}

const IconFirst = (p: OpenProps) => (!p.opened ? "0px" : "10px");
const IconMiddle = (p: OpenProps) => (!p.opened ? "1" : "0");
const IconLast = (p: OpenProps) => (!p.opened ? "0px" : "-6px");
const IconRotate = (p: OpenProps) => (!p.opened ? "0deg" : "45deg");

const Icon = styled.div<OpenProps>`
	position: relative;
	width: 23px;
	height: 32px;
	transform: translateX(${p => (p.opened ? "-2px" : "-1px")})
		translateY(${p => (p.opened ? "0" : "2px")})
		scale(${p => (p.opened ? 0.8 : 1)});
`;

const IconLine = styled.span<OpenProps>`
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 2px;
	left: 0;
	right: 0;
	background: #ffffff;
    transition: transform 0.3s, opacity 0.3s;
    outline: none !important;

	&:nth-of-type(1) {
		top: -2px;
		transform: translateY(${IconFirst}) rotate(${IconRotate});
	}

	&:nth-of-type(2) {
		top: 6px;
		opacity: ${IconMiddle};
	}

	&:nth-of-type(3) {
		top: 14px;
		transform: translateY(${IconLast}) rotate(-${IconRotate});
	}
`;

const ToggleButton = styled.button<OpenProps>`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 6px;
    margin-right: 15px;
	width: 35px;
	height: 25px;
    z-index: 1031;
    transition: all 0.3s;
    outline: none !important;
    border: none;
    background: transparent;
    &:hover{
        opacity: .6;
    }

  ${mq({
		display: ["block", "block", "block", "block"]
  })};
`;

interface HamburgerProps extends OpenProps {
	onClick: (ev: React.SyntheticEvent<any>) => void;
}

export const Hamburger: SFC<HamburgerProps> = ({ opened, onClick }) => (
	<ToggleButton opened={opened} onClick={onClick}>
		<Icon opened={opened}>
			<IconLine opened={opened} />
			<IconLine opened={opened} />
			<IconLine opened={opened} />
		</Icon>
	</ToggleButton>
);
