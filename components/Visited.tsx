import Image from "next/image";

const Visited = () => {
  return (
    <div className="rounded-xl bg-[#1B2C4F] flex justify-between w-max">
      <div className="px-5 py-4">
        <p>42</p>
        <p className="text-xs mt-1">Patient Visited</p>
        <p className="text-[8px]">This Month</p>
      </div>
      <div className="bg-[#2C3A58] px-5 py-5 rounded-r-xl flex items-center justify-center ">
        <Image
          src={"/percentage.png"}
          width={40}
          height={10}
          alt="percentage"
        />
      </div>
    </div>
  );
};

export default Visited;
