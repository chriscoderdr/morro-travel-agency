import Image from "next/image";
import Button from "../Button";

const MemorableTravel = () => {
  return (
    <div className="flex py-[100px]">
      <div>
        <div className="font-gilda text-heading-desktop-1 text-neutral-900">
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
      <div>
        <Image
          src="/memorabletravel.png"
          alt="Travel Image"
          width={640} // Set appropriate width
          height={485} // Set appropriate height based on image aspect ratio
          className="h-[485px] w-[640px] max-w-none"
        />
      </div>
    </div>
  );
};

export default MemorableTravel;
