import woman from '../../assets/collaborate/hero.png'; 
import bgBackground from '../../assets/collaborate/bg.png';
import card1 from '../../assets/collaborate/nlove.png'; 
import card2 from '../../assets/collaborate/yLove.png';   
import card3 from '../../assets/collaborate/gLove.png'; 

 

 
const Collaborate = () => {   
  const cardData = [ 
    { image: card1, color: "#6C63FF", text: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id." }, 
    { image: card2, color: "#FFD700", text: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id." }, 
    { image: card3, color: "#87CEFA", text: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id." }, 
  ]; 
 
  return (   
    <div className="relative min-h-screen flex items-center justify-center"   
            style={{ backgroundImage: `url(${bgBackground})` }}>   
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">   
        {/* Left Content */}   
        <div>   
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">   
            We collaborate <br /> to build digital <br /> experience   
          </h1>   
          <p className="text-gray-600 text-lg mb-6">   
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus   
            imperdiet sed id elementum. Quam vel aliquam sit vulputate.   
            Faucibus nec gravida ipsum pulvinar vel non.   
          </p>   
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-gray-800">   
            Get started   
          </button>   
        </div>   
   
      
        <div className="flex justify-end w-full">   
          <img   
            src={woman}   
            alt="Smiling woman"   
            className="object-cover w-[400px]"   
          />   
        </div>   
      </div>   
      
       <br />
       <div className="absolute bottom-16 flex gap-4 justify-start left-0 w-full pl-6 overflow-x-auto">    
  {cardData.map((card, i) => (    
    <div     
      key={i}     
      className="w-60 p-4 rounded-lg shadow-lg bg-[#EEEFFA] text-left border-2 border-neutral-100 flex flex-col items-start"     
       
    >     
      <img src={card.image} alt={`Card ${i + 1}`} className="w-12 h-12 object-cover mb-2 rounded-full shadow-md self-start" />   
      <p className="text-gray-600 text-sm self-start">     
        {card.text}     
      </p>     
    </div>     
  ))}    
</div>    
    </div>   
  );   
};   
 
export default Collaborate;
