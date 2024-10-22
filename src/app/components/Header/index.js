import NavBar from "./Navbar";
import Callout from "./Callout";
import CalloutImage from "./CalloutImage";
import HeroTitle from "./HeroTitle";
import Destinations from "../Destinations";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap items-center">
        <div className="min-w-full">
          <NavBar />
        </div>
        <HeroTitle />
        <CalloutImage />
        <Callout />
      </div>
    </div>
  );
};

export default Header;
