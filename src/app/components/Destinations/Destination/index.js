import { Location } from "iconsax-react";
import Image from "next/image";

const Destination = ({ destination }) => {
  return (
    <a href={destination.externalUrl}>
      <div className="flex flex-col items-center justify-center border border-[neutral100] bg-[#FFFFFF] px-[16px] pb-[36px] pt-[16px] shadow-[105.45px_50.41px_78.04px_rgba(55,54,100,0.05),-55.45px_50.41px_98px_rgba(55,54,100,0.04)]">
        <Image
          src={destination.imageUrl}
          alt="Travel Image"
          width={338} // Set appropriate width
          height={248} // Set appropriate height based on image aspect ratio
          className="h-[248px] w-[338px]"
        />
        <div className="mt-[28px] font-urbanist text-heading-mobile-3 font-bold leading-heading-mobile-3 text-neutral900 lg:text-heading-desktop-3 lg:leading-heading-desktop-3">
          {destination.name}
        </div>
        <div className="mt-[8px] flex items-center font-urbanist text-body-mobile-15 font-semibold leading-body-mobile-15 text-neutral900 lg:text-body-desktop-18 lg:leading-body-desktop-18">
          <Location size="20" color="#25a59e" variant="Bold" />
          {destination.location}
        </div>
      </div>
    </a>
  );
};
export default Destination;
