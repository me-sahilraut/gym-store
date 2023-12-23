import React from 'react'

const ShopByGoal = (props) => {
    return (

        <div className=" relative bg-black w-[26rem] h-[26rem]  object-contain border-2 border-black ' ">
            <img src={props.src} alt="" className="w-full h-full" />
            <div className=" text-lg font-bold absolute bottom-2 bg-black w-full text-white">
                <h1>{props.productName}</h1>
                <span>{props.quantity}</span>
            </div>
        </div>

    )
}

export default ShopByGoal