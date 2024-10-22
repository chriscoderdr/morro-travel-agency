import Image from "next/image";
import Button from "../Button";

const MemorableTravel = () => {
  return (
    <div className="flex justify-between py-[100px]">
      <div className="flex-1">
        <div className="font-gilda text-heading-mobile-1 leading-heading-mobile-1 text-neutral-900 lg:text-heading-desktop-1 lg:leading-heading-desktop-1">
          <span className="text-brand600">Travel</span>, make the trip memorable
        </div>
        <div className="mt-[28px] font-urbanist text-[18px] font-medium text-neutral700">
          Thousands of our customers always recommend us because of the service
          we provide. Your trip will be very memorable with the best travel
          agent, <span className="text-brand600">Travel!</span>
        </div>
        <div className="mt-[48px] flex">
          <Button text={"See More"} />
          <div className="px-[32px] py-[16px] font-urbanist text-[18px] font-semibold text-[#333333] underline underline-offset-8">
            <a href="#" className="font-urbanist">
              Discover More
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/memorabletravel.png"
          alt="Travel Image"
          fill
          style={{ objectFit: "contain" }} // Ensure it fits the container
        />
      </div>
    </div>
  );
};

export default MemorableTravel;
