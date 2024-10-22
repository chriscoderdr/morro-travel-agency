import NavBar from "./Navbar";
import Callout from "./Callout";
import CalloutImage from "./CalloutImage";
import HeroTitle from "./HeroTitle";
import Destinations from "../Destinations";

const Header = () => {
  return (
    <div>
      <NavBar />
      <HeroTitle />
      <CalloutImage />
      <Callout />
    </div>
  );
};

export default Header;
