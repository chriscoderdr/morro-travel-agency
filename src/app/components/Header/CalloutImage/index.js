import Image from "next/image";

const CalloutImage = () => {
  return (
    <div className="relative flex justify-center">
      <div className="outer-semicircle hidden lg:block">
        <Image
          src="/header-circle-background.svg"
          alt="Header Circle Background"
          fill
          style={{ objectFit: "contain" }} // Ensure it fits the container
          className="absolute top-[-180px]"
        />
        <div className="inner-semicircle hidden lg:block">
          {" "}
          <Image
            src="/header-image.png?v=3"
            alt="Header Image"
            fill
            style={{ objectFit: "contain" }} // Ensure it fits the container
            className="absolute hidden lg:block"
          />
        </div>
      </div>

      {/* <div className="relative h-[449px] w-[898px] overflow-hidden rounded-t-full"> */}

      {/* </div> */}
    </div>
  );
};
export default CalloutImage;
