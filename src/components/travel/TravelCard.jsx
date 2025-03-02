import ellapsImg from '../../assets/trevel/Ellipse-removebg-preview.png'

const TravelCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Left Section (40%) */}
        <div className=" p-6 rounded-lg shadow-md border relative md:w-2/5 my-8">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-md border">
            <img className='w-[100px] h-[100px]' src={ellapsImg} alt="" />
          </div>
          <p className="text-gray-700 mt-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-16 ">
            <div>
              <p className="text-lg font-bold">25K</p>
              <p className="text-sm text-gray-500">Lorem ipsum <br /> dolor sit amet </p>
            </div>
            <div>
              <p className="text-lg font-bold">12K</p>
              <p className="text-sm text-gray-500">Lorem ipsum <br /> dolor sit amet </p>
            </div>
            <div>
              <p className="text-lg font-bold">187</p>
              <p className="text-sm text-gray-500">Lorem ipsum <br /> dolor  sit amet </p>
            </div>
            <div>
              <p className="text-lg font-bold">10.9K</p>
              <p className="text-sm text-gray-500">Lorem ipsum <br /> dolor sit amet </p>
            </div>
          </div>
        </div>

        {/* Right Section (60%) */}
        <div className="md:w-3/5 text-center md:text-left ">
          <h2 className="text-3xl font-bold ">Travel to see the world different</h2>
          <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
