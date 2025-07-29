import React, { useState } from 'react'
import { Collapse } from 'antd'
import { useParams } from 'react-router-dom'
import { Input, TextField } from '@mui/material'
import { useUserId } from '../protected/Layout/useUserId'
import user from '../../../shared/user.svg'
import {
	useGetUserInfoQuery,
	usePutUserProfilMutation,
} from '../../../features/reducers/userApi'

const Account = () => {
	let { id } = useParams()
	let { data, refetch } = useGetUserInfoQuery(id)
	let [putUserProfil] = usePutUserProfilMutation()
	const [selectedImageName, setSelectedImageName] = useState('')
	let profile = data?.data

	async function getFormData(event) {
		event.preventDefault()
		let target = event.target
		const update = new FormData()
		console.log(target['firstname'].value)

		update.append('firstName', target['firstname'].value)
		update.append('lastName', target['lastName'].value)
		update.append('email', target['email'].value)
		update.append('phoneNumber', target['phoneNumber'].value)
		update.append('dob', target['dob'].value)
		if (target['image'].files[0]) {
			update.append('image', target['image'].files[0])
		}
		refetch()
		await putUserProfil(update).unwrap()
		return update
	}

	const items = [
		{
			key: '1',
			label: <p className='font-[600] Inter text-[16px]'>Manage My Account</p>,
			children: (
				<div className='flex pl-[28px] flex-col gap-[10px]'>
					<p className='text-[#DB4444] font-[400] Inter'>My Profile</p>
					<p className='text-[#505050] hover:text-[#DB4444] font-[400] Inter'>
						Address Book
					</p>
					<p className='text-[#505050] hover:text-[#DB4444] font-[400] Inter'>
						My Payment Options
					</p>
				</div>
			),
		},
		{
			key: '2',
			label: <p className='font-[600] Inter text-[16px]'>My Orders</p>,
			children: (
				<div className='flex pl-[28px] flex-col gap-[10px]'>
					<p className='text-[#505050] hover:text-[#DB4444] font-[400] Inter'>
						My Returns
					</p>
					<p className='text-[#505050] hover:text-[#DB4444] font-[400] Inter'>
						My Cancellations
					</p>
				</div>
			),
		},
		{
			key: '3',
			label: <p className='font-[600] Inter text-[16px]'>My WishList</p>,
		},
	]
	return (
		<section className='flex flex-col gap-[40px] py-[30px] md:py-[60px]'>
			<div className='flex items-center gap-[12px]'>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					Home
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					{' '}
					/{' '}
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#000000]'>
					My Account
				</p>
			</div>
			<div className='flex flex-col md:flex-row items-start gap-[20px] md:gap-[107px]'>
				<div>
					<Collapse
						ghost
						defaultActiveKey={['1', '2', '3', '4', '5', '6']}
						expandIcon={() => null}
						items={items}
					/>
				</div>
				<div
					style={{ boxShadow: '0px 8px 24px 0px #00000029' }}
					className='h-[532px] p-[40px] w-[75%] rounded-[4px] flex flex-col gap-[52px]'
				>
					<p className='text-[#DB4444] text-[20px] font-[500]'>Profile</p>
					<form onSubmit={getFormData} className='flex flex-col gap-[22px]'>
						<div className='flex gap-[22px] items-center flex-wrap'>
							<Input
								type='file'
								name='image'
								accept='image/*'
								defaultValue={profile?.image}
								placeholder='Fail'
								className='w-full px-3 py-2 rounded border Inter outline-none border-[#0000003B]'
							/>
							<fieldset className='border w-[48.5%] border-[#0000003B] rounded'>
								<legend className='px-2 ml-2 block text-[12px] text-[#00000099] mb-1'>
									First name
								</legend>
								<input
									type='text'
									name='firstname'
									placeholder='Your firstName'
									className='w-full px-3 py-2 rounded outline-none'
									defaultValue={profile?.firstName}
								/>
							</fieldset>
							<fieldset className='border w-[48.5%] border-[#0000003B] rounded'>
								<legend className='px-2 ml-2 block text-[12px] text-[#00000099] mb-1'>
									Last name
								</legend>
								<input
									type='text'
									name='lastName'
									placeholder='Your firstName'
									className='w-full px-3 py-2 rounded outline-none'
									defaultValue={profile?.lastName}
								/>
							</fieldset>
							<fieldset className='border w-[48.5%] border-[#0000003B] rounded'>
								<legend className='px-2 ml-2 block text-[12px] text-[#00000099] mb-1'>
									Email address
								</legend>
								<input
									type='text'
									name='email'
									placeholder='Your firstName'
									className='w-full px-3 py-2 rounded outline-none'
									defaultValue={profile?.email}
								/>
							</fieldset>
							<fieldset className='border w-[48.5%] border-[#0000003B] rounded'>
								<legend className='px-2 ml-2 block text-[12px] text-[#00000099] mb-1'>
									Phone Number
								</legend>
								<input
									type='text'
									name='phoneNumber'
									placeholder='Your firstName'
									className='w-full px-3 py-2 rounded outline-none'
									defaultValue={profile?.phoneNumber}
								/>
							</fieldset>
							<fieldset className='border w-[100%] border-[#0000003B] rounded'>
								<legend className='px-2 ml-2 block text-[12px] text-[#00000099] mb-1'>
									Birth day
								</legend>
								<input
									type='date'
									placeholder='Your firstName'
									name='dob'
									className='w-full px-3 py-2 rounded outline-none'
									defaultValue={profile?.dob}
								/>
							</fieldset>
							<div className='w-[100%] flex justify-end items-center gap-[32px]'>
								<p className='text-[16px] font-[400] leading-[24px]'>Cancel</p>
								<button
									type='submit'
									className='bg-[#DB4444] px-[48px] py-[16px] rounded-[4px] text-[#FAFAFA] text-[16px] leading-[24px]'
								>
									Save Changes
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Account
