import React from 'react'

const Button = ({px,py,value}) => {
	return (
		<button className={`bg-[#DB4444] rounded-[4px] text-[16px] font-[500] px-[48px] py-[16px] text-white`}>
			{value}
		</button>
	)
}

export default Button