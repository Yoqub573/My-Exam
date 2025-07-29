import React from 'react'
import { Link } from 'react-router'

const Contact = () => {
	return (
		<div className='w-[100%] py-[60px] md:px-0 px-[20px] m-auto'>
			<div className='flex gap-2.5 my-7'>
				<Link>
					<p className='text-gray-500'>Home</p>
				</Link>
				<p>/</p>
				<p>Contact</p>
			</div>
			<div className='sm:flex justify-between mb-40 '>
				<div className='shadow-2xl px-10 py-7 rounded-xl sm:w-[30%]'>
					<div className='flex py-5 gap-2'>
						<svg	xmlns='http://www.w3.org/2000/svg'	width='40'	height='40'	viewBox='0 0 40 40'	fill='none'>
							<rect width='40' height='40' rx='20' fill='#DB4444' />
							<path
								d='M18.5542 14.24L15.1712 10.335C14.7812 9.88503 14.0662 9.88703 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0195 22.6566 23.0354C22.5567 23.0513 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8503 17.0052 17.619C16.9573 17.5298 16.9399 17.4273 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<h3 className='text-xl pt-3 font-medium'>Call To Us</h3>
					</div>
					<p>
						We are available 24/7, 7 days a week. <br /> <br />
						Phone: +8801611112222
					</p>
					<br />
					<hr />
					<br />
					<div className='flex py-5 gap-2'>
						<svg	xmlns='http://www.w3.org/2000/svg'	width='40'	height='40'	viewBox='0 0 40 40'	fill='none'>
							<rect width='40' height='40' rx='20' fill='#DB4444' />
							<path
								d='M10 13L20 20L30 13M10 27H30V13H10V27Z'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<h3 className='text-xl pt-3  font-medium'>Write To US</h3>
					</div>
					<p>Fill out our form and we will contact you within 24 hours. </p>
					<p className='py-2'>Emails: customer@exclusive.com</p>
					<p>Emails: support@exclusive.com</p>
				</div>
				<div className='shadow-2xl rounded-xl my-10 sm:my-0 sm:w-[68%] py-15 px-10'>
					<div className='flex flex-wrap gap-[20px] justify-between  '>
						<input
							type='text'
							placeholder='Name'
							className='py-3 md:w-[31.5%] pr-16 sm:pr-0 pl-3 border  border-gray-500 rounded-[7px]'
						/>
						<input
							type='text'
							placeholder='Email'
							className='py-3 md:w-[31.5%] pl-3 border border-gray-500  pr-16 sm:pr-0  rounded-[7px]'
						/>
						<input
							type='text'
							placeholder='Phone'
							className='py-3 md:w-[31.5%] pl-3 border border-gray-500  pr-16 sm:pr-0  rounded-[7px]'
						/>
					</div>
					<div className='my-10'>
						<input
							type='text'
							placeholder='Your massage'
							className='py-3 sm:pr-108  pb-44 w-[100%]  pl-3 border border-gray-500 pt-4  pr-16 rounded-[7px] '
						/>
					</div>
					<div className='text-white '>
						<center>
							<button className='bg-[#DB4444] px-10 py-4 rounded-xl'>
								Send Message
							</button>
						</center>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
