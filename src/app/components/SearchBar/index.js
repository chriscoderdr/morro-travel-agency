import { Location, SearchNormal } from "iconsax-react";

const SearchBar = () => {
    return (
        <div className="pt-[24px] relative w-full max-w-sm">
            <input type="text" placeholder="Search destinations ..." className="bg-[#FAFAFA] border border-[#D9D9D9]  text-[18px] rounded-full focus:outline-none w-full pl-10 pr-4 py-[12px]" />
            <div className="absolute inset-y-0 right-[8px] items-center pointer-events-none mt-[34px] bg-[#EE8F39] w-[33px] h-[33px] rounded-full flex justify-center">
                <SearchNormal
                    size="19"
                    color="#ffffff"
                    variant="Outline"
                />
            </div>
            <div className="absolute inset-y-0 left-[8px] items-center pointer-events-none mt-[34px] w-[33px] h-[33px] rounded-full flex justify-center">
                <Location
                    size="19"
                    color="#A6A6A6"
                    variant="Outline"
                />
            </div>

        </div>
    )
}

export default SearchBar;