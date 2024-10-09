import { JSXElementConstructor, ReactElement } from 'react'
import type { RenderResult as TLRenderResult } from '@testing-library/react'

export interface Workito {
  atPath: (path: string) => Workito
  mount: () => RenderResult
}

export type RenderResult = TLRenderResult | HTMLDivElement
export type Mount = (component: Component) => RenderResult

export type Component = ReactElement<any, any>

export interface WorkitoOptions {
  Component: JSXElementConstructor<unknown>
  path: string
  props: object
}

export interface Config {
  mount: Mount
  changeRoute: (path: string) => void
}
