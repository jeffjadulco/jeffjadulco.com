import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" type="icon" />
          <link
            rel="preload"
            href="/fonts/Inter.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/FiraCode-VF.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* ANALYTICS */}
          <Script
            data-goatcounter={`https://${process.env.NEXT_PUBLIC_GOAT_COUNTER_CODE}.goatcounter.com/count`}
            data-goatcounter-settings='{"allow_local": true}'
            async={true}
            src="//gc.zgo.at/count.js"
            strategy="afterInteractive"
          ></Script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
