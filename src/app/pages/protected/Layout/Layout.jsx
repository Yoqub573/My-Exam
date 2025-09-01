import React, { useEffect, useState } from 'react'
import { data, Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../../../shared/Group 1116606595.svg'
import SearchIco from '../../../../shared/Component 2.svg'
import WhishIco from '../../../../shared/Wishlist.svg'
import CartIco from '../../../../shared/Cart1.svg'
import Bars from '../../../../shared/material-symbols-light_menu.svg'
import Home from '../../../../shared/home.svg'
import About from '../../../../shared/help_outline.svg'
import Contact from '../../../../shared/contact_support.svg'
import SignUp from '../../../../shared/account_circle.svg'
import send from '../../../../shared/icon-send.svg'
import faceBook from '../../../../shared/Icon-Facebook.svg'
import twitter from '../../../../shared/Icon-Twitter.svg'
import instagram from '../../../../shared/icon-instagram.svg'
import linkedin from '../../../../shared/icon-Linkedin.svg'
import user from '../../../../shared/user.svg'
import user22 from '../../../../shared/user2.svg'
import fail from '../../../../shared/icon-mallbag.svg'
import logOut from '../../../../shared/Icon-logout.svg'
import {
	useCartGetQuery,
	useGetUserInfoQuery,
} from '../../../../features/reducers/userApi'
import { useUserId } from './useUserId'
import { Select } from 'antd'
import { useTranslation } from 'react-i18next'

const Layout = () => {
	let userId = useUserId()
	let [bars, setBars] = useState(false)
	let { data: user2 } = useGetUserInfoQuery(userId)
	let user = user2?.data
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()
	const wish = localStorage.getItem('wishList')

	function deleteWish(id) {
		let update = wish.filter(e => e.id != id)
		localStorage.setItem('wish', JSON.stringify(update))
		window.location.reload()
	}
	const { t, i18n } = useTranslation()
	function TranslateClick(lang) {
		i18n.changeLanguage(lang)
		console.log(i18n.language)
	}
	function deleteWishAll() {
		let wish = []
		localStorage.setItem('wish', JSON.stringify(wish))
		window.location.reload()
	}

	const { data, refetch } = useCartGetQuery()

	useEffect(() => {
		if (!localStorage.getItem('access_token')) {
			navigate('/sign-up')
		}
	}, [navigate])
	return (
		<>
			<div className='left-[90%] hidden z-[300000000000000000] justify-end fixed items-end top-[85vh] p-[40px]'>
				<Select
					style={{ width: '80px' }}
					onOpenChange={e => TranslateClick(e)}
					options={[
						{ value: 'en', label: 'En' },
						{ value: 'ru', label: 'Ru' },
					]}
				/>
			</div>
			{isOpen && (
				<div className='absolute inset-0 flex items-center justify-center'>
					<div className='bg-[#000000B8] flex flex-col gap-[16px] rounded-[4px] top-[55px] right-[2%] z-[3000000000000000000000] shadow-[2px_4px_12px_0px_#00000059] fixed backdrop-blur-[12px] text-[#FAFAFA] px-[20px] py-[16px] w-[190px]'>
						<Link
							onClick={() => setIsOpen(!isOpen)}
							to={`/my-account/${userId}`}
						>
							<div className='flex items-center gap-[16px]'>
								<img src={user22} alt='' />
								<p className='text-[14px] font-[400] leading-[21px]'>Account</p>
							</div>
						</Link>
						<Link onClick={() => setIsOpen(!isOpen)} to={'/cart'}>
							<div className='flex items-center gap-[16px]'>
								<img src={fail} alt='' />
								<p className='text-[14px] font-[400] leading-[21px]'>
									My Order
								</p>
							</div>
						</Link>
						<div
							onClick={() => {
								navigate('/sign-up')
								setIsOpen(!isOpen)
								localStorage.removeItem('access_token')
								localStorage.removeItem('wishList')
							}}
							className='flex items-center gap-[16px]'
						>
							<img src={logOut} alt='' />
							<p className='text-[14px] font-[400] leading-[21px]'>Logout</p>
						</div>
					</div>
				</div>
			)}
			<div
				onClick={() => setBars(false)}
				className={`fixed top-[72.8px] left-[0px] md:hidden h-[100vh] z-[300099000] backdrop-blur-xs w-[100%] ${
					bars ? 'flex' : 'hidden'
				}`}
			></div>
			<div
				onClick={() => setIsOpen(false)}
				className={`fixed top-[0px] left-[0px] hidden h-[100vh] z-[30000] backdrop-blur-xs w-[100%] ${
					isOpen ? 'flex' : 'hidden'
				}`}
			></div>
			<div
				className={`fixed w-[35%] flex md:hidden top-[72.8px] duration-700 z-[1000000001]  ${
					bars ? 'right-[65%]' : 'right-[100%]'
				} bg-white h-[100vh] flex-col py-[20px] border border-[#0000004D] gap-[32px]`}
			>
				<Link
					className='px-[20px] flex gap-[10px] items-center'
					onClick={() => setBars(!bars)}
					to={'/'}
				>
					<img className='w-[30px] h-[30px]' src={Home} alt='' />
					<p
						className={`text-black ${
							location.pathname == '/'
								? 'border-b-[#0000004D]'
								: 'border-b-white'
						} border-b-[1px] text-[16px] font-[400] leading-[20px]`}
					>
						Home
					</p>
				</Link>
				<hr className='text-[#0000004D] w-[100%]' />
				<Link
					className='px-[20px] flex gap-[10px] items-center'
					onClick={() => setBars(!bars)}
					to={'/contact'}
				>
					<img className='w-[30px] h-[30px]' src={Contact} alt='' />
					<p
						className={`text-black ${
							location.pathname == '/contact'
								? 'border-b-[#0000004D]'
								: 'border-b-white'
						} border-b-[1px] text-[16px] font-[400] leading-[20px]`}
					>
						Contact
					</p>
				</Link>
				<hr className='text-[#0000004D] w-[100%]' />
				<Link
					className='px-[20px] flex gap-[10px] items-center'
					onClick={() => setBars(!bars)}
					to={'/about'}
				>
					<img className='w-[30px] h-[30px]' src={About} alt='' />
					<p
						className={`text-black ${
							location.pathname == '/about'
								? 'border-b-[#0000004D]'
								: 'border-b-white'
						} border-b-[1px] text-[16px] font-[400] leading-[20px]`}
					>
						About
					</p>
				</Link>
				<hr className='text-[#0000004D] w-[100%]' />
				<Link
					className='px-[20px] flex gap-[10px] items-center'
					onClick={() => setBars(!bars)}
					to={'/sign-up'}
				>
					<img className='w-[30px] h-[30px]' src={SignUp} alt='' />
					<p
						className={`text-black ${
							location.pathname == '/sign-up'
								? 'border-b-[#0000004D]'
								: 'border-b-white'
						} border-b-[1px] text-[16px] font-[400] leading-[20px]`}
					>
						Sign Up
					</p>
				</Link>
			</div>
			<header className='w-[100%] z-[23008288] bg-white border-b-[#0000001A] border-b px-[20px] py-[20px] md:px-[9.375%] flex justify-between md:py-[12px] sticky top-0 '>
				<div className='hidden md:flex w-[60%] justify-between items-center'>
					<Link to={'/'}>
						<img src={logo} className='md:inline hidden' alt='' />
					</Link>
					<div className='flex items-center gap-[32px]'>
						<Link to={'/'}>
							<p
								className={`text-black ${
									location.pathname == '/'
										? 'border-b-[#0000004D]'
										: 'border-b-white'
								} border-b-[1px] text-[16px] font-[400] leading-[20px]`}
							>
								Home
							</p>
						</Link>
						<Link to={'/contact'}>
							<p
								className={`text-black ${
									location.pathname == '/contact'
										? 'border-b-[#0000004D]'
										: 'border-b-white'
								} border-b-[1px] text-[16px] font-[400] leading-[20px]`}
							>
								Contact
							</p>
						</Link>
						<Link to={'/about'}>
							<p
								className={`text-black ${
									location.pathname == '/about'
										? 'border-b-[#0000004D]'
										: 'border-b-white'
								} border-b-[1px] text-[16px] font-[400] leading-[20px]`}
							>
								About
							</p>
						</Link>
						<Link to={'/sign-up'}>
							<p
								className={`text-black ${
									location.pathname == '/sign-up'
										? 'border-b-[#0000004D]'
										: 'border-b-white'
								} border-b-[1px] text-[16px] font-[400] leading-[20px]`}
							>
								Sign Up
							</p>
						</Link>
					</div>
				</div>
				<div className='md:hidden flex w-[80%] gap-[12px]'>
					<img src={Bars} onClick={() => setBars(!bars)} alt='' />
					<h2 className='text-[24px] font-[700] Inter leading-[24px]'>
						Exclusive
					</h2>
				</div>
				<div className='flex items-center gap-[10px] md:w-[400px] w-[190px] md:gap-[24px]'>
					<div className='hidden md:flex items-center px-[12px] py-[7px] rounded-[4px] bg-[#F5F5F5]'>
						<input
							type='text'
							placeholder='What are you looking for?'
							className='outline-none text- placeholder:text-[12px] w-[173px]'
							id=''
						/>
						<Link to={'/product'}>
							<img src={SearchIco} alt='' />
						</Link>
					</div>
					<Link to={'/wishlist'}>
						<div className='flex'>
							<img src={WhishIco} alt='' />
							<div className='w-[20px] flex justify-center items-center absolute ml-[15px] top-[18px]  h-[20px] bg-[#DB4444] rounded-full'>
								<p className='text-white text-[14px]'>
									{JSON.parse(wish) ? JSON.parse(wish)?.length : '0'}
								</p>
							</div>
						</div>
					</Link>
					{(isOpen && (
						<div>
							{(user?.image != '' && (
								<img
									className='w-[36px] border-4 border-[#C4C4C4] h-[36px] rounded-full'
									onClick={() => setIsOpen(!isOpen)}
									src={`https://store-api.softclub.tj/images/${user?.image}`}
									alt=''
								/>
							)) || (
								<img onClick={() => setIsOpen(!isOpen)} src={user} alt='' />
							)}
						</div>
					)) || (
						<div>
							{localStorage.getItem('access_token') && (
								<div>
									{(user?.image != '' && (
										<img
											className='w-[36px] h-[36px] rounded-full '
											onClick={() => setIsOpen(!isOpen)}
											src={`https://store-api.softclub.tj/images/${user?.image}`}
											alt=''
										/>
									)) || (
										<img onClick={() => setIsOpen(!isOpen)} src={user} alt='' />
									)}
								</div>
							)}
						</div>
					)}
					<Link to={'cart'}>
						<div className='flex'>
							<img src={CartIco} alt='' />
							<div className='w-[20px] flex justify-center items-center absolute ml-[12px] top-[17px]  h-[20px] bg-[#DB4444] rounded-full'>
								<p className='text-white text-[14px]'>
									{data?.data[0]?.productsInCart?.length ? data?.data[0]?.productsInCart?.length : "0"}
								</p>
							</div>
						</div>
					</Link>
				</div>
			</header>
			<main className='md:px-[10%]  px-0'>
				<Outlet />
			</main>
			<footer className='bg-black px-[20px] py-[32px] md:px-[9.375%] md:py-[60px]'>
				<div className='flex flex-wrap justify-between gap-[30px]'>
					<div className='flex w-[217px] text-[#FAFAFA] flex-col gap-[16px]'>
						<div className='flex flex-col gap-[24px]'>
							<h3 className='text-[24px] font-[700] Inter'>Exclusive</h3>
							<p className='text-[20px] font-[500] '>Subscribe</p>
							<p className='text-[16px] font-[400] '>
								Get 10% off your first order
							</p>
						</div>
						<div className='w-[100%] pl-[16px] py-[12px] md:w-[217px] flex items-center gap-[32px] border-[1.5px] border-[#FAFAFA] rounded-[4px] py-[12px'>
							<p className='text-[#fafafa4a] font-[400] text-[16px] '>
								Enter your email
							</p>
							<img src={send} alt='' />
						</div>
					</div>
					<div className='flex w-[175px] text-[#FAFAFA] flex-col gap-[24px]'>
						<h3 className='text-[24px] font-[700] Inter'>Support</h3>
						<div className='flex flex-col gap-[16px]'>
							<p className='text-[16px] font-[400] '>
								111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
							</p>
							<p className='text-[16px] font-[400] '>exclusive@gmail.com</p>
							<p className='text-[16px] font-[400] '>+88015-88888-9999</p>
						</div>
					</div>
					<div className='flex w-[109px] text-[#FAFAFA] flex-col gap-[24px]'>
						<h3 className='text-[24px] font-[700] Inter'>Account</h3>
						<div className='flex flex-col gap-[16px]'>
							<p className='text-[16px] font-[400] '>My Account</p>
							<p className='text-[16px] font-[400] '>Cart</p>
							<p className='text-[16px] font-[400] '>Wishlist</p>
							<p className='text-[16px] font-[400] '>Shop</p>
						</div>
					</div>
					<div className='flex w-[129px] text-[#FAFAFA] flex-col gap-[24px]'>
						<h3 className='text-[24px] font-[700] Inter'>Quick Link</h3>
						<div className='flex flex-col gap-[16px]'>
							<p className='text-[16px] font-[400] '>Privacy Policy</p>
							<p className='text-[16px] font-[400] '>Terms Of Use</p>
							<p className='text-[16px] font-[400] '>FAQ</p>
							<p className='text-[16px] font-[400] '>Contact</p>
						</div>
					</div>
					<div className='flex w-[168px] text-[#FAFAFA] flex-col gap-[24px]'>
						<h3 className='text-[24px] font-[700] Inter'>Social</h3>
						<div className='flex items-center gap-[24px]'>
							<img src={faceBook} alt='' />
							<img src={twitter} alt='' />
							<img src={instagram} alt='' />
							<img src={linkedin} alt='' />
						</div>
					</div>
				</div>
				<br />
				<br />
				<p className=' m-auto text-center md:w-[400px] w-[300px] text-[#ffffff45] font-[400] '>
					© Copyright Rimel 2022. All right reserved
				</p>
			</footer>
		</>
	)
}

export default Layout
