import React from 'react'

const SectionHeader = ({ title , subtitle}) => {
  return (
    <div>
        <div className='flex items-center gap-4  mb-6'>
            <div className=' w-[20px] h-[40px] rounded bg-maroon '>

            </div>
            <div>
                <h3 className=' text-maroon text-[16px] font-semibold leading-5'>{title}</h3>
                
            </div>
        </div>
        <p className=' font-inter font-semibold text-[36px] leading-12 '>{subtitle}</p>
    </div>
  )
}

export default SectionHeader