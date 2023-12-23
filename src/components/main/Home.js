import Slideshow from "../sub/home/Slideshow"

import { productData } from "../../mockData/mostSelledProductsData";
import MostSellProducts from "../sub/home/MostSellProducts";
import { shopData } from "../../mockData/shopByGoalData";
import ShopByGoal from "../sub/home/ShopByGoal";
import { newFlavorData } from "../../mockData/NewFlaoverData";
import ExploreNewFlavors from "../sub/home/ExploreNewFlavors";
import { useEffect, useState } from "react";
const Home = () => {
    const [dummyData, setDummyData] = useState([]);


    const fetchData = async () => {
        const data = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const jsonData = await data.json();
        console.log(jsonData)

        setDummyData(jsonData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <div className="box-border">
        <Slideshow />

        <div className="section-1 pt-24 bg-gray-200 flex flex-col flex-wrap items-center px-2  h-full ">
            <h1 className="text-4xl font-bold uppercase text-center">Most Sell Products</h1>
            <div className="w-full flex flex-wrap  md:flex-row flex-col justify-center md:gap-4 mx-auto px-[4.25rem] mb-[10rem] ">
                {
                    productData.map((data) => (
                        <MostSellProducts title={data.title} rate={data.rate} weight={data.weight} flavour={data.flavour} />
                    ))
                }

            </div>
        </div>

        <div className='flex flex-col lg:grid lg:grid-cols-2 lg:justify-between mt-[12rem]  mb-[8rem] mx-[5rem] space-x-5  space-y-7 lg:space-y-0' id='about-section'>
            <div className='space-y-7 ' >
                <h1 className="text-4xl font-bold uppercase ">Making Your Health Better</h1>
                <p className="text-lg font-medium leading-8 ">Hey FitFam! 💪 Ready to take your fitness journey to the next level. Welcome to <span className="text-red-700 font-bold text-lg">FEEL THE BURN</span>, your one-stop destination for premium gym proteins and fitness essentials!
                    Looking for delicious ways to incorporate protein into your routine? Drop by our store for a taste of our mouthwatering protein smoothies! Our team can whip up personalized blends to suit your taste buds and fitness goals.</p>
                <button className="bg-black text-white px-5 py-2 rounded-full text-lg uppercase flex     mb-5">
                    <span className="my-auto ">EXPLORE NOW</span>
                </button>
            </div>
            <div className="mx-auto " >
                <img src="https://c4.wallpaperflare.com/wallpaper/199/924/33/muscle-muscle-bodybuilding-press-wallpaper-preview.jpg" alt="about-img" className='lg:w-full lg:h-full mx-auto' />
            </div>

        </div>



        <div className="section-3  text-center space-y-7">
            <h1 className="text-4xl font-bold uppercase ">shop by goals</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                {
                    shopData.map((val) => (
                        <ShopByGoal src={val.img} productName={val.productName} quantity={val.numOfProduct} />
                    ))
                }

            </div>
        </div>

        <div className="section-4 mt-[12rem] mb-[8rem] space-y-7">
            <h1 className="text-4xl font-bold uppercase text-center">EXPLORE NEW FLAVORS</h1>
            <div className="flex flex-wrap gap-4 justify-center  text-center">
                {
                    newFlavorData.map((val) => (
                        <ExploreNewFlavors src={val.image} type={val.type} title={val.title} rate={val.rate} />
                    ))
                }

            </div>
            <button className="bg-black text-white px-4 rounded-full text-lg uppercase flex  mx-auto space-x-3 mt-10 mb-5">
                <span className="my-auto">View All</span>
            </button>

        </div>

    </div>
}

export default Home