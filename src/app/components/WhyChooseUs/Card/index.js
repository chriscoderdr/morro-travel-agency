import { ArrowRight } from "iconsax-react";

const Card = ({isDark}) => {
  return (
    <div className={`flex mt-[60px] px-[32px] py-[40px] shadow-[10px_26px_150px_rgba(67,67,100,0.1)] border-t-[4px] border-t-[#25A59E] ${isDark ?  'bg-brand600' : ''}`}>
      <div className="flex flex-col">
        <div>
          <div className={`${isDark ?  'text-white' : 'text-neutral900'} text-heading-desktop-2 whitespace-pre-line font-gilda`}>
            {"Best Guide, Best\nExperience."}
          </div>
          <div className={`${isDark ?  'text-white' : 'text-neutral600'} text-[18px] font-urbanist mt-[20px] whitespace-pre-line`}>
            {"Your trip will be very memorable with\n the best guide."}
          </div>
        </div>
        <div className="flex mt-[80px]">
          <div className={`text-[20px] font-gilda ${isDark ?  'text-white' : 'text-brand600'} flex ml-auto items-center`}>
            <div className="mr-[12px]">
              <a href="#" className="font-gilda">More details</a>
            </div>
            <ArrowRight size={24} color={`${isDark ?  '#FFFFFF' : '#25a59e'}`} variant="Outline" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
