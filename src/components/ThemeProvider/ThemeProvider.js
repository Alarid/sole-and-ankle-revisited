import { ThemeProvider as StyledThemeProvider } from "styled-components"

const breakpoints = {
  phone: 37.5,
  tablet: 59.375,
  laptop: 81.25,
}
const theme = {
  breakpoints,
  queries: {
    phoneAndDown: `(max-width: ${breakpoints.phone}rem)`,
    tabletAndDown: `(max-width: ${breakpoints.tablet}rem)`,
    laptopAndDown: `(max-width: ${breakpoints.laptop}rem)`,
  },
}

export default function Theme({ children }) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
