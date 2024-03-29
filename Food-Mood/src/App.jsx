import Body from './components/Body'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Restaurants from './components/Restautants/Restaurants'
import { Provider } from 'react-redux'
import store from './redux/store'
import Main from './components/Banner-Link-Pages/Pizza/Main'
import ChineseMain from './components/Banner-Link-Pages/Chinese/ChineseMain'
import Rest_Menu_Main from './components/RestaurantMenu/Rest_Menu_Main'
import Cart_Home from './components/Cart/Cart_Home'
const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <Body />,

  },
  {
    path: '/restaurants',
    element: <Restaurants />
  },
  {
    path: '/restaurants/pizza',
    element: <Main />
  },
  {
    path: '/restaurants/chinese',
    element: <ChineseMain />
  },
  {
    path: '/menu/:id',
    element: <Rest_Menu_Main />
  }
  ,
  {
    path: '/cart',
    element: <Cart_Home />
  }
])
function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={appRoute} ></RouterProvider>
    </Provider>
  )
}

export default App
