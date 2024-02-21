import { Select, SelectItem, Tooltip } from "@nextui-org/react";
import BlurrGraph from "./mini-components/BlurrGraph";
import Graphline from "./mini-components/Graphline";
import { useState } from "react";
const Graph = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1B2C4F] hidden md:block py-3 px-8 rounded-xl max-w-max filter relative">
      <div className="flex  justify-between">
        <div>
          <h1 className="text-sm">Statistics</h1>
          <p className="text-xs">November 2023</p>
        </div>
        <select className=" border border-[#409BEE] rounded-2xl py-1 px-2 text-sm bg-transparent outline-none">
          {["weeks", "year", "days"].map((el) => (
            <option
              className="text-white text-sm bg-[#1b2c4f]"
              key={el}
              value={el}
            >
              {el}
            </option>
          ))}
        </select>
      </div>
      <Tooltip
        showArrow={true}
        color={"default"}
        content={
          <div className="flex gap-1 items-center">
            <div className="text-small font-bold">88%</div>
            <svg
              width="15"
              height="7"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 1L10.7051 7.2949C10.3883 7.61172 10.2299 7.77012 10.0472 7.82947C9.88654 7.88168 9.71346 7.88168 9.55279 7.82947C9.37012 7.77012 9.21172 7.61172 8.8949 7.2949L6.7051 5.1051C6.38828 4.78828 6.22988 4.62988 6.04721 4.57053C5.88654 4.51832 5.71346 4.51832 5.55279 4.57053C5.37012 4.62988 5.21172 4.78828 4.8949 5.1051L1 9M17 1H11.4M17 1V6.6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        }
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 25 25"
          className="absolute bottom-[105px] left-[200px] z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12.5"
            cy="12.5"
            r="10"
            fill="#D9D9D9"
            stroke="black"
            stroke-width="5"
          />
        </svg>
      </Tooltip>
      <BlurrGraph />
      <Graphline />

      <svg
        width="3"
        height="50"
        className="absolute left-[208px] bottom-[59px]"
        viewBox="0 0 3 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1.5"
          y1="6.55671e-08"
          x2="1.5"
          y2="77"
          stroke="url(#paint0_linear_1_202)"
          stroke-width="3"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_202"
            x1="0"
            y1="0"
            x2="1.05092e-08"
            y2="67"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Graph;
