import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import { Container } from './styles'
import Header from './Header/Header'

const GlobalStyles = createGlobalStyle`
  body {
    background: #ffebef;
  }
`

const Layout = ({ children }) => (
  <Container>
    <GlobalStyles />
    <Header />
    {children}
  </Container>
)

Layout.defaultProps = {
  children: [],
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Layout
