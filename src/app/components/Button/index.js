const Button = ({ text }) => {
  return (
    <a href="#">
      <div className="bg-[#25A59E] font-urbanist text-white text-[18px] font-semibold px-[32px] py-[16px]">
        {text}
      </div>
    </a>
  );
};

export default Button;
