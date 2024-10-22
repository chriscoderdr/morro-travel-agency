import Card from "./Card";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[100px]">
      <div>
        <div className="text-center font-gilda text-neutral900 sm:text-heading-mobile-1 sm:leading-heading-mobile-1 lg:text-heading-desktop-1 lg:leading-heading-desktop-1">
          Why must choose us
        </div>
        <div className="whitespace-pre-line pt-[24px] text-center font-urbanist text-[18px] font-medium text-neutral600">
          {
            "We have been around for over 10 years. Accompany all our customers all over the world. Thousands of our\ncustomers always recommend us because of the service we provide. We are always re-elected and now you\nwill choose us as your travel agent!"
          }
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-x-[20px]">
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
          content={
            "We always make time to ask questions\nanytime and anywhere."
          }
        />
      </div>
    </div>
  );
};
export default WhyChooseUs;
