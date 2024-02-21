import { Button } from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import { LuBell } from "react-icons/lu";

const Searchbar = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start">
      <h1 className="hidden md:block">
        Hello,
        <br /> <span>Dr.Colter! 👋</span>
      </h1>
      <h1 className="block md:hidden">
        Hello,
        <span>Dr.Colter! 👋</span>
      </h1>
      <div className="flex items-center flex-wrap  gap-2">
        <div className="flex items-center">
          <IoIosSearch className="relative left-7" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#2C3A58] w-[150px] md:w-[300px] lg:w-[470px] pl-8 py-2 outline-none rounded-xl"
          />
        </div>
        <div className="relative">
          <Button isIconOnly color="primary" aria-label="Like">
            <LuBell />
          </Button>
          <span className="text-xl w-2 h-2 bg-red-500 rounded-full absolute right-3 bottom-5"></span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
