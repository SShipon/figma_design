import shapeWave from "../../assets/tow/shape wave.png"
import image1 from "../../assets/tow/Frame 14178.png"
import dawn from "../../assets/tow/Dawn.png"
import dawn1 from "../../assets/tow/Dawn (1).png"
import image2 from "../../assets/tow/Frame 14176.png"
import userImage from "../../assets/tow/Ellipse 2.png"
import spiral from "../../assets/tow/Spiral 3.png"

const Tows = () => {
    return (
       <section className="my-20">
             <div className="min-h-screen relative  w-[100%] mx-auto:">
            <img src={dawn1} className="md:block hidden absolute right-[527px] z-50 top-[258px]" alt="" />
            {/* Upper */}
            <div className="md:grid md:grid-cols-12">
                <div className="col-span-6">
                    <div className=" md:flex mb-4 ">
                        <div className="col-span-3 " >
                            <h1 className=" text-6xl font-bold text-gray-900 mb-6">
                                Discover. <br />
                                Explore. <br />
                                Inspire.
                            </h1>
                        </div>
                        <div className="gap-4 hidden md:block col-span-3 order-2 sm:order-2  ">
                            <img className="w-[280px] md:absolute md:right-[540px] md:top-[50px]" src={shapeWave} alt="" />
                        </div>

                    </div>
                    {/* latter class  */}

                    <div className=" order-1  sm:order-1">
                        <p className="text-gray-600 text-lg mt10 mb-10 w-[375px]  ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
                            Et integer facilisi eget diam.
                        </p>
                        <button className="w-32 px-8 py-2     text-xl bg-black text-white rounded-full">
                            Explore
                        </button>
                        <div className="gap-4 mt-5 md:hidden col-span-3 order-2 sm:order-2  ">
                            <img className="w-[280px] md:absolute md:right-[540px] md:top-[50px]" src={shapeWave} alt="" />
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3 gap-4 my-5 md:my-0" >
                    <img className="  md:absolute right-[332px] top-[210px]" src={image1} alt="" />
                </div>

                <div className=" md:col-span-3">
                    <img className=" md:absolute right-[0px] top-[50px] " src={image1} alt="" />
                </div>

            </div>
            {/* Lower */}
            <div className="md:grid md:grid-cols-12">
                <div className="md:col-span-6 md:flex">
                    <div className="">
                        <img className=" md:my-0 my-5    md:absolute md:left-[38px] md:top-[555px] md:flex flex-col justify-center items-center" src={spiral} alt="" />
                    </div>
                    <div>
                        <img className=" md:absolute md:left-[225px] md:top-[400px]" src={image2} alt="" />
                    </div>
                </div>
                <div className="md:col-span-6 md:flex md:flex-col md:absolute right-[0px] top-[557px] ">
                    <div className="md:flex md:justify-end   ">
                        <img className="w-[220px] p-5  " src={dawn} alt="" />
                    </div>
                    <div className="flex items-center gap-4  ">
                        <img src={userImage} className="w-16 h-16 rounded-full" alt="" />
                        <p className="text-gray-600 w-60  md:w-[552px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
                            Et integer facilisi eget diam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
       </section>
    );
};

export default Tows;