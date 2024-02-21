import Image from "next/image";

import Chat from "./Chat";

const ProfileInfo = () => {
  return (
    <div className="bg-[#111729] hidden xl:block w-max px-3 pt-5 rounded-3xl">
      <div className="flex flex-col items-center">
        <Image src="/group.png" alt="person" width={120} height={120} />
        <h1 className="text-xl font-bold my-1">Aliam Colter</h1>
        <p className="text-gray-400">Physician</p>
        <div className="flex bg-[#1C2A4E] rounded-2xl p-2 items-center my-5 gap-5">
          <h1>Active Patients</h1>
          <Image src="/group2.png" alt="group" width={120} height={120} />
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default ProfileInfo;
