import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #f7f9fc;
    margin: 0 auto;
    padding: 0;
    font-family: Lato, Roboto, 'Open Sans', sans-serif;
    color: #4c4f5a;
    max-width: 1200px;
  }
  p {
    font-size: 1.1rem;
  }
  a {
    text-decoration: none;
    color: #0872a1;
  }
`

// Set theme options here
const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
