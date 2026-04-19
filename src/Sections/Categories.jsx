import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import LeftArrow from '../components/Icons/LeftArrow'
import RightArrow from '../components/Icons/RightArrow'
import phone from '../assets/Category-Phone.svg'
import computer from '../assets/computer.svg'
import smart from '../assets/smartwatch.svg'

const Categories = () => {
  return (
    <section>
        <Container>
            <div className='flex justify-between items-end mb-15'>
                <SectionHeader title="Categories" subtitle="Browse by category" />
                <div className='flex gap-2'>
                    <LeftArrow />
                    <RightArrow />
                </div>
            </div>
            <div>
                <ul className='flex gap-8.5'>
                    <li><img src={phone} alt="Phone" /></li>
                    <li><img src={computer} alt="Computer" /></li>
                    <li><img src={smart} alt="Smartwatch" /></li>
                </ul>
            </div>
        </Container>
    </section>
  )
}

export default Categories