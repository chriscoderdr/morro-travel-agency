const Button = ({ text }) => {
  return (
    <a href="#">
      <div className="bg-[#25A59E] px-[32px] py-[16px] font-urbanist text-[18px] font-semibold text-white">
        {text}
      </div>
    </a>
  );
};

export default Button;
