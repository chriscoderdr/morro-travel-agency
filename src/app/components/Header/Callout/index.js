const Callout = () => {
  return (
    <div className="relative flex h-[160px] w-[1200px] items-center justify-between bg-[#25A59E] px-10 py-10 text-white">
      <div className="flex-1 whitespace-pre-line pr-[32px] text-left font-urbanist text-[18px] font-semibold opacity-80">
        Travel around the world to see the beauty of nature easily and safely
        with Travel.
      </div>

      <div className="h-[63px] w-[1px] bg-white"></div>

      <div className="flex-0 mx-[32px] whitespace-pre-line text-center font-gilda text-[28px]">
        We Are The Best Travel Agent
      </div>

      <div className="h-[63px] w-[1px] bg-white"></div>

      <div className="flex-1 whitespace-pre-line pl-[32px] text-left font-urbanist text-[18px] font-semibold opacity-80">
        Everyone is young once, but not everyone has traveled the world!
      </div>
    </div>
  );
};

export default Callout;
