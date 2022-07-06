import React from "react"
import styled from "styled-components/macro"

import { WEIGHTS } from "../../constants"

import Breadcrumbs from "../Breadcrumbs"
import Select from "../Select"
import Spacer from "../Spacer"
import ShoeSidebar from "../ShoeSidebar"
import ShoeGrid from "../ShoeGrid"
import { DesktopOnly, TabletOnly } from "../Theme"

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <TabletOnly>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </TabletOnly>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <DesktopOnly>
          <Spacer size={42} />
          <ShoeSidebar />
        </DesktopOnly>
      </LeftColumn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${({ theme }) => theme.queries.tabletAndDown} {
    flex-direction: column-reverse;
    gap: 0;
  }
`

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${({ theme }) => theme.queries.tabletAndDown} {
    flex-basis: revert;
    margin-bottom: -12px;
  }
`

const MainColumn = styled.div`
  flex: 1;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${({ theme }) => theme.queries.tabletAndDown} {
    align-items: center;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};

  @media ${({ theme }) => theme.queries.tabletAndDown} {
    padding-top: 16px;
  }
`

export default ShoeIndex
