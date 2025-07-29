import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './pages/protected/Layout/Layout'
import Home from './pages/protected/Home/Home'
import About from './pages/protected/About/About'
import Cart from './pages/protected/Cart/Cart'
import Contact from './pages/protected/Contact/Contact'
import Info from './pages/protected/Info/Info'
import Product from './pages/protected/Product/Product'
import Wishlist from './pages/protected/Wishlist/Wishlist'
import CheckOut from './pages/protected/CheckOut/CheckOut'
import LogIn from './pages/auth/LogIn'
import SignUp from './pages/auth/SignUp'
import Account from './pages/auth/Account'
import NotFoundPage from './pages/protected/NotFoundPage/NotFoundPage'

const App = () => {
  const router = createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/info/:id',
        element:<Info/>
      },
      {
        path:'/product',
        element:<Product/>
      },
      {
        path:'/wishlist',
        element:<Wishlist/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/check-out',
        element:<CheckOut/>
      },
      {
        path:'/sign-up',
        element:<SignUp/>
      },
      {
        path:'/log-in',
        element:<LogIn/>
      },
      {
        path:'/my-account/:id',
        element:<Account/>
      },
      {
        path:'*',
        element:<NotFoundPage/>
      }
    ]
  }])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App