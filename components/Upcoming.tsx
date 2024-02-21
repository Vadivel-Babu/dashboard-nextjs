import { Button, Image } from "@nextui-org/react";
import Profile from "./mini-components/Profile";
import { Chip } from "@nextui-org/react";
import { FaLongArrowAltRight } from "react-icons/fa";
const Upcoming = () => {
  return (
    <div className="bg-[#1B2C4F] rounded-xl mt-1 w-max py-3 px-5">
      <div className="flex items-center gap-4">
        <button className="px-1 rounded-xl font-bold bg-[#409BEE] flex items-center justify-center text-black">
          <FaLongArrowAltRight />
        </button>
        <p className="text-xs">Upcoming Events</p>
      </div>
      <div className="flex mt-2 gap-3 items-center">
        <Image src={"/lady.png"} width={50} height={50} />
        <div>
          <h2>Aliza Shah</h2>
          <p className="text-xs">⏱️ 08:00-09:00 am</p>
          <Chip className="text-[8px] h-4 bg-[#2C3A58] mt-1 text-white">
            Visited 7 days ago
          </Chip>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
