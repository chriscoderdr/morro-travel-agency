import { Location, SearchNormal } from "iconsax-react";

const SearchBar = ({ onSearchChange }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value); // Pass the input value to the parent
  };
  return (
    <div className="relative w-full max-w-sm pt-[24px]">
      <input
        type="text"
        placeholder="Search destinations ..."
        className="w-full rounded-full border border-[#D9D9D9] bg-[#FAFAFA] py-[12px] pl-10 pr-4 text-[18px] focus:outline-none"
        onChange={handleInputChange}
      />
      <div className="pointer-events-none absolute inset-y-0 right-[8px] mt-[34px] flex h-[33px] w-[33px] items-center justify-center rounded-full bg-[#EE8F39]">
        <SearchNormal size="19" color="#ffffff" variant="Outline" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-[8px] mt-[34px] flex h-[33px] w-[33px] items-center justify-center rounded-full">
        <Location size="19" color="#A6A6A6" variant="Outline" />
      </div>
    </div>
  );
};

export default SearchBar;
