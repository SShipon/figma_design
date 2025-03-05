import coffeBg from '../../assets/coffe/coffeBg.png';
import coffee from '../../assets/coffe/coffe (1).png';
import coffe2 from '../../assets/coffe/coffe (2).png';

const Coffee = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-6 md:px-12">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coffeBg})` }}
      />
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center w-full max-w-6xl p-4">

        <div className="text-black max-w-lg">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Coffee is <br /> a language <br /> in itself
          </h2>
          <p className="text-black 300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Cursus imperdiet sed id elementum. Quam <br />vel aliquam sit vulputate. Faucibus <br /> nec gravida ipsum pulvinar vel.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800">Get started</button>
        </div>
        <div className="relative flex flex-col gap-6 items-end">

          <div className="relative flex flex-col gap-2 w-40 md:w-48 lg:w-56">
            <div className="flex  gap-2">
              <span className="text-white text-xl font-semibold">128</span>
              <img src={coffee} alt="Small Coffee 2" className="rounded-lg shadow-md w-full object-cover" />

            </div>
            <p className="text-gray-300 text-sm p-2 ml-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit.</p>
          </div>
          <div className="relative flex flex-col  gap-2 w-40 md:w-48 lg:w-56">
            <div className="flex  gap-2">
              <span className="text-white text-xl font-semibold">47K</span>
              <img src={coffe2} alt="Small Coffee 1" className="rounded-lg shadow-md w-full object-cover" />
            </div>
            <p className="text-gray-300 text-sm  p-2 ml-8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coffee;