import Profile from "./Profile";
import { LuAlarmClock } from "react-icons/lu";
const MiniCard = ({ color, src, name, position, time, number, bgcolor }) => {
  // let endTime = time.split(":")[0];
  // console.log(+endTime);
  let endTime = 9 + number;

  return (
    <div
      className={`flex ${bgcolor} gap-4 w-max p-2 z-10 relative ${position}   text-black rounded-3xl`}
    >
      <Profile color={color} src={src} border={"1px"} />
      <div>
        <h1 className="font-bold">{name}</h1>
        <p className="flex items-center text-xs gap-1">
          <LuAlarmClock />
          {time}-{`${endTime}:00`} AM
        </p>
      </div>
    </div>
  );
};

export default MiniCard;
