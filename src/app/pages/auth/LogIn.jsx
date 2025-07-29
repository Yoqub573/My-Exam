import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../../../features/reducers/userApi'

const SignUp = () => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const [loginUser] = useLoginUserMutation()
	useEffect(() => {
		if (localStorage.getItem('access_token')) {
			navigate('/')
		}
	}, [navigate])

	const handleLogin = async () => {
		try {
			let { data } = await loginUser({
				userName: name,
				password: password,
			}).unwrap()
			localStorage.setItem('access_token', data)
			localStorage.setItem('wishList', JSON.stringify([]))
			navigate('/')
			setName('')
			setPassword('')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<section className='w-full h-[500px] flex flex-col px-[20px] md:px-[0px] justify-center items-center'>
			<div className='flex flex-col w-full gap-[48px] md:w-[420px]'>
				<div className='flex flex-col gap-[8px]'>
					<h2 className='text-[36px] font-[500] Inter'>Log in to Exclusive</h2>
					<p className='text-[16px] font-[400] '>Enter your details below</p>
				</div>
				<div className='flex flex-col gap-[20px]'>
					<input
						required
						onChange={e => setName(e.target.value)}
						value={name}
						type='Name'
						placeholder='Your Name'
						className='border Roboto outline-none border-[#0000003B] px-[12px] rounded-[4px] h-[56px] placeholder:text-[#00000099] placeholder:text-[16px]'
					/>
					<input
						required
						onChange={e => setPassword(e.target.value)}
						value={password}
						type='password'
						placeholder='Password'
						className='border Roboto outline-none border-[#0000003B] px-[12px] rounded-[4px] h-[56px] placeholder:text-[#00000099] placeholder:text-[16px]'
					/>
				</div>
				<button
					onClick={handleLogin}
					className='bg-[#DB4444] rounded-[4px] text-[16px] font-[500] w-full px-[48px] py-[16px] text-white'
				>
					Log In
				</button>
			</div>
		</section>
	)
}

export default SignUp
