import Image from "next/image";
import Destination from "./Destination";
import { Location, SearchNormal } from "iconsax-react";
import SearchBar from "../SearchBar";

const Destinations = () => {
    return (
        <div className="flex justify-center w-[1200px] flex-col mt-[100px] mb-[100px]">
            <div className="flex justify-between">
                <div className="text-heading-desktop-1 font-gilda text-neutral900 whitespace-pre-line">{"Find your best\ndestination"}</div>
                <div className="pt-[33px]">
                    <div className="text-neutral700 font-urbanist font-medium">We have more than 1000+ destinations you can choose.</div>
                    <SearchBar />
                </div>
            </div>
            <div className="flex flex-wrap justify-between gap-y-[40px]">
                <Destination />
                <Destination />
                <Destination />
                <Destination />
                <Destination />
                <Destination />
            </div>
        </div>
    )
}

export default Destinations;