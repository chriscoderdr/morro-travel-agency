import Image from "next/image";

const CalloutImage = () => {
  return (
    <div className="relative flex justify-center">
      <div className="outer-semicircle">
        <Image
          src="/header-circle-background.svg"
          alt="Header Circle Background"
          width={898}
          height={449}
          className="absolute top-[-180px] w-[898px] h-[449px]"
        />
        <div className="inner-semicircle"></div>
      </div>

      <Image
        src="/header-image.png"
        alt="Header Image"
        width={1005}
        height={618}
        className="absolute top-[-80px] left-[170px] w-[1005px] h-[618px]"
      />
    </div>
  );
};
export default CalloutImage;
