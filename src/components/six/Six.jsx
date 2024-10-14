import image1 from "../../assets/six/Frame 14165 (1).png";
import image2 from "../../assets/six/Frame 14165 (2).png";
import image3 from "../../assets/six/Frame 14165.png";

const products = [
  {
    id: 1,
    count: "01",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
    img: image1,
  },
  {
    id: 2,
    count: "02",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
    img: image2,
  },
  {
    id: 3,
    count: "03",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
    img: image3,
  },
];

const Six = () => {
  return (
    <div>
       <h2 className="text-[#252525] mx-4 w-1/2 font-avenir text-[88px] font-extrabold leading-[104px]"
       >Projects and practice</h2>
          <div className="flex flex-wrap justify-center gap-8 p-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col  bg-white  w-[360px] h-[450px] transition-transform transform hover:scale-105"
        >
           <div className="space-y-4">
           <h3 className="text-[rgba(37,37,37,0.55)] font-avenir text-[32px] font-extrabold"
           >{product.count}</h3>
          <p className="text-[rgba(37,37,37,0.8)] font-avenir text-[22px] font-normal"
          >{product.title}</p>
           </div>
            <div className="mt-4">
            <img
            src={product.img}
            alt={`product-${product.count}`}
            className="w-full h-56 object-cover mb-4 rounded-lg"
          />
            </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Six;
