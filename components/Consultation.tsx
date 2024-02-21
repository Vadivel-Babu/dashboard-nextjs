import Image from "next/image";

const Consultation = () => {
  return (
    <div className="rounded-3xl   flex  justify-between mt-3 bg-[#1B2C4F] px-3 py-6">
      <div>
        <h2 className="text-gray-300">Consultation</h2>
        <h3 className="text-2xl font-bold">82/100</h3>
        <div className="flex items-center gap-3 rounded-xl mt-7 bg-[#2C3A58] w-max p-2">
          <p>82%</p>
          <p>
            <svg
              width="15"
              height="7"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 1L10.7051 7.2949C10.3883 7.61172 10.2299 7.77012 10.0472 7.82947C9.88654 7.88168 9.71346 7.88168 9.55279 7.82947C9.37012 7.77012 9.21172 7.61172 8.8949 7.2949L6.7051 5.1051C6.38828 4.78828 6.22988 4.62988 6.04721 4.57053C5.88654 4.51832 5.71346 4.51832 5.55279 4.57053C5.37012 4.62988 5.21172 4.78828 4.8949 5.1051L1 9M17 1H11.4M17 1V6.6"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-black font-bold text-3xl self-end">...</h1>
        <Image src={"/progress.png"} width={80} height={50} alt={"progress"} />
      </div>
    </div>
  );
};

export default Consultation;
