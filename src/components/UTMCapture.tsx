'use client'

import { useEffect } from 'react'
import { captureUTMParams } from '@/lib/utm'

/**
 * Silent component that captures UTM parameters on page load.
 * Mount once in the root layout.
 */
export default function UTMCapture() {
  useEffect(() => {
    captureUTMParams()
  }, [])

  return null
}
