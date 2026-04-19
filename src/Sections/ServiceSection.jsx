import React from 'react'
import Container from '../components/Container'
import truck from '../assets/truck.svg'
import headPhone from '../assets/headPhone.svg'
import guarantee from '../assets/guarantee.svg'   
const ServiceSection = () => {
  return (
    <section>
        <Container>
            <div className=' py-[140px] px-[114px]  flex justify-between items-center '>
                <Card img={truck} title='FREE AND FAST DELIVERY' para='Free delivery for all orders over $140' />
                <Card img={headPhone} title='24/7 CUSTOMER SERVICE' para='Friendly 24/7 customer support' />
                <Card img={guarantee} title='MONEY BACK GUARANTEE' para='We reurn money within 30 days' />
            </div>
        </Container>
    </section>
  )
}
const Card =({img, title,para}) => {
    return (
        <div className=' text-center items-center  '>   
            <img src={img} alt={title} className='mx-auto mb-6' />
            <h3 className=' font-poppins font-semibold text-[20px] leading-7 '>{title}</h3>
            <p className='font-poppins font-normal text-[14px] leading-5'>{para}</p>  

        </div>
    )
}
export default ServiceSection