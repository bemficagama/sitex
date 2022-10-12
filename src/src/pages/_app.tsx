import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { useEffect } from "react"
import { useRouter } from 'next/router'

import * as gtag from "../components/lib/gtag"
import Analytics from '../components/Analytics'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }

  }, [router.events])
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
