import {
  ArrowCircleDown,
  ArrowCircleUp,
  ArrowDown,
  Instagram,
  Twitch,
  Youtube,
} from "iconsax-react";
import Button from "../Button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-[100px]">
      <div className="flex justify-between items-center">
        <div className="text-heading-desktop-1 text-neutral-900 font-gilda">
          Get our best offer now!
        </div>
        <div>
          <Button text={"Click here!"} />
        </div>
      </div>
      <hr className="border-t-[1px] border-[#D9D9D9] mt-[48px] w-full" />
      <div className="pt-[80px] flex justify-between">
        <div>
          <div className="text-brand600 font-gilda text-[28px]">Travel</div>
          <div className="mt-[20px] text-[18px] urbanist font-medium whitespace-pre-line">
            {"The best travel agent in the world.\n Contact us immediatly now!"}
          </div>
          <div className="flex mt-[48px]">
            <div>
              <a href="#">
                <Instagram size="40" color="#25a59e" />
              </a>
            </div>
            <div className="mx-[10px]">
              <a href="#">
                <Youtube size="40" color="#25a59e" />
              </a>
            </div>
            <div>
              <a href="#">
                <Twitch size="40" color="#25a59e" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end">
          <div className="mb-[40px]">
            <a href="#">
              <ArrowCircleUp size="40" color="#25a59e" />
            </a>
          </div>
          <div className="flex items-end justify-between gap-x-10">
            <div>
              <a href="#">Home</a>
            </div>
            <div>
              <a href="#">Destinations</a>
            </div>
            <div>
              <a href="#">Guide</a>
            </div>
            <div>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
