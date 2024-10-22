
import NavBar from "./Navbar";
import Callout from "./Callout";
import CalloutImage from "./CalloutImage";
import HeroTitle from "./HeroTitle";

const Header = () => {
    return (
        <div>
            <NavBar />

            <div className="max-w-header-text mx-auto mt-[120px]">
                <HeroTitle />

                <CalloutImage />

                <Callout />
            </div>
        </div>
    );
};

export default Header;
