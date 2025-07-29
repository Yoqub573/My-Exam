import React, { useState } from 'react'
import {
	useCartGetQuery,
	useDeleteFromCartMutation,
	useDicreamentFromCartMutation,
	useIncreasFromCartMutation,
	useRemoveAllCartMutation,
} from '../../../../features/reducers/userApi'
import radio from '../../../../shared/Radio Button.svg'
import radio2 from '../../../../shared/Radio Button (1).svg'
import logos from '../../../../shared/Frame 834.svg'

const CheckOut = () => {
	let [check, setCheck] = useState(true)
	const { data, refetch } = useCartGetQuery()
	let [deleteFromCart] = useDeleteFromCartMutation()
	let [removeAllCart] = useRemoveAllCartMutation()
	let [IncreasFromCart] = useIncreasFromCartMutation()
	let [DicreamentFromCart] = useDicreamentFromCartMutation()
	async function deleteProduct(id) {
		await deleteFromCart(id)
		refetch()
	}
	async function removeAllCart2() {
		await removeAllCart()
		refetch()
	}
	async function IncreasFromCart2(id) {
		await IncreasFromCart({ id: id })
		refetch()
	}
	async function DicreamentFromCart2(id) {
		await DicreamentFromCart({ id: id })
		refetch()
	}
	let [optial, setOptial] = useState(true)
	let [optial2, setOptial2] = useState(false)
	return (
		<section className='py-[20px] px-[20px] md:px-0 flex flex-col gap-[20px] md:gap-[40px] md:py-[60px]'>
			<div className='flex items-center gap-[12px]'>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					Product
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					{' '}
					/{' '}
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					View Cart
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					{' '}
					/{' '}
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#000000]'>
					CheckOut
				</p>
			</div>
			<div className='flex flex-col md:flex-row items-center gap-[100px] md:gap-[200px]'>
				<div className='w-[100%] md:w-[510px] flex flex-col gap-[16px] '>
					<h2 className='text-[36px] font-[500] tracking-[4px] Inter'>
						Billing Details
					</h2>
					<div
						style={{ boxShadow: '0px 8px 24px 0px #00000029' }}
						className='px-[20px] pb-[24px] pt-[20px] flex flex-col gap-[28px] w-[100%]'
					>
						<div className='flex flex-col gap-[20px] w-[100%]'>
							<input
								type='text'
								placeholder='First name'
								className='border Roboto w-[100%] px-[10px] outline-none border-[#0000003B] rounded-[4px] h-[56px] placeholder:text-[#00000099] placeholder:text-[16px]'
							/>
							<input
								type='text'
								placeholder='Last name'
								className='border Roboto w-[100%] px-[10px] outline-none border-[#0000003B] rounded-[4px] h-[56px] placeholder:text-[#00000099] placeholder:text-[16px]'
							/>
							<input
								type='text'
								placeholder='Street address'
								className='border Roboto w-[100%] px-[10px] outline-none border-[#0000003B] rounded-[4px] h-[56px] placeholder:text-[#00000099] placeholder:text-[16px]'
							/>
							<input
								type='text'
								placeholder='Apartment, floor, etc. (optional)'
								className='border Roboto w-[100%] px-[10px] outline-none border-[#0000003B] rounded-[4px] h-[56px] placeholder:text-[#00000099] placeholder:text-[16px]'
							/>
							<input
								type='text'
								placeholder='Town/City'
								className='border Roboto w-[100%] px-[10px] outline-none border-[#0000003B] rounded-[4px] h-[56px] placeholder:text-[#00000099] placeholder:text-[16px]'
							/>
							<input
								type='text'
								placeholder='Phone number'
								className='border Roboto w-[100%] px-[10px] outline-none border-[#0000003B] rounded-[4px] h-[56px] placeholder:text-[#00000099] placeholder:text-[16px]'
							/>
							<input
								type='text'
								placeholder='Email address'
								className='border Roboto w-[100%] px-[10px] outline-none border-[#0000003B] rounded-[4px] h-[56px] placeholder:text-[#00000099] placeholder:text-[16px]'
							/>
						</div>
						<div className='flex items-center gap-[16px]'>
							<div className='cntr'>
								<input
									type='checkbox'
									checked={check}
									onChange={() => setCheck(!check)}
									id='cbx'
									className='hidden-xs-up'
								/>
								<label htmlFor='cbx' className='cbx'></label>
							</div>
							<p className='text-[16px] font-[400] leading-[24px]'>
								Save this information for faster check-out next time
							</p>
						</div>
					</div>
				</div>
				<div className='w-[100%] md:w-[460px] flex flex-col gap-[40px]'>
					<div className='flex flex-col gap-[10px] w-[100%]'>
						{data?.data[0]?.productsInCart.map(e => {
							return (
								<div
									className='w-[100%] flex gap-[24px] items-center'
									key={e.id}
								>
									<div className='flex items-center justify-between w-[100%] gap-[24px]'>
										<div className='flex items-center w-[100%] gap-[24px]'>
											<img
												className='w-[54px] h-[54px]'
												src={`https://store-api.softclub.tj/images/${e.product.image}`}
												alt=''
											/>
											<p className='text-[16px] font-[400]'>
												{e.product.productName}
											</p>
										</div>
										<p className='text-[16px]  font-[600]'>
											${e.product.price * e.quantity}
										</p>
									</div>
								</div>
							)
						})}
						<div className='pt-[20px] flex flex-col w-[100%] gap-[16px]'>
							<div className='flex justify-between items-center'>
								<p className='text-[16px] font-[400]'>Subtotal:</p>
								<p className='text-[16px] font-[400]'>
									${data?.data[0]?.totalPrice}
								</p>
							</div>
							<div className='flex justify-between items-center'>
								<p className='text-[16px] font-[400]'>Shipping:</p>
								<p className='text-[16px] font-[400]'>
									{data?.data[0]?.totalDiscountPrice == '0'
										? 'Free'
										: data?.data[0]?.totalDiscountPrice}
								</p>
							</div>
							<hr className='text-[#bdbdbd] h-[2px]' />
							<div className='flex justify-between items-center'>
								<p className='font-[600] text-[24px]'>Total:</p>
								<p className='font-[600] text-[24px]'>
									${data?.data[0]?.totalPrice}
								</p>
							</div>
						</div>
					</div>
					<div className='flex items-start flex-col gap-[24px] '>
						<div className='flex items-center justify-between w-[100%]'>
							<div className='flex items-center gap-[16px]'>
								<img
									src={radio}
									onClick={() => {
										setOptial2(!optial2), setOptial(!optial)
									}}
									className={`${!optial2 ? 'hidden' : 'inline'} `}
									alt=''
								/>
								<img
									src={radio2}
									onClick={() => {
										setOptial2(!optial2), setOptial(!optial)
									}}
									className={`${optial2 ? 'hidden' : 'inline'}`}
									alt=''
								/>
								<p className='text-[16px] font-[400]'>Bank</p>
							</div>
							<img src={logos} alt='' />
						</div>
						<div className='flex items-center gap-[16px]'>
							<img
								src={radio}
								onClick={() => {
									setOptial2(!optial2), setOptial(!optial)
								}}
								className={`${optial2 ? 'hidden' : 'inline'} `}
								alt=''
							/>
							<img
								src={radio2}
								onClick={() => {
									setOptial(!optial)
									setOptial2(!optial2)
								}}
								className={`${!optial2 ? 'hidden' : 'inline'}`}
								alt=''
							/>
							<p className='text-[16px] font-[400]'>Cash on delivery</p>
						</div>
						<div	style={{ boxShadow: '0px 8px 24px 0px #00000029' }}	className='px-[20px] pb-[24px] pt-[20px] flex md:flex-row flex-col gap-[16px] w-[100%]'>
							<input	type='text'	placeholder='Coupon Code'	className='border Roboto w-[100%] md:w-[70%] px-[10px] outline-none border-[#0000003B] rounded-[4px] h-[56px] placeholder:text-[#00000099] placeholder:text-[16px]'/>
							<button	className='font-[500] w-[30%] flex items-center justify-center md:w-[143px] text-[#DB4444] text-[16px] px-[48px] py-[16px] border rounded-[4px] border-[#DB4444]'>
								Apply
							</button>
						</div>
						<button className='bg-[#DB4444] w-[190px] py-[16px] px-[48px] rounded-[4px] text-white text-[16px] font-[500]'>
					  	Place Order
					  </button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CheckOut
