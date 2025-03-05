import womenn from '../../assets/img/women1 (1).png'
import star from '../../assets/img/star.png'
import { stats } from '../../lib/data';
const Delightful = () => {
  return (
    <div className="bg-[#F8EFD4] min-h-screen flex flex-col items-center px-4 md:px-10 py-10 relative">
      <div className="absolute top-6 left-24  text-4xl">
        <img src={star} alt="" className='w-[60px] h-[60px]' />
      </div>

      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="border-2 border-black p-6 rounded-lg relative z-10 bg-white">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
              We create <br /> delightful designs
            </h2>
            <p className="text-gray-700 mt-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              Faucibus nec gravida ipsum.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800">
              Get started
            </button>
          </div>
          <div className="absolute top-[-20px] left-[-20px] w-6 h-6 bg-yellow-600"></div>
          <div className="absolute bottom-[-20px] right-[-20px] w-6 h-6 bg-yellow-600"></div>
          <div className="absolute right-[-20px] top-[-20px] w-6 h-6 bg-yellow-600"></div>
          <div className="absolute left-[-20px] bottom-[-20px] w-6 h-6 bg-yellow-600"></div>
        </div>
        <div className="relative flex justify-end">
          <div className="relative bg-[#5932D1] rounded-xl p-6 shadow-lg w-full max-w-xs md:max-w-sm">
            <div className="absolute inset-0 bg-white opacity-10 rounded-xl"></div>
            <img
              src={womenn}
              alt="Smiling Woman"
              className="relative z-10 w-full rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 w-full max-w-5xl bg-yellow-400 p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 text-center">
      {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-gray-700 text-sm">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delightful;
