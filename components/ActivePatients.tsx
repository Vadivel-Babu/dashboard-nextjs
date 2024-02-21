import { Chip } from "@nextui-org/react";
import Line from "./mini-components/Line";
import MiniCard from "./mini-components/MiniCard";

const ActivePatients = () => {
  const data = [
    {
      time: "08:00 am",
      color: "bg-[#ff66ff]",
      src: "/person2.png",
      name: "Mark Jaxon",
      position: "left-[-50px]",
      bgcolor: "bg-[#F5E5E5]",
    },
    {
      time: "09:00 am",
      color: "bg-[#ccffff]",
      src: "/person3.png",
      name: "Maria Khan",
      position: "left-[-80px]",
      bgcolor: "bg-[#E5F5E6]",
    },
    {
      time: "10:00 am",
      color: "bg-[#99ff99]",
      src: "/person4.png",
      name: "Brick Zon",
      position: "left-[-20px]",
      bgcolor: "bg-[#C9F3EC]",
    },
  ];
  return (
    <div className="p-3 bg-[#1B2C4F] flex flex-col gap-4 w-max rounded-3xl">
      {data.map((el, i) => (
        <div className="flex items-center gap-24" key={i}>
          <p className="text-xs">{el.time}</p>
          <div className="flex items-center relative">
            <MiniCard
              color={el.color}
              src={el.src}
              name={el.name}
              position={el.position}
              time={el.time}
              number={i}
              bgcolor={el.bgcolor}
            />
            <Line />
          </div>
        </div>
      ))}
      <div className="flex items-center gap-24">
        <p className="text-xs">11.00am</p>
        <div className="flex items-center relative">
          <Chip className="bg-[#111729] text-gray-400 z-10">Break Time</Chip>
          <Line />
        </div>
      </div>
      <div className="flex items-center gap-24">
        <p className="text-xs">12.00 am</p>
        <div className="flex items-center relative">
          <MiniCard
            color={"bg-[#99ff99]"}
            src={"/person5.png"}
            name={"Alexa Max"}
            position={"left-[-80px]"}
            time={"12:00 am"}
            number={4}
            bgcolor={"bg-[#C1E2F4]"}
          />
          <Line />
        </div>
      </div>
    </div>
  );
};

export default ActivePatients;
