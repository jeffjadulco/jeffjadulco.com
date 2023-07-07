'use client'

import Script from 'next/script'
import { useAnalyticsInstance } from '../hooks/useAnalytics'

export function Analytics() {
  useAnalyticsInstance()
  return (
    <Script
      data-goatcounter={`https://${process.env.NEXT_PUBLIC_GOAT_COUNTER_CODE}.goatcounter.com/count`}
      data-goatcounter-settings='{"allow_local": true}'
      async={true}
      src="//gc.zgo.at/count.js"
    />
  )
}
