import React, { useRef } from 'react'
import { Carousel, Flex } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import phoneLogo from '../../../../shared/1200px-Apple_gray_logo 1.svg'
import DropDown from '../../../../shared/DropDown.svg'
import arrows from '../../../../shared/Frame 726.svg'
import phone from '../../../../shared/hero_endframe__cvklg0xk3w6e_large 2.svg'
import icoArrow from '../../../../shared/icons arrow-right.svg'
import eye from '../../../../shared/Quick View.svg'
import stars from '../../../../shared/Frame 566.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import './styles.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Grid, Pagination } from 'swiper/modules'
import {
	useAddToCartMutation,
	useCartGetQuery,
	useCategoryGetQuery,
	useGetProductsQuery,
} from '../../../../features/reducers/userApi'
import FlashRound from '../../../../features/FlashRound/FlashRound'
import { useTranslation } from 'react-i18next'

const Home = () => {
	let { data } = useGetProductsQuery()
	let [addToCart] = useAddToCartMutation()
	let { refetch } = useCartGetQuery()
	let data2 = useCategoryGetQuery()
	const wish = localStorage.getItem('wishList')

	function addWish(e) {
		let update = [...JSON.parse(wish), e]
		if (JSON.parse(wish)?.filter(e2 => e2.id == e.id).length == 0) {
			localStorage.removeItem('wishList')
			localStorage.setItem('wishList', JSON.stringify(update))
			window.location.reload()
		} else {
			alert('This Product Alwredy in Wish-Lsit')
		}
	}
	async function addToCart2(id) {
		await addToCart(id)
		refetch()
	}
	const [time, setTime] = useState({
		days: 3,
		hours: 59,
		minutes: 59,
		seconds: 59,
	})
	useEffect(() => {
		const timer = setInterval(() => {
			setTime(prev => {
				let { days, hours, minutes, seconds } = prev

				if (seconds > 0) {
					return { ...prev, seconds: seconds - 1 }
				} else if (minutes > 0) {
					return { ...prev, minutes: minutes - 1, seconds: 59 }
				} else if (hours > 0) {
					return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 }
				} else if (days > 0) {
					return { days: days - 1, hours: 23, minutes: 59, seconds: 59 }
				} else {
					clearInterval(timer)
					return prev
				}
			})
		}, 1000)

		return () => clearInterval(timer)
	}, [])
	const { t } = useTranslation()
	return (
		<>
			<section className='py-[22px] md:px-0 px-[20px] flex md:flex-row flex-col items-center gap-[40px]'>
				<div className='pt-[40px] w-[100%] flex-wrap md:w-[20%] pr-[20px] flex md:flex-col gap-[16px] pb-[20px] md:pb-[0px] md:border-b-0 border-b md:border-r border-r-0 border-[#0000001A]'>
					<div className='md:px-0 w-fit  gap-[8px] md:py-0 px-[8px] py-[12px] md:rounded-[0px] md:bg-white bg-[#F5F5F5] md:w-[100%] flex items-center md:justify-between '>
						<p className='text-[16px] font-[400] leading-[24px]'>
							Woman’s Fashion
						</p>
						<img src={DropDown} alt='' />
					</div>
					<div className='md:px-0 w-fit  gap-[8px] md:py-0 px-[8px] py-[12px] md:rounded-[0px] md:bg-white bg-[#F5F5F5]  md:w-[100%] flex items-center md:justify-between '>
						<p className='text-[16px] font-[400] leading-[24px]'>
							Man’s Fashion
						</p>
						<img src={DropDown} alt='' />
					</div>
					<p className='md:px-0 w-fit  md:py-0 px-[8px] py-[12px] md:rounded-[0px] md:bg-white bg-[#F5F5F5] rounded-[4px] text-[16px] font-[400] leading-[24px]'>
						Electronics
					</p>
					<p className='md:px-0 w-fit  md:py-0 px-[8px] py-[12px] md:rounded-[0px] md:bg-white bg-[#F5F5F5] rounded-[4px] text-[16px] font-[400] leading-[24px]'>
						Home & Lifestyle
					</p>
					<p className='md:px-0 w-fit  md:py-0 px-[8px] py-[12px] md:rounded-[0px] md:bg-white bg-[#F5F5F5] rounded-[4px] text-[16px] font-[400] leading-[24px]'>
						Medicine
					</p>
					<p className='md:px-0 w-fit  md:py-0 px-[8px] py-[12px] md:rounded-[0px] md:bg-white bg-[#F5F5F5] rounded-[4px] text-[16px] font-[400] leading-[24px]'>
						Sports & Outdoor
					</p>
					<p className='md:px-0 w-fit  md:py-0 px-[8px] py-[12px] md:rounded-[0px] md:bg-white bg-[#F5F5F5] rounded-[4px] text-[16px] font-[400] leading-[24px]'>
						Baby’s & Toys
					</p>
					<p className='md:px-0 w-fit  md:py-0 px-[8px] py-[12px] md:rounded-[0px] md:bg-white bg-[#F5F5F5] rounded-[4px] text-[16px] font-[400] leading-[24px]'>
						Groceries & Pets
					</p>
					<p className='md:px-0 w-fit  md:py-0 px-[8px] py-[12px] md:rounded-[0px] md:bg-white bg-[#F5F5F5] rounded-[4px] text-[16px] font-[400] leading-[24px]'>
						Health & Beauty
					</p>
				</div>
				<div className='w-[992px]  md:h-[334px]'>
					<Carousel arrows infinite={true} autoplay={{ dotDuration: true }}>
						<div>
							<div className='flex items-center flex-col md:flex-row justify-between bg-black text-white gap-[100px] md:h-[334px] rounded-md px-10 py-6'>
								<div className='flex flex-col justify-center gap-4 max-w-[50%]'>
									<div className='flex items-center gap-3'>
										<img src={phoneLogo} alt='apple' className='w-10 h-10  ' />
										<p className='text-lg font-medium'>iPhone 14 Series</p>
									</div>
									<p className='text-[40px] font-bold leading-snug'>
										Up to 10% <br /> off Voucher
									</p>
									<Link to='/product'>
										<div className='flex items-center gap-4'>
											<p className='pb-[5px] border-b border-b-[white] text-[16px] text-[white]'>
												Shop Now
											</p>
											<img src={icoArrow} alt='arrow' className='w-5' />
										</div>
									</Link>
								</div>
								<div className='max-w-[51%]'>
									<img
										src={phone}
										alt='iPhone'
										className='w-[900px] object-contain'
									/>
								</div>
							</div>
						</div>
						<div>
							<div className='flex items-center flex-col md:flex-row justify-between bg-black text-white gap-[100px] md:h-[334px] rounded-md px-10 py-6'>
								<div className='flex flex-col justify-center gap-4 max-w-[50%]'>
									<div className='flex items-center gap-3'>
										<img src={phoneLogo} alt='apple' className='w-10 h-10  ' />
										<p className='text-lg font-medium'>iPhone 14 Series</p>
									</div>
									<p className='text-[40px] font-bold leading-snug'>
										Up to 10% <br /> off Voucher
									</p>
									<Link to='/product'>
										<div className='flex items-center gap-4'>
											<p className='pb-[5px] border-b border-b-[white] text-[16px] text-[white]'>
												Shop Now
											</p>
											<img src={icoArrow} alt='arrow' className='w-5' />
										</div>
									</Link>
								</div>
								<div className='max-w-[51%]'>
									<img
										src={phone}
										alt='iPhone'
										className='w-[900px] object-contain'
									/>
								</div>
							</div>
						</div>
						<div>
							<div className='flex items-center flex-col md:flex-row justify-between bg-black text-white gap-[100px] md:h-[334px] rounded-md px-10 py-6'>
								<div className='flex flex-col justify-center gap-4 max-w-[50%]'>
									<div className='flex items-center gap-3'>
										<img src={phoneLogo} alt='apple' className='w-10 h-10  ' />
										<p className='text-lg font-medium'>iPhone 14 Series</p>
									</div>
									<p className='text-[40px] font-bold leading-snug'>
										Up to 10% <br /> off Voucher
									</p>
									<Link to='/product'>
										<div className='flex items-center gap-4'>
											<p className='pb-[5px] border-b border-b-[white] text-[16px] text-[white]'>
												Shop Now
											</p>
											<img src={icoArrow} alt='arrow' className='w-5' />
										</div>
									</Link>
								</div>
								<div className='max-w-[51%]'>
									<img
										src={phone}
										alt='iPhone'
										className='w-[900px] object-contain'
									/>
								</div>
							</div>
						</div>
						<div>
							<div className='flex items-center flex-col md:flex-row justify-between bg-black text-white gap-[100px] md:h-[334px] rounded-md px-10 py-6'>
								<div className='flex flex-col justify-center gap-4 max-w-[50%]'>
									<div className='flex items-center gap-3'>
										<img src={phoneLogo} alt='apple' className='w-10 h-10  ' />
										<p className='text-lg font-medium'>iPhone 14 Series</p>
									</div>
									<p className='text-[40px] font-bold leading-snug'>
										Up to 10% <br /> off Voucher
									</p>
									<Link to='/product'>
										<div className='flex items-center gap-4'>
											<p className='pb-[5px] border-b border-b-[white] text-[16px] text-[white]'>
												Shop Now
											</p>
											<img src={icoArrow} alt='arrow' className='w-5' />
										</div>
									</Link>
								</div>
								<div className='max-w-[51%]'>
									<img
										src={phone}
										alt='iPhone'
										className='w-[900px] object-contain'
									/>
								</div>
							</div>
						</div>
					</Carousel>
				</div>
			</section>
			<section className='flex py-[100px] flex-col items-center gap-[32px] px-5 md:px-0'>
				<div className='flex flex-col md:flex-row items-start md:items-end gap-[30px] md:justify-between w-[100%]'>
					<div className='flex flex-col md:flex-row gap-[20px] md:gap-[87px] items-start md:items-end'>
						<div className='flex flex-col gap-[24px]'>
							<div className='flex items-center gap-[16px]'>
								<div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
								<p className='font-[500] text-[#DB4444] text-[16px]'>Today’s</p>
							</div>
							<p className='text-[36px] font-[600] Inter leading-[48px]'>
								Flash Sales
							</p>
						</div>
						<div className='flex items-baseline-last gap-[24px]'>
							<div className='flex flex-col gap-[4px]'>
								<p className='text-[12px] font-[500] '>Days</p>
								<h3 className='text-[32px] font-[700] Inter'>0{time.days}</h3>
							</div>
							<h3 className='text-[#E07575] font-[500] text-3xl'>:</h3>
							<div className='flex flex-col gap-[4px]'>
								<p className='text-[12px] font-[500] '>Hours</p>
								<h3 className='text-[32px] font-[700] Inter'>{time.hours}</h3>
							</div>
							<h3 className='text-[#E07575] font-[500] text-3xl'>:</h3>
							<div className='flex flex-col gap-[4px]'>
								<p className='text-[12px] font-[500] '>Minutes</p>
								<h3 className='text-[32px] font-[700] Inter'>{time.minutes}</h3>
							</div>
							<h3 className='text-[#E07575] font-[500] text-3xl'>:</h3>
							<div className='flex flex-col gap-[4px]'>
								<p className='text-[12px] font-[500] '>Seconds</p>
								<h3 className='text-[32px] font-[700] Inter'>{time.seconds}</h3>
							</div>
						</div>
					</div>
					<img src={arrows} className='md:inline hidden' alt='' />
				</div>
				<Swiper
					pagination={{ clickable: true }}
					autoplay={{ delay: 2000, disableOnInteraction: true }}
					loop
					breakpoints={{
						1250: { slidesPerView: 3, spaceBetween: 20 },
						310: { slidesPerView: 1, spaceBetween: 30 },
					}}
					slidesPerView={3}
					spaceBetween={30}
					modules={[Pagination]}
					className='mySwiper'
				>
					{data?.data?.products?.map(e => {
						return (
							<SwiperSlide
								className='w-[100%] flex-col gap-[16px] md:w-[200px]'
								key={e.id}
							>
								<div className='group w-[100%]'>
									{!e.hasDiscount && (
										<p className='absolute rounded-[4px] m-[10px] z-[200] bg-[#DB4444] px-[12px] py-[4px] text-[#FAFAFA] text-[12px] font-[400]'>
											-{e.discountPrice}%
										</p>
									)}
									<div className='flex flex-col absolute md:ml-[87%] ml-[77%] gap-[8px] m-[10px]'>
										<div className='rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center'>
											<label className='cursor-pointer'>
												<input
													onClick={() => {
														addWish(e)
													}}
													type='checkbox'
													className='peer hidden'
												/>
												<svg
													className='w-7 h-7 fill-[#FFFFFF] peer-checked:fill-[#DB4444] transition-colors duration-100'
													xmlns='http:/ www.w3.org/2000/svg'
													viewBox='0 -4 20 24'
												>
													<path
														xmlns='http://www.w3.org/2000/svg'
														d='M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z'
														stroke='black'
														strokeWidth='1.5'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</label>
										</div>
										<Link to={`/info/${e.id}`}>
											<div className='rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center'>
												<img src={eye} alt='' />
											</div>
										</Link>
									</div>
									<img
										src={`https://store-api.softclub.tj/images/${e.image}`}
										className='w-[100%] group-hover:rounded-b-[0px] rounded-[4px] bg-[#F5F5F5] p-[20px] group-hover:h-[259px] h-[300px] object-cover'
										alt={e.productName}
									/>
									<button
										onClick={() => addToCart2(e.id)}
										className='w-[100%] justify-center items-center text-white text-[16px] font-[500] bg-black h-[41px]  hidden  group-hover:flex rounded-b-[4px]'
									>
										Add To Cart
									</button>
								</div>
								<div className='flex py-[20px] flex-col gap-[8px]'>
									<h1 className='text-[16px] font-[500] '>{e.productName}</h1>
									{(e.hasDiscount && (
										<div className='flex items-center gap-[12px]'>
											<p className='text-[#DB4444] text-[16px] font-[500]'>
												${e.discountPrice}
											</p>
											<p className='text-[#5f5f5f] line-through text-[16px] font-[500]'>
												${e.price}
											</p>
										</div>
									)) || (
										<p className='text-[#DB4444] line-through text-[16px] font-[500]'>
											${e.price}
										</p>
									)}
									<img src={stars} className='w-[40%]' alt='' />
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
				<Link to={'/product'}>
					<button className='bg-[#DB4444] rounded-[4px] text-[16px] font-[500] w-full px-[48px] py-[16px] text-white'>
						View All Products
					</button>
				</Link>
			</section>
			<section className='flex flex-col py-[60px] my-[40px] border-y-[#a1a1a1] border-y-[0.5px] items-center gap-[32px] mx-4 md:px-0'>
				<div className='flex flex-col md:flex-row items-start md:items-end gap-[30px] md:justify-between w-[100%]'>
					<div className='flex flex-col md:flex-row gap-[20px] md:gap-[87px] items-start md:items-end'>
						<div className='flex flex-col gap-[24px]'>
							<div className='flex items-center gap-[16px]'>
								<div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
								<p className='font-[500] text-[#DB4444] text-[16px]'>
									Categories
								</p>
							</div>
							<p className='text-[36px] font-[600] Inter leading-[48px]'>
								Browse By Category
							</p>
						</div>
					</div>
					<img src={arrows} className='md:inline hidden' alt='' />
				</div>
				<Swiper
					pagination={{ clickable: true }}
					autoplay={{ delay: 2000, disableOnInteraction: true }}
					loop
					breakpoints={{
						1250: { slidesPerView: 5, spaceBetween: 20 },
						310: { slidesPerView: 1, spaceBetween: 10 },
					}}
					slidesPerView={3}
					spaceBetween={30}
					modules={[Pagination]}
					className='mySwiper2'
				>
					{data2?.data?.data?.map(e => {
						return (
							<SwiperSlide
								className='text-center flex flex-col group hover:bg-[#DB4444] hover:border-[#DB4444] items-center justify-center w-[100%] h-[321.8px] gap-[30px] rounded-[4px] border-[1px] border-[#F5F5F5] p-[20px]'
								key={e.id}
							>
								<img
									src={`https://store-api.softclub.tj/images/${e.categoryImage}`}
									className='w-[56px] m-auto h-[56px]'
									alt={e.productName}
								/>
								<p className='text-[16px] font-[400] group-hover:text-white'>
									{e.categoryName}
								</p>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</section>
			<section className='flex py-[100px] flex-col items-center gap-[32px] px-5 md:px-0'>
				<div className='flex flex-col md:flex-row items-start md:items-end gap-[30px] md:justify-between w-[100%]'>
					<div className='flex flex-col md:flex-row gap-[20px] md:gap-[87px] items-start md:items-end'>
						<div className='flex flex-col gap-[24px]'>
							<div className='flex items-center gap-[16px]'>
								<div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
								<p className='font-[500] text-[#DB4444] text-[16px]'>
									This Month
								</p>
							</div>
							<p className='text-[36px] font-[600] Inter leading-[48px]'>
								Best Selling Products
							</p>
						</div>
					</div>
					<Link to={'/product'}>
						<button className='bg-[#DB4444] rounded-[4px] text-[16px] font-[500] w-full px-[48px] py-[16px] text-white'>
							View All
						</button>
					</Link>
				</div>
				<Swiper
					pagination={{ clickable: true }}
					autoplay={{ delay: 2000, disableOnInteraction: true }}
					loop
					breakpoints={{
						1250: { slidesPerView: 3, spaceBetween: 20 },
						310: { slidesPerView: 1, spaceBetween: 30 },
					}}
					slidesPerView={3}
					spaceBetween={30}
					modules={[Pagination]}
					className='mySwiper'
				>
					{data?.data?.products?.map(e => {
						return (
							<SwiperSlide
								className='w-[100%] flex-col gap-[16px] md:w-[200px]'
								key={e.id}
							>
								<div className='group w-[100%]'>
									{!e.hasDiscount && (
										<p className='absolute rounded-[4px] m-[10px] z-[200] bg-[#DB4444] px-[12px] py-[4px] text-[#FAFAFA] text-[12px] font-[400]'>
											-{e.discountPrice}%
										</p>
									)}
									<div className='flex flex-col absolute md:ml-[87%] ml-[77%] gap-[8px] m-[10px]'>
										<div className='rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center'>
											<label className='cursor-pointer'>
												<input
													onClick={() => {
														addWish(e)
													}}
													type='checkbox'
													className='peer hidden'
												/>
												<svg
													className='w-7 h-7 fill-[#FFFFFF] peer-checked:fill-[#DB4444] transition-colors duration-100'
													xmlns='http:/ www.w3.org/2000/svg'
													viewBox='0 -4 20 24'
												>
													<path
														xmlns='http://www.w3.org/2000/svg'
														d='M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z'
														stroke='black'
														strokeWidth='1.5'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</label>
										</div>
										<Link to={`/info/${e.id}`}>
											<div className='rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center'>
												<img src={eye} alt='' />
											</div>
										</Link>
									</div>
									<img
										src={`https://store-api.softclub.tj/images/${e.image}`}
										className='w-[100%] group-hover:rounded-b-[0px] rounded-[4px] bg-[#F5F5F5] p-[20px] group-hover:h-[259px] h-[300px] object-cover'
										alt={e.productName}
									/>
									<button
										onClick={() => addToCart2(e.id)}
										className='w-[100%] justify-center items-center text-white text-[16px] font-[500] bg-black h-[41px]  hidden  group-hover:flex rounded-b-[4px]'
									>
										Add To Cart
									</button>
								</div>
								<div className='flex py-[20px] flex-col gap-[8px]'>
									<h1 className='text-[16px] font-[500] '>{e.productName}</h1>
									{(e.hasDiscount && (
										<div className='flex items-center gap-[12px]'>
											<p className='text-[#DB4444] text-[16px] font-[500]'>
												${e.discountPrice}
											</p>
											<p className='text-[#5f5f5f] line-through text-[16px] font-[500]'>
												${e.price}
											</p>
										</div>
									)) || (
										<p className='text-[#DB4444] line-through text-[16px] font-[500]'>
											${e.price}
										</p>
									)}
									<img src={stars} className='w-[40%]' alt='' />
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</section>
			<section className='bg-[#090909FF] px-[20px] md:px-0 sm:flex justify-between items-center my-10'>
				<div className='flex flex-col gap-[20px]'>
					<div className='sm:ml-11 mt-[20px]'>
						<p className='text-[#00FF66] mb-[20px]'>Categories</p>
						<h2 className='text-white text-5xl font-[600] Inter'>
							Enhance Your <br /> Music Experience
						</h2>
					</div>
					<FlashRound />
					<div className='ml-11 my-8'>
						<button className='bg-[#00FF66] px-10 py-4  rounded-[3px]'>
							Buy Now!
						</button>
					</div>
				</div>
				<img
					src='/src/shared/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.svg'
					className='bgimage md:w-[60%] p-[30px]'
					alt=''
				/>
			</section>
			<section className='flex py-[100px] flex-col items-center gap-[32px] px-5 md:px-0'>
				<div className='flex flex-col md:flex-row items-start md:items-end gap-[30px] md:justify-between w-[100%]'>
					<div className='flex flex-col md:flex-row gap-[20px] md:gap-[87px] items-start md:items-end'>
						<div className='flex flex-col gap-[24px]'>
							<div className='flex items-center gap-[16px]'>
								<div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
								<p className='font-[500] text-[#DB4444] text-[16px]'>
									Our Products
								</p>
							</div>
							<p className='text-[36px] font-[600] Inter leading-[48px]'>
								Explore Our Products
							</p>
						</div>
					</div>
				</div>
				<Swiper
					breakpoints={{
						1250: { slidesPerView: 3, spaceBetween: 20 },
						310: { slidesPerView: 1, spaceBetween: 30 },
					}}
					pagination={{ clickable: true }}
					loop
					autoplay
					modules={[Grid, Pagination]}
					className='mySwiper'
				>
					{data?.data?.products?.map(e => {
						return (
							<SwiperSlide
								className='w-[100%] flex-col gap-[16px] md:w-[200px]'
								key={e.id}
							>
								<div className='group w-[100%]'>
									{!e.hasDiscount && (
										<p className='absolute rounded-[4px] m-[10px] z-[200] bg-[#DB4444] px-[12px] py-[4px] text-[#FAFAFA] text-[12px] font-[400]'>
											-{e.discountPrice}%
										</p>
									)}
									<div className='flex flex-col absolute md:ml-[87%] ml-[77%] gap-[8px] m-[10px]'>
										<div className='rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center'>
											<label className='cursor-pointer'>
												<input
													onClick={() => {
														addWish(e)
													}}
													type='checkbox'
													className='peer hidden'
												/>
												<svg
													className='w-7 h-7 fill-[#FFFFFF] peer-checked:fill-[#DB4444] transition-colors duration-100'
													xmlns='http:/ www.w3.org/2000/svg'
													viewBox='0 -4 20 24'
												>
													<path
														xmlns='http://www.w3.org/2000/svg'
														d='M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z'
														stroke='black'
														strokeWidth='1.5'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</label>
										</div>
										<Link to={`/info/${e.id}`}>
											<div className='rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center'>
												<img src={eye} alt='' />
											</div>
										</Link>
									</div>
									<img
										src={`https://store-api.softclub.tj/images/${e.image}`}
										className='w-[100%] group-hover:rounded-b-[0px] rounded-[4px] bg-[#F5F5F5] p-[20px] group-hover:h-[259px] h-[300px] object-cover'
										alt={e.productName}
									/>
									<button
										onClick={() => addToCart2(e.id)}
										className='w-[100%] justify-center items-center text-white text-[16px] font-[500] bg-black h-[41px]  hidden  group-hover:flex rounded-b-[4px]'
									>
										Add To Cart
									</button>
								</div>
								<div className='flex py-[20px] flex-col gap-[8px]'>
									<h1 className='text-[16px] font-[500] '>{e.productName}</h1>
									{(e.hasDiscount && (
										<div className='flex items-center gap-[12px]'>
											<p className='text-[#DB4444] text-[16px] font-[500]'>
												${e.discountPrice}
											</p>
											<p className='text-[#5f5f5f] line-through text-[16px] font-[500]'>
												${e.price}
											</p>
										</div>
									)) || (
										<p className='text-[#DB4444] line-through text-[16px] font-[500]'>
											${e.price}
										</p>
									)}
									<img src={stars} className='w-[40%]' alt='' />
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
				<Swiper
					breakpoints={{
						1250: { slidesPerView: 3, spaceBetween: 20 },
						310: { slidesPerView: 1, spaceBetween: 30 },
					}}
					pagination={{ clickable: true }}
					loop
					autoplay
					modules={[Grid, Pagination]}
					className='mySwiper'
				>
					{data?.data?.products?.map(e => {
						return (
							<SwiperSlide
								className='w-[100%] flex-col gap-[16px] md:w-[200px]'
								key={e.id}
							>
								<div className='group w-[100%]'>
									{!e.hasDiscount && (
										<p className='absolute rounded-[4px] m-[10px] z-[200] bg-[#DB4444] px-[12px] py-[4px] text-[#FAFAFA] text-[12px] font-[400]'>
											-{e.discountPrice}%
										</p>
									)}
									<div className='flex flex-col absolute md:ml-[87%] ml-[77%] gap-[8px] m-[10px]'>
										<div className='rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center'>
											<label className='cursor-pointer'>
												<input
													onClick={() => {
														addWish(e)
													}}
													type='checkbox'
													className='peer hidden'
												/>
												<svg
													className='w-7 h-7 fill-[#FFFFFF] peer-checked:fill-[#DB4444] transition-colors duration-100'
													xmlns='http:/ www.w3.org/2000/svg'
													viewBox='0 -4 20 24'
												>
													<path
														xmlns='http://www.w3.org/2000/svg'
														d='M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z'
														stroke='black'
														strokeWidth='1.5'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</label>
										</div>
										<Link to={`/info/${e.id}`}>
											<div className='rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center'>
												<img src={eye} alt='' />
											</div>
										</Link>
									</div>
									<img
										src={`https://store-api.softclub.tj/images/${e.image}`}
										className='w-[100%] group-hover:rounded-b-[0px] rounded-[4px] bg-[#F5F5F5] p-[20px] group-hover:h-[259px] h-[300px] object-cover'
										alt={e.productName}
									/>
									<button
										onClick={() => addToCart2(e.id)}
										className='w-[100%] justify-center items-center text-white text-[16px] font-[500] bg-black h-[41px]  hidden  group-hover:flex rounded-b-[4px]'
									>
										Add To Cart
									</button>
								</div>
								<div className='flex py-[20px] flex-col gap-[8px]'>
									<h1 className='text-[16px] font-[500] '>{e.productName}</h1>
									{(e.hasDiscount && (
										<div className='flex items-center gap-[12px]'>
											<p className='text-[#DB4444] text-[16px] font-[500]'>
												${e.discountPrice}
											</p>
											<p className='text-[#5f5f5f] line-through text-[16px] font-[500]'>
												${e.price}
											</p>
										</div>
									)) || (
										<p className='text-[#DB4444] line-through text-[16px] font-[500]'>
											${e.price}
										</p>
									)}
									<img src={stars} className='w-[40%]' alt='' />
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
				<Link to={'/product'}>
					<button className='bg-[#DB4444] rounded-[4px] text-[16px] font-[500] w-full px-[48px] py-[16px] text-white'>
						View All Products
					</button>
				</Link>
			</section>
		</>
	)
}

export default Home
