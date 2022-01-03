import { ColorModeProvider, ColorModeScript } from '@chakra-ui/react'
import NextDocment, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme'

export default class Documant extends NextDocment {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
