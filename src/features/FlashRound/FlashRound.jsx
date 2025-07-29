import React, { useState, useEffect } from 'react'

const FlashRound = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 3,
		hours: 23,
		minutes: 19,
		seconds: 56,
	})

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prevTime => {
				const { days, hours, minutes, seconds } = prevTime

				if (seconds > 0) {
					return { ...prevTime, seconds: seconds - 1 }
				}

				if (minutes > 0) {
					return { ...prevTime, minutes: minutes - 1, seconds: 59 }
				}

				if (hours > 0) {
					return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 }
				}

				if (days > 0) {
					return {
						...prevTime,
						days: days - 1,
						hours: 23,
						minutes: 59,
						seconds: 59,
					}
				}

				clearInterval(timer)
				return prevTime
			})
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	const formatTime = time => {
		return time < 10 ? `0${time}` : time
	}

	return (
		<div>
			<div className='py-[40px] sm:flex gap-10 items-center '>
				<div className='text-left mb-3 '></div>
				<div className='flex gap-5 items-center '>
					<div className='w-[62px] h-[62px] flex items-center justify-center flex-col bg-white px-7 py-5 rounded-full'>
						<span className='block text-[20px] leading-5.5  font-[600] text-[#000000]'>
							{formatTime(timeLeft.hours)}
						</span>
					<span className='text-[11px] font-[400] text-[#000000]'>Hours</span>
					</div>
					<div className='w-[62px] h-[62px] flex items-center justify-center flex-col bg-white px-7 py-5 rounded-full'>
						<span className='block text-[20px] leading-5.5  font-[600] text-[#000000]'>
							{formatTime(timeLeft.days)}
						</span>
					<span className='text-[11px] font-[400] text-[#000000]'>Days</span>
					</div>
					<div className='w-[62px] h-[62px] flex items-center justify-center flex-col bg-white px-7 py-5 rounded-full'>
						<span className='block text-[20px] leading-5.5  font-[600] text-[#000000]'>
							{formatTime(timeLeft.minutes)}
						</span>
					<span className='text-[11px] font-[400] text-[#000000]'>Minutes</span>
					</div>
					<div className='w-[62px] h-[62px] flex items-center justify-center flex-col bg-white px-7 py-5 rounded-full'>
						<span className='block text-[20px] leading-5.5  font-[600] text-[#000000]'>
							{formatTime(timeLeft.seconds)}
						</span>
					<span className='text-[11px] font-[400] text-[#000000]'>Seconds</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FlashRound
