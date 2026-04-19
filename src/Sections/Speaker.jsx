import React from 'react'
import Container from '../components/Container'
import box from '../assets/BoxBg.png'
import { Link } from 'react-router'

const Speaker = () => {
  return (
    <section className='mt-[140px] mb-[70px]'>
        <Container>
            <div className='relative'>
                <Link to='/speaker' className=''>
                    <img  src={box} alt="Box Background" />
                </Link>
                
                <div className='flex gap-6 absolute top-[55%] left-[5%] z-10'>
                    <div className=' size-15.5 p-3.5 text-center rounded-full bg-white '>
                        <h3 className=' font-poppins font-semibold text-[16px] leading-5 '>05</h3>
                        <p className='font-poppins font-normal text-[11px] leading-4.5'>Days</p>
                    </div>
                    <div className=' size-15.5 p-3.5 text-center rounded-full bg-white '>
                        <h3 className=' font-poppins font-semibold text-[16px] leading-5 '>23</h3>
                        <p className='font-poppins font-normal text-[11px] leading-4.5'>Hours</p>
                    </div>
                    <div className=' size-15.5 pt-3.5 text-center rounded-full bg-white '>
                        <h3 className=' font-poppins font-semibold text-[16px] leading-5 '>59</h3>
                        <p className='font-poppins font-normal text-[11px] leading-4.5'>Minutes</p>
                    </div>
                    <div className=' size-15.5 pt-3.5 text-center rounded-full bg-white '>
                        <h3 className=' font-poppins font-semibold text-[16px] leading-5 '>35</h3>
                        <p className='font-poppins font-normal text-[11px] leading-4.5'>Seconds</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Speaker