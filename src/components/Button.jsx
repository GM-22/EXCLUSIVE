import React from 'react'

const Button = ({title}) => {
  return (
    <Button className="bg-maroon hover:bg-maroon text-white font-medium font-poppins text-[16px] leading-6 py-4 px-12 rounded">
        {title}
    </Button>
  )
}

export default Button