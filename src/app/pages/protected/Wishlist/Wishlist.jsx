import React from 'react'
import eye from '../../../../shared/Quick View.svg'
import { Link } from 'react-router-dom'
import { SwiperSlide, Swiper } from 'swiper/react'
import {
	useAddToCartMutation,
	useCartGetQuery,
	useGetProductsQuery,
} from '../../../../features/reducers/userApi'
import stars from '../../../../shared/Frame 566.svg'

const Wishlist = () => {
	let { data } = useGetProductsQuery()
	let [addToCart] = useAddToCartMutation()
	let { refetch } = useCartGetQuery()
	const wish = localStorage.getItem('wishList')
	async function addToCart2(id) {
		await addToCart(id)
		refetch()
	}
	function deleteWish(id) {
		let update = JSON.parse(wish).filter(e => e.id != id)
		localStorage.removeItem('wishList')
		localStorage.setItem('wishList', JSON.stringify(update))
		window.location.reload()
	}
	return (
		<div className='flex flex-col gap-[00px] py-[20px] md:py-[60px]'>
			<section>
				<div className='flex py-[40px] flex-col items-center gap-[32px] px-5 md:px-0'>
					<div className='flex flex-col md:flex-row items-start md:items-end gap-[30px] md:justify-between w-[100%]'>
						<div className='flex flex-col md:flex-row gap-[20px] md:gap-[87px] items-start md:items-end'>
							<div className='flex flex-col gap-[24px]'>
								<p className='text-[20px] font-[400] leading-[26px]'>
									Wishlist (4)
								</p>
							</div>
						</div>
						<button
							onClick={() => {
								JSON.parse(wish)?.forEach(e => {
									addToCart2(e.id)
								})
							}}
							className='px-[48px] py-[16px] border border-[#00000080] rounded-[4px] text-[16px] font-[500]'
						>
							Move All To Bag
						</button>
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
						className='mySwiper'
					>
						{JSON.parse(wish)?.map(e => {
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
											<Link
												onClick={() => deleteWish(e.id)}
												to={`/info/${e.id}`}
											>
												<div className='rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
													>
														<path
															d='M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143'
															stroke='black'
															strokeWidth='1.56'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
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
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</section>
			<section className='flex py-[100px] flex-col items-center gap-[32px] px-5 md:px-0'>
				<div className='flex flex-col md:flex-row items-start md:items-end gap-[30px] md:justify-between w-[100%]'>
					<div className='flex flex-col md:flex-row gap-[20px] md:gap-[87px] items-start md:items-end'>
						<div className='flex flex-col gap-[24px]'>
							<div className='flex items-center gap-[16px]'>
								<div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
								<p className='font-[500]  text-[16px]'>Just For You</p>
							</div>
						</div>
					</div>
					<Link to={'/product'}>
						<button className='px-[48px] py-[16px] border border-[#00000080] rounded-[4px] text-[16px] font-[500]'>
							See All
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
		</div>
	)
}

export default Wishlist
