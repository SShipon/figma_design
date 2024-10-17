import garden from "../../assets/green/BG.png";
import better from "../../assets/green/baner.png";
import top1 from '../../assets/green/top1.svg'
import top2 from '../../assets/green/top2.svg'
import top3 from '../../assets/green/top3.svg'
const Garden = () => {
  return (
  <div>
            <div className="flex">
      <div
        className="bg-no-repeat bg-cover bg-center w-[743px] h-[773px]"
        style={{
          backgroundImage: `url(${garden})`,
        }}
      >
        <div className="p-10">
          <h3 className="text-[56px] font-poppins font-semibold leading-[128.571%] tracking-[0.56px] text-[#333333]">
            Bring{" "}
            <span className="text-[56px] font-poppins font-semibold leading-[72px] tracking-[0.56px] text-[#437223]">
              GREEN
            </span>{" "}
            to your home and make you feel{" "}
            <span className="text-[56px] font-poppins font-semibold leading-[72px] tracking-[0.56px] text-[#437223]">
              BETTER
            </span>
          </h3>
          <p className="text-[24px] mt-8 font-poppins font-normal leading-[150%] text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Cursus imperdiet sed id <br /> elementum. Quam vel aliquam sit.
          </p>
          <div className="flex gap-12 mt-8">
            <div>
              <h3 className="text-[#333333] font-poppins font-semibold text-[22px] leading-normal underline underline-offset-8">
                124K+
              </h3>
              <p className="text-[#333333] font-poppins font-normal text-[14px] leading-normal  mt-2">
                Lorem ipsum <br />
                consectetur
              </p>
            </div>
            <div>
              <h3 className="text-[#333333] font-poppins font-semibold text-[22px] leading-normal underline underline-offset-8">
                126
              </h3>
              <p className="text-[#333333] font-poppins font-normal text-[14px] leading-normal mt-2">
                Lorem ipsum <br />
                consectetur
              </p>
            </div>
            <div>
              <h3 className="text-[#333333] font-poppins font-semibold text-[22px] leading-normal underline underline-offset-8">
                78K
              </h3>
              <p className="text-[#333333] font-poppins font-normal text-[14px] leading-normal mt-2">
                Lorem ipsum <br />
                consectetur
              </p>
            </div>
          </div>

          <div className="mt-16">
            <button className="flex items-start gap-[10px] p-[24px_56px] rounded-[40px] bg-[#437223] text-white">
              Find your plant
            </button>
          </div>
        </div>
      </div>

      <div>
            <img src={better} alt="" />  
        </div>


    </div>
         <div className="py-16 w-[95%] mx-auto">
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-evenly  gap-4 ">
             <div className="border border-[#D9D9D9] rounded-[16px] backdrop-blur-[16px] flex items-center gap-4 p-6">
                  <div>
                    <img className="w-[80px] h-[80px]" src={top1} alt="" />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus</p>
                  </div>
             </div>
             <div className="border border-[#D9D9D9] rounded-[16px] backdrop-blur-[16px] flex items-center gap-4 p-6">
                  <div>
                  <img className="w-[80px] h-[80px]" src={top2} alt="" />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus</p>
                  </div>
             </div>
             <div className="border border-[#D9D9D9] rounded-[16px] backdrop-blur-[16px] flex items-center gap-4 p-6">
                  <div>
                  <img className="w-[80px] h-[80px]" src={top3} alt="" />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus</p>
                  </div>
             </div>
             
         </div>
         </div>
   </div>
  );
};

export default Garden;
