import { Button } from "@nextui-org/react";
import Profile from "./mini-components/Profile";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
const Chat = () => {
  return (
    <div className="bg-[#1C2A4E] rounded-3xl p-2">
      <div className="flex gap-20">
        <div className="flex items-center gap-2">
          <Profile src={"/person5.png"} color={"bg-[#E8F8BB]"} border={0} />
          <div>
            <h1 className="font-bold">Alexa Max</h1>
            <p className="text-gray-400 text-xs ">Active 5 Min Ago</p>
          </div>
        </div>
        <Button
          isIconOnly
          className="w-[40px] h-[40px] bg-[#2C3A58] rounded-full"
        >
          <FaPhoneAlt className="text-[#409BEE]" />
        </Button>
      </div>
      <hr className="my-4" />
      <h3 className="bg-[#F1F1F1] font-bold text-sm translate-x-14 rounded-2xl  text-black py-1 px-2 w-max">
        Hi, Doctor.
      </h3>
      <div className="flex items-center gap-2 mt-2">
        <Profile src={"/person5.png"} color={"bg-[#E8F8BB]"} border={0} />
        <h3 className="bg-[#F1F1F1] text-sm rounded-2xl  text-black py-1 px-2 w-max">
          I got knee jerk. What
          <br /> should i do right now?
        </h3>
      </div>
      <p className="translate-x-14 mt-1 text-xs text-gray-200">Tue 02:32pm</p>
      <div className="flex items-center gap-2 justify-end">
        <h1 className="bg-blue-300 rounded-2xl py-1 px-2 text-black text-sm font-bold">
          Hi, Alexa
        </h1>
        <Profile src={"/person1.png"} color={"bg-blue-300"} border={0} />
      </div>
      <div>
        <p className="bg-blue-300 p-2 rounded-2xl w-max text-black text-sm translate-x-6">
          This help maintain balance <br /> and posture.Dont worry.
        </p>
        <p className="text-right translate-x-[-60px] mt-1 text-xs text-gray-200 ">
          Tue 02:32pm
        </p>
      </div>
      <div className="flex justify-between items-center rounded-2xl mt-2 p-2 bg-[#2C3A58]">
        <IoMicOutline className="text-gray-400 text-xl" />
        <input
          type="text"
          className="bg-transparent w-[150px] outline-none"
          placeholder="Type your text..."
        />
        <Button isIconOnly className="bg-[#409BEE]">
          <FiSend className="text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Chat;
