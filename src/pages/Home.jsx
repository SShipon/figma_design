
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


const Home = () => {
    return (
        <>
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