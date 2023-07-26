import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { PostDetails } from '../pages/PostDetails'
import { Root } from './root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'posts/:id',
        element: <PostDetails />,
      },
    ],
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}
