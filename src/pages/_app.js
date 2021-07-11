import { ChakraProvider, extendTheme, Container } from '@chakra-ui/react'

const covidShelterTheme = extendTheme({
  sizes: {
    screen: {
      h: {
        full: "100vh"
      }
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={covidShelterTheme}>
      <Container maxW="lg" minH="screen.h.full" boxShadow="base">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
