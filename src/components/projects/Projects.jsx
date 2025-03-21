import { products } from "../../lib/data";
const Projects = () => {
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

export default Projects;
