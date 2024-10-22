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
          className="absolute top-[-180px] h-[449px] w-[898px]"
        />
        <div className="inner-semicircle"></div>
      </div>

      <Image
        src="/header-image.png"
        alt="Header Image"
        width={1005}
        height={618}
        className="absolute left-[170px] top-[-80px] h-[618px] w-[1005px]"
      />
    </div>
  );
};
export default CalloutImage;
