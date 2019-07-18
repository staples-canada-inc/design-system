import * as React from 'react'
import { SFC, useState, useEffect, Fragment } from 'react'
import { PageProps, useWindowSize, usePrevious } from 'docz'
import Edit from 'react-feather/dist/icons/edit-2'
import styled from 'styled-components'

import { Hamburger } from "../shared/sidebar/Hamburger";
import { Container, Col } from 'reactstrap'
import { HeaderNavbar } from '../shared/HeaderNavbar'
import { ButtonLink } from './Button'
import { Main, Sidebar } from '../shared'
import { get } from '../../utils/theme'
import { mq, breakpoints } from '../../styles/responsive'

const Wrapper = styled.div`
  flex: 1;
  color: ${get('colors.text')};
  background: ${get('colors.background')};
  min-width: 0;
  position: relative;
`

export const ContentContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;

  ${mq({
    width: ['100%', '100%', 920],
    padding: ['20px', '0 40px 40px'],
  })}

  ${get('styles.container')};
`

const EditPage = styled(ButtonLink.withComponent('a'))`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 2px 8px;
  margin: 8px;
  border-radius: ${get('radii')};
  border: 1px solid ${get('colors.border')};
  opacity: 0.7;
  transition: opacity 0.4s;
  font-size: 14px;
  color: ${get('colors.text')};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
    background: ${get('colors.border')};
  }

  ${mq({
    visibility: ['hidden', 'hidden', 'visible'],
    top: [0, -60, 32],
    right: [0, 0, 40],
  })};
`

const EditIcon = styled(Edit)<{ width: number }>`
  margin-right: 5px;
`

interface OpenProps {
	opened: boolean;
    theme?: any;
}


const SideBarWrapper = styled.div<OpenProps>`
  position: absolute;
  width: 280px;
  min-width: 280px;
  min-height: 100vh;
  background: #ffffff;
  transition: transform 0.2s, background 0.3s;
  z-index: 1030;
  left: 0px;

  ${mq({
        position: ["absolute", "absolute", "absolute", "absolute"],
        top: ["76px", "76px", "76px", "76px"],
  })};

  dl {
    padding: 0;
    margin: 0 16px;
  }

  dl a {
    font-weight: 400;
  }

  @media screen and (max-width: ${breakpoints.large - 1}px) {
    transform: translateX(${p => (p.opened ? "-100%" : "0")});
  }

  ${get("styles.sidebar")};
`;



export const Page: SFC<PageProps> = ({
  children,
  doc: { link, fullpage, edit = true },
}) => {
    const [hidden, setHidden] = useState(true);
    const windowSize = useWindowSize();
    const isDesktop = windowSize.innerWidth >= breakpoints.large;
	const prevIsDesktop = usePrevious(isDesktop);


	useEffect(() => {
		if (!hidden && !prevIsDesktop && isDesktop) {
			setHidden(false);
			document.documentElement!.classList.remove("with-overlay");
		}
	});

	const addOverlayClass = (isHidden: boolean) => {
		const method = !isHidden ? "add" : "remove";

		if (typeof window !== "undefined" && !isDesktop) {
			document.documentElement!.classList[method]("with-overlay");
		}
	};

	const handleSidebarToggle = () => {
		if (isDesktop) return;
		setHidden(s => !s);
		addOverlayClass(!hidden);
    };
    

    interface OpenProps {
        opened: boolean;
    }
    
    const ToggleBackground = styled.div<OpenProps>`
        content: "";
        display: ${p => (p.opened ? "none" : "block")};
        position: fixed;
        background-color: rgba(0, 0, 0, 0.4);
        width: 100vw;
        height: 100vh;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        cursor: pointer;
        z-index: 99;
    `;

    const HamburgerWrapper = styled.div`
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1030;
        ${mq({
            display: ['block', 'block', 'block', 'none'],
          })};        
    `;


    const content = (
    <Fragment>
      {link && edit && (
        <EditPage href={link} target="_blank">
          <EditIcon width={14} /> Edit page
        </EditPage>
      )}
      {children}
    </Fragment>
  )

  return (
    <Main className="mt-5 pt-4">
        <HeaderNavbar/>
        {!fullpage && <HamburgerWrapper><Hamburger opened={!hidden} onClick={handleSidebarToggle} /></HamburgerWrapper>}
        {!fullpage && <SideBarWrapper opened={hidden} sidebarToggle={handleSidebarToggle}><Sidebar /></SideBarWrapper>}
        <Wrapper>{fullpage ? <Col className="p-0">{content}</Col>: <Container><Col className="col-md-8 offset-md-3">{content}</Col></Container>}</Wrapper>
        <ToggleBackground opened={hidden} onClick={handleSidebarToggle} />
    </Main>
  )
}