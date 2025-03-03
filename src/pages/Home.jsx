
import InteriorDesign from "../components/interiorDesign/InteriorDesign";
import Exploration from "../components/Exploration/Exploration";
import Inspiration from "../components/inspiration/Inspiration";
import Garden from "../components/greenGarden/Garden";
import Discovers from "../components/discover/Discovers";
import Watch from "../components/Watch/Watch";
import Projects from "../components/projects/Projects";
import DiscoverBeauty from "../components/DiscoverBeauty/DiscoverBeauty";
import Explore from "../components/Explore/Explore";
import Dream from "../components/dream/Dream";
import TravelCard from "../components/travel/TravelCard";
import FashionCard from "../components/fashion/FashionCard";
import Walk from "../components/walk/Walk";
import Love from "../components/love/Love";


const Home = () => {
    return (
        <>
        <FashionCard />
        <Love />
        <TravelCard />
        <Walk />
        <Dream />
        <Garden />
        <InteriorDesign />
        <Watch />
        <Projects />
        <Exploration />
         <Inspiration />
          <DiscoverBeauty />
          <Discovers />
          <Explore />
        </>
    );
};

export default Home;