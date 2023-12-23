import React, { useState } from 'react';
import Pagination from '../sub/shop/Pagination'
import { shopData } from '../../mockData/shop/shopData';
import { sortList } from '../../mockData/shop/sortList';
const itemsPerPage = 6;
const Shop = () => {


    const [shopProductsData, setShopProductsData] = useState(shopData)


    const handelDefaultData = () => {
        setShopProductsData(shopData);
        setIsOpen(false);
    }

    const handelAscendingSortedData = () => {
        const sortedData = [...shopProductsData].sort((a, b) => {
            const rateA = parseFloat(a.rate.replace(/,/g, ''));
            const rateB = parseFloat(b.rate.replace(/,/g, ''));
            return rateA - rateB;
        });

        setShopProductsData(sortedData);
        setIsOpen(false);
    };

    const handelDescendingSortedData = () => {
        const sortedData = [...shopProductsData].sort((a, b) => {
            const rateA = parseFloat(a.rate.replace(/,/g, ''));
            const rateB = parseFloat(b.rate.replace(/,/g, ''));
            return rateB - rateA;
        });

        setShopProductsData(sortedData);
        setIsOpen(false);
    };


    const [isOpen, setIsOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);


    // Calculate the indexes of the items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const data = shopProductsData.slice(startIndex, endIndex);

    // if (endIndex > shopData.length) {
    //     console.log("yes we got error");
    // }

    // Handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };





    return (
        <div className='bg-[#f5f5f5]'>
            <div className='flex  lg:flex-row flex-col-reverse pt-[13rem] gap-7'>
                <div className='w-full lg:w-[29rem] h-[10rem] bg-white'>

                </div>
                <div className='w-full lg:w-[54rem]  bg-white'>
                    <div className='w-full px-[5rem] py-[5rem] space-y-5'>

                        <span className='text-gray-500 '>HOME/SHOP/page-{currentPage}</span>
                        <div className='flex flex-col sm:flex-row  justify-between space-y-5 sm:space-y-0'>
                            <span>Showing {startIndex + 1}-{endIndex > shopProductsData.length ? shopProductsData.length : endIndex} of {shopProductsData.length} result</span>
                            <div className='relative'>
                                <button name="sorting" placeholder='Sorting' className='border border-black px-[5rem]' onClick={() => setIsOpen((prev) => !prev)} >Sort</button>



                                {isOpen && (
                                    <div className="bg-white absolute top-7  flex flex-col items-start  p-2 w-full  shadow-lg" >
                                        <div
                                            className="flex w-full justify-between hover:bg-pink-50 cursor-pointer rounded-r-lg border-l-transparent"

                                        >

                                            <h3 className='font-bold text-lg' onClick={() => handelDefaultData()}>Default</h3>


                                        </div>

                                        <div
                                            className="flex w-full justify-between hover:bg-pink-50 cursor-pointer rounded-r-lg border-l-transparent"

                                        >

                                            <h3 className='font-bold text-lg' onClick={() => handelAscendingSortedData()}>Low To High</h3>


                                        </div>

                                        <div
                                            className="flex w-full justify-between hover:bg-pink-50 cursor-pointer rounded-r-lg border-l-transparent"

                                        >


                                            <h3 className='font-bold text-lg' onClick={() => handelDescendingSortedData()}> High To Low</h3>

                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center text-center" >

                            {data.map((val, i) => (
                                <Pagination key={i} src={val.img} type={val.type} title={val.title} rate={val.rate} />
                            ))}



                        </div>
                        <div className='space-x-5'>
                            <ul>
                                {Array.from({ length: Math.ceil(shopData.length / itemsPerPage) }).map((_, index) => (
                                    <button key={index} className='border border-black px-4 text-lg font-semibold' onClick={() => handlePageChange(index + 1)} >
                                        {index + 1}
                                    </button>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Shop