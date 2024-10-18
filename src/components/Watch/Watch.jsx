import clock from "../../assets/seven/icon/clock.svg";
import main from "../../assets/seven/unsplash_QRWAdBCqysc.png";
import star from "../../assets/seven/Star.svg";


import star1 from '../../assets/seven/icon/star.svg'
import eye from '../../assets/seven/icon/eye.svg'
import light from '../../assets/seven/icon/light.svg'
import world from '../../assets/seven/icon/world.svg'
const Watch = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col lg:flex-row  justify-between">
        <div className="">
          <div className="circle-text">
            <img src={clock} alt="Clock" />
          </div>
          <div className="space-y-4">
            <h3  className="text-[#050505] w-1/2 font-playfair text-4xl font-bold leading-[50px]">THE Watch with the newest microchip technology</h3>
            <p className="text-[#333] font-worksans  text-xl font-normal leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Faucibus in libero risus semper habitant arcu <br /> eget. Et integer facilisi eget diam.
            </p>
          </div>
          
          <div className="flex gap-2  mt-4">
            <div>
                <button className="text-white font-normal text-[18px] leading-[18px] bg-black px-8 py-4 rounded-xl">
                Order now
                </button>
            </div>
            <div>
                <button className="text-black border-2 border-black font-normal text-[18px] leading-[18px] bg-white px-8 py-4 rounded-xl">
                Explore more
                </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex border border-black rounded-3xl py-10 justify-around mt-10">
  <div className="flex flex-col items-start mb-6 md:mb-0">
    <img src={light} alt="" className="mb-4" />
    <p>Lorem ipsum <br /> dolor sit amet.</p>
  </div>
  <div className="flex flex-col items-start mb-6 md:mb-0">
    <img src={star1} alt="" className="mb-4" />
    <p>Lorem ipsum <br /> dolor sit amet.</p>
  </div>
  <div className="flex flex-col items-start mb-6 md:mb-0">
    <img src={eye} alt="" className="mb-4" />
    <p>Lorem ipsum <br /> dolor sit amet.</p>
  </div>
  <div className="flex flex-col items-start">
    <img src={world} alt="" className="mb-4" />
    <p>Lorem ipsum <br /> dolor sit amet.</p>
  </div>
</div>

        </div>

        <div className="">
          <div className="relative flex items-center justify-center w-80 h-96 mx-auto my-12 p-4">
            <div className="relative w-full h-full">
              <img
                src={main}
                alt="Product Image"
                className="w-full h-full object-cover rounded-2xl shadow-md absolute z-10"
              />

              <div className="before:absolute before:inset-[-35px] before:w-full before:h-[310px] before:border-black before:border-2 before:bg-white before:rounded-2xl before:shadow-md before:z-0"></div>

              <div className="after:absolute after:bottom-[-40px] after:left-32 after:w-[200px] after:h-[300px] after:border-black after:border-2 after:bg-white after:rounded-2xl after:z-0"></div>
            </div>

            <div className="absolute top-10 -right-4 bg-purple-600 text-white text-xs py-3 px-4 rounded-2xl z-20">
              Award winning product
            </div>

            <div className="absolute bottom-9 -left-4 bg-purple-600 text-white text-xs  py-3 px-4 rounded-2xl z-20">
              Ergonomic design
            </div>

            <div className="absolute top-[-40px] left-[-35px] w-16 h-16 flex items-center justify-center z-20">
              <img src={star} alt="" />
            </div>

            <div className="absolute bottom-12 right-16 text-white text-2xl z-20">
              <img className="h-14 w-14" src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
