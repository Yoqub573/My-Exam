import React, { useState } from 'react'
import Button from '../../../widgets/Button'
import googleIco from '../../../shared/Icon-Google.svg'
import { useNavigate, Link } from 'react-router-dom'
import { useRegisterUserMutation } from '../../../features/reducers/userApi'

const SignUp = () => {
	const [name, setName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [registerUser] = useRegisterUserMutation()
	const navigate = useNavigate()

	const handleSignUp = () => {
		if (!name || !phoneNumber || !email || !password || !confirmPassword) {
			alert('Please fill in all fields')
			return
		}

		if (password !== confirmPassword) {
			alert('Passwords do not match')
			return
		}

		registerUser({
			userName: name,
			phoneNumber:phoneNumber,
			email:email,
			password:password,
			confirmPassword:confirmPassword,
		})
			.unwrap()
			.then(() => {
				navigate('/log-in')
				resetForm()
			})
			.catch(err => {
				console.error(err)
				alert('Registration failed')
			})
	}

	const resetForm = () => {
		setName('')
		setPhoneNumber('')
		setEmail('')
		setPassword('')
		setConfirmPassword('')
	}

	return (
		<section className='w-[100%] px-[20px] md:px-[0px] h-[800px] flex flex-col justify-center items-center'>
			<div className='flex flex-col w-[100%] gap-[48px] md:w-[420px]'>
				<div className='flex flex-col gap-[8px]'>
					<h2 className='text-[36px] font-[500] Inter'>Create an account</h2>
					<p className='text-[16px] font-[400] '>Enter your details below</p>
				</div>
				<div className='flex flex-col gap-[20px]'>
					<input
						required
						onChange={e => setName(e.target.value)}
						value={name}
						type='text'
						placeholder='User Name'
						className='border Roboto outline-none border-[#0000003B] px-[12px] rounded-[4px] h-[56px] placeholder:text-[#00000099]  placeholder:text-[16px]'
					/>
					<input
						required
						onChange={e => setPhoneNumber(e.target.value)}
						value={phoneNumber}
						type='tel'
						placeholder='Phone Number'
						className='border Roboto outline-none border-[#0000003B] px-[12px] rounded-[4px] h-[56px] placeholder:text-[#00000099]  placeholder:text-[16px]'
					/>
					<input
						required
						onChange={e => setEmail(e.target.value)}
						value={email}
						type='email'
						placeholder='Email'
						className='border Roboto outline-none border-[#0000003B] px-[12px] rounded-[4px] h-[56px] placeholder:text-[#00000099]  placeholder:text-[16px]'
					/>
					<input
						required
						onChange={e => setPassword(e.target.value)}
						value={password}
						type='password'
						placeholder='Password'
						className='border Roboto outline-none border-[#0000003B] px-[12px] rounded-[4px] h-[56px] placeholder:text-[#00000099]  placeholder:text-[16px]'
					/>
					<input
						required
						onChange={e => setConfirmPassword(e.target.value)}
						value={confirmPassword}
						type='password'
						placeholder='Confirm Password'
						className='border Roboto outline-none border-[#0000003B] px-[12px] rounded-[4px] h-[56px] placeholder:text-[#00000099]  placeholder:text-[16px]'
					/>
				</div>
				<div className='flex flex-col gap-[16px]'>
					<button
						onClick={handleSignUp}
						className='bg-[#DB4444] rounded-[4px] text-[16px] font-[500] w-[100%] px-[48px] py-[16px] text-white'
					>
						Create Account
					</button>
					<button className='w-[100%] justify-center rounded-[4px] py-[16px] border border-[#00000066] flex items-center gap-[16px]'>
						<img src={googleIco} alt='' />
						<p className='text-[16px] font-[400]'>Sign up with Google</p>
					</button>
					<div className='w-[100%] justify-center rounded-[4px] py-[16px] flex items-center gap-[16px]'>
						<p className='font-[400] text-[16px] text-[#0000008d]'>
							Already have account?
						</p>
						<Link to={'/log-in'}>
							<p className='text-[16px] border-b text-[#000000af] border-b-[#000000af] font-[500]'>
								Log in
							</p>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SignUp
