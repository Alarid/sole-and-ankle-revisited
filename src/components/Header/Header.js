import React from "react"
import styled from "styled-components/macro"

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
          <NavLink href="/sale">A vendre</NavLink>
          <NavLink href="/new">Nouvelles versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les enfants</NavLink>
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
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media ${({ theme }) => theme.queries.phoneAndDown} {
    padding: 18px;
  }

  @media ${({ theme }) => theme.queries.tabletAndDown} {
    align-items: center;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 7vw - 3.25rem, 3rem);
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
  white-space: nowrap;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`

export default Header
