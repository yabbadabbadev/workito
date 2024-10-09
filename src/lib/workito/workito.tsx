import { JSXElementConstructor } from 'react'
import { Workito } from './models'
import { getOptions, updateOptions } from './options'
import { getConfig } from './config'

const workito = (Component: JSXElementConstructor<unknown>): Workito => {
  updateOptions({
    Component,
    path: '',
    props: {},
  })

  return getWorkito()
}

const getWorkito = (): Workito => {
  return {
    atPath,
    mount: getMount,
  }
}

const atPath = (path: string) => {
  const options = getOptions()
  updateOptions({ ...options, path })

  return getWorkito()
}

const getMount = () => {
  const { changeRoute, mount } = getConfig()
  const { Component, path, props } = getOptions()

  if (path) {
    changeRoute(path)
  }

  return mount(<Component {...props} />)
}

export { workito }
