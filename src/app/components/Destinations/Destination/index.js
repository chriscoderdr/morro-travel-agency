import { Location } from "iconsax-react";
import Image from "next/image";

const Destination = ({destination}) => {
  return (
    <a href="#">
      <div className="basis-1/2.9 px-[16px] items-center pt-[16px] border border-[neutral100] flex flex-col justify-center pb-[36px] shadow-[105.45px_50.41px_78.04px_rgba(55,54,100,0.05),-55.45px_50.41px_98px_rgba(55,54,100,0.04)] bg-[#FFFFFF]">
        <Image
          src={destination.imageUrl}
          alt="Travel Image"
          width={338} // Set appropriate width
          height={248} // Set appropriate height based on image aspect ratio
          className="w-[338px] h-[248px]"
        />
        <div className="font-bold text-[24px] text-neutral900 font-urbanist mt-[28px]">
          {destination.name}
        </div>
        <div className="font-semibold text-[18px] text-neutral900 font-urbanist mt-[8px] flex items-center">
          <Location size="20" color="#25a59e" variant="Bold" />
          {destination.location}
        </div>
      </div>
    </a>
  );
};
export default Destination;
