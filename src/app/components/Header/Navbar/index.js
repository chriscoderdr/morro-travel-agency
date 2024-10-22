import Image from "next/image";

const NavBar = () => {
    return (
        <div className="max-w-[1200px] mx-auto flex justify-between mt-[45px]">
            <div className="text-left text-brand600 font-bold text-[28px] tracking-[0.1em]">
                Travel
            </div>
            <div className="text-right">
                <Image
                    src="/menu.svg"
                    alt="Menu"
                    width={28}
                    height={33}
                    priority
                />
            </div>
        </div>
    )
}

export default NavBar;