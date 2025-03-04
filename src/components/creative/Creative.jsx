
import laptop from '../../assets/creative/laptop.png'
import phone from '../../assets/creative/phone.png'
import phone1 from '../../assets/creative/phone1.png'
const Creative = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 flex flex-col items-start">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Your <br /> Creative <br /> Design <br /> Collection
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg w-full">
            <img
              src={laptop}
              alt="Laptop Design"
              className="rounded-lg w-full"
            />
          </div>
          <p className="text-gray-600 mt-4 text-left">
            Lorem ipsum dolor sit amet elit, consectetur adipiscing elit cursus
            imperdiet elementum Quam aliquam. Quam vel aliquam sit vulputate.
            imperdiet elementum Quam aliquam. Quam vel aliquam sit
          </p>
        </div>
        <div className="text-left">
          <h3 className="text-lg  mb-2">Creative</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              src={phone1}
              alt="Creative Design"
              className="rounded-lg w-[700px] h-[500px]"
            />
          </div>
          <div className="flex items-start mt-4">
            <p className="text-2xl text-gray-400 font-bold">01</p>
            <p className="text-gray-600 ml-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              sed id elementum. Quam vel aliquam sit vulputate.
            </p>
          </div>
        </div>
        <div className="text-left">
          <h3 className="text-lg  mb-2">Design</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              src={phone}
              alt="Design Showcase"
                className="rounded-lg w-[700px] h-[500px]"
            />
          </div>
          <div className="flex items-start mt-4">
            <p className="text-2xl text-gray-400 font-bold">02</p>
            <p className="text-gray-600 ml-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              sed id elementum. Quam vel aliquam sit vulputate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
