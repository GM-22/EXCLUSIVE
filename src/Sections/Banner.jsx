import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router'
import banner from '../assets/e_banner.jpg'   
import { ChevronRight } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid';

const menus = [
    {
        id : uuidv4(),
        name : "Woman’s Fashion",
        submenus : [
            {
                id : uuidv4(),
                name : "Clothing"
            }
         ]
    },
    {
        id : uuidv4(),
        name : "Men’s Fashion",
        submenus : [ 
            {
                id : uuidv4(),
                name : "Mens Clothing"
            }
        ]
    },
    {
        id : uuidv4(),
        name : "Electronics",
        submenus : [ ]
    },
    {
        id : uuidv4(),
        name : "Home & Lifestyle", 
        submenus : [ ]
    },
    {
        id : uuidv4(),
        name : "Medicine",  
        submenus : [ ]
    },
    {
        id : uuidv4()   , 
        name : "Sports & Outdoor",
        submenus : [ ]
    },
    {
        id : uuidv4(),
        name : "Baby’s & Toys",
        submenus : [ ]
    },
    {
        id : uuidv4(),
        name : "Groceries &  ",
        submenus : [ ]
    },
    {
        id : uuidv4(),
        name : "Health & Beauty",
        submenus : [ ]
    },

    

]
const Banner = () => {
  return (
    <section className=' mb-[165px]'>
        <Container>
            <div className=' flex '>
                <div className=' flex flex-col pt-10 gap-4 w-[208px] '>
                    {menus.map((menu) => (
                        <li className='list-none text-[16px] leading-6 flex justify-between' key={menu.id}>{menu.name}
                         <Link to="/shop" >
                            {
                                menu.submenus.length > 0 && (
                                    <span><ChevronRight /></span>
                                )
                            }
                        </Link>
                        </li> 
                    ))}
               
                </div>
                 <div className=" ml-[16px] mr-[45px]  h-ful bg-black30 w-[1px] "> </div>
                <div className='pt-10'>
                    <Link to="/shop"><img src={banner} alt="Banner" /></Link>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Banner