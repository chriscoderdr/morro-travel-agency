import { Location } from "iconsax-react";
import Image from "next/image";

const Destination = () => {
    return (
        <div className="basis-1/2.9 px-[16px] items-center border border-[neutral100] flex flex-col justify-center pb-[36px] shadow-[105.45px_50.41px_78.04px_rgba(55,54,100,0.05),-55.45px_50.41px_98px_rgba(55,54,100,0.04)] bg-[#FFFFFF]">
            <Image
                src="https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Travel Image"
                width={338}  // Set appropriate width
                height={248} // Set appropriate height based on image aspect ratio
                className="w-[338px] h-[248px]"
            />
            <div className="font-bold text-[24px] text-neutral900 font-urbanist mt-[28px]">Mirror Lake</div>
            <div className="font-semibold text-[18px] text-neutral900 font-urbanist mt-[8px] flex items-center">
                <Location
                    size="20"
                    color="#25a59e"
                    variant="Bold"
                />
                Jawa Tengah, Indonesia</div>
        </div>
    )
}
export default Destination;