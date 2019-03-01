import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { Container } from './styles'
import Header from './Header/Header'

const GlobalStyles = createGlobalStyle`
  body {
    background: #ffebef;
  }
`

export default ({ children }) => (
  <Container>
    <GlobalStyles />
    <Header />
    {children}
  </Container>
)
