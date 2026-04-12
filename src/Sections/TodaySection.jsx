import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Container from '../components/Container'
import remote from '../assets/remote.png'
import HeartIcon from '../components/Icons/HeartIcon'
import EyeIcon from '../components/Icons/EyeIcon'

const TodaySection = () => {
  return (
    <section>
        <Container >
           <div className='mb-10'>
             <SectionHeader title="Today's" subtitle="Flash Sales" />
           </div>
           <div>
                <ProductCard />
           </div>
        </Container>

        
    </section>
  )
}
const ProductCard = () => {
  return (
    <div className=' w-[270px] h-[350px]  rounded-[4px]'>
        <div className='relative'>
            <img className=' ' src={remote} alt="Remote" />
            <div className=' text-white absolute top-3 left-3 bg-maroon px-3 py-1 rounded text-[12px] leading-4.5 '>- 40%</div>
            <div className='  absolute top-3 right-3 flex flex-col gap-2'>
                <div className='  size-6 bg-white border border-amber-400 rounded-full '>
                    <HeartIcon className=' bg-transparent'  />
                </div>
                
                <EyeIcon className=' size- bg-white rounded-full ' />
            </div>
        </div>
        <div>
            <h3>

            </h3>
            <p>
                <span></span>
                <del></del>
            </p>
            <div className=' flex'>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default TodaySection