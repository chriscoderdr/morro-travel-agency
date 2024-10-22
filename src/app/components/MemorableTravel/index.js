import Image from "next/image";

const MemorableTravel = () => {
  return (
    <div className="py-[100px] flex">
      <div>
        <div className="text-heading-desktop-1 text-neutral-900 font-gilda">
          <span className="text-brand600">Travel</span>, make the trip memorable
        </div>
        <div className="text-neutral700 font-urbanist font-medium text-[18px] mt-[28px]">
          Thousands of our customers always recommend us because of the service
          we provide. Your trip will be very memorable with the best travel
          agent, <span className="text-brand600">Travel!</span>
        </div>
        <div className="mt-[48px] flex">
          <div className="bg-[#25A59E] font-urbanist text-white text-[18px] font-semibold px-[32px] py-[16px]">
            See More
          </div>
          <div className="font-urbanist text-[#333333] text-[18px] font-semibold px-[32px] py-[16px] underline-offset-8 underline">
            Discover More
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/memorabletravel.png"
          alt="Travel Image"
          width={640} // Set appropriate width
          height={485} // Set appropriate height based on image aspect ratio
          className="w-[640px] h-[485px] max-w-none"
        />
      </div>
    </div>
  );
};

export default MemorableTravel;
