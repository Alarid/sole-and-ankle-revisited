import styled from "styled-components/macro"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

const breakpoints = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
}

const theme = {
  breakpoints,
  queries: {
    phoneAndDown: `(max-width: ${breakpoints.phone / 16}rem)`,
    tabletAndDown: `(max-width: ${breakpoints.tablet / 16}rem)`,
    laptopAndDown: `(max-width: ${breakpoints.laptop / 16}rem)`,
  },
}

export default function Theme({ children }) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}

export const DesktopOnly = styled.div`
  @media ${({ theme }) => theme.queries.tabletAndDown} {
    display: none;
  }
`

export const TabletOnly = styled.div`
  @media ${({ theme }) => theme.queries.phoneAndDown} {
    display: none;
  }
`
