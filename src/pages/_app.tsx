import '@/styles/globals.css'
import '@/styles/codeblock.css'
import { useAnalyticsInstance } from '@/hooks/useAnalytics'
import Layout from '@/components/layout'

function App({ Component, pageProps }) {
  useAnalyticsInstance()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
