interface Window {
  gtag(type: 'config', googleAnalyticsId: string, { page_path: string })
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_category: string
      event_label: string
      value?: number
    }
  )
}
