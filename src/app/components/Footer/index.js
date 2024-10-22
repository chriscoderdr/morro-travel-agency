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
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-[100px]">
      <div className="flex items-center justify-between">
        <div className="font-gilda text-heading-desktop-1 text-neutral-900">
          Get our best offer now!
        </div>
        <div>
          <Button text={"Click here!"} />
        </div>
      </div>
      <hr className="mt-[48px] w-full border-t-[1px] border-[#D9D9D9]" />
      <div className="flex justify-between pt-[80px]">
        <div>
          <div className="font-gilda text-[28px] text-brand600">Travel</div>
          <div className="urbanist mt-[20px] whitespace-pre-line text-[18px] font-medium">
            {"The best travel agent in the world.\n Contact us immediatly now!"}
          </div>
          <div className="mt-[48px] flex">
            <div>
              <a href="https://www.instagram.com/chris__coder/">
                <Instagram size="40" color="#25a59e" />
              </a>
            </div>
            <div className="mx-[10px]">
              <a href="https://www.youtube.com/@chriscoder-rd">
                <Youtube size="40" color="#25a59e" />
              </a>
            </div>
            <div>
              <a href="https://www.twitch.tv/chris_coder">
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
          <div className="flex items-end justify-between gap-x-10 font-urbanist">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <a href="#destinations">Destinations</a>
            </div>
            <div>
              <Link href="/about">About</Link>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/chriscoderg/">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
