import Body from './components/Body'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Restaurants from './components/Restautants/Restaurants'
const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <Body />,

  },
  {
    path: '/restaurants',
    element: <Restaurants />
  }
])
function App() {
  return (
    <RouterProvider router={appRoute} >
     
    </RouterProvider>
  )
}

export default App
