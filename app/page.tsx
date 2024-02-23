"use client";
import ActivePatients from "@/components/ActivePatients";
import Consultation from "@/components/Consultation";
import Graph from "@/components/Graph";
import Meeting from "@/components/Meeting";
import ProfileInfo from "@/components/ProfileInfo";
import Searchbar from "@/components/Searchbar";
import Upcoming from "@/components/Upcoming";
import Visited from "@/components/Visited";

export default function Home() {
  return (
    <div className="p-6 ">
      <main className="bg-[#151C39] max-w-max mx-auto my-0 flex flex-wrap gap-5  rounded-[40px] p-8">
        <div>
          <Searchbar />
          <div className="flex flex-col  items-center lg:flex-row mt-2 gap-2">
            <div className="flex flex-row justify-center flex-wrap lg:flex-col  gap-2">
              <Visited />
              <Upcoming />
            </div>
            <Graph />
          </div>
          <div className="flex flex-col items-center lg:flex-row gap-5 mt-4">
            <div className="hidden md:block">
              <h1 className="font-bold my-2">Active Patients</h1>
              <ActivePatients />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold my-2 text-center lg:text-left">
                Upcoming Events
              </h1>
              <div className="flex flex-col">
                <Meeting />
                <Consultation />
              </div>
            </div>
          </div>
        </div>
        <ProfileInfo />
      </main>
    </div>
  );
}
