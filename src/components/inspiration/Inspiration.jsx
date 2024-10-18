import hero from "../../assets/fore/hero Image (1).png";
const Inspiration = () => {
  return (
    <section className="py-5">

    <div className="grid grid-cols-12 gap-2  px-5">
      <div className="lg:col-span-6 md:col-span-6 col-span-12">
        <h2 className="text-[#252525] font-avenir text-[48px] font-extrabold leading-[80px]"
        >Just that simple</h2>
      </div>

      <div className="lg:col-span-6 md:col-span-6 col-span-12">
        <p className="text-[rgba(37,37,37,0.8)] font-avenir text-[26px] font-normal leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.</p>
        <div className="mt-4">
        <button className="text-white font-normal text-[18px] leading-[18px] bg-black px-4 py-2 rounded-xl">
          Explore
        </button>
        </div>
      </div>

      <div className="col-span-12 ">
      
        <img className="w-full" src={hero} alt="" />
      </div>
    </div>

   
  </section>

  );
};

export default Inspiration;
