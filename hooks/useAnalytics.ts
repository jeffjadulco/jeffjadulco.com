import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// augment window.goatcounter
declare global {
  interface Window {
    goatcounter: any
  }
}

function useAnalyticsInstance() {
  const path = usePathname()
  useEffect(() => {
    if (window.goatcounter === undefined) return
    window.goatcounter.count({
      path,
    })
  }, [path])
}

function useAnalyticsEvent() {
  function trackCustomEvent({
    eventName,
    eventTitle,
  }: {
    eventName: string
    eventTitle?: string
  }) {
    if (window.goatcounter === undefined) return
    window.goatcounter.count({
      path: eventName,
      title: eventTitle || eventName,
      event: true,
    })
  }

  return { trackCustomEvent }
}

export { useAnalyticsInstance, useAnalyticsEvent }
