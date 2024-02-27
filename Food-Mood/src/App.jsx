import Body from './components/Body'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Restaurants from './components/Restautants/Restaurants'
import { Provider } from 'react-redux'
import store from './redux/store'
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
    <Provider store={store}>
      <RouterProvider router={appRoute} >   </RouterProvider>
    </Provider>
  )
}

export default App
