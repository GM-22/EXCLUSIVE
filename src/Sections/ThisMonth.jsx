import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { ProductCard } from './TodaySection'
// import remote from '../assets/remote.png'

const ThisMonth = () => {
  return (
    <section>
        <Container>
            <div className='flex justify-between items-end mb-15'>
                <SectionHeader title="This Month" subtitle="Best Selling Products" />
                <Button title="View All " />
            </div>
            <div>
                <ul>
                    <li><ProductCard title="HAVIT HV-G92 Gamepad" price="$120" originalPrice="$160" review="(88)" /></li>
                    <li><ProductCard title="HAVIT HV-G92 Gamepad" price="$120" originalPrice="$160" review="(88)" /></li>
                    <li><ProductCard title="HAVIT HV-G92 Gamepad" price="$120" originalPrice="$160" review="(88)" /></li>
                    <li><ProductCard title="HAVIT HV-G92 Gamepad" price="$120" originalPrice="$160" review="(88)" /></li>
                </ul>
            </div>
        </Container>
    </section>
  )
}

export default ThisMonth