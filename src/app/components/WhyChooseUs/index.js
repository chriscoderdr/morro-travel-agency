import Card from "./Card";

const WhyChooseUs = () => {
  return (
    <div className="py-[100px] flex justify-center items-center flex-col">
      <div>
        <div className="text-neutral900 text-heading-desktop-1 text-center font-gilda">
          Why must choose us
        </div>
        <div className="text-neutral600 text-[18px] font-medium font-urbanist text-center pt-[24px] whitespace-pre-line">
          {
            "We have been around for over 10 years. Accompany all our customers all over the world. Thousands of our\ncustomers always recommend us because of the service we provide. We are always re-elected and now you\nwill choose us as your travel agent!"
          }
        </div>
      </div>
      <div className="flex flex-row gap-x-[20px]">
        <Card
          title={"Best Guide, Best\nExperience."}
          content={"Your trip will be very memorable with\n the best guide."}
        />
        <Card
          isDark
          title={"Always have\nSpecial Tickets."}
          content={
            "We always offer special tickets and we\ngive them to all customers"
          }
        />
        <Card
          title={"Always Ready\nSupport 24/7."}
          content={"We always make time to ask questions\nanytime and anywhere."}
        />
      </div>
    </div>
  );
};
export default WhyChooseUs;
