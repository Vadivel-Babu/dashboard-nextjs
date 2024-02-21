import Image from "next/image";

const Profile = ({ color, src, border }) => {
  return (
    <div
      className={`w-[44px] h-[44px] rounded-full flex items-baseline justify-center overflow-hidden border-[${border}] border-black ${color}`}
    >
      <Image
        src={src}
        className="relative bottom-[-14px]"
        alt="person"
        width={30}
        height={30}
      />
    </div>
  );
};

export default Profile;
