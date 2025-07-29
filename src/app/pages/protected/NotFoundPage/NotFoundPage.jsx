import React from 'react'
import Button from '../../../../widgets/Button'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<section className='flex items-center flex-col gap-[80px] justify-center h-[615px] w-[100%]'>
			<div className='flex flex-col gap-[40px] items-center'>
				<h3 className='text-[110px]  leading-[115px] font-[500] Inter'>
					404 Not Found
				</h3>
				<p className='text-[16px] leading-[24px] font-[400]'>
					Your visited page not found. You may go home page.
				</p>
			</div>
			<Link to={'/'}>
				<Button value={'Back to home page'} />
			</Link>
		</section>
	)
}

export default NotFoundPage
