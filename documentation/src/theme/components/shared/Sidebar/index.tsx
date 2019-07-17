import * as React from "react";
import { Fragment, SFC, useState, useEffect } from "react";
import { useMenus, useWindowSize, usePrevious } from "docz";
import styled from "styled-components";

import { Search } from "../Search";
import { Menu } from "./Menu";

import { Hamburger } from "./Hamburger";

import { get } from "../../../utils/theme";
import { mq, breakpoints } from "../../../styles/responsive";


const sidebarBg = get("colors.sidebarBg");
const sidebarText = get("colors.sidebarText");


const Content = styled.div`
    position: fixed;
	top: ${p => (p.opened ? "75px" : "76px")};
	left: 0;
	display: flex;
	flex-direction: column;
	min-width: 280px;
	height: 100%;
	max-height: 100vh;
	background: ${sidebarBg};
	padding-top: 30px;
    z-index: 1030;
    
    ${mq({
        top: ["0", "0", "0", "76px"],
  })};


`;

const Menus = styled.nav`
	flex: 1;
	overflow-y: auto;
	margin-bottom: 10px;
`;

const Empty = styled.div`
	flex: 1;
	opacity: 0.7;
	padding: 0 24px;
	color: ${sidebarText};
`;



export const Sidebar: SFC = () => {
	const [hidden, setHidden] = useState(true);
	const [query, setQuery] = useState("");
	const menus = useMenus({ query });

	const handleSidebarToggle = () => {
		if (isDesktop) return;
		setHidden(s => !s);
		addOverlayClass(!hidden)
	};

	return (
		<Fragment>
				<Content className="col-10 col-md-6 col-lg-2">
					<Search onSearch={setQuery} />
					{menus && menus.length === 0 ? (
						<Empty>No documents found.</Empty>
					) : (
						<Menus >
							{menus &&
								menus.map(menu => (
									<Menu
										key={menu.id}
										item={menu}
										sidebarToggle={handleSidebarToggle}
                                        collapseAll={Boolean(query.length)}
  
									/>
								))}
						</Menus>
					)}
				</Content>
		</Fragment>
	);
};
