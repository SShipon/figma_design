import backgroundImage from '../../assets/eight/right.png';

const Eight = () => {
    return (
        <div className="bg-custom-gradient h-screen relative">
            <div className="flex h-full">
                {/* Text Section */}
                <div className="flex flex-col items-start px-10 py-10 relative z-20 w-full pl-40">
                    <h3 className="text-[#363830] font-poppins font-bold text-[88px] mb-2">
                        Interior design
                    </h3>
                    <p className="text-[#363830] font-poppins text-[24px] font-normal leading-normal">
                        lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Faucibus in libero risus semper habitant arcu eget. <br /> Et integer facilisi eget.
                    </p>
                    <div className='mt-6'>
                        <button className="bg-black font-normal text-[18px] leading-[18px] text-white px-8 py-4 rounded-full">
                            Explore
                        </button>
                    </div>
                </div>

                {/* Background Image Section */}
                <div
                    className="bg-no-repeat bg-cover bg-center w-[537.395px] h-[512px] flex-shrink-0 z-10 "
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        position: 'absolute',
                        right: 15,
                    }}
                />
                
            </div>

        </div>
    );
};

export default Eight;
