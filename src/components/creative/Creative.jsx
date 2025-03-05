import laptop from "../../assets/creative/laptop.png";
import { PhoneData } from "../../lib/data";


const Creative = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 flex flex-col items-start">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Your <br /> Creative <br /> Design <br /> Collection
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg w-full">
            <img src={laptop} alt="Laptop Design" className="rounded-lg w-full" />
          </div>
          <p className="text-gray-600 mt-4 text-left">
            Lorem ipsum dolor sit amet elit, consectetur adipiscing elit cursus imperdiet elementum Quam aliquam. Quam vel aliquam sit vulputate.
          </p>
        </div>
        {PhoneData.map((item) => (
          <div key={item.id} className="text-left">
            <h3 className="text-lg mb-2">{item.title}</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-[700px] h-[500px]"
              />
            </div>
            <div className="flex items-start mt-4">
              <p className="text-2xl text-gray-400 font-bold">
                {item.id < 10 ? `0${item.id}` : item.id}
              </p>
              <p className="text-gray-600 ml-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Creative;
