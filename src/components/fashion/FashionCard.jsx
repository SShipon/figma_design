import love from '../../assets/trevel/Ellipse-removebg-preview.png'
import keyborad from '../../assets/manStyle/keyboard.png'
import keyborad1 from '../../assets/manStyle/keyboard1.png'
import man from '../../assets/manStyle/man.png'
const FashionCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl flex flex-col md:flex-row gap-8">
      <div className="absolute left-[60%] top-10 transform -translate-x-1/2 md:left-[57%] md:top-16">
  <h2 className="text-4xl font-bold">
    Create <span className="text-gray-500">your</span> own style
  </h2>
</div>
 <div className="md:w-1/2 flex flex-col gap-4 pl-10 ">

          <img

            src={man}
            alt="Fashion"
            className="w-[500px] h-[500px]  shadow-md"
          />
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.
          </p>
          <button className="mt-4 w-[150px] h-[60px] bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800">
            Sign up
          </button>
        </div>


        <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left my-24 ">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border relative flex flex-col gap-4 mt-10">
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
          <div className="grid grid-cols-2 gap-4 mt-10">
            <img
              src={keyborad}
              alt="Keyboard and glasses"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src={keyborad1}
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
