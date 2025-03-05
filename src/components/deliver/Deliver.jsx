
import backgroundImg from "../../assets/shien/unsplash_3Om4DHcaAc0.jpg";
import { images } from "../../lib/data";

const Deliver = () => {
  return (
    <section className="my-16">
      <div
        className="flex flex-col items-center justify-center w-full h-screen min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className="w-full px-6 py-12 md:py-16 lg:py-20 max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-relaxed pt-16">
            We deliver beautiful and <br /> reliable designs you need
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
            nec gravida ipsum pulvinar vel.
          </p>
          <button className="mt-6 mb-6 px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-900">
            Get started
          </button>


          <div className="mt-12 flex gap-6">
            {/* First Section */}
            <div className="relative rounded-lg overflow-hidden shadow-md w-[40%] flex flex-col gap-5">
              <div className="flex flex-row gap-5">
                {images.section1.slice(0, 2).map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Title 1 - ${index + 1}`}
                    className="flex-1 w-full h-[144px] rounded-3xl object-cover"
                  />
                ))}
              </div>
              <div>
                <img
                  src={images.section1[2]}
                  alt="Title 1 - 3"
                  className="w-full h-[144px] rounded-3xl object-cover"
                />
              </div>
            </div>

            {/* Second Section */}
            <div className="relative w-[40%]">
              {images.section2.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Title 2`}
                  className="w-full h-72 rounded-3xl object-cover"
                />
              ))}
            </div>

            {/* Third Section */}
            <div className="relative flex flex-col gap-5">
              {images.section3.map((src, index) => (
                <div key={index} className="relative">
                  <img
                    src={src}
                    alt={`Title 3 - ${index + 1}`}
                    className="w-full h-[144px] rounded-3xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Deliver;
