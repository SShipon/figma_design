import love from '../../assets/trevel/Ellipse-removebg-preview.png'

const FashionCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl flex flex-col md:flex-row gap-8">

        <div className="md:w-1/2 flex flex-col gap-4">
          <img
            src="/fashion-image.jpg"
            alt="Fashion"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.
          </p>
          <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800">
            Sign up
          </button>
        </div>


        <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-3xl font-bold">
            Create <span className="text-gray-500">your</span> own style
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border relative flex flex-col gap-4">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-md border">
             <img className='w-[50px] h-[50px]'  src={love} alt="" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
              <div>
                <p className="text-lg font-bold">28K</p>
                <p className="text-sm text-gray-500">Lorem ipsum</p>
              </div>
              <div>
                <p className="text-lg font-bold">16K</p>
                <p className="text-sm text-gray-500">Lorem ipsum</p>
              </div>
              <div>
                <p className="text-lg font-bold">986</p>
                <p className="text-sm text-gray-500">Lorem ipsum</p>
              </div>
              <div>
                <p className="text-lg font-bold">35K+</p>
                <p className="text-sm text-gray-500">Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/keyboard-glasses.jpg"
              alt="Keyboard and glasses"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src="/sunglasses.jpg"
              alt="Sunglasses"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionCard;
