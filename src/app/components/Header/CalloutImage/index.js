import Image from "next/image";

const CalloutImage = () => {
    return (
        <div className="flex justify-center relative">
            <div className="outer-semicircle">
                <Image
                    src="/header-circle-background.svg"
                    alt="Header Circle Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="absolute top-[-180px]"
                />
                <div className="inner-semicircle"></div>
            </div>

            <Image
                src="/header-image.png"
                alt="Header Image"
                width={1005}
                height={618}
                priority
                className="absolute top-[-80px] left-[170px]"
            />
        </div>
    )
}
export default CalloutImage;