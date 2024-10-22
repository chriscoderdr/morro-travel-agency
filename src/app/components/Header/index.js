
import NavBar from "./Navbar";
import Callout from "./Callout";
import CalloutImage from "./CalloutImage";
import HeroTitle from "./HeroTitle";
import Destinations from "../Destinations";

const Header = () => {
    return (
        <div>
            <NavBar />

            <div className="w-[1200px] mx-auto mt-[120px]">
                <HeroTitle />

                <CalloutImage />

                <Callout />
                <Destinations />

            </div>
        </div>
    );
};

export default Header;
