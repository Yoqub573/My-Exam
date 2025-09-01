import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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
import Layout2 from '../../../../Exam2/my-app/src/app/pages/protected/layout/layout'
import LogIn2 from '../../../../Exam2/my-app/src/app/pages/auth/log/logIn'
import Orders from '../../../../Exam2/my-app/src/app/pages/protected/Orders/Orders'
import Others from '../../../../Exam2/my-app/src/app/pages/protected/Other/Others'
import Dashboard from '../../../../Exam2/my-app/src/app/pages/protected/Dashboard/Dashboard'
import Products from '../../../../Exam2/my-app/src/app/pages/protected/Products/Products'
import Categories from '../../../../Exam2/my-app/src/app/pages/protected/Other/Categories'
import SubCategory from '../../../../Exam2/my-app/src/app/pages/protected/Other/SubCategory'
import Brand from '../../../../Exam2/my-app/src/app/pages/protected/Other/Brand'
import AddProduct from '../../../../Exam2/my-app/src/app/pages/protected/Products/addProduct'
import EditProduct from '../../../../Exam2/my-app/src/app/pages/protected/Products/EditProduct'


const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/about',
					element: <About />,
				},
				{
					path: '/cart',
					element: <Cart />,
				},
				{
					path: '/info/:id',
					element: <Info />,
				},
				{
					path: '/product',
					element: <Product />,
				},
				{
					path: '/wishlist',
					element: <Wishlist />,
				},
				{
					path: '/contact',
					element: <Contact />,
				},
				{
					path: '/check-out',
					element: <CheckOut />,
				},
				{
					path: '/sign-up',
					element: <SignUp />,
				},
				{
					path: '/log-in',
					element: <LogIn />,
				},
				{
					path: '/my-account/:id',
					element: <Account />,
				},
				{
					path: '*',
					element: <NotFoundPage />,
				},
			],
		},
		{
			path: '/admin',
			element: <Layout2 />,
			children: [
				{
					index: true,
					element: <Dashboard />,
				},
				{
					path: 'log-in',
					element: <LogIn2 />,
				},
				{
					path: 'orders',
					element: <Orders />,
				},
				{
					path: 'others',
					element: <Others />,
					children:[
						{
							index:true,
							element:<Categories/>
						},
						{
							path:'brands',
							element:<Brand/>
						},
						{
							path:'sub-categoty',
							element:<SubCategory/>
						}
					]
				},
				{
					path: 'products',
					element: <Products />,
				},
				{
					path:'add-new-product',
					element: <AddProduct/>
				},
				{
					path:'edit-product/:id',
					element: <EditProduct/>
				},
			]
		},
	])
	return <RouterProvider router={router} />
}

export default App
