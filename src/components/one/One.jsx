import Ones from "./Ones";
import img1 from "../../assets/one/3.png";
import img2 from "../../assets/one/4.png";
import img3 from "../../assets/one/Rectangle 3 (1).png";
import img4 from "../../assets/one/Rectangle 3 (2).png";
import img5 from "../../assets/one/Rectangle 3.png";
import img6 from "../../assets/one/Rectangle 4 (1).png";
import img7 from "../../assets/one/Rectangle 4 (2).png";
import img8 from "../../assets/one/Rectangle 4.png";

const oneData = [
  {
    id: 1,
    name: "Product A",
    img: img1,
  },
  {
    id: 2,
    name: "Product B",
    img: img2,
  },
  {
    id: 3,
    name: "Product C",
    img: img3,
  },
  {
    id: 4,
    name: "Product C",
    img: img4,
  },
  {
    id: 5,
    name: "Product C",
    img: img5,
  },
  {
    id: 6,
    name: "Product C",
    img: img6,
  },
  {
    id: 7,
    name: "Product C",
    img: img7,
  },
  {
    id: 8,
    name: "Product C",
    img: img8,
  },
];

const One = () => {
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
        {oneData.map((one) => (
          <Ones key={one.id} one={one}></Ones>
        ))}
      </div>
    </div>
  );
};

export default One;
