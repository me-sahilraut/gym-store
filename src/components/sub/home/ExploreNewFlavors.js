import React from 'react'

const ExploreNewFlavors = (props) => {
    return (
        <div className="w-[20rem] border border-black shadow-lg  ">
            <img src={props.src} alt="" className="" />
            <span className="text-gray-400">{props.type}</span>
            <h1 className="font-bold uppercase text-lg">{props.title}</h1>
            <p className="font-bold">{props.rate}</p>
            <button className="bg-black text-white px-4 rounded-full text-lg uppercase flex  mx-auto space-x-3 mt-10 mb-5">
                <span className="my-auto">SELECT OPTIONS</span>
            </button>
        </div>
    )
}

export default ExploreNewFlavors