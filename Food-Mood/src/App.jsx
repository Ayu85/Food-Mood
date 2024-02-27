import Body from './components/Body'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Restaurants from './components/Restaurants'
const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <Body />
  },
  {
    path: '/restaurants',
    element: <Restaurants />
  }
])
function App() {
  return (
    <RouterProvider router={appRoute} >
      <Navbar />
      <Outlet />
    </RouterProvider>
  )
}

export default App
