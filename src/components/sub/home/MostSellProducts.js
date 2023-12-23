import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
const MostSellProducts = (props) => {
    return (

        <div className="w-full md:w-[24rem] h-full bg-white mt-10 border border-black shadow-xl drop-shadow   " >
            <div className="bg-[#003459] text-center">
                <h1 className="text-white text-2xl font-bold py-4">{props.title}</h1>

            </div>
            <div className="text-center">
                <h1><span className="text-5xl font-bold ">{props.rate}</span></h1>
                <span className="font-bold">{props.weight}</span>
            </div>

            <ul className="space-y-5 mt-5 mb-5 ">
                <li className="flex justify-center font-bold"><FaArrowAltCircleRight className="w-[1rem] h-full my-auto mx-2" />{props.flavour[0]}</li>
                <li className="flex justify-center font-bold"><FaArrowAltCircleRight className="w-[1rem]  h-full] my-auto mx-2" />{props.flavour[1]}</li>
                <li className="flex justify-center font-bold  "><FaArrowAltCircleRight className="w-[1rem]  h-full my-auto mx-2" />{props.flavour[2]}</li>
            </ul>
            <div>
                <button className="bg-black text-white px-4 rounded-full text-lg uppercase flex  mx-auto space-x-3 mt-10 mb-5">
                    <FaShoppingCart className="w-[1rem] h-[1rem] my-[0.7rem]   " /><span className="my-auto">Add To Cart</span>
                </button>
            </div>
        </div>





    )
}

export default MostSellProducts