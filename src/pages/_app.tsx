import type { AppProps } from 'next/app'
import { GlobalStyle } from "@/shared/styles/global"

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </> 
  )
}
export default MyApp
