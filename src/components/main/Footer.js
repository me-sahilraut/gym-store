import React from 'react'
import logo from '../../assets/logo.jpeg'
const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='text-center'>


                <div className='flex flex-col '>
                    <div className='mx-auto '>
                        <img src={logo} alt='' className='h-[9rem] w-[12rem] my-5  object-contain ' />
                    </div>
                    <ul className=' flex flex-row mx-auto space-x-5  sm:space-x-12  '>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer '><a href="#Service">HOME</a></li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer '><a href="">SHOP</a></li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer '><a href="">ABOUT US</a></li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer '><a href="">CONTACT US</a></li>
                    </ul>

                    {/* <hr className='h-[1px] bg-black mb-10 border ' /> */}


                    <div className='flex text-white space-x-4 mx-auto my-6'>
                        <p>Privacy policy</p>
                        <p> Terms and condition</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer