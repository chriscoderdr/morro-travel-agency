import { ArrowRight } from "iconsax-react";

const Card = ({ isDark, title, content }) => {
  return (
    <div
      className={`mt-[60px] flex border-t-[4px] border-t-[#25A59E] px-[32px] py-[40px] shadow-[10px_26px_150px_rgba(67,67,100,0.1)] ${isDark ? "bg-brand600" : ""}`}
    >
      <div className="flex flex-col">
        <div>
          <div
            className={`${isDark ? "text-white" : "text-neutral900"} whitespace-pre-line font-gilda text-heading-desktop-2`}
          >
            {title}
          </div>
          <div
            className={`${isDark ? "text-white" : "text-neutral600"} mt-[20px] whitespace-pre-line font-urbanist text-[18px]`}
          >
            {content}
          </div>
        </div>
        <div className="mt-[80px] flex">
          <div
            className={`font-gilda text-[20px] ${isDark ? "text-white" : "text-brand600"} ml-auto flex items-center`}
          >
            <div className="mr-[12px]">
              <a href="#" className="font-gilda">
                More details
              </a>
            </div>
            <ArrowRight
              size={24}
              color={`${isDark ? "#FFFFFF" : "#25a59e"}`}
              variant="Outline"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
