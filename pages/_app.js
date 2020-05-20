import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #eeeeee;
    margin: 0 auto;
    padding: 0;
    font-family: Lato, Roboto, 'Open Sans', sans-serif;
    color: #222831;
    max-width: 1200px;
    border-left: 4px solid #393e46;
    border-right: 4px solid #393e46;
  }
  p {
    font-size: 1.1rem;
  }
  a {
    text-decoration: none;
    color: #00adb5;
  }
`

// Set theme options here
const theme = {
  colors: {
    primary: '#00adb5',
    secondary: '#393e46',
    base: '#eeeeee',
    dark: '#222831'
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
