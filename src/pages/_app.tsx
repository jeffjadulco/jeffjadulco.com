import '@/styles/globals.css'
import '@/styles/codeblock.css'
import { useAnalyticsInstance } from '@/hooks/useAnalytics'
import { Layout } from '@/components/layout'
import { FormspreeProvider } from '@formspree/react'

function App({ Component, pageProps }) {
  useAnalyticsInstance()
  return (
    <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECTID}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FormspreeProvider>
  )
}

export default App
