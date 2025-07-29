import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
	useCartGetQuery,
	useDeleteFromCartMutation,
	useDicreamentFromCartMutation,
	useIncreasFromCartMutation,
	useRemoveAllCartMutation,
} from '../../../../features/reducers/userApi'
import deletew from '../../../../shared/icon-cancel.svg'
import upDate from '../../../../shared/pepicons-pop_arrow-spin.svg'
import remove from '../../../../shared/fluent_delete-12-regular.svg'

const Cart = () => {
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
	async function IncreasCart(id) {
		await IncreasFromCart(id)
		refetch()
	}
	async function DicreamentCart(id) {
		await DicreamentFromCart(id)
		refetch()
	}
	return (
		<section className='py-[20px] md:py-[60px] md:px-0 px-[20px] flex flex-col gap-[80px]'>
			<div className='flex items-center gap-[12px]'>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					Home
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					{' '}
					/{' '}
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#000000]'>
					Cart
				</p>
			</div>
			<div className='flex flex-col gap-[24px]'>
				<div className='hidden md:flex items-center justify-between'>
					<p className='text-[#00000099] text-[16px] w-[240px]'>Product</p>
					<p className='text-[#00000099] text-[16px] inline '>Price</p>
					<p className='text-[#00000099] text-[16px] inline '>Quantity</p>
					<p className='text-[#00000099] text-[16px] inline w-[125px]'>
						Subtotal
					</p>
				</div>
				<div className='w-[100%] flex flex-col gap-[8px]'>
					{data?.data[0]?.productsInCart.map(e => {
						return (
							<div
								style={{ boxShadow: '0px 2px 16px 0px #00000014' }}
								className='w-[100%] py-[20px] rounded-[4px] flex justify-between items-center px-[32px]'
								key={e.id}
							>
								<div className='flex flex-col md:flex-row w-[100px] md:w-[240px] md:items-center gap-0 md:gap-[20px]'>
									<img
										className='w-[54px] h-[54px]'
										src={`https://store-api.softclub.tj/images/${e.product.image}`}
										alt=''
									/>
									<p>{e.product.productName}</p>
									<p className='text-[16px] md:hidden font-[400]'>
										${e.product.price}
									</p>
								</div>
								<p className='text-[16px] md:inline hidden font-[400]'>
									${e.product.price}
								</p>
								<input
									value={e.quantity}
									onChange={ev => {
										if (ev.target.value > e.quantity) {
											IncreasFromCart(e.id)
										} else if (ev.target.value < e.quantity) {
											DicreamentCart(e.id)
										}
									}}
									type='number'
									className='px-[10px] outline-[#0000008d] border-[1.5px] w-[72px] h-[44px] rounded-[4px] md:inline hidden border-[#00000066]'
									id=''
								/>
								<div className='flex items-center gap-[10px] flex-col'>
									<input
										value={e.quantity}
										onChange={e2 => {
											if (e2.target.value > e.quantity) {
												IncreasCart(e.id)
											} else if (e2.target.value < e.quantity) {
												DicreamentFromCart(e.id)
											}
										}}
										type='number'
										className='px-[10px] outline-[#0000008d] border-[1.5px] w-[72px] h-[44px] rounded-[4px] md:hidden border-[#00000066]'
										id=''
									/>
									<div className='flex items-center gap-[10px] md:gap-[60px]'>
										<p className='text-[16px]  font-[600]'>
											${e.product.price * e.quantity}
										</p>
										<img
											src={deletew}
											onClick={() => deleteProduct(e.id)}
											alt=''
										/>
									</div>
								</div>
							</div>
						)
					})}
				</div>
				<div className='flex items-center pt-[20px] justify-between'>
					<button className='font-[500] text-[16px] px-[48px] py-[16px] border rounded-[4px] border-[#00000080] '>
						Return To Shop
					</button>
					<div className='flex items-center gap-[12px]'>
						<button
							onClick={refetch}
							className='hidden md:inline font-[500] text-[16px] px-[48px] py-[16px] border rounded-[4px] border-[#00000080] '
						>
							Update Cart
						</button>
						<img src={upDate} onClick={refetch} className='md:hidden' alt='' />
						<img
							src={remove}
							onClick={removeAllCart2}
							className='md:hidden'
							alt=''
						/>
						<button
							onClick={removeAllCart2}
							className='font-[500] text-[#DB4444] text-[16px] px-[48px] py-[16px] border rounded-[4px] border-[#DB4444] hidden md:inline'
						>
							Remove all
						</button>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-[40px] md:flex-row items-start justify-between'>
				<div className='flex w-[100%] items-center gap-[16px]'>
					<input
						type='text'
						placeholder='Coupon Code'
						className='border Roboto w-[80%] md:w-[300px] px-[20px] outline-none border-[#0000003B rounded-[4px] h-[56px] placeholder:text-[#00000099] placeholder:text-[16px]'
					/>
					<button
						onClick={removeAllCart2}
						className='font-[500] w-[30%] flex items-center justify-center md:w-[143px] text-[#DB4444] text-[16px] px-[48px] py-[16px] border rounded-[4px] border-[#DB4444]'
					>
						Apply
					</button>
				</div>
				<div className='border-[1.5px] w-[100%] md:w-[468px] border-black px-[22px] py-[20px] flex rounded-[4px] flex-col gap-[20px]'>
					<h2 className='text-[20px] font-[500]'>Cart Total</h2>
					<div className='flex items-center justify-between'>
						<p className='text-[16px] font-[400]'>Subtotal:</p>
						<p className='text-[16px] font-[400]'>
							${data?.data[0]?.totalPrice}
						</p>
					</div>
					<div className='flex items-center justify-between'>
						<p className='text-[16px] font-[400]'>Shipping:</p>
						<p className='text-[16px] font-[400]'>
							{data?.data[0]?.totalDiscountPrice == '0'
								? 'Free'
								: data?.data[0]?.totalDiscountPrice}
						</p>
					</div>
					<hr className='bg-[#000000]' />
					<div className='flex items-center justify-between'>
						<p className='font-[600] text-[24px]'>Total:</p>
						<p className='font-[600] text-[24px]'>
							${data?.data[0]?.totalPrice}
						</p>
					</div>
					<Link to={'/check-out'}>
						<button className='bg-[#DB4444] w-[276px] m-auto py-[16px] px-[48px] rounded-[4px] text-white text-[16px] font-[500]'>
							Procees to checkout
						</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Cart
