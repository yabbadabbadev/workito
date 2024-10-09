import './App.css'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom'
import { BlogPage } from 'pages/blog'
import { HomePage } from 'pages/home'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/blog', element: <BlogPage /> },
])

const hasModernRouter = true

const App = () => {
  return hasModernRouter ? (
    <RouterProvider router={router} />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
