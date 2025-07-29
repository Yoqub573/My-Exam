import React from 'react'

const About = () => {
  return (
    <div className='w-[90%] m-auto'>
      <div className='flex items-center mt-[20px] md:my-20 gap-[12px]'>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					Home
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#5c5c5c]'>
					{' '}
					/{' '}
				</p>
				<p className='text-[16px] md:text-[14px] font-[400] text-[#000000]'>
					About
				</p>
			</div>
      <div className='flex flex-col-reverse items-center justify-between my-20 sm:flex-row'>
        <div className='sm:w-[40%]'>
          <h2 className='font-bold text-5xl'>Our Story</h2>
          <p className='font-medium'>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 20,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
            <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src='/src/shared/Side Image (1).svg' alt='' />
      </div>
      <div className='flex flex-col sm:flex-row gap-[10px] md:gap-0 justify-between items-center'>
        <img className='md:w-[24%]' src='/src/shared/Frame 870.svg' alt='' />
        <img className='md:w-[26%]' src='/src/shared/Frame 871.svg' alt='' />
        <img className='md:w-[24%]' src='/src/shared/Frame 872.svg' alt='' />
        <img className='md:w-[24%]' src='/src/shared/Frame 873.svg' alt='' />
      </div>
      <div className="sm:flex md:gap-0 gap-2.5 justify-between my-20">
        <div className="md:w-[32%]">
          <img src="/src/shared/Frame 874.svg" alt="" />
          <h2 className='text-3xl font-bold'>Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <img src="/src/shared/Frame 881.svg" alt="" />
        </div>
        <div className="md:w-[32%]">
          <img src="/src/shared/Frame 875.svg" alt="" />
          <h2 className='text-3xl font-bold'>Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <img src="/src/shared/Frame 881.svg" alt="" />
        </div>
        <div className="md:w-[32%]">
          <img src="/src/shared/Frame 876.svg" alt="" />
          <h2 className='text-3xl font-bold'>Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <img src="/src/shared/Frame 881.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row my-20 justify-between items-center">
        <img src="/src/shared/Frame 701.svg" className='my-5' alt="" />
        <img src="/src/shared/Frame 702.svg" className='my-5' alt="" />
        <img src="/src/shared/Frame 703.svg" className='my-5' alt="" />
      </div>
      
    </div>
  )
}

export default About