/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components/macro"
import { DialogOverlay, DialogContent } from "@reach/dialog"

import UnstyledButton from "../UnstyledButton"
import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay {...{ isOpen, onDismiss }}>
      <Content aria-label="Mobile menu">
        <DismissButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
        </DismissButton>
        <Nav>
          <NavLink href="/sale" active>
            Sale
          </NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: hsl(var(--gray-700) / 0.8);
`

const Content = styled(DialogContent)`
  background: var(--color-white);
  height: 100%;
  width: clamp(300px, 80%, 375px);
  margin-left: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
`

const DismissButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`

const Nav = styled.nav`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const NavLink = styled.a`
  text-decoration: none;
  font-size: ${18 / 16}rem;
  font-weight: var(--weight-medium);
  color: var(${(p) => (p.active ? "--color-secondary" : "--color-gray-900")});
  text-transform: uppercase;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
`

export default MobileMenu
