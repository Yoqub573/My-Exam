import React, { useRef } from 'react'
import { Carousel, Flex, Rate } from 'antd'
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
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import TextField from '@mui/material/TextField'
import { Grid, Pagination } from 'swiper/modules'
import {
	useAddToCartMutation,
	useCartGetQuery,
	useCategoryGetQuery,
	useGetProductsQuery,
} from '../../../../features/reducers/userApi'
import { SettingOutlined } from '@ant-design/icons'
import { Collapse, Select, Slider } from 'antd'
const { Option } = Select
const Product = () => {
	let { data } = useGetProductsQuery()
	let [addToCart] = useAddToCartMutation()
	let { refetch } = useCartGetQuery()
	async function addToCart2(id) {
		await addToCart(id)
		refetch()
	}
	const [disabled, setDisabled] = useState(false)
	const onChange = checked => {
		setDisabled(checked)
	}
	const wish = localStorage.getItem('wishList')

	function addWish(e) {
		let update = [...JSON.parse(wish), e]
		if (JSON.parse(wish).filter(e2 => e2.id == e.id).length == 0) {
			localStorage.removeItem('wishList')
			localStorage.setItem('wishList', JSON.stringify(update))
			window.location.reload()
		} else {
			alert('This Product Alwredy in Wish-Lsit')
		}
	}

	const items = [
		{
			key: '1',
			label: <p className='font-[600] Inter text-[16px]'>Category</p>,
			children: (
				<div className='flex flex-col gap-[10px]'>
					<p className='text-[#505050] hover:text-[#DB4444] font-[400] Inter'>
						All products
					</p>
					<p className='text-[#505050] hover:text-[#DB4444] font-[400] Inter'>
						Electronics
					</p>
					<p className='text-[#505050] hover:text-[#DB4444] font-[400] Inter'>
						Home & Lifestyle
					</p>
					<p className='text-[#505050] hover:text-[#DB4444] font-[400] Inter'>
						Medicine
					</p>
					<p className='text-[#505050] hover:text-[#DB4444] font-[400] Inter'>
						Sports & Outdoor
					</p>
					<p className='text-[#DB4444] font-[400] Inter'>See all</p>
				</div>
			),
		},
		{
			key: '2',
			label: <p className='font-[600] Inter text-[16px]'>My Orders</p>,
			children: (
				<div className='flex flex-col gap-[10px]'>
					<div className='flex items-center gap-[10px]'>
						<input type='checkbox' className='size-5' id='' />
						<p className='text-[#505050] font-[400] Inter'>Samsung</p>
					</div>
					<div className='flex items-center gap-[10px]'>
						<input type='checkbox' className='size-5' id='' />
						<p className='text-[#505050] font-[400] Inter'>Apple</p>
					</div>
					<div className='flex items-center gap-[10px]'>
						<input type='checkbox' className='size-5' id='' />
						<p className='text-[#505050] font-[400] Inter'>Huawei</p>
					</div>
					<div className='flex items-center gap-[10px]'>
						<input type='checkbox' className='size-5' id='' />
						<p className='text-[#505050] font-[400] Inter'>Pocco</p>
					</div>
					<div className='flex items-center gap-[10px]'>
						<input type='checkbox' className='size-5' id='' />
						<p className='text-[#505050] font-[400] Inter'>Lenovo</p>
					</div>
					<p className='text-[#DB4444] font-[400] Inter'>See all</p>
				</div>
			),
		},
		{
			key: '3',
			label: <p className='font-[600] Inter text-[16px]'>Features</p>,
			children: (
				<div className='flex flex-col gap-[10px]'>
					<div className='flex items-center gap-[10px]'>
						<input type='checkbox' className='size-5' id='' />
						<p className='text-[#505050] font-[400] Inter'>Metallic</p>
					</div>
					<div className='flex items-center gap-[10px]'>
						<input type='checkbox' className='size-5' id='' />
						<p className='text-[#505050] font-[400] Inter'>Plastic cover</p>
					</div>
					<div className='flex items-center gap-[10px]'>
						<input type='checkbox' className='size-5' id='' />
						<p className='text-[#505050] font-[400] Inter'>8GB Ram</p>
					</div>
					<div className='flex items-center gap-[10px]'>
						<input type='checkbox' className='size-5' id='' />
						<p className='text-[#505050] font-[400] Inter'>Super power</p>
					</div>
					<div className='flex items-center gap-[10px]'>
						<input type='checkbox' className='size-5' id='' />
						<p className='text-[#505050] font-[400] Inter'>Large Memory</p>
					</div>
					<p className='text-[#DB4444] font-[400] Inter'>See all</p>
				</div>
			),
		},
		{
			key: '4',
			label: <p className='font-[600] Inter text-[16px]'>Price range</p>,
			children: (
				<div className='flex flex-col gap-[10px]'>
					<Slider
						range
						defaultValue={[30, 70]}
						className='w-[100%]'
						disabled={disabled}
						trackStyle={[{ backgroundColor: '#db4444' }]}
						handleStyle={[
							{ borderColor: '#db4444', backgroundColor: '#db4444' },
							{ borderColor: '#db4444', backgroundColor: '#db4444' },
						]}
						railStyle={{ backgroundColor: '#ffcccc' }}
					/>
					<div className='flex items-center gap-[8px] w-[100%] py-[10px]'>
						<TextField className='w-1/2' variant='outlined' label={'Min'} />
						<TextField className='w-1/2' variant='outlined' label={'Max'} />
					</div>
					<button className='font-[500] w-[100%] flex items-center justify-center md:w-[100%] text-[#DB4444] text-[16px] px-[48px] py-[10px] border rounded-[4px] border-[#DB4444]'>
						Apply
					</button>
				</div>
			),
		},
		{
			key: '5',
			label: <p className='font-[600] Inter text-[16px]'>Condition</p>,
			children: (
				<form className='flex flex-col gap-[10px]'>
					<label className='flex items-center gap-[10px]'>
						<input
							type='radio'
							name='option'
							value='1'
							className='size-5 accent-[#DB4444]'
							id=''
						/>
						<p className='text-[#505050] font-[400] Inter'>Any</p>
					</label>
					<label className='flex items-center gap-[10px]'>
						<input
							type='radio'
							name='option'
							value='1'
							className='size-5 accent-[#DB4444]'
							id=''
						/>
						<p className='text-[#505050] font-[400] Inter'>Refurbished</p>
					</label>
					<label className='flex items-center gap-[10px]'>
						<input
							type='radio'
							name='option'
							value='1'
							className='size-5 accent-[#DB4444]'
							id=''
						/>
						<p className='text-[#505050] font-[400] Inter'>Brand new</p>
					</label>
					<label className='flex items-center gap-[10px]'>
						<input
							type='radio'
							name='option'
							value='1'
							className='size-5 accent-[#DB4444]'
							id=''
						/>
						<p className='text-[#505050] font-[400] Inter'>Old items</p>
					</label>
				</form>
			),
		},
		{
			key: '6',
			label: <p className='font-[600] Inter text-[16px]'>Ratings</p>,
			children: (
				<div className='flex flex-col gap-[10px]'>
					<div className='flex flex-col gap-[10px]'>
						<div className='flex items-center gap-[10px]'>
							<input type='checkbox' className='size-5' id='' />
							<Rate defaultValue={5} />
						</div>
						<div className='flex items-center gap-[10px]'>
							<input type='checkbox' className='size-5' id='' />
							<Rate defaultValue={4} />
						</div>
						<div className='flex items-center gap-[10px]'>
							<input type='checkbox' className='size-5' id='' />
							<Rate defaultValue={3} />
						</div>
						<div className='flex items-center gap-[10px]'>
							<input type='checkbox' className='size-5' id='' />
							<Rate defaultValue={2} />
						</div>
					</div>
				</div>
			),
		},
	]
	return (
		<section className='md:py-[60px] flex flex-col gap-[40px] p-[20px]'>
			<div className='flex flex-col md:flex-row items-start w-[100%] justify-between'>
				<div className='flex items-center gap-[12px]'>
					<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
						Home
					</p>
					<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
						{' '}
						/{' '}
					</p>
					<p className='text-[16px] md:text-[14px] font-[400] text-[#000000]'>
						Explore Our Products
					</p>
				</div>
				<select className='py-[16px] w-[217px] outline-none px-[12px] border-[#0000003B] rounded-[4px] border '>
					<option value=''>Populary</option>
				</select>
			</div>
			<div className='flex flex-col md:flex-row gap-[60px]'>
				<div className='md:w-[240px] flex-col gap-[13px]'>
					<Collapse
						ghost
						defaultActiveKey={['1', '2', '3', '4', '5', '6']}
						expandIconPosition={'end'}
						items={items}
					/>
				</div>
				<div className='flex md:w-[76%] flex-col gap-[32px]'>
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
														type='checkbox'
														onClick={() => {
															addWish(e)
														}}
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
														type='checkbox'
														onClick={() => {
															addWish(e)
														}}
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
														type='checkbox'
														onClick={() => {
															addWish(e)
														}}
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
				</div>
			</div>
		</section>
	)
}

export default Product
