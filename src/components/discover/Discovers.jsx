import { discoversData } from "../../lib/data";
import Discover from "./Discover";


const Discovers  = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center flex-col">
        <h3 className="text-center text-[#252525] font-extrabold text-6xl leading-[80px]">
          Discover the beauty <br />
          around the world
        </h3>
        <p className="text-[rgba(37,37,37,0.8)] text-center font-normal text-[26px] leading-normal w-2/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget diam.
        </p>
        <div className="mt-4">
        <button className="text-white font-normal text-[18px] leading-[18px] bg-blue-500 px-4 py-2 rounded">
          Explore
        </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {discoversData.map((one) => (
          <Discover key={one.id} one={one}></Discover>
        ))}
      </div>
    </div>
  );
};

export default Discovers ;
