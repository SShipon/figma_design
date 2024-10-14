import leftImg from "../../assets/there/Image left (2).png";
import rightImg from "../../assets/there/Image right (1).png";
import img1 from "../../assets/there/5 (3).png";
import img2 from "../../assets/there/5 (4).png";
import img3 from "../../assets/there/5 (5).png";
const There = () => {
  return (
    <div className="my-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 gap-y-10 items-center">
        <div>
          <h3 className="text-[#252525] font-avenir text-[56px] font-extrabold leading-[80px]">
            Discover the beauty around the world
          </h3>
          <p className="text-[rgba(37,37,37,0.8)] font-avenir text-[26px] font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu.
          </p>
          <div className="mt-4">
            <button className="text-white font-normal text-[18px] leading-[18px] bg-black px-4 py-2 rounded">
              Explore
            </button>
          </div>
        </div>
        
        <div className="relative lg:-top-20 top-0">
          <img src={leftImg} alt="Left Image" />
        </div>

        <div>
          <img src={rightImg} alt="Right Image" />
        </div>

        <div>
          <img src={img1} alt="Image 1" />
        </div>
        <div>
          <img src={img2} alt="Image 2" />
        </div>
        <div>
          <img src={img3} alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default There;
