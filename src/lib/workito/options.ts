import type { WorkitoOptions } from './models'

let options: WorkitoOptions

const updateOptions = (newOptions: WorkitoOptions) => {
  options = {
    ...options,
    ...newOptions,
  }
}

const getOptions = (): WorkitoOptions => ({ ...options })

export { options, updateOptions, getOptions }
