import Profile from "./Profile";

const Avatar = () => {
  return (
    <div className="flex items-center">
      <div className="">
        <Profile color={"bg-[#cc99ff]"} src={"/person2.png"} border={"1px"} />
      </div>
      <div className="translate-x-[-15px]">
        <Profile color={"bg-[#ccffff]"} src={"/person3.png"} border={"1px"} />
      </div>
      <div className="translate-x-[-25px]">
        <Profile color={"bg-[#ccffcc]"} src={"/person4.png"} border={"1px"} />
      </div>
      <div className="translate-x-[-35px] w-[43px] flex items-center justify-center border-[1px] border-black h-[43px] rounded-full bg-white text-black">
        +3
      </div>
    </div>
  );
};

export default Avatar;
