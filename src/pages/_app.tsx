import '../styles/globals.css'
import '../styles/code.css'
import { useAnalyticsInstance } from '@/hooks/useAnalytics'

function App({ Component, pageProps }) {
  useAnalyticsInstance()
  return <Component {...pageProps} />
}

export default App
