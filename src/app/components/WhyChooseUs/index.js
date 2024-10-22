import Card from "./Card";

const WhyChooseUs = () => {
    return (
        <div className="py-[100px] flex justify-center items-center flex-col">
            <div>
                <div className="text-neutral900 text-heading-desktop-1 text-center font-gilda">Why must choose us</div>
                <div className="text-neutral600 text-[18px] font-medium font-urbanist text-center pt-[24px] whitespace-pre-line">{"We have been around for over 10 years. Accompany all our customers all over the world. Thousands of our\ncustomers always recommend us because of the service we provide. We are always re-elected and now you\nwill choose us as your travel agent!"}</div>
            </div>
            <div className="flex flex-row gap-x-[20px]">
                <Card />
                <Card isDark />
                <Card />

            </div>
        </div>
    )
}
export default WhyChooseUs;