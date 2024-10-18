import backgroundImage from "../../assets/eight/right.png";
import leftImage from "../../assets/eight/left.png";

const InteriorDesign = () => {
  return (
    <div className="bg-custom-gradient w-full lg:min-h-screen lg:relative lg:overflow-hidden">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[512px] h-full">
        {/* Text Section */}
        <div className="lg:absolute z-10">
          <h3 className="text-[#363830] font-poppins lg:relative lg:-right-36 font-bold text-[48px] lg:text-[88px] mb-4 ">
            Interior design
          </h3>
          <p className="text-[#363830] font-poppins text-[16px] lg:text-[24px] font-normal leading-normal mb-6 lg:relative lg:-right-36">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Faucibus in libero risus semper habitant arcu eget. <br /> Et
            integer facilisi eget.
          </p>
          <button className="bg-black font-normal lg:relative  lg:-right-36 text-[18px] leading-[18px] text-white px-8 py-4 rounded-full">
            Explore
          </button>
        </div>

        {/* Background Image Section */}
        <div
          className="w-[300px]  lg:w-[537.395px] absolute lg:absolute right-8 h-[300px] lg:h-[512px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[512px] h-full lg:p-8">
        <div
          className="w-[100%] h-[100%] lg:w-[462px]  lg:h-[508px] lg:relative -top-16 bg-cover bg-center"
          style={{
            backgroundImage: `url(${leftImage})`,
          }}
        />


        <div className="lg:w-[770px] lg:absolute lg:right-4 lg:px-4 py-20">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 rounded-[144px] backdrop-blur-[12px] p-10 gap-2"   style={{
    background: 'linear-gradient(96deg, rgba(255, 255, 255, 0.30) 6.59%, rgba(255, 255, 255, 0.18) 96.07%)',
  }}
>
            <div className="">
              <h3 className="text-[#333333] font-poppins font-semibold text-[22px] leading-normal underline underline-offset-8">
                5.8
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget.{" "}
              </p>
            </div>
            <div>
              <h3 className="text-[#333333] font-poppins font-semibold text-[22px] leading-normal underline underline-offset-8">
                99+
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget.{" "}
              </p>
            </div>
            <div>
              <h3 className="text-[#333333] font-poppins font-semibold text-[22px] leading-normal underline underline-offset-8">
                110K+
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;
