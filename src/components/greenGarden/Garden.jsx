import garden from "../../assets/green/BG.png";
import better from "../../assets/green/baner.png";
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
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iure, velit nulla sequi blanditiis, asperiores deleniti voluptate commodi inventore debitis id omnis in esse totam aperiam? Sint, consequatur! Molestiae, eos dolore? Ex placeat sapiente voluptate saepe quas et perferendis vel?</p>
  </div>
  );
};

export default Garden;
