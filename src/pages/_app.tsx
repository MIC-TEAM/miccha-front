import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from '../styles/global-styles'
import '../styles/main.css'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>믹챠</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
        />

        <meta
          name="description"
          content="모든 영화, 드라마, 다큐멘터리, 애니메이션을 언제 어디서나 최고의 화질로 무제한 감상하세요."
        />
      </Head>
      {GlobalStyles}
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default App
