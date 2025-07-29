import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
	useAddToCartMutation,
	useCartGetQuery,
	useGetByIdProductQuery,
	useGetProductsQuery,
} from '../../../../features/reducers/userApi'
import eye from '../../../../shared/Quick View.svg'
import stars from '../../../../shared/Frame 566.svg'
import retur from '../../../../shared/Icon-return.svg'
import lory from '../../../../shared/Icon-delivery.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

const Info = () => {
	let { id } = useParams()
	let { data, refetch } = useGetByIdProductQuery(id)
	let product = data?.data
	console.log(data?.data)
	let data2 = useGetProductsQuery()
	let data3 = useCartGetQuery()

	let [cnt, setCnt] = useState(0)
	let [addToCart] = useAddToCartMutation()
	async function addToCart2(id) {
		await addToCart(id)
		data3.refetch()
	}
	return (
		<div className='md:py-[60px] flex flex-col gap-[40px] py-[20px'>
			<div className='flex px-[20px] md:px-0 items-center gap-[12px]'>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					Account
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					{' '}
					/{' '}
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					Gaming
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					{' '}
					/{' '}
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#000000]'>
					{product?.productName}
				</p>
			</div>
			<section className='flex px-[20px] md:px-0 flex-col md:flex-row gap-[70px]'>
				<div className='flex flex-col-reverse md:flex-row md:w-[69.83%] items-center gap-[5px] md:gap-[30px]'>
					<div className='w-[100%] md:w-[170px] flex md:flex-col flex-row gap-[5px] md:gap-[16px]'>
						{product?.images.map(img => {
							return (
								<img
									className='w-[24%] md:w-[170px] rounded-[4px] md:h-[138px] bg-[#F5F5F5] py-[15px] px-[20px]'
									key={img.id}
									src={`https://store-api.softclub.tj/images/${img.images}`}
									alt=''
								/>
							)
						})}
						{product?.images.map(img => {
							return (
								<img
									className='w-[24%] md:w-[170px] rotate-y-180  rounded-[4px] md:h-[138px] bg-[#F5F5F5] py-[15px] px-[20px]'
									key={img.id}
									src={`https://store-api.softclub.tj/images/${img.images}`}
									alt=''
								/>
							)
						})}
						{product?.images.map(img => {
							return (
								<img
									className='w-[24%] md:w-[170px]  rounded-[4px] md:h-[138px] bg-[#F5F5F5] py-[15px] px-[20px]'
									key={img.id}
									src={`https://store-api.softclub.tj/images/${img.images}`}
									alt=''
								/>
							)
						})}
						{product?.images.map(img => {
							return (
								<img
									className='w-[24%] md:w-[170px] rotate-y-180  rounded-[4px] md:h-[138px] bg-[#F5F5F5] py-[15px] px-[20px]'
									key={img.id}
									src={`https://store-api.softclub.tj/images/${img.images}`}
									alt=''
								/>
							)
						})}
					</div>
					{product?.images.map(img => {
						return (
							<div
								key={img.id}
								className='rounded-[4px] w-[100%] md:w-[70%] bg-[#F5F5F5] flex items-center justify-center md:h-[100%]'
							>
								<img
									className='w-[100%] py-[15px] px-[20px]'
									src={`https://store-api.softclub.tj/images/${img.images}`}
									alt=''
								/>
							</div>
						)
					})}
				</div>
				<div className='flex flex-col gap-[33px] md:w-[30%] h-auto'>
					<div className='flex flex-col gap-[21px]'>
						<p className='text-[24px] font-[500] Inter'>
							{product?.productName}
						</p>
						<div className='flex items-center gap-[16px]'>
							<div className='flex items-center gap-[8px]'>
								<img src={stars} alt='' />
								<p className='text-[14px] font-[400] text-[#BFBFBF]'>
									(150 Reviews)
								</p>
							</div>
							<p
								className={`${
									!product?.productInMyCart
										? 'text-[#12CA5B]'
										: 'text-[#DB4444]'
								} border-l-[#BFBFBF] pl-[16px] leading-[21px] border-l`}
							>
								{!product?.productInMyCart ? 'In Stock' : 'Not Stock'}
							</p>
						</div>
						<p className='font-[700] text-[24px]'>${product?.price}.00</p>
						<p className='text-[#00000099] text-[14px font-[400]'>
							{product?.description}
						</p>
						<hr className='text-[#BFBFBF]' />
						<div className='flex items-center gap-[24px]'>
							<p className='text-[20px] font-[400] Inter'>Colours:</p>
							<div className='flex items-center gap-[8px]'>
								<div
									className={`size-5 border-2 border-[#000000] bg-${product?.color} rounded-full`}
								></div>
							</div>
						</div>
						<div className='flex items-center gap-[24px]'>
							<p className='text-[20px] font-[400] Inter'>Size:</p>
							<div className='flex items-center gap-[12px]'>
								<div className='border-2 hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white text-[#000000] uppercase border-[#00000080] rounded-[4px] flex px-[12px] py-[6px] bg-white'>
									<p className='text-[14px] font-[500]'>XS</p>
								</div>
								<div className='border-2 hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white text-[#000000] uppercase border-[#00000080] rounded-[4px] flex px-[12px] py-[6px] bg-white'>
									<p className='text-[14px] font-[500]'>S</p>
								</div>
								<div className='border-2 hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white text-[#000000] uppercase border-[#00000080] rounded-[4px] flex px-[12px] py-[6px] bg-white'>
									<p className='text-[14px] font-[500]'>M</p>
								</div>
								<div className='border-2 hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white text-[#000000] uppercase border-[#00000080] rounded-[4px] flex px-[12px] py-[6px] bg-white'>
									<p className='text-[14px] font-[500]'>L</p>
								</div>
								<div className='border-2 hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white text-[#000000] uppercase border-[#00000080] rounded-[4px] flex px-[12px] py-[6px] bg-white'>
									<p className='text-[14px] font-[500]'>XL</p>
								</div>
							</div>
						</div>
						<div className='flex items-center justify-between'>
							<div className='w-[40%] flex h-[45px]'>
								<button
									onClick={() => {
										if (cnt > 0) {
											setCnt((cnt -= 1))
										}
									}}
									className='rounded-l-[4px] hover:bg-[#DB4444] hover:border-[#DB4444] group border-[2px] w-[25%] border-[#00000080] flex items-center justify-center'
								>
									<div className='w-[16px] group-hover:border-white border-[1.5px] border-black rounded-full leading-2'></div>
								</button>
								<div className='border-y-2 w-[50%] flex items-center justify-center text-center border-y-[#00000080]'>
									<p className='text-[20px] font-[500] '>{cnt}</p>
								</div>
								<button
									onClick={() => setCnt((cnt += 1))}
									className='rounded-r-[4px] group border-[2px] hover:bg-[#DB4444] hover:border-[#DB4444] w-[25%] border-[#00000080] flex items-center justify-center'
								>
									<div className='w-[16px] group-hover:border-white border-[1.5px] border-black rounded-full leading-2'></div>
									<div className='h-[16px] group-hover:border-white absolute border-[1.5px] border-black rounded-full leading-2'></div>
								</button>
							</div>
							<button
								onClick={() => addToCart2(product?.id)}
								className='w-[40%] rounded-[4px] border-2 border-[#DB4444] bg-[#DB4444] flex items-center justify-center text-[#FAFAFA] font-[500] h-[44px]'
							>
								Buy Now
							</button>
							<div className='w-[44px] rounded-[4px] flex items-center justify-center border-[2px] border-[#00000080] h-[40px]'>
								<label className='cursor-pointer'>
									<input type='checkbox' className='peer hidden' />
									<svg
										className={`w-7 h-7 fill-[#FFFFFF] peer-checked:fill-[#DB4444] transition-colors duration-100`}
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
						</div>
						<div className='flex flex-col rounded-[4px] py-[20px] border gap-[18px] border-[#00000080]'>
							<div className='flex items-center gap-[16px] px-[20px]'>
								<img src={lory} alt='' />
								<div className='flex flex-col gap-[4px]'>
									<h3 className='text-[16px] font-[500]'>Free Delivery</h3>
									<p className='underline text-[10px] font-[500]'>
										Enter your postal code for Delivery Availability
									</p>
								</div>
							</div>
							<hr className='text-[#00000080]' />
							<div className='flex items-center gap-[16px] px-[20px]'>
								<img src={retur} alt='' />
								<div className='flex flex-col gap-[4px]'>
									<h3 className='text-[16px] font-[500]'>Return Delivery</h3>
									<p className='text-[12px] font-[500]'>
										Free 30 Days Delivery Returns. Details
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='w-[100%] px-[20px] md:px-[0] flex flex-col gap-[32px] pt-[60px]'>
				<div className='flex items-center gap-[16px]'>
					<div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
					<p className='font-[500] text-[#DB4444] text-[16px]'>Related Item</p>
				</div>
				<Swiper
					pagination={{ clickable: true }}
					loop
					autoplay
					breakpoints={{
						1250: { slidesPerView: 3, spaceBetween: 20 },
						310: { slidesPerView: 1, spaceBetween: 30 },
					}}
					modules={[Pagination]}
					className='mySwiper'
				>
					{data2.data?.data?.products?.map(e => {
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
												<input type='checkbox' className='peer hidden' />
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
		</div>
	)
}

export default Info
