import { render, screen } from '@testing-library/react'
import { App } from 'App'
import { configure as configureWrap, wrap } from '../../../../wrap'
import { createBrowserHistory } from 'history'
import { workito, configure } from 'lib/workito'
export const history = createBrowserHistory()
import * as useRouterProviderModule from 'utils/use-router-provider'

describe('using the former router mode (BrowserRouter)', () => {
  beforeEach(() => {
    vi.spyOn(useRouterProviderModule, 'useRouterProvider').mockReturnValueOnce(
      false,
    )
  })

  it('should render the blog page with wrap', async () => {
    configureWrap({
      changeRoute: (route) => history.push(route),
      mount: render,
    })
    wrap(App).atPath('/blog').mount()

    expect(
      await screen.findByRole('heading', { name: 'Blog page' }),
    ).toBeInTheDocument()
  })

  it('should render the blog page with history push', async () => {
    history.push('/blog')
    render(<App />)

    expect(
      await screen.findByRole('heading', { name: 'Blog page' }),
    ).toBeInTheDocument()
  })

  it('should render the blog page with native replace state', async () => {
    window.history.replaceState(null, '', '/blog')
    render(<App />)

    expect(
      await screen.findByRole('heading', { name: 'Blog page' }),
    ).toBeInTheDocument()
  })

  it('should render the blog page with configured workito', async () => {
    configure({ changeRoute: (route) => history.push(route), mount: render })
    workito(App).atPath('/blog').mount()

    expect(
      await screen.findByRole('heading', { name: 'Blog page' }),
    ).toBeInTheDocument()
  })

  it('should render the blog page with workito and defaults', async () => {
    workito(App).atPath('/blog').mount()

    expect(
      await screen.findByRole('heading', { name: 'Blog page' }),
    ).toBeInTheDocument()
  })
})

describe('using the latest router mode (RouterProvider)', () => {
  beforeEach(() => {
    vi.spyOn(useRouterProviderModule, 'useRouterProvider').mockReturnValue(true)
  })

  it('should render the blog page with wrap', async () => {
    configureWrap({
      changeRoute: (route) => history.push(route),
      mount: render,
    })
    wrap(App).atPath('/blog').mount()

    expect(
      await screen.findByRole('heading', { name: 'Blog page' }),
    ).toBeInTheDocument()
  })

  it('should render the blog page with history push', async () => {
    history.push('/blog')
    render(<App />)

    expect(
      await screen.findByRole('heading', { name: 'Blog page' }),
    ).toBeInTheDocument()
  })

  it('should render the blog page with native replace state', async () => {
    window.history.replaceState(null, '', '/blog')
    render(<App />)

    expect(
      await screen.findByRole('heading', { name: 'Blog page' }),
    ).toBeInTheDocument()
  })

  it('should render the blog page with configured workito', async () => {
    configure({ changeRoute: (route) => history.push(route), mount: render })
    workito(App).atPath('/blog').mount()

    expect(
      await screen.findByRole('heading', { name: 'Blog page' }),
    ).toBeInTheDocument()
  })

  it('should render the blog page with workito and defaults', async () => {
    workito(App).atPath('/blog').mount()

    expect(
      await screen.findByRole('heading', { name: 'Blog page' }),
    ).toBeInTheDocument()
  })
})
