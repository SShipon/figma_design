
import picture from "../../assets/shien/Picture.png";

const Shien = () => {
  return (
    <div className="relative bg-yellow-200 min-h-screen flex items-center justify-center">
      <div className="absolute -top-52 -left-[510px] w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-32 h-32 animate-spin-slow ">
          <defs>
            <path id="circlePath" d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0" />
          </defs>
          <text fill="black">
            <textPath href="#circlePath" startOffset="5%" >
              JOIN THE JOURNEY · JOIN THE JOURNEY · JOIN THE JOURNEY ·JOIN THE JOURNEY ·
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute top-28 left-44 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-black">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>

      </div>


      <div className="grid md:grid-cols-2 gap-4 w-full max-w-6xl mx-auto p-4">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
            Let yourself <br /> shine through
          </h1>
          <p className="text-black max-w-md font-mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Faucibus in libero risus semper habitant arcu eget. Et integer.
          </p>
          <button className="bg-black text-white px-8 py-3 w-44 rounded-full hover:bg-gray-800 transition-colors">
            Get started
          </button>
        </div>
        <div className=" flex justify-center">
          <img src={picture} alt="Person with flower crown" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Shien;
