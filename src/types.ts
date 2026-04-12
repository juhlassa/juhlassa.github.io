import type { JSX } from 'react'

export type LayoutProps = {
  pageTitle: string
  content: React.ReactElement
  mediaImage?: string
  username?: string
  track?: boolean
  footer?: boolean
}

export type NavigationItem = {
  route: string
  element: JSX.Element
  tableset?: boolean
  name: string
}

export type RentalItem = {
  name: string
  brand?: string
  description?: string
  pcs: number
  diameter?: number
  length?: number
  width?: number
  height?: number
  material?: string
  volume?: number
  image?: string
  unit?: string
  price: number
}
