
import images from '../../assets/five/Image.png'
const Exploration = () => {
    return (
       <section className='my-20'>
              <div className="flex lg:flex-row flex-col gap-12">
        <div className="basis-1/2">
          <img className='w-[716px] h-[780px]' src={images} alt="" />
        </div>
        <div className="basis-1/2">
            <h3 className='text-[#252525] font-avenir text-[64px] font-extrabold leading-[80px] '>Exploration and
            inspiration</h3>
            <p className="text-[rgba(37,37,37,0.8)] mt-10 font-avenir text-[26px] font-normal leading-normal"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
            <div className="mt-4">
            <button className="text-white font-normal text-[18px] leading-[18px] bg-black px-4 py-2 rounded">
              Explore
            </button>
          </div>

          <div className='mt-14'>
              <h6 className='text-[rgba(37,37,37,0.55)] font-avenir text-[32px] font-extrabold leading-normal'>01</h6>
              <p className="text-[rgba(37,37,37,0.8)] font-avenir text-[24px] font-normal leading-normal"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.</p>
          </div>
          <div className='mt-14'>
            <h6 className='text-[rgba(37,37,37,0.55)] font-avenir text-[32px] font-extrabold leading-normal'>02</h6>
            <p className="text-[rgba(37,37,37,0.8)] font-avenir text-[24px] font-normal leading-normal"
            >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget</p>.
          </div>
        </div>
      </div>
       </section>
    );
};

export default Exploration;