import { LuAlarmClock } from "react-icons/lu";
import { GoBellFill } from "react-icons/go";
import { Button } from "@nextui-org/react";
import Avatar from "./mini-components/Avatar";
import { FaArrowRightLong } from "react-icons/fa6";
const Meeting = () => {
  return (
    <div className="rounded-3xl bg-[#1B2C4F] px-3 py-5">
      <div className="flex items-center justify-between">
        <div>
          <h1>Team Meeting</h1>
          <p className="flex gap-1 items-center text-xs">
            <LuAlarmClock />
            05:00-06:00
          </p>
        </div>
        <Button isIconOnly className="bg-gray-600">
          <GoBellFill className="text-blue-500" />
        </Button>
      </div>
      <div className="flex items-center mt-5">
        <Avatar />
        <Button isIconOnly className="bg-[#409BEE] w-[50px]">
          <FaArrowRightLong className="text-black" />
        </Button>
      </div>
    </div>
  );
};

export default Meeting;
