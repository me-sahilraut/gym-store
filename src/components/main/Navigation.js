import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navigation = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [offset, setOffset] = useState(0);


    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 1024;

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);
    var headerStyle;


    if (offset > 200) {

        headerStyle = " fixed top-0 z-10 w-full  fade-down ";

    }
    else {

    }


    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    return width > breakpoint ? (
        <div>  <div className={headerStyle}  >
            <div className='flex justify-between shadow-2xl bg-black z-10 ' data-aos="fade-down">
                <a href='#'><img src={logo} alt='' className='h-28 w-[13rem] my-2 md:ml-[3rem] ' /></a>
                <div className='text-center flex flex-col text-gray-200 my-auto'>

                    <ul className=' flex space-x-5 mr-[7rem] '>
                        <li className=' font-medium hover:underline hover:underline-offset-8 cursor-pointer  '> <Link to="/" className='text-gray-200 hover:text-[#C059C5]' >
                            Home
                        </Link>


                        </li>

                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                            <Link to="/shop" className="hover:text-[#AC75D2]" aria-current="page" >Shop</Link>
                        </li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer'>    <Link to='/about' className="hover:text-[#AC75D2]" aria-current="page" >About us</Link></li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                            <Link to="/contact" className='hover:text-[#AC75D2]'>Contact US</Link>  </li>
                        <li className='my-auto'>
                            <input
                                data-testid="search-input"
                                className="w-48 rounded-l-full rounded-r  border border-gray-400  p-2 bg-pink-100 "

                            />
                            <button
                                className="rounded-l rounded-r-full  border border-gray-400  p-2 hover:bg-gray-100 hover:text-black "

                            >
                                Search
                            </button>
                        </li>
                        <li>
                            <a href='#'><FaShoppingCart className="w-[1.5rem] h-[1.5rem] my-1 " /></a>

                        </li>
                        <li>
                            <a href='#'><FaUserCircle className="w-[1.5rem] h-[1.5rem] my-1 " /></a>

                        </li>

                    </ul>
                </div>



            </div>
        </div >

        </div>
    ) : (
        <div className='flex justify-between bg-black'>
            <div className='flex px-4 my-auto space-x-3'>
                <div className='hamburger'>
                    <GiHamburgerMenu className='inline w-[2rem] h-[3rem] my-2 text-white ' onClick={() => setIsOpen((prev) => !prev)}
                    />{isOpen && (
                        <div className=" absolute top-[3rem] flex flex-col items-start  p-2 w-[50%] rounded-md bg-black" onMouseLeave={() => setIsOpen(false)}>
                            <ul className='text-white space-y-8 mx-3'>
                                <Link to="/">  <li className='font-semibold  text-base'>Home</li></Link>
                                <Link to="/shop"> <li className='font-semibold  text-base'>Shop</li></Link>
                                <Link to="/about"> <li className='font-semibold  text-base'>About Us</li></Link>
                                <Link to="/contact"> <li className='font-semibold  text-base'>Contact Us</li></Link>
                            </ul>
                        </div>
                    )}
                </div>
                <img src={logo} alt='' className='h-19 w-[7rem] my-2 md:ml-[3rem] ' />

            </div>

            <div className='flex px-4 my-auto space-x-4'>
                <FaShoppingCart className="w-[1.5rem] h-[1.5rem] my-1 text-white" />
                <FaUserCircle className="w-[1.5rem] h-[1.5rem] my-1 text-white " />
            </div>

        </div>
    )
}

export default Navigation