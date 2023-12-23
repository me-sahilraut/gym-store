
import React, { useEffect, useState } from 'react'
import { data } from "../../../mockData/slideshowImg"
const Slideshow = () => {

    const [imageIndex, setImageIndex] = useState(0);
    const handelPrevImage = () => {
        if (imageIndex === 0) {
            setImageIndex(data.length - 1)
        } else {
            setImageIndex(imageIndex - 1);
        }
    }

    const handelNextImage = () => {
        setImageIndex((imageIndex + 1) % data.length);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handelNextImage()
        }, 4000);
        return () => {
            clearTimeout(timer);
        }
    }, [imageIndex]);
    return (
        <div className='flex justify-center space-x-5'>
            {/* <button className='font-bold text-lg' onClick={() => handelPrevImage()} >prev</button> */}
            <img src={data[imageIndex]} alt='slideshow ' className='w-full h-full object-contain' />
            {/* <button className='font-bold text-lg' onClick={() => handelNextImage()}>next</button> */}
        </div>
    )
}

export default Slideshow