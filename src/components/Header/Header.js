import React from "react"
import styled from "styled-components/macro"

import { COLORS, WEIGHTS } from "../../constants"
import Logo from "../Logo"
import SuperHeader from "../SuperHeader"
import MobileMenu from "../MobileMenu"
import UnstyledButton from "../UnstyledButton"
import Icon from "../Icon"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${({ theme }) => theme.queries.phoneAndDown} {
    padding: 18px;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${({ theme }) => theme.queries.tabletAndDown} {
    display: none;
  }
`

const MobileNav = styled.nav`
  display: none;

  @media ${({ theme }) => theme.queries.tabletAndDown} {
    display: flex;
    gap: 32px;
  }

  @media ${({ theme }) => theme.queries.phoneAndDown} {
    gap: 16px;
  }
`

const Side = styled.div`
  flex: 1;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

export default Header
